import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Query, QueryRef } from 'apollo-angular';
import {
  GetMessagesGQL,
  SendMessageGQL,
  DeleteMessageGQL,
  GetMessagesQuery,
  GetLatestMessageLiveGQL,
  Exact,
} from 'generated/types.graphql-gen';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('messageTrigger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate3d(0,0.5rem,0)' }),
        animate(
          '150ms ease-out',
          style({ opacity: 1, transform: 'translate3d(0,0,0)' })
        ),
      ]),

      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'translate3d(0,-0.5rem,0)' })
        ),
      ]),
    ]),
  ],
})
export class ChatComponent implements OnInit {
  @Input() application_id!: string;

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  messagesQuery$!: QueryRef<
    GetMessagesQuery,
    Exact<{
      application_id: any;
      last_received_id?: number | null | undefined;
      last_received_ts?: any;
    }>
  >;
  messages$!: Observable<ApolloQueryResult<GetMessagesQuery>>;

  private last_received_id: number = -1;
  private last_received_ts: string = '1987-04-10T00:00:000.000000';

  newMessage = '';

  constructor(
    private getMessagesGQL: GetMessagesGQL,
    private sendMessagesGQL: SendMessageGQL,
    private deleteMessageGQL: DeleteMessageGQL,
    private getMessagesLiveGQL: GetLatestMessageLiveGQL,
    private authService: AuthService
  ) {}

  get authState() {
    return this.authService.authState;
  }

  ngOnInit(): void {
    if (!this.application_id) {
      console.error('No Application ID provided');
      return;
    }
    this.getMessagesLiveGQL
      .subscribe({ application_id: this.application_id })
      .pipe(switchMap(() => this.messages$))
      .subscribe((messages) => {
        if (messages.data.messages.length > 0) {
          const lastMessage =
            messages.data.messages[messages.data.messages.length - 1];
          this.last_received_id = lastMessage.id;
          this.last_received_ts = lastMessage.created_at;
          this.onLoadMore();
        }
      });

    this.messagesQuery$ = this.getMessagesGQL.watch(
      {
        application_id: this.application_id,
        last_received_id: this.last_received_id,
        last_received_ts: this.last_received_ts,
      },
      { fetchPolicy: 'network-only' }
    );

    this.messages$ = this.messagesQuery$.valueChanges;

    this.scrollToBottom();
  }

  onLoadMore() {
    this.messagesQuery$.fetchMore({
      variables: {
        application_id: this.application_id,
        last_received_id: this.last_received_id,
        last_received_ts: this.last_received_ts,
      },
    });
  }

  async sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    try {
      await this.sendMessagesGQL
        .mutate({
          text: this.newMessage,
          application_id: this.application_id,
        })
        .toPromise();
      this.newMessage = '';
    } catch (err) {
      console.error(err);
    }
  }
  async deleteMessage(id: number) {
    if (!id) return;
    try {
      await this.deleteMessageGQL
        .mutate({
          id,
        })
        .toPromise();
    } catch (err) {
      console.log(err);
    }
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}

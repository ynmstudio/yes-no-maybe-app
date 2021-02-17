import { Component, Input, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  GetMessagesGQL,
  SendMessageGQL,
  GetMessagesQuery,
  GetLatestMessageLiveGQL,
} from 'generated/types.graphql-gen';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() application_id!: string;

  messages$!: Observable<ApolloQueryResult<GetMessagesQuery>>;

  last_received_id: number = -1;
  last_received_ts: string = '1987-04-10T00:00:000.000000';

  newMessage = '';

  constructor(
    private getMessagesGQL: GetMessagesGQL,
    private sendMessagesGQL: SendMessageGQL,
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

    this.messages$ = this.getMessagesGQL.watch(
      {
        application_id: this.application_id,
        last_received_id: this.last_received_id,
        last_received_ts: this.last_received_ts,
      },
      { fetchPolicy: 'network-only' }
    ).valueChanges;

    this.getMessagesLiveGQL
      .subscribe({ application_id: this.application_id })
      .subscribe((message) => {
        console.log(message);
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
      console.log(err);
    }
  }
}

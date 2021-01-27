import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  public async message(message: string, color: string = 'danger') {
    console.debug(message);
    // const toast = await this.toastController.create({
    //   message,
    //   color,
    //   duration: 2000,
    //   position: "top",
    //   buttons: [
    //     {
    //       icon: "close",
    //       role: "cancel",
    //     },
    //   ],
    // });
    // toast.present();
  }
}

export class Alert {
  id!: string;
  message!: string;
  type: AlertType = AlertType.Info;
  autoClose: boolean = true;
  fade: boolean = false;
  keepAfterRouteChange?: boolean = true;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning,
}

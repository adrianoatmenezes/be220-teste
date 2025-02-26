import { Timestamp } from "@angular/fire/firestore";

export interface Notification {
  id: number;
  name: string;
  dateCreated: any;
  dateLimit: any;
}

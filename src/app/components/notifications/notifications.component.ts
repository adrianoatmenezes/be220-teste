import { IonHeader, IonText, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { FireBaseService } from 'src/app/services/firebase.service';
import { Notification } from 'src/app/interfaces/notification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  imports: [IonHeader, IonText, IonItem, IonList, IonLabel, CommonModule]
})
export class NotificationsComponent implements OnInit {

  public notifications!: Notification[]

  constructor(private firebase: FireBaseService) { }

  async ngOnInit() {
    this.GetNotifications();
  }

  private GetNotifications() {
    this.firebase.get("notification").subscribe((response: Notification[]) => {
      const filteredDates = response.filter(not => not.dateCreated < not.dateLimit);

      if (filteredDates) {
        filteredDates.map((value) => {
          value.dateCreated = new Date(value.dateCreated.seconds * 1000 + value.dateCreated.nanoseconds / 1_000_000);
          value.dateLimit = new Date(value.dateLimit.seconds * 1000 + value.dateLimit.nanoseconds / 1_000_000);
        });

        this.notifications = filteredDates;
      }
    });
  }

}

import { IonCard, IonAvatar, IonText, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { accessibility, trophy } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  imports: [
    IonCard,
    IonAvatar,
    IonText,
    IonButton,
    IonIcon,
    IonCardContent,
    RouterModule
  ]
})
export class UserInfoComponent implements OnInit {

  constructor() {
    addIcons({ accessibility });
    addIcons({ trophy });
  }

  ngOnInit() { }

}

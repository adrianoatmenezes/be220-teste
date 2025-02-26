import { IonToolbar, IonMenu, IonGrid, IonRow, IonCol, MenuController, IonButton, IonMenuButton, IonIcon, IonBadge, IonHeader } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { notifications } from 'ionicons/icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonGrid, IonRow, IonCol, IonMenuButton, IonButton, IonIcon, IonBadge]
})
export class HeaderComponent implements OnInit {

  constructor(private menu: MenuController) {
    addIcons({ notifications });
  }

  ngOnInit() { }

  openMenu() {
    this.menu.open('menu-header');
  }

}

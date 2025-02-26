import { IonHeader, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { albums, book, calendar, home } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonIcon, RouterModule]
})
export class MenuHeaderComponent  implements OnInit {

  public listMenu: Array<any> = [
    {
      name: "Home",
      icon: "home",
      url: "/home"
    },
    {
      name: "Calendário",
      icon: "calendar",
      url: "/calendar"
    },
    {
      name: "Conteúdos",
      icon: "book",
      url: "/contents"
    },
    {
      name: "Programas",
      icon: "albums",
      url: "/programs"
    },
  ];

  constructor() {
    addIcons({ home });
    addIcons({ calendar });
    addIcons({ book });
    addIcons({ albums });
  }

  ngOnInit() {}

}

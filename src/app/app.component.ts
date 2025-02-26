import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonContent, IonMenu, ToastController, IonModal } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { Content } from './interfaces/content';
import { NavigationError, Router } from '@angular/router';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FireBaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    HeaderComponent,
    IonContent,
    IonHeader,
    MenuHeaderComponent,
    IonMenu,
    IonModal,
    NotificationsComponent
  ],
})
export class AppComponent {
  constructor(private firebase: FireBaseService, private router: Router, private toastController: ToastController) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        this.message();
      }
    });
  }

  private async message() {
    const toast = await this.toastController.create({
      message: "Aba em desenvolvimento ou inexistente!",
      duration: 1500,
      position: "bottom",
      color: 'dark'
    });

    await toast.present();
  }
}

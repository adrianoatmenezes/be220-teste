import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { UserInfoComponent } from './user-info/user-info.component';
import { FireBaseService } from 'src/app/services/firebase.service';
import { Content } from 'src/app/interfaces/content';
import { ContentsMainComponent } from "./contents-main/contents-main.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, UserInfoComponent, ContentsMainComponent],
})
export class HomePage implements OnInit {

  public contents!: Content[];

  constructor(private firebase: FireBaseService) { }

  ngOnInit() {
    this.GetContents();
  }

  private GetContents() {
    this.firebase.get("content").subscribe((response) => {
      this.contents = response;
    });
  }

}



import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, input, OnInit } from '@angular/core';
import { Content } from 'src/app/interfaces/content';
import { firstValueFrom, from, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContentConfig } from 'src/app/interfaces/content-config';
import { register } from 'swiper/element/bundle';
import { addIcons } from 'ionicons';
import { addOutline, chatbubbles, pizza } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { FireBaseService } from 'src/app/services/firebase.service';

register();

@Component({
  selector: 'app-contents-main',
  templateUrl: './contents-main.component.html',
  styleUrls: ['./contents-main.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterModule]
})
export class ContentsMainComponent implements OnInit {

  public loading: boolean = true;
  public contentInput = input.required<Content>();
  public content!: Content;
  public url: string = "";
  public contentConfig!: ContentConfig[];
  public imgUrls: { [key: string]: string } = {};

  constructor(private firebase: FireBaseService) {
    addIcons({ addOutline });
    addIcons({ pizza });
    addIcons({ chatbubbles });
  }

  async ngOnInit() {
    this.content = this.contentInput();
    const contentData = this.content;
    this.contentConfig = contentData.contentConfig;

    await this.loadImageUrls();
  }

  async loadImageUrls() {
    const requests = this.contentConfig.map(item =>
      this.getUrl(item.img).pipe(
        map(img => ({ id: item.id, img: img.toString() }))
      ).toPromise()
    );

    const results = await Promise.all(requests);

    results.forEach((value) => {
      if (value?.id && value.img) {
        this.imgUrls[value?.id] = value.img;
      }
    });

    setTimeout(() => {
      this.loading = false;
    }, 600);
  }

  public getUrl(arq: string | null): Observable<string> {
    if (!arq) {
      return from("");
    }
    return from(this.firebase.getFileURL("content-images/" + arq));
  }

}

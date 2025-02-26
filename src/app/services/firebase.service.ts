import { Inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Content } from '../interfaces/content';
import { Observable } from 'rxjs';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private firestore: Firestore, private storage: Storage) { }

  async add(dto: any, tableName: string): Promise<void> {
    const collectionFire = collection(this.firestore, tableName);
    await addDoc(collectionFire, dto);
  }

  get(tableName: string): Observable<any[]> {
    const collectionFire = collection(this.firestore, tableName);
    return collectionData(collectionFire, { idField: 'id' }) as Observable<any[]>;
  }

  async getFileURL(path: string) {
    if (path) {
      try {
        const fileRef = ref(this.storage, path?.toString());
        const url = await getDownloadURL(fileRef);
        return url;
      } catch (error) {
        console.error(error);
        return "";
      }
    }

    return "";
  }
}

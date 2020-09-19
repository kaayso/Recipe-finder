import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private basePath = '/images';
  file: File;
  url = '';

  constructor(private afStorage: AngularFireStorage) {}

  handleFile(file): void {
    this.file = file;
  }

  async upload(uid: string) {
    if (this.file) {
      const filePath = `${this.basePath}/${uid}/${this.file.name}`;
      const snap = await this.afStorage.upload(filePath, this.file);
      await this.getUrl(snap); // get image url
      console.log('Image successfully uploaded !');
    } else {
      console.error('Error: file not specified.');
    }
  }

  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.url = url;
  }
}

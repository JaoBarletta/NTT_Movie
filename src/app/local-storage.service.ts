import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    private storage: any;

  constructor() {
    this.storage = window.localStorage;
   }
   set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  get(key: string): any {
    if (this.storage) {
      // return JSON.parse(this.storage.getItem(key));
    }
    // return null;

    console.log(JSON.parse(this.storage))
  }

  

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}

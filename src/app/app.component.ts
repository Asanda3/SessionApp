import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sessionApp';
getUserId: any;
  constructor(private localstore: LocalStorageService){}

  //Save item to local storage
  savetoLocalStorage(){
    this.localstore.setItem("myKey","Welcome to SessionApp")
  }
  //retrieve item from local storage
  retrieveFromLocalStore(){
    const value = this.localstore.getItem("myKey");
    console.log(value)
  }
  saveUser(){
    this.localstore.saveData("userId","Admin user");

  }
}

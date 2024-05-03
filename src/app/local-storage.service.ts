import { Injectable } from '@angular/core';
import * as cryptoJS from 'crypto-js'
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keys ="12345"
  constructor() { }

  //Send data to local storage and decrypt it to plaintext
  public saveData(keys:string, data:string):void{
    localStorage.setItem(keys,this.encrypt(data));
  }
  //Get data from local storage and decrypt it to plaintext
  public getData(keys:string){
    let data = localStorage.getItem(keys)||"";
    return this.decrypt(data);
  }
  //remove one item from local storage
  public removeData(keys:string){
    localStorage.removeItem(keys);
  }
  public clearData(){
    localStorage.clear();
  }

  private decrypt(txtToDecrypt:string):string{
    return cryptoJS.AES.decrypt(txtToDecrypt, this.keys).toString();
  }

  private encrypt(txtToDecrypt:string):string{
    return cryptoJS.AES.decrypt(txtToDecrypt,this.keys).toString(cryptoJS.enc.Utf8);
  }
  //set item local storage
  setItem(key: string, value:any):void{
    localStorage.setItem(key,value)
  }
  //get the value from the local storage
  getItem(key:string):string| null{ //string| union type
    return localStorage.getItem(key)
  }
  // Remove one item from local srorage
  removeItem(key:string):void{
    localStorage.removeItem(key)
  }
  //Clear all items in local storage
  clearAll():void{
    localStorage.clear
  }

   

}

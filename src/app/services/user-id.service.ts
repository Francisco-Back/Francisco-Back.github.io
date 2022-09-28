import { Injectable } from '@angular/core';

const ID_USER = 'IdUser';
const NAME_USER = 'NameUser';
const AVATA_NAME='AvatarName'


@Injectable({
  providedIn: 'root'
})
export class UserIDService {

  constructor() { }


  public setIduser(IdUser: string): void {
    window.sessionStorage.removeItem(ID_USER);
    window.sessionStorage.setItem(ID_USER, IdUser);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(ID_USER);
  }

  public setNameUser(Nameuser: string): void {
    window.sessionStorage.removeItem(NAME_USER);
    window.sessionStorage.setItem(NAME_USER, Nameuser);
  }

  public getUserName(): string | null {
    return  window.sessionStorage.getItem(AVATA_NAME);
  }
  public setAvatarName(Avataruser: string): void {
    window.sessionStorage.removeItem(AVATA_NAME);
    window.sessionStorage.setItem(AVATA_NAME, Avataruser);
  }

  public getAvatarName(): string | null {
    return  window.sessionStorage.getItem(AVATA_NAME);
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}

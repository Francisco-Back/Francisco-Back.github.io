export class User {
    public id: number =0;
    //public createDate: string | undefined;
    public nombre: string | undefined ;
    public email: string | undefined ;
    public avatar: string | undefined ;
    public password: string | undefined ;

    constructor(nombre: string, email: string , avatar: string, password: string) {
      this.nombre = nombre;
      this.email = email;
      this.password = password;
      this.avatar=avatar;
  }
  public getID(){
    return this.id;
  }


}

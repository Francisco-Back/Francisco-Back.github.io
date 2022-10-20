import { User } from "./user.model";
import {Liga} from "./liga.model";
import { Partido } from "./partido.model";

export class Vaticinio {
    public createDate: string | undefined;
    public id: number =0;
    public partido: string | undefined ;
    public nombre: string | undefined ;
    public vat1: number =0 ;
    public vat2: number =0 ;
    public punteo:number=0 ;
    public usuario!: User;
    public ligasEntity!:Liga;
    public partidoEntity!: Partido;

}

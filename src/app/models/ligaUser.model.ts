import { Liga } from "./liga.model";
import { User } from "./user.model";

export class LigaUser {
    public id: number =0;
    public estado: string ="";
   // public userid: number =0;
    public ligasEntity: Liga = new Liga;
    public usuario!: User;
    public puntaje: number =0;
    public ranking: number =0;

}

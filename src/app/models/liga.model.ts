import { User } from './user.model';
export class Liga {

    public id!: number;
    public cant_Equipos!: number;
    public fecha_Inicio: String | undefined;
    public fecha_Final: String | undefined;
    public nombreLiga: String | undefined;
    public usuario_ID!: User;


}

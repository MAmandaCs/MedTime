import { Injectable } from '@angular/core';
import { Horario } from 'src/entidades/horario';
import { DatabaseService } from './databaseService';
import { HttpClient } from '@angular/common/http';


    const PATH = 'horarios';

@Injectable()
export class HorarioService{


    constructor(private database: DatabaseService, private http: HttpClient) {

    }

    inserirHorario(horario: Horario): Promise<string> {
        return this.database.inserirH(PATH, horario);
    }
}
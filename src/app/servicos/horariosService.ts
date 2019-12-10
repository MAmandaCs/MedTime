import { Injectable } from '@angular/core';
import { Horario } from 'src/entidades/horario';
import { DatabaseService } from './databaseService';
import { HttpClient } from '@angular/common/http';
import { Horarios } from 'src/entidades/horarios';


    const PATH = 'horarioss';

@Injectable()
export class HorariosService{


    constructor(private database: DatabaseService, private http: HttpClient) {

    }

    inserirHorarios(horarios: Horarios): Promise<string> {
        return this.database.inserirHorarios(PATH, horarios);
    }
}
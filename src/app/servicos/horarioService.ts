import { Injectable } from '@angular/core';
import { Horario } from 'src/entidades/horario';
import { DatabaseService } from './databaseService';
import { HttpClient } from '@angular/common/http';
import { Horarios } from 'src/entidades/horarios';

    const PATH = 'horarios';

@Injectable()
export class HorarioService{
    
    horarioD: Horario[];

    constructor(private database: DatabaseService, private http: HttpClient) {

    }

    inserirHorario(horario: Horario): Promise<string> {
        return this.database.inserirH(PATH, horario);
    }
    
    listarHorarios(){
        return this.database.listarHorariosDB(PATH);
    }

    buscarD(){
        return this.database.buscar('/horario', 'Dentista', this.horarioD);
    }
}
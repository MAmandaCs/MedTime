import { Injectable } from '@angular/core';
import { DatabaseService } from './databaseService';
import { CadastroPosto } from 'src/entidades/cadastroPosto';

const PATH = 'funcionarios';

@Injectable()
export class PostoService {

    constructor(private database: DatabaseService) {
    }

    inserir(paciente: CadastroPosto): Promise<string> {
        return this.database.inserir(PATH, paciente);
    }

     listar(): Promise<CadastroPosto[]> {
         return this.database.listar<CadastroPosto>(PATH);
     }
}
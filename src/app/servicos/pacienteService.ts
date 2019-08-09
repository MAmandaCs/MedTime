import { Injectable } from '@angular/core';
import { DatabaseService } from './databaseService';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';

const PATH = 'pacientes';

@Injectable()
export class PacienteService {

    constructor(private database: DatabaseService) {
    }

    inserir(paciente: CadastroPaciente): Promise<string> {
        return this.database.inserir(PATH, paciente);
    }

     listar(): Promise<CadastroPaciente[]> {
         return this.database.listar<CadastroPaciente>(PATH);
     }

     remover(nome: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.database.buscar<CadastroPaciente>('pacientes', 'nome', nome)
                .then(pacientes => {
                    if (pacientes.length > 0) {
                        reject('Paciente não encontrado no nosso banco de dados');
                    } else {
                        this.database.remover(PATH, nome)
                            .then(() => resolve());
                    }
                });
        });
    }
}



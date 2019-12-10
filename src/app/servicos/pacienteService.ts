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

     lista(): Promise<CadastroPaciente[]> {
         return this.database.listar<CadastroPaciente>(PATH);
     }

     atualizar(paciente: CadastroPaciente): Promise<void> {
      // tslint:disable-next-line: max-line-length
      return this.database.atualizar(PATH, paciente.email, { nome: paciente.nome , cpf: paciente.cpf , email: paciente.email , dtNasc: paciente.dtNasc , cidade: paciente.cidade ,
      uf: paciente.uf , bairro: paciente.bairro , rua: paciente.rua , nSUS: paciente.nSUS , nProntuario: paciente.nProntuario   });
  }
     remover(cpf: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.database.buscar<CadastroPaciente>('pacientes', 'cpf', cpf)
                .then(pacientes => {
                    if (pacientes.length > 0) {
                        reject('Paciente não foi encontrado no nosso banco de dados');
                    } else {
                        this.database.remover(PATH, cpf)
                            .then(() => resolve());
                    }
                });
        });
    }

    //  buscar<CadastroPaciente>(caminho: string, propriedade: string, valor: any): Promise<CadastroPaciente[]> {
    //      return new Promise<CadastroPaciente[]>((resolve, reject) => {
    //          this.database.listar<CadastroPaciente>(caminho, propriedade, valor)
    //              .snapshotChanges()
    //              .subscribe(
    //                  items => {
    //                      const typedItems: CadastroPaciente[] = [];

    //                      items.forEach(item => {
    //                          const typedItem: CadastroPaciente = item.payload.val();
    //                          typedItem['cpf'] = item.key;
    //                          typedItems.push(typedItem);
    //                      });

    //                      resolve(typedItems);
    //                  },
    //                  error => reject(error)
    //              );
    //      });
    //  }

}



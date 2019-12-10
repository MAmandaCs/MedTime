import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { CastExpr } from '@angular/compiler';

@Injectable()
export class DatabaseService {

    constructor(public db: AngularFireDatabase) { }

    inserir<CadastroPaciente>(caminho: string, objeto: CadastroPaciente): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.db.list<CadastroPaciente>(caminho)
                .push(objeto)
                .then(item => resolve(item.key));
        });
    }

    inserirH<Horario>(caminho: string, objeto: Horario): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.db.list<Horario>(caminho)
                .push(objeto)
                .then(item => resolve(item.key));
        });

    }

    inserirHorarios<Horarios>(caminho: string, objeto: Horarios): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.db.list<Horarios>(caminho)
                .push(objeto)
                .then(item => resolve(item.key));
        });

    }





     atualizar(caminho: string, uid: string, objeto: any): Promise<void> {
         return this.db.object(`${caminho}/${uid}`).update(objeto);
     }

     remover(caminho: string, uid: string): Promise<void> {
      return this.db.object(`${caminho}/${uid}`).remove();
  }



     get<Type>(caminho: string): Promise<Type> {
         return new Promise<Type>((resolve, reject) => {
             this.db.object<Type>(caminho)
                    .valueChanges()
                    .subscribe(
                     result => resolve(result),
                     error => reject(error)
                );
         });
    }

    // getSincronizado<Type>(path: string): Observable<Type> {
    //     return this.db.object<Type>(path).valueChanges();
    // }

      listar<Type>(path: string): Promise<Type[]> {
          return new Promise<Type[]>((resolve, reject) => {
              this.db.list<Type>(path)
                  .snapshotChanges()
                  .subscribe(
                      items => {
                          const typedItems: Type[] = [];

                          items.forEach(item => {
                              const typedItem: Type = item.payload.val();
                              typedItem['key'] = item.key;
                              typedItems.push(typedItem);
                          });

                          resolve(typedItems);
                      },
                      error => reject(error)
                  );
          });
      }

     listarSincronizado<CadastroPaciente>(caminho: string): Observable<CadastroPaciente[]> {
        return this.db.list<CadastroPaciente>(caminho).valueChanges();
     }

     buscar<CadastroPaciente>(caminho: string, propriedade: string, valor: any): Promise<CadastroPaciente[]> {
        return new Promise<CadastroPaciente[]>((resolve, reject) => {
            this.db.list<CadastroPaciente>(caminho, ref => ref.orderByChild(propriedade).equalTo(valor))
                .snapshotChanges()
                .subscribe(
                    items => {
                        const typedItems: CadastroPaciente[] = [];

                        items.forEach(item => {
                            const typedItem: CadastroPaciente = item.payload.val();
                            typedItem['cpf'] = item.key;
                            typedItems.push(typedItem);
                        });

                        resolve(typedItems);
                    },
                    error => reject(error)
                );
        });
    }



}

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


    update(entity: string, uid: string, object): Promise<void> {
        return this.db.object(`/${entity}/${uid}`).update(object);
    }


    updateList(entity: string, uid: string, object): Promise<void> {
        return this.db.object(`/${entity}/${uid}`).set(object);
    }

    remove(entity: string, uid: string): Promise<void> {
        return this.db.object(`/${entity}/${uid}`).remove();
    }

    /*  this.user = new Usuario(this.autenticacao.getUser().uid,
      this.usuario.nome, this.usuario.username,
      this.usuario.email, this.usuario.genero, this.usuario.idade,
       this.usuario.senha,this.usuario.nomeM, this.pontosP,
       this.usuario.pontosMemoria, this.usuario.pontosArrasta, this.qt,
        this.usuario.qtMemoria, this.usuario.qtArrasta);
    this.rota.navigate([url]);
    this.bdService.update('/usuarios', this.usuario.uid, this.user);*/


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
                            typedItem['uid'] = item.key;
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


    buscar<Type>(caminho: string, propriedade: string, valor: any): Promise<Type[]> {
        return new Promise<Type[]>((resolve, reject) => {
            this.db.list<Type>(caminho, ref => ref.orderByChild(propriedade).equalTo(valor))
                .snapshotChanges()
                .subscribe(
                    items => {
                        const typedItems: Type[] = [];

                        items.forEach(item => {
                            const typedItem: Type = item.payload.val();
                            typedItem['uid'] = item.key;
                            typedItems.push(typedItem);
                        });

                        resolve(typedItems);
                    },
                    error => reject(error)
                );
        });
    }

    listarHorariosDB<Type>(path: string): Promise<Type[]> {
        return new Promise<Type[]>((resolve, reject) => {
            this.db.list<Type>(path)
                .snapshotChanges()
                .subscribe(
                    items => {
                        const typedItems: Type[] = [];

                        items.forEach(item => {
                            const typedItem: Type = item.payload.val();
                            typedItem['uid'] = item.key;
                            typedItems.push(typedItem);
                        });

                        resolve(typedItems);
                    },
                    error => reject(error)
                );
        });
    }
    /*  buscar<CadastroPaciente>(caminho: string, propriedade: string, valor: any): Promise<CadastroPaciente[]> {
         return new Promise<CadastroPaciente[]>((resolve, reject) => {
             this.db.list<CadastroPaciente>(caminho, ref => ref.orderByChild(propriedade).equalTo(valor))
                 .snapshotChanges()
                 .subscribe(
                     items => {
                         const typedItems: CadastroPaciente[] = [];

                         items.forEach(item => {
                             const typedItem: CadastroPaciente = item.payload.val();
                             typedItem.['cpf'] = item.key;
                             typedItems.push(typedItem);
                         });

                         resolve(typedItems);
                     },
                     error => reject(error)
                 );
         });
     }

 */



}

import { DatabaseService } from './databaseService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exames } from 'src/entidades/exames';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';


@Injectable({
    providedIn: 'root'
})
export class ExamesService{

    examesCol: AngularFirestoreCollection<Exames>;

    constructor(private database: DatabaseService, private http: HttpClient, private afs: AngularFirestore) {
        this.examesCol = afs.collection<Exames>('exames');
    }
    
  getAllExames(): Observable<Exames[]> {
    return this.afs.collection<Exames>('exames', ref =>
      ref.orderBy('nomePaciente'))
      .valueChanges()
  }

  save(exame: Exames): Promise<void> {
    exame.dataPubli = new Date();
    return this.examesCol.add(Object.assign({}, exame)).then(objeto => {
      exame.idExame = objeto.id;
      this.update(exame);
    })
    
  }

  update(exame: Exames): Promise<void> {
    return this.examesCol.doc(exame.idExame)
      .update(Object.assign({}, exame))

  }

//   delete(project: Project): Promise<void> {
//     return this.projectCol.doc(project.idProject)
//       .delete()
//   }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ExamesService } from '../servicos/examesService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Exames } from 'src/entidades/exames';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})

export class ExamesComponent implements OnInit {

  ngOnInit() {
    
  }

  // exames: any;
  // exameSelecionado: any;
  formExame: FormGroup;
  labelButton: string;
  exame: Exames;
  projects$: Observable<Exames[]>
  edit: boolean;
  messages: string;
  id: string;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  complete: boolean;
  caminhoPDF: string;

  constructor(private router: Router, private storage: AngularFireStorage, private examesService: ExamesService, private form: FormBuilder) {
  // this.exames = [{exame: 'ultrassom.pdf'}, { exame: 'ultrassonografia.pdf'}];
  // this.exameSelecionado = {};
  }

  initForm() {
    this.formExame = this.form.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  upload(event) {
    this.complete = false;
    const pdf = event.target.pdf[0]
    const path = `pdf/${pdf.name}`;
    const pdfRef = this.storage.ref(path.replace(/\s/g, ''));
    this.task = this.storage.upload(path.replace(/\s/g, ''), pdf)
    this.task.then(up => {
      pdfRef.getDownloadURL().subscribe(url => {
        this.complete = true
        this.caminhoPDF = url

      })
    })
    this.uploadPercent = this.task.percentageChanges();
  }
  
    saveExame() {
    if (this.formExame.invalid) {
      this.messages = 'Verifique os campo sobrigatórios!'
      return;
    }
    this.exame = this.formExame.value
    this.exame.pdfMain = this.caminhoPDF;
    if (!this.edit) {
      this.examesService.save(this.exame)
        .then(() => {
          this.messages = 'Projeto Salvo com sucesso!';
          this.formExame.reset();

        })
        .catch((erro) => { this.messages = 'Erro ao salvar o projeto: ${erro}' })
      }
    }
  //   } else {
  //     this.project.idProject = this.id;
  //     this.projectService.update(this.project)
  //       .then(() => {
  //         this.messages = `Projeto Atulizado com sucesso!`;
  //         this.formProject.reset();
  //         this.labelButton = 'Save'

  //       })
  //       .catch((erro) => { this.messages = `Erro ao atualizar o projeto: ${erro}` })
  //   }
  // }

  // selecionarExame(exame) {
  //   this.exameSelecionado = exame;
  // }

  

  voltar() {
      this.router.navigate(['posto']);
    
  }

}

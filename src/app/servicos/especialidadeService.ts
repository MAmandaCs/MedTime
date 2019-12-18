import { Injectable } from '@angular/core';
import { DatabaseService } from './databaseService';
import { Clinico } from 'src/entidades/clinico';
import { HttpClient } from '@angular/common/http';
import { Dentista } from 'src/entidades/dentista';
import { Enfermaria } from 'src/entidades/enfermaria';
import { Fisioterapia } from 'src/entidades/fisioterapia';
import { Pediatria } from 'src/entidades/pediatria';
import { Psicologo } from 'src/entidades/psicologo';

@Injectable()
export class EspecialidadeService{

    constructor(private database: DatabaseService, private http: HttpClient) {

    }

    inserirClinico(clinico: Clinico): Promise<string> {
        return this.database.inserirE('/clinico', clinico);
    }

    inserirDentista(dentista: Dentista): Promise<string> {
        return this.database.inserirE('/dentista', dentista);
    }

    inserirEnfermaria(enfermaria: Enfermaria): Promise<string> {
        return this.database.inserirE('/enfermaria', enfermaria);
    }

    inserirFisioterapia(fisioterapia: Fisioterapia): Promise<string> {
        return this.database.inserirE('/fisioterapia', fisioterapia);
    }

    inserirPediatria(pediatria: Pediatria): Promise<string> {
        return this.database.inserirE('/pediatria', pediatria);
    }

    inserirPsicologo(psicologo: Psicologo): Promise<string> {
        return this.database.inserirE('/psicologo', psicologo);
    }
}
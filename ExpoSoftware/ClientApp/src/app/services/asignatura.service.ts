import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Asignatura} from '../comite/asignatura/models/asignatura';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleHttpErrorService)
      {
      this.baseUrl = baseUrl;
      }

      post(asignatura:Asignatura ): Observable<Asignatura> {
        return this.http.post<Asignatura>(this.baseUrl + 'api/Asignatura', asignatura)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Asignatura>('Registrar Asignatura', null))
            );
    }
    
  
}

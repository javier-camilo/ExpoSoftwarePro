import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from '../models/asignatura';

@Component({
  selector: 'app-asignatura-registro',
  templateUrl: './asignatura-registro.component.html',
  styleUrls: ['./asignatura-registro.component.css']
})
export class AsignaturaRegistroComponent implements OnInit {

  asignatura:Asignatura;

  constructor(private asignaturaService: AsignaturaService ) { }

  ngOnInit() {
    this.asignatura=new Asignatura();
    this.asignatura.areaAsignatura="Selecionar...";
  }

  add(){



  }

}

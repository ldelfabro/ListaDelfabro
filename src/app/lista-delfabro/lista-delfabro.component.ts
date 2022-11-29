import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-delfabro',
  templateUrl: './lista-delfabro.component.html',
  styleUrls: ['./lista-delfabro.component.css']
})
export class ListaDelfabroComponent implements OnInit {

  public alumnos = [
    {
      Nombre: "Leandro",
      Apellido : "Delfabro",
      AproboCursada : true,
      Promedio : 7,
      Visible : true
    },
    {
      Nombre: "Juan",
      Apellido : "Perez",
      AproboCursada : false,
      Promedio : 4,
      Visible : true
    },
    {
      Nombre: "Nicanor",
      Apellido : "Gutierrez",
      AproboCursada : true,
      Promedio : 9,
      Visible : true
    },
    {
      Nombre: "Mauri",
      Apellido : "Martinez",
      AproboCursada : false,
      Promedio : 2,
      Visible : true
    },
    {
      Nombre: "Lucrecia",
      Apellido : "Hernandez",
      AproboCursada : true,
      Promedio : 8,
      Visible : true
    },
    {
      Nombre: "Lucas",
      Apellido : "Prometeo",
      AproboCursada : false,
      Promedio : 1,
      Visible : true
    },
    {
      Nombre: "Karen",
      Apellido : "Islas",
      AproboCursada : true,
      Promedio : 10,
      Visible : true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  aprobados() : void {
    this.alumnos.forEach(function(elemento){
      elemento.Visible = false;
      if(elemento.AproboCursada){
        elemento.Visible = true;
      }
    }) 
  }
  desaprobados() : void {
    this.alumnos.forEach(function(elemento){
      elemento.Visible = false;
      if(!elemento.AproboCursada){
        elemento.Visible = true;
      }
    }) 
  }

  todos() : void {
    this.alumnos.forEach(function(elemento){
      elemento.Visible = true;
  
    }) 
  }


}

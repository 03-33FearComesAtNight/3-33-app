import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  componentes: Componente[] = [
    {
      description: 'aqui se quiso representar en un concepto el 3:33 el cual es la hora donde suelen suceder cosas',
      sub: 'Logo del juego',
        comp: 'Diseño final',
        img: "../assets/img/logo1.jpg"
      },
    {
      description: 'aqui se muestra el diseño/modelo final de nuestra protagonista',
      sub: 'Protagonista',
      comp: 'Diseño final',
      img: "../assets/img/imagen1.jpg"
    },
    {
      description: 'fotografias de los interiores donde se desarrolla el juego',
      sub: 'Interiores',
      comp: 'Diseño final',
      img: "../assets/img/imagen2.jpg"
    },
    {
      description: 'fotografias de los interiores donde se desarrolla el juego',
      sub: 'Interiores',
      comp: 'Diseño final',
      img: "../assets/img/imagen3.jpg"
    },
     {
     description: 'fotografia del exterior donde se aprecia que el juego se va desarrollando en un hotel',
      sub: 'Exteriores',
       comp: 'Diseño final',
       img: "../assets/img/imagen4.jpg"
     },
    {
    description: 'Un boceto que representa nuestro objetivo dentro del juego',
    sub: 'Objetivo',
      comp: 'Bocetos',
      img: "../assets/img/imagen5.jpg"
    }
    ,
    {
    description: 'boceto representativo de las etapas del monstruo/villano',
    sub: 'Bocetos de monstruo',
      comp: 'Bocetos',
      img: "../assets/img/imagen6.jpg"
    }
    ,
    {
    description: 'Boceto principal del personaje principal, al principio era un hombre pero en el desarrollo se cambio en una mujer',
    sub: 'Bocetos del personaje',
      comp: 'Personajes',
      img: "../assets/img/imagen7.jpg"
    }
    ,
    {
    description: 'Uno de los primeros diseños pensados para el videojuego',
    sub: 'Primeros Diseños De logo',
      comp: 'Diseños',
      img: "../assets/img/imagen8.jpg"
    }
    ,
    {
    description: 'Boceto para el videojuego',
    sub: 'Primeros Diseños De logo',
      comp: 'Bocetos',
      img: "../assets/img/imagen9.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
interface Componente {
  description: string;
  sub: string;
  comp: string;
  img: string;
}

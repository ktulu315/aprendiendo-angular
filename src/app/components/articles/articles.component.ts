import { Component, Input, OnInit } from '@angular/core';

import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { MomentModule } from 'ngx-moment';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-articles',
  imports: [MomentModule, RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit{

  @Input() articles:Article[];
  public url: string;
  public textSearched: string;
  
  constructor(
    private _route: ActivatedRoute   

  ) {
    this.url = Global.url;
    this.articles =[];
    this.textSearched = ""; 
  }

  ngOnInit(){ //añadí esto para poder mostrar que texto buscado no da resultados
    this._route.params.subscribe(params =>{
      this.textSearched = params["search"];
    },
    error =>{
      this.textSearched = "Error al leer busqueda";
    });
  }

}

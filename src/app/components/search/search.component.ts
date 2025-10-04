import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ArticlesComponent } from '../articles/articles.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [SliderComponent, ArticlesComponent, SidebarComponent],
  providers: [ArticleService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  
  public articles: Article[];
  
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _articleService: ArticleService
  ){
    this.articles = [];

  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let search = params['search']; //captura la busqueda desde el url
      this._articleService.search(search).subscribe(response => {
        console.log(response);
        if(response.articles){
          this.articles = response.articles;
          console.log(this.articles);
        }
      },
      error => {
        console.log("no entro");
        this._router.navigate(['/home']);
      })
    },
    error =>{
      console.log(error);
    })
  }

} 

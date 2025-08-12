import { Component, input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticleService } from '../../services/article.service';
import { ArticlesComponent } from '../articles/articles.component';
import { Article } from '../../models/article';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [SliderComponent, SidebarComponent, CommonModule, ArticlesComponent],
  providers: [ArticleService, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public title: String;
  public articles: Article[];
  
  constructor(private _articleService: ArticleService){
    
    this.title = "Ultimos articulos";
    this.articles = [];

  
  }

  ngOnInit(){
    this._articleService.getArticles(true).subscribe( //el true es para que muester solo los ultimos 5
      response => {
        if(response.articles){
          this.articles = response.articles;
        }
        console.log("Se imprimieron " + this.articles.length + " articulos.");
      },

      error => {
        console.log("Error al llamar los articulos! " + error.message);
      }
    )

  }

}

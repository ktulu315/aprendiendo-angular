import { Component, Input, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { ArticlesComponent } from "../articles/articles.component";

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [SliderComponent, SidebarComponent, CommonModule, ArticlesComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService, ArticlesComponent]
})
export class BlogComponent implements OnInit{
  @Input() nombre!: string;
  public size!: string;

  public articles: Article[];
  public url: string;

  constructor( private _articleService: ArticleService ){
    this.articles = [];
    this.url = Global.url;

  }

  ngOnInit(){
    this._articleService.getArticles().subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
        }
      },
      error => {
        console.log("Error al llamar los articulos! " + error.message);
      }
    )
  }

}

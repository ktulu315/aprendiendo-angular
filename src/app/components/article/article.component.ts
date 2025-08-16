import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-article',
  imports: [SidebarComponent, CommonModule, MomentModule],
  providers: [ArticleService],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  
  public article: Article;
  public url: string;

  
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute, //para leer datos desde url
    private _router: Router // lo mismo de arriba
  
  ) {

    this.url = Global.url;
    this.article = {
      _id: "",
      title: "",
      content: "",
      date: "",
      image: ""
    }

  }

  ngOnInit(){
    
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(response =>{
        this.article = response.article; 
      }, error =>{
        this._router.navigate(['/home']);
        console.log(error);
      });
    },
    error =>{
      this._router.navigate(['/home']);
      console.log("error");
    })
  }

}

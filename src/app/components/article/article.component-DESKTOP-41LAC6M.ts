import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { Global } from '../../services/global';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-article',
  imports: [SidebarComponent, MomentModule, CommonModule],
  providers: [ArticleService],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{

  public article: Article;
  public url: String;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){

    this.url = Global.url;
    this.article = {
      _id: "string",
      title: "string",
      content: "string",
      image: "string",
      date: "any"
    };
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
            console.log(this.article);
          }else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          this._router.navigate(['/home']);
          console.log(error);
        }
      )
    })

  }


}

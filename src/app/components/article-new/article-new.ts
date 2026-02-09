import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../models/article';

import { SidebarComponent } from "../sidebar/sidebar.component";
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-article-new',
  imports: [FormsModule, SidebarComponent],
  templateUrl: './article-new.html',
  styleUrl: './article-new.css',
  providers: [ArticleService]
})
export class ArticleNewComponent {

  public article: Article;
  public status: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,

  ){
    this.article = new Article(
    '',               // _id (vacío, backend lo crea)
    'Titulo Nuevo',   // title
    '',               // content
    '',               // image
    null,              // date
  )
    this.status = "";
  };

  onSubmit() {
    //version moderna:
    this._articleService.create(this.article).subscribe({
      next: response => {
        if (response.status === 'success'){
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']); //redireccionar a blog

        } else {
          this.status = 'error';
        }
      },
      
      error: error =>{
        console.log(error);
        this.status = 'error';
      }
    })

    //version antigua:
    /* this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    ) */

  }



}

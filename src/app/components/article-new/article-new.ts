import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../models/article';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";


@Component({
  standalone: true,
  selector: 'app-article-new',
  imports: [FormsModule, CommonModule, SidebarComponent],
  templateUrl: './article-new.html',
  styleUrl: './article-new.css'
})
export class ArticleNewComponent {

  public article: Article;

  constructor(){
    this.article = new Article(
      "",
      "Titulo Nuevo",
      "Contenido Nuevo",
      "",
      null);
  }

  onSubmit() {
    console.log(this.article);
  }



}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { MomentModule } from 'ngx-moment';


@Component({
  standalone: true,
  selector: 'app-articles',
  imports: [CommonModule, MomentModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  @Input() articles:Article[];
  public url: string;
  
  constructor() {
    this.url = Global.url;
    this.articles =[];
  }


}

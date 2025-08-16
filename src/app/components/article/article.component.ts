import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
@Component({
  standalone: true,
  selector: 'app-article',
  imports: [SidebarComponent, SliderComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

}

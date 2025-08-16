import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ArticlesComponent } from '../articles/articles.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [SliderComponent, ArticlesComponent, SidebarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}

import { Component, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [SliderComponent, SidebarComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() nombre!: string;
  public size!: string;

}

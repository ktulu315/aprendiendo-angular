import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  
  public searchString: string;

  constructor(){
    this.searchString = '';
  }

  ngOnInit(){
    
  }

  goSearch(){
    alert(this.searchString)
  }

}
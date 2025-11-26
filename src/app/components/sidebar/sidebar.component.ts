import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router' 

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  
  public searchString: string;


  constructor(
    private _router: Router,
    private _route: ActivatedRoute,

  ){
    this.searchString = '';
  }

  ngOnInit(){
    
  }

  goSearch(){
    this._router.navigate(['buscar', this.searchString]); //se asigna el texto a la ruta (buscar)
  }

}
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular de la clase de Master hecha por David';
}
*/

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule,  
    HeaderComponent, 
    FooterComponent,

    ],  // Aca se deben agregar los componentes que se van a usar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Titulo de app.component.ts';
}
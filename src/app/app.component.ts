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
import { SliderComponent } from "./components/slider/slider.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule,  
    HeaderComponent, 
    SliderComponent, 
    SidebarComponent,
    FooterComponent,

    ],  // puedes agregar MiComponente aquí si lo usas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Titulo de app.component.ts';
}
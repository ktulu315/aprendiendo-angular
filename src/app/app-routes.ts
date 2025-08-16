import { Routes } from '@angular/router';
//import { AppComponent } from './app.component'; //No es necesario porque lo carga por defecto
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent },
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-prueba', component: PaginaComponent},
    {path: 'pagina-de-prueba/:nombre/:apellido', component: PaginaComponent},
    {path: '**', component: ErrorComponent} //debe ser la ultima
    //  {path: 'header', component: HeaderComponent}
  // ejemplo:
  // { path: '', component: HomeComponent },
];
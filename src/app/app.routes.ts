// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão (Home)
  { path: 'home', component: HomeComponent }, // Rota '/home'
  {
    path: 'content/:id',
    component: ContentComponent,
    data: { renderMode: 'default' }, // Desativa a pré-renderização para esta rota
  },
];

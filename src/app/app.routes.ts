import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'movie', component: MovieComponent }
];

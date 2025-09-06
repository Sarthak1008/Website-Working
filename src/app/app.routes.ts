import { Routes } from '@angular/router';
import { AmazingReasonsComponent } from './amazing-reasons/amazing-reasons.component';
import { BirthdayWishesComponent } from './birthday-wishes/birthday-wishes.component';
import { ComparasionComponent } from './comparasion/comparasion.component';
import { GiftCornerComponent } from './gift-corner/gift-corner.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  { path: '', component: ComparasionComponent },
  { path: 'comparison', component: ComparasionComponent },
  { path: 'gifts', component: GiftCornerComponent },
  { path: 'wishes', component: BirthdayWishesComponent },
  { path: 'amazing', component: AmazingReasonsComponent },
  { path: 'movie', component: MovieComponent }
];

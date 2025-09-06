import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmazingReasonsComponent } from './amazing-reasons/amazing-reasons.component';
import { BirthdayWishesComponent } from './birthday-wishes/birthday-wishes.component';
import { ComparasionComponent } from './comparasion/comparasion.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { GiftCornerComponent } from './gift-corner/gift-corner.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieComponent, ConfettiComponent, HobbiesComponent, ComparasionComponent, GiftCornerComponent, BirthdayWishesComponent, AmazingReasonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website_in_progress';
}

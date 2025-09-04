import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ComparasionComponent } from './comparasion/comparasion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieComponent, ConfettiComponent, HobbiesComponent,ComparasionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website_in_progress';
}

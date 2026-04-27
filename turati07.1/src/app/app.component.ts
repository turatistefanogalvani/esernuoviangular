import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherListComponent], // Rimuovi WeatherDetailComponent da qui!
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turati07.1';
}

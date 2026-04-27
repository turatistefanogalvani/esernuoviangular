import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importa questo
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-detail',
  standalone: true,           // <-- AGGIUNGI QUESTA RIGA!
  imports: [CommonModule],    // <-- AGGIUNGI QUESTA RIGA!
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent {
  @Input() weatherData?: Weather;

  getBackgroundClass() {
    return this.weatherData?.condition.toLowerCase() || '';
  }
}
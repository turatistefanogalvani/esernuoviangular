import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Assicurati di avere questo
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-detail',
  standalone: true,           // <-- IL PROBLEMA È QUI: DEVE ESSERCI QUESTA RIGA
  imports: [CommonModule],    // <-- E ANCHE QUESTA
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent {
  @Input() weatherData?: Weather;

  getBackgroundClass() {
    return this.weatherData?.condition.toLowerCase() || '';
  }
}
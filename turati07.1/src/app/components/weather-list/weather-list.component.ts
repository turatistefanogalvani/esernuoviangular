import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importa questo
import { Weather } from '../../models/weather.model';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';

@Component({
  selector: 'app-weather-list',
  standalone: true,                                    // <-- AGGIUNGI QUESTA RIGA!
  imports: [CommonModule, WeatherDetailComponent],     // <-- AGGIUNGI IL DETTAGLIO QUI!
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  myCities: Weather[] = [
    { city: 'Roma', temperature: 25, condition: 'Soleggiato', humidity: 40, wind: 10, icon: '☀️' },
    { city: 'Milano', temperature: 12, condition: 'Pioggia', humidity: 85, wind: 15, icon: '🌧️' },
    { city: 'Torino', temperature: 5, condition: 'Neve', humidity: 90, wind: 5, icon: '❄️' },
    { city: 'Londra', temperature: 18, condition: 'Nuvoloso', humidity: 60, wind: 25, icon: '☁️' }
  ];

  selectedCity?: Weather;

  select(city: Weather) {
    this.selectedCity = city;
  }
}
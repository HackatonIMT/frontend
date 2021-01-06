import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';

class Weather {
  tempMin: number;
  tempMax: number;
  description: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city = '';
  weatherData: Weather = null;
  error = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather = () => {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.error = false;
      this.weatherData = {
        description: data.weather[0].description,
        tempMin: data.main.temp_min - 273.15,
        tempMax: data.main.temp_max - 273.15
      };
    }, error => {
      this.weatherData = null;
      this.error = true;
    });
  }
}

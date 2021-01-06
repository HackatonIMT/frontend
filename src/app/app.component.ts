import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

class User {
  full_name: string;
}

class Weather {
  tempMin: number;
  tempMax: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-hackaton';
  user = '';
  city = '';
  weatherData: Weather = null;
  error = false;

  constructor(private http: HttpClient, private weatherService: WeatherService) { }

  // TODO: Add roting, create components, create services (Server service and User service)

  makeRequest = () => {
    this.http.get('http://localhost:5000/user/1').subscribe((data: User) => {
      console.log(data);
      this.user = data.full_name;
    });
  }

  eraseName = () => {
    this.user = '';
  }

  getWeather = () => {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      console.log(data);
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  owmToken = '7ac81822e863f0b2033133915cd8ad53';
  owmUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`${this.owmUrl}weather/?q=${city}&lang=fr&APPID=${this.owmToken}`);
  }
}

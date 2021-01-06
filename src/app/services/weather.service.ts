import { Injectable } from '@angular/core';
import { ServerService } from './server.service';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'weather';

  constructor(private serverService: ServerService) { }

  getWeather = (city: string) => {
    const data = { city };
    return this.serverService.post(this.url, data);
  }
}

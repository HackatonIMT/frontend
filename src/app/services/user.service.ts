import { Injectable } from '@angular/core';
import { ServerService } from './server.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'user';

  constructor(private serverService: ServerService) { }

  getUser = () => {
    const url = `${this.url}/1`;
    return this.serverService.get(url);
  }
}

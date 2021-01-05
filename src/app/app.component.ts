import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class User {
  full_name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-hackaton';
  user = '';

  constructor(private http: HttpClient) {
    this.makeRequest();
  }

  makeRequest() {
    this.http.get('http://localhost:5000/user/1').subscribe((data: User) => {
      console.log(data);
      this.user = data.full_name;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

class User {
  full_name: string;
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  user = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  makeRequest = () => {
    this.userService.getUser().subscribe((data: User) => {
      this.user = data.full_name;
    });
  }

  eraseName = () => {
    this.user = '';
  }

}

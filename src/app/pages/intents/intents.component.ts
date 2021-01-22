import { Component, OnInit } from '@angular/core';
import { IntentService } from '../../services/intent.service';

class Intent {
  id: string;
  name: string;
  display_name: string;
}


@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.css']
})
export class IntentsComponent implements OnInit {

  intents: Intent[] = [];
  title = 'Intents';

  constructor(private intentService: IntentService) { }

  ngOnInit(): void {
    this.intentService.getIntents().subscribe((data: Intent[]) => {
      this.intents = data;
    });
  }

}

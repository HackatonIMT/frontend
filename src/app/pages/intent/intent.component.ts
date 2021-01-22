import { Component, OnInit } from '@angular/core';
import { IntentService } from '../../services/intent.service';
import { ActivatedRoute, Router } from '@angular/router';


class Intent {
  id: string;
  name: string;
  display_name: string;
  training_phrases: string[];
  messages: string[];
  action: string;
  priority: number;
}

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent implements OnInit {
  intent: Intent;

  constructor(private intentService: IntentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.intentService.getIntent(id).subscribe((data: Intent) => {
      this.intent = data;
    });
  }

}

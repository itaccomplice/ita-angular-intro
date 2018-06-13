import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.css']
})
export class TimerPageComponent implements OnInit {

  title = 'Mark Ford\'s app';

  constructor() { }

  ngOnInit() {
  }

  onCountdownCompleted(): void {
    alert('Time up !');
  }

}

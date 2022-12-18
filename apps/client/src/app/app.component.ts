import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '@fem/core-data';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private widgetsService: WidgetsService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

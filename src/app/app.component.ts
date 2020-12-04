import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-navigation></app-navigation>
    <app-fab-actions></app-fab-actions>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

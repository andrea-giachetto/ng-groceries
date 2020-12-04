import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
    <header class="header">
      <img src="../../../assets/backgrounds/shopping-list.png">
      <div class="header--text">
        <h3>Welcome back, <br> Valentina!</h3>
        <p>Manage all your items in your lists.<br> Let's get it done!</p>
      </div>
    </header>
  `,
  styles: [`
    .header {width: 100%; height: 240px; text-align: center; display: flex; align-items: center; }
    .header img {width: 100%; position: absolute; top: 0; left: 0; z-index: -1;}
    .header .header--text { width: 100%;}
    .header .header--text h3 {font-size: 24px; line-height: 28px; font-weight: bold; color: white;}
    .header .header--text p {font-size: 16px; line-height: 24px; color: white;}
  `]
})
export class HeadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

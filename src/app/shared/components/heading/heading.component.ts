import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
    <header class="header">
      <img src="../../../assets/backgrounds/shopping-list.png">
      <div class="header--text">
        <h3 *ngIf="headingTitle; else defaultTitle">{{ headingTitle }}</h3>
        <ng-template #defaultTitle>
          <h3>Welcome back, <br> Valentina!</h3>
        </ng-template>

        <p *ngIf="deadline; else defaultDescription">{{ deadline | date }}</p>
        <ng-template #defaultDescription>
          <p>Manage all your items in your lists.<br> Let's get it done!</p>
        </ng-template>
      </div>
    </header>
  `,
  styles: [`
    .header {width: 100%; position: relative; overflow: hidden; height: 240px; text-align: center; display: flex; align-items: center; }
    .header img {width: 100%; position: absolute; top: 0; left: 0; z-index: -1;}
    .header .header--text { width: 100%;}
    .header .header--text h3 {font-size: 24px; line-height: 28px; font-weight: bold; color: white;}
    .header .header--text p {font-size: 16px; line-height: 24px; color: white;}
  `]
})
export class HeadingComponent implements OnInit {

  title: string;

  @Input() headingTitle: string;
  @Input() deadline: Date;

  constructor() { }

  ngOnInit(): void {
  }

}

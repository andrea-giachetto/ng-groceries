import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
    <header class="header">
      <img [src]="backgroundUrl">
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

      <button class="list-options" mat-icon-button [matMenuTriggerFor]="menu" aria-label="Grocery List Menu Options">
        <mat-icon>more_vert</mat-icon>
      </button>

      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon class="white-icon">edit</mat-icon>
          <span>Edit list</span>
        </button>
        <button mat-menu-item>
          <mat-icon>delete</mat-icon>
          <span>Delete</span>
        </button>
        <button mat-menu-item>
          <mat-icon>check</mat-icon>
          <span>Complete</span>
        </button>
      </mat-menu>

    </header>
  `,
  styles: [`
    .header {width: 100%; position: relative; overflow: hidden; height: 240px; text-align: center; display: flex; align-items: center; }
    .header img {min-width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -1;}
    .header .header--text { width: 100%;}
    .header .header--text h3 {font-size: 24px; line-height: 28px; font-weight: bold; color: white;}
    .header .header--text p {font-size: 16px; line-height: 24px; color: white;}
    .header .list-options {position: absolute; top: 10px; right: 10px;}
  `]
})
export class HeadingComponent implements OnInit {

  title: string;

  @Input() headingTitle: string;
  @Input() deadline: Date;
  @Input() mode: string;
  backgroundUrl: string;

  constructor() {
  }

  ngOnInit(): void {
    this.backgroundUrl = this.mode == 'detail' ? "../../../assets/backgrounds/grocery-detail-header.png" : "../../../assets/backgrounds/shopping-list.png"
  }

}

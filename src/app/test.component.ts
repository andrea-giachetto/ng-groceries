import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome-test',
  template: `
  <div>

  </div>
  `,
  styles: []
})
export class TestComp {

  userHasClicked:boolean = false;

  onUserClick() {
    console.log('clicked')
    this.userHasClicked = !this.userHasClicked;
  }
}

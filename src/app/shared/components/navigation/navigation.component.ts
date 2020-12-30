import { clearActiveGrocery } from './../../../features/groceries/store/actions/groceries.actions';
import { AppState } from './../../../app.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <ul>
        <li (click)="navigateTo('groceries')"><img src="../../../assets/icons/dark/shopping-list.svg"> <span>Shopping List</span></li>
        <li (click)="navigateTo('products')"><img src="../../../assets/icons/dark/products.svg"> <span>Products</span></li>
        <li (click)="navigateTo('settings')"><img src="../../../assets/icons/dark/settings.svg"> <span>Settings</span></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav {width: 100%; background-color: #54C6EB; color: white; padding: 0; position: fixed; bottom: 0; left: 0;}
    nav ul { width: 100%; padding: 15px 10px; margin: 0; list-style: none; display: flex; justify-content: space-evenly}
    nav ul li { width: 20%; text-align: center; display: flex; flex-direction: column}
    nav ul li span { font-size: 10px}
  `]
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  navigateTo(path?: string) {
    this.router.navigate([path])
    this.store.dispatch(clearActiveGrocery())
  }

}

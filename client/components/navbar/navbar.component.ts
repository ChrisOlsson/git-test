import { Component } from '@angular/core';


@Component({
  selector: 'navbar',
  template: require('./navbar.html')
})
export class NavbarComponent {
  isCollapsed = true;
  isLoggedIn;
  isAdmin;
  currentUser = {};
  menu = [{
    title: 'Home',
    'state': 'main',
  }];
}

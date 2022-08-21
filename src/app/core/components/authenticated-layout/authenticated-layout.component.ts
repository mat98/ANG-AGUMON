import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChartLine,
  faCog,
  faMapSigns,
  faSignOutAlt,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-authenticated-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.scss'],
})
export class AuthenticatedLayoutComponent {
  routes: any[] = [];
  activeRoute = '';
  icons = {
    faChartLine,
    faMapSigns,
    faCog,
    faSignOutAlt,
    faFileAlt,
  };
  userRoles: String[] = [];
  username: string = '';

  constructor(private _router: Router) {
    this.activeRoute = this._router.url;
    this.generateRoutes();
  }

  private generateRoutes() {
    const storageRoles = localStorage.getItem('roles');
    this.routes = [
      { route: '/', icon: this.icons.faChartLine, description: 'app.home' },
    ];
  }

  public navigateTo(route: string): void {
    this.activeRoute = route;
    this._router.navigate([route]);
  }
}

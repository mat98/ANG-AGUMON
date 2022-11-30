import { ROUTES } from './../../constants/routes';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChartLine,
  faCog,
  faMapSigns,
  faSignOutAlt,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { MatSidenav } from '@angular/material/sidenav';

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
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(private _router: Router) {
    this.activeRoute = this._router.url;
    this.generateRoutes();
  }

  private generateRoutes() {
    this.routes = ROUTES;
  }

  public navigateTo(route: any): void {
    if (!route.route) {
      route.collapsed = !route.collapsed;
      if (route.icon === 'keyboard_arrow_down') {
        route.icon = 'keyboard_arrow_up';
      } else {
        route.icon = 'keyboard_arrow_down';
      }
    } else {
      this.activeRoute = route.route;
      this._router.navigate([route.route]);
      this.sidenav?.close();
    }
  }

  public goHome(): void {
    this._router.navigate(['']);
  }

  public verifyActive(route: string) {
    return this.activeRoute === route ? "active" : '';
  }

  public navigateToRedirectLinkExtern(link: string): void {
    window.open(link, '_blank');
  }

  public toggleSidenav(sidenav: any) {
    if (sidenav.opened) {
      sidenav.close();
    } else {
      sidenav.open();
    }
  }
}

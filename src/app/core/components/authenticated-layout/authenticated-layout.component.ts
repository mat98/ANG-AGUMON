import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChartLine,
  faCog,
  faMapSigns,
  faSignOutAlt,
  faFileAlt
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
    this.routes = [
      { route: '/', icon: "home", description: 'Home' },
      { route: '/teste', icon: "contacts", description: 'Contate-Me' },
      // { route: '/farm/list', icon: this.icons.faMapSigns, description: 'app.farms' },
    ];
  }

  public navigateTo(route: string): void {
    this.activeRoute = route;
    this._router.navigate([route]);
  }

  public navigateToRedirectLinkExtern(link: string): void {
    window.open(link, "_blank");
  }

  public toggleSidenav(sidenav: any) {
    if(sidenav.opened) {
      sidenav.close();
    } else {
      sidenav.open();
    }
  }
}

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
      { route: '/', icon: this.icons.faChartLine, description: 'app.home' },
      // { route: '/farm/list', icon: this.icons.faMapSigns, description: 'app.farms' },
    ];
  }

  // private generateRoutes() {
  //   const storageRoles = localStorage.getItem('roles');
  //   if (storageRoles) {
  //     const userRoles: string[] = JSON.parse(storageRoles);
  //     if (userRoles.includes('frigorifico')) {
  //       this.routes = [];
  //     } else {
  //       this.routes = [
  //         { route: '/', icon: this.icons.faChartLine, description: 'app.home' },
  //         { route: '/farm/list', icon: this.icons.faMapSigns, description: 'app.farms' },
  //         { route: '/herd/list', icon: this.icons.faBuromobelexperte, description: 'app.herds' },
  //         { route: '/animal/list', icon: this.icons.faVaadin, description: 'app.animals' },
  //         { route: '/romaneio/list', icon: this.icons.faFileAlt, description: 'app.romaneio' },
  //         { route: '/settings', icon: this.icons.faCog, description: 'app.settings' }
  //       ];
  //     }
  //   }
  // }

  public navigateTo(route: string): void {
    this.activeRoute = route;
    this._router.navigate([route]);
  }

  public navigateToRedirectLinkExtern(link: string): void {
    window.open(link, "_blank");
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-title-and-subscription',
  templateUrl: './image-title-and-subscription.component.html',
  styleUrls: ['./image-title-and-subscription.component.scss'],
})
export class ImageTitleAndSubscriptionComponent {
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() digivice: string = '';
  @Input() path: string = '';

  constructor(private _router: Router) {}

  navigateToDetail(): void {
    this._router.navigate([`detail-project/${this.path}`]);
  }
}

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { TimelineElement } from "./timeline-element";

@Component({
  selector: 'horizontal-timeline',
  templateUrl: 'horizontal-timeline.component.html',
  styleUrls: ['horizontal-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HorizontalTimelineComponent {
  private _timelineElements!: TimelineElement[];

  @Input() timelineElements: TimelineElement[] = [];
  // @Input()
  // set timelineElements(value: TimelineElement[]) {
  //   this._timelineElements = value;
  //   // this.initView();
  // }
}
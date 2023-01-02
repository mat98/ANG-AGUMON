import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appImageLoader]'
})
export class ImageLoaderDirective implements OnInit {
  loading = true;
  @Output() loadingChange = new EventEmitter<boolean>();


  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
  }

  ngOnInit() {
    this.el.nativeElement.addEventListener('load', () => {
      this.loading = false;
      this.loadingChange.emit(this.loading);
    });
  }
}
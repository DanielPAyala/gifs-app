import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: ``,
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property es required');
  }

  onLoad(): void {
    this.hasLoaded = true;
  }
}

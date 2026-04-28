import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnChanges {
  @Input() isVisible: boolean = false;

  show = true;
  fadeOut = false;

  transform = 'rotateX(0deg) rotateY(0deg)';
  particles = Array(25); // number of particles

  ngOnChanges() {
    if (!this.isVisible) {
      this.fadeOut = true;

      setTimeout(() => {
        this.show = false;
      }, 600);
    }
  }

  onMouseMove(event: MouseEvent) {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    this.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  }
}

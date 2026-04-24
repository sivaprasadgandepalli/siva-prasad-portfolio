import { Component, HostListener, signal } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = false;

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  // Listen to window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Example breakpoint: 768px
    if (event.target.innerWidth > 768 && this.isMenuOpen()) {
      this.isMenuOpen.set(false)
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 10;
  }
}



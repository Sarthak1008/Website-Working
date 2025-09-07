import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('filmStrip', { static: false }) filmStripRef!: ElementRef;
  
  // Use local images from assets folder for the film reel
  filmFrames: string[] = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/4.jpg',
    'assets/5.jpg',
    'assets/6.jpg',
    'assets/7.jpg',
    'assets/8.jpg',
    'assets/9.jpg',
    'assets/11.jpg',
    'assets/12.jpg',
    'assets/13.jpg',
    'assets/14.jpg',
    'assets/15.jpg'
  ];

  isAnimating = true;
  animationSpeed = 20; // pixels per second
  private animationId: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Animation will start in ngAfterViewInit
  }

  ngAfterViewInit() {
    // Start animation after view is initialized
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.startAnimation();
      }, 100);
    }
  }

  ngOnDestroy() {
    this.stopAnimation();
  }

  startAnimation() {
    if (this.animationId || !isPlatformBrowser(this.platformId)) return;
    
    const filmStrip = this.filmStripRef?.nativeElement;
    if (!filmStrip) {
      console.log('Film strip element not found, retrying...');
      setTimeout(() => this.startAnimation(), 100);
      return;
    }

    console.log('Starting animation...');
    let position = 0;
    const animate = () => {
      position -= this.animationSpeed / 60; // 60 FPS
      
      // Reset position when film strip has moved completely
      if (position <= -filmStrip.scrollHeight / 2) {
        position = 0;
      }
      
      filmStrip.style.transform = `translateY(${position}px)`;
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }

  stopAnimation() {
    if (this.animationId && isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  toggleAnimation() {
    if (this.isAnimating) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
    this.isAnimating = !this.isAnimating;
  }
}

import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('filmStrip', { static: false }) filmStripRef!: ElementRef;
  
  // Array to store your photo URLs - replace these with your own images
  filmFrames: string[] = [
    'https://picsum.photos/200/150?random=1',
    'https://picsum.photos/200/150?random=2',
    'https://picsum.photos/200/150?random=3',
    'https://picsum.photos/200/150?random=4',
    'https://picsum.photos/200/150?random=5',
    'https://picsum.photos/200/150?random=6',
    'https://picsum.photos/200/150?random=7',
    'https://picsum.photos/200/150?random=8',
    'https://picsum.photos/200/150?random=9',
    'https://picsum.photos/200/150?random=10',
    'https://picsum.photos/200/150?random=11',
    'https://picsum.photos/200/150?random=12'
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

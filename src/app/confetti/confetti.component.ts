import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-confetti',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="confetti-container" *ngIf="showConfetti">
      <div class="confetti-piece" *ngFor="let piece of confettiPieces; trackBy: trackByIndex"></div>
    </div>
  `,
  styleUrl: './confetti.component.css'
})
export class ConfettiComponent implements OnInit {
  showConfetti = false;
  confettiPieces: any[] = [];
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Trigger confetti after a short delay to ensure page is fully loaded
      setTimeout(() => {
        this.triggerConfetti();
      }, 500);
    }
  }

  private triggerConfetti() {
    this.showConfetti = true;
    this.generateConfettiPieces();
    
    // Hide confetti after animation completes
    setTimeout(() => {
      this.showConfetti = false;
    }, 4000);
  }

  private generateConfettiPieces() {
    this.confettiPieces = [];
    const colors = ['#bb0000', '#ffffff', '#0000bb', '#ff69b4', '#FFD700'];
    
    // Generate 25 confetti pieces with better distribution
    for (let i = 0; i < 25; i++) {
      this.confettiPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: 2 + Math.random() * 2
      });
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}

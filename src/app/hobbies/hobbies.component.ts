import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PolaroidItem {
  url: string;
  caption: string;
  rotation: number; // degrees
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="polaroid-section" aria-label="Hobbies gallery">
      <!-- Gentle moving ribbon -->
      <svg class="ribbon" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,60 C200,20 300,100 500,60 C700,20 800,100 1000,60" fill="none" stroke="#be92ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M0,70 C200,30 300,110 500,70 C700,30 800,110 1000,70" fill="none" stroke="#ffa6c9" stroke-width="3" stroke-linecap="round"/>
      </svg>

      <div class="polaroid-tray">
        <div 
          class="polaroid" 
          *ngFor="let item of items; index as i" 
          [style.--rotate]="item.rotation + 'deg'"
          [style.zIndex]="100 + i"
          tabindex="0"
          role="img" 
          [attr.aria-label]="item.caption"
        >
          <div class="photo">
            <img [src]="item.url" [alt]="item.caption" loading="lazy" />
          </div>
          <div class="caption">{{ item.caption }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  // Replace with your own images/captions anytime
  private defaults = [
    { url: 'https://picsum.photos/id/1062/300/300', caption: 'Friends' },
    { url: 'https://picsum.photos/id/1025/300/300', caption: 'Cutie' },
    { url: 'https://picsum.photos/id/1011/300/300', caption: 'Running' },
    { url: 'https://picsum.photos/id/1005/300/300', caption: 'Sunset' },
    { url: 'https://picsum.photos/id/1015/300/300', caption: 'Mountains' },
    { url: 'https://picsum.photos/id/1050/300/300', caption: 'Cheese!' }
  ];

  items: PolaroidItem[] = this.defaults.map((d) => ({
    url: d.url,
    caption: d.caption,
    rotation: this.randomRotation()
  }));

  private randomRotation(): number {
    // random tilt between -12 and 12 deg
    return Math.round((-12 + Math.random() * 24) * 10) / 10;
  }
}

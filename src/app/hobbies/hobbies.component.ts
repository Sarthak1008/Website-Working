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
      <!-- Marquee container for polaroids -->
      <div class="marquee-container">
        <div class="polaroid-tray marquee">
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

  // Map items with alternating rotation directions:
  items: PolaroidItem[] = this.defaults.map((d, i) => ({
    url: d.url,
    caption: d.caption,
    rotation: this.randomRotation(i)
  }));

  /**
   * Returns a random degree between 0° and 12°.
   * Even indices are positive (tilting to the right) and odd indices are negative (tilting to the left).
   */
  private randomRotation(index: number): number {
    const angle = Math.random() * 12;
    return index % 2 === 0 ? angle : -angle;
  }
}

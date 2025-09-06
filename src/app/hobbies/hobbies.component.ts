import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface PolaroidItem {
  url: string;
  caption: string;
  rotation: number; // degrees
  clicked: boolean;
  reaction: string;
  sparkles: number[];
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent implements OnInit {
  // Replace with your own images/captions anytime
  private defaults = [
    { url: 'https://picsum.photos/id/1062/300/300', caption: 'Friends' },
    { url: 'https://picsum.photos/id/1025/300/300', caption: 'Cutie' },
    { url: 'https://picsum.photos/id/1011/300/300', caption: 'Running' },
    { url: 'https://picsum.photos/id/1005/300/300', caption: 'Sunset' },
    { url: 'https://picsum.photos/id/1015/300/300', caption: 'Mountains' },
    { url: 'https://picsum.photos/id/1050/300/300', caption: 'Cheese!' },
    { url: 'https://picsum.photos/id/1018/300/300', caption: 'Adventure' },
    { url: 'https://picsum.photos/id/1022/300/300', caption: 'Nature' },
    { url: 'https://picsum.photos/id/1035/300/300', caption: 'Art' },
    { url: 'https://picsum.photos/id/1040/300/300', caption: 'Music' }
  ];

  // Interactive properties
  items: PolaroidItem[] = [];
  totalClicks = 0;
  favoriteIndex = 0;
  isPaused = false;
  showCelebration = false;
  
  // Floating background elements
  floatingEmojis = ['📸', '🎨', '🎵', '🏃‍♀️', '🌅', '🎭', '📚', '🍕', '🎮', '✈️'];
  
  // Celebration emojis
  celebrationEmojis = ['🎉', '✨', '🎊', '🌟', '💫', '🎈', '🎁', '🏆'];

  // Reaction emojis for different interactions
  private reactions = ['😍', '🤩', '😎', '🥰', '🤗', '😄', '🎯', '💖', '🔥', '⭐'];

  ngOnInit() {
    this.initializeItems();
    this.startFloatingAnimation();
  }

  private initializeItems() {
    this.items = this.defaults.map((d, i) => ({
      url: d.url,
      caption: d.caption,
      rotation: this.randomRotation(i),
      clicked: false,
      reaction: '',
      sparkles: this.generateSparkles()
    }));
  }

  private generateSparkles(): number[] {
    return Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => Math.random());
  }

  /**
   * Returns a random degree between 0° and 12°.
   * Even indices are positive (tilting to the right) and odd indices are negative (tilting to the left).
   */
  private randomRotation(index: number): number {
    const angle = Math.random() * 12;
    return index % 2 === 0 ? angle : -angle;
  }

  onPolaroidClick(item: PolaroidItem, index: number): void {
    if (!item.clicked) {
      item.clicked = true;
      item.reaction = this.reactions[Math.floor(Math.random() * this.reactions.length)];
      this.totalClicks++;
      
      // Update favorite based on most clicked
      if (this.totalClicks % 3 === 0) {
        this.favoriteIndex = index;
      }
      
      // Add sparkle effect
      this.addSparkleEffect(item);
      
      // Show celebration for milestone clicks
      if (this.totalClicks % 5 === 0) {
        setTimeout(() => this.showCelebration = true, 500);
      }
    }
  }

  onPolaroidHover(item: PolaroidItem, index: number): void {
    // Add hover effects
    if (!item.clicked) {
      item.reaction = '👀';
    }
  }

  onPolaroidLeave(item: PolaroidItem, index: number): void {
    // Remove hover effects
    if (!item.clicked) {
      item.reaction = '';
    }
  }

  private addSparkleEffect(item: PolaroidItem): void {
    item.sparkles = Array.from({ length: 5 }, () => Math.random());
    setTimeout(() => {
      item.sparkles = this.generateSparkles();
    }, 2000);
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  shufflePhotos(): void {
    this.items = this.items.sort(() => Math.random() - 0.5);
    this.items.forEach((item, index) => {
      item.rotation = this.randomRotation(index);
    });
  }

  addRandomPhoto(): void {
    const randomPhoto = this.defaults[Math.floor(Math.random() * this.defaults.length)];
    const newItem: PolaroidItem = {
      url: randomPhoto.url,
      caption: randomPhoto.caption,
      rotation: this.randomRotation(this.items.length),
      clicked: false,
      reaction: '',
      sparkles: this.generateSparkles()
    };
    this.items.push(newItem);
  }

  celebrateAll(): void {
    this.showCelebration = true;
    this.items.forEach(item => {
      if (!item.clicked) {
        item.clicked = true;
        item.reaction = this.reactions[Math.floor(Math.random() * this.reactions.length)];
        this.addSparkleEffect(item);
      }
    });
    this.totalClicks = this.items.length;
  }

  closeCelebration(): void {
    this.showCelebration = false;
  }

  private startFloatingAnimation(): void {
    // This will be handled by CSS animations
  }
}

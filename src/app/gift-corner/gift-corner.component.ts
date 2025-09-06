import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface GiftCoupon {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  redeemed: boolean;
  redeemDate?: Date;
  category: 'cuddle' | 'food' | 'entertainment' | 'adventure' | 'self-care';
}

@Component({
  selector: 'app-gift-corner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gift-corner.component.html',
  styleUrl: './gift-corner.component.css'
})
export class GiftCornerComponent implements OnInit {
  gifts: GiftCoupon[] = [];
  totalGifts = 0;
  redeemedGifts = 0;
  showRedeemModal = false;
  selectedGift: GiftCoupon | null = null;
  celebrationMode = false;

  // Floating background elements
  floatingEmojis = ['🎁', '💝', '🎀', '🎊', '✨', '💖', '🎈', '🏆', '⭐', '🌟'];

  ngOnInit() {
    this.initializeGifts();
    this.startFloatingAnimation();
  }

  private initializeGifts() {
    this.gifts = [
      {
        id: '1',
        title: 'Cuddle Session',
        description: 'One hour of pure cuddles and warmth!',
        emoji: '🤗',
        color: 'pink',
        redeemed: false,
        category: 'cuddle'
      },
      {
        id: '2',
        title: 'Snack Run',
        description: 'I\'ll get your favorite snacks delivered!',
        emoji: '🍕',
        color: 'orange',
        redeemed: false,
        category: 'food'
      },
      {
        id: '3',
        title: 'Movie Night',
        description: 'Pick any movie and I\'ll watch it with you!',
        emoji: '🎬',
        color: 'purple',
        redeemed: false,
        category: 'entertainment'
      },
      {
        id: '4',
        title: 'Adventure Day',
        description: 'Let\'s go on a fun adventure together!',
        emoji: '🗺️',
        color: 'green',
        redeemed: false,
        category: 'adventure'
      },
      {
        id: '5',
        title: 'Spa Day',
        description: 'Relaxing spa treatment just for you!',
        emoji: '🧖‍♀️',
        color: 'blue',
        redeemed: false,
        category: 'self-care'
      },
      {
        id: '6',
        title: 'Dance Party',
        description: 'Let\'s dance like nobody\'s watching!',
        emoji: '💃',
        color: 'yellow',
        redeemed: false,
        category: 'entertainment'
      },
      {
        id: '7',
        title: 'Cooking Together',
        description: 'Let\'s cook your favorite meal together!',
        emoji: '👨‍🍳',
        color: 'red',
        redeemed: false,
        category: 'food'
      },
      {
        id: '8',
        title: 'Photo Shoot',
        description: 'Professional photoshoot session!',
        emoji: '📸',
        color: 'indigo',
        redeemed: false,
        category: 'adventure'
      },
      {
        id: '9',
        title: 'Massage Session',
        description: 'Relaxing massage to melt away stress!',
        emoji: '💆‍♀️',
        color: 'teal',
        redeemed: false,
        category: 'self-care'
      },
      {
        id: '10',
        title: 'Surprise Gift',
        description: 'A special surprise just for you!',
        emoji: '🎁',
        color: 'rainbow',
        redeemed: false,
        category: 'cuddle'
      }
    ];

    this.totalGifts = this.gifts.length;
    this.redeemedGifts = this.gifts.filter(g => g.redeemed).length;
  }

  onGiftClick(gift: GiftCoupon): void {
    if (!gift.redeemed) {
      this.selectedGift = gift;
      this.showRedeemModal = true;
    }
  }

  redeemGift(): void {
    if (this.selectedGift) {
      this.selectedGift.redeemed = true;
      this.selectedGift.redeemDate = new Date();
      this.redeemedGifts++;
      
      // Show celebration
      this.celebrationMode = true;
      setTimeout(() => {
        this.celebrationMode = false;
      }, 3000);
    }
    
    this.closeModal();
  }

  closeModal(): void {
    this.showRedeemModal = false;
    this.selectedGift = null;
  }

  getGiftProgress(): number {
    return (this.redeemedGifts / this.totalGifts) * 100;
  }

  getGiftsByCategory(category: string): GiftCoupon[] {
    return this.gifts.filter(gift => gift.category === category);
  }

  resetAllGifts(): void {
    this.gifts.forEach(gift => {
      gift.redeemed = false;
      gift.redeemDate = undefined;
    });
    this.redeemedGifts = 0;
  }

  private startFloatingAnimation(): void {
    // This will be handled by CSS animations
  }

  getCategoryEmoji(category: string): string {
    const emojis: { [key: string]: string } = {
      'cuddle': '🤗',
      'food': '🍕',
      'entertainment': '🎬',
      'adventure': '🗺️',
      'self-care': '🧖‍♀️'
    };
    return emojis[category] || '🎁';
  }

  getCategoryName(category: string): string {
    const names: { [key: string]: string } = {
      'cuddle': 'Cuddle & Love',
      'food': 'Food & Treats',
      'entertainment': 'Entertainment',
      'adventure': 'Adventure & Fun',
      'self-care': 'Self Care & Relaxation'
    };
    return names[category] || 'Special Gifts';
  }
}

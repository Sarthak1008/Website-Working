import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AmazingReason {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  category: 'personality' | 'talents' | 'kindness' | 'uniqueness' | 'growth';
}

@Component({
  selector: 'app-amazing-reasons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './amazing-reasons.component.html',
  styleUrl: './amazing-reasons.component.css'
})
export class AmazingReasonsComponent implements OnInit {
  reasons: AmazingReason[] = [];
  selectedCategory = 'all';
  showAddReason = false;
  newReason = {
    title: '',
    description: '',
    category: 'personality' as 'personality' | 'talents' | 'kindness' | 'uniqueness' | 'growth'
  };

  // Floating background elements
  floatingEmojis = ['✨', '🌟', '💖', '🎉', '🌈', '🦄', '💝', '🎊', '⭐', '💫'];

  ngOnInit() {
    this.initializeReasons();
  }

  private initializeReasons() {
    this.reasons = [
      {
        id: '1',
        title: 'Your Infectious Laugh',
        description: 'The way you laugh makes everyone around you smile. It\'s like sunshine breaking through clouds on a rainy day!',
        emoji: '😄',
        color: 'yellow',
        category: 'personality'
      },
      {
        id: '2',
        title: 'Your Incredible Creativity',
        description: 'You can turn the simplest things into works of art. Your imagination knows no bounds and inspires everyone around you.',
        emoji: '🎨',
        color: 'purple',
        category: 'talents'
      },
      {
        id: '3',
        title: 'Your Heart of Gold',
        description: 'You\'re always the first to help someone in need. Your kindness and compassion make the world a better place.',
        emoji: '💖',
        color: 'pink',
        category: 'kindness'
      },
      {
        id: '4',
        title: 'Your Unique Perspective',
        description: 'You see the world in a way that\'s completely your own. Your fresh take on things always surprises and delights.',
        emoji: '🔍',
        color: 'blue',
        category: 'uniqueness'
      },
      {
        id: '5',
        title: "You're an Amazing Cook",
        description: 'You can make even the simplest ingredients taste like a gourmet meal. Every dish is made with love and creativity.',
        emoji: '👩‍🍳',
        color: 'orange',
        category: 'talents'
      },
      {
        id: '6',
        title: "You're a Loyal Friend",
        description: 'Once someone is your friend, they\'re family. You\'re always there through thick and thin, ready to support and cheer others on.',
        emoji: '🤝',
        color: 'green',
        category: 'kindness'
      },
      {
        id: '7',
        title: 'Your Adventurous Spirit',
        description: "You're always up for trying new things and exploring new places. Your sense of adventure is truly inspiring!",
        emoji: '🗺️',
        color: 'teal',
        category: 'personality'
      },
      {
        id: '8',
        title: 'Your Natural Leadership',
        description: 'People naturally look up to you. You lead with grace, wisdom, and always put others first.',
        emoji: '👑',
        color: 'indigo',
        category: 'uniqueness'
      },
      {
        id: '9',
        title: 'Your Constant Growth',
        description: "You're always learning, growing, and becoming a better version of yourself. Your dedication to self-improvement is admirable.",
        emoji: '🌱',
        color: 'green',
        category: 'growth'
      },
      {
        id: '10',
        title: "You're a Perfect Listener",
        description: 'You have this amazing ability to really listen and understand. When someone talks to you, they feel truly heard and valued.',
        emoji: '👂',
        color: 'purple',
        category: 'kindness'
      },
      {
        id: '11',
        title: 'Your Incredible Memory',
        description: 'You remember the little things that matter - birthdays, favorite foods, inside jokes. It shows how much you care.',
        emoji: '🧠',
        color: 'blue',
        category: 'uniqueness'
      },
      {
        id: '12',
        title: "You're the Dancing Queen",
        description: "Whether it's a formal dance or just goofing around in the kitchen, you move with such joy and freedom!",
        emoji: '💃',
        color: 'pink',
        category: 'talents'
      }
    ];
  }

  addReason(): void {
    if (this.newReason.title.trim() && this.newReason.description.trim()) {
      const reason: AmazingReason = {
        id: Date.now().toString(),
        title: this.newReason.title.trim(),
        description: this.newReason.description.trim(),
        emoji: this.getRandomEmoji(),
        color: this.getRandomColor(),
        category: this.newReason.category
      };

      this.reasons.unshift(reason);
      this.newReason = { title: '', description: '', category: 'personality' };
      this.showAddReason = false;
    }
  }

  toggleAddReason(): void {
    this.showAddReason = !this.showAddReason;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredReasons(): AmazingReason[] {
    if (this.selectedCategory === 'all') {
      return this.reasons;
    }
    return this.reasons.filter(reason => reason.category === this.selectedCategory);
  }

  getReasonsByCategory(category: string): AmazingReason[] {
    return this.reasons.filter(reason => reason.category === category);
  }

  getCategoryName(category: string): string {
    const names: { [key: string]: string } = {
      'all': 'All Reasons',
      'personality': 'Personality',
      'talents': 'Talents & Skills',
      'kindness': 'Kindness & Care',
      'uniqueness': 'Unique Qualities',
      'growth': 'Growth & Learning'
    };
    return names[category] || 'All Reasons';
  }

  getCategoryEmoji(category: string): string {
    const emojis: { [key: string]: string } = {
      'all': '✨',
      'personality': '😊',
      'talents': '🎨',
      'kindness': '💖',
      'uniqueness': '🌟',
      'growth': '🌱'
    };
    return emojis[category] || '✨';
  }

  private getRandomEmoji(): string {
    const emojis = ['✨', '🌟', '💖', '🎉', '🌈', '🦄', '💝', '🎊', '⭐', '💫', '😊', '🎨', '💃', '👑', '🌱', '🤝'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }

  private getRandomColor(): string {
    const colors = ['pink', 'purple', 'blue', 'yellow', 'green', 'orange', 'red', 'teal', 'indigo'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

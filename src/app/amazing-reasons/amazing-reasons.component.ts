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
        title: 'Her Infectious Laugh',
        description: 'The way she laughs makes everyone around her smile. It\'s like sunshine breaking through clouds on a rainy day!',
        emoji: '😄',
        color: 'yellow',
        category: 'personality'
      },
      {
        id: '2',
        title: 'Incredible Creativity',
        description: 'She can turn the simplest things into works of art. Her imagination knows no bounds and inspires everyone around her.',
        emoji: '🎨',
        color: 'purple',
        category: 'talents'
      },
      {
        id: '3',
        title: 'Heart of Gold',
        description: 'She\'s always the first to help someone in need. Her kindness and compassion make the world a better place.',
        emoji: '💖',
        color: 'pink',
        category: 'kindness'
      },
      {
        id: '4',
        title: 'Unique Perspective',
        description: 'She sees the world in a way that\'s completely her own. Her fresh take on things always surprises and delights.',
        emoji: '🔍',
        color: 'blue',
        category: 'uniqueness'
      },
      {
        id: '5',
        title: 'Amazing Cook',
        description: 'She can make even the simplest ingredients taste like a gourmet meal. Every dish is made with love and creativity.',
        emoji: '👩‍🍳',
        color: 'orange',
        category: 'talents'
      },
      {
        id: '6',
        title: 'Loyal Friend',
        description: 'Once you\'re her friend, you\'re family. She\'s always there through thick and thin, ready to support and cheer you on.',
        emoji: '🤝',
        color: 'green',
        category: 'kindness'
      },
      {
        id: '7',
        title: 'Adventurous Spirit',
        description: 'She\'s always up for trying new things and exploring new places. Her sense of adventure is truly inspiring!',
        emoji: '🗺️',
        color: 'teal',
        category: 'personality'
      },
      {
        id: '8',
        title: 'Natural Leader',
        description: 'People naturally look up to her. She leads with grace, wisdom, and always puts others first.',
        emoji: '👑',
        color: 'indigo',
        category: 'uniqueness'
      },
      {
        id: '9',
        title: 'Constant Growth',
        description: 'She\'s always learning, growing, and becoming a better version of herself. Her dedication to self-improvement is admirable.',
        emoji: '🌱',
        color: 'green',
        category: 'growth'
      },
      {
        id: '10',
        title: 'Perfect Listener',
        description: 'She has this amazing ability to really listen and understand. When you talk to her, you feel truly heard and valued.',
        emoji: '👂',
        color: 'purple',
        category: 'kindness'
      },
      {
        id: '11',
        title: 'Incredible Memory',
        description: 'She remembers the little things that matter - birthdays, favorite foods, inside jokes. It shows how much she cares.',
        emoji: '🧠',
        color: 'blue',
        category: 'uniqueness'
      },
      {
        id: '12',
        title: 'Dancing Queen',
        description: 'Whether it\'s a formal dance or just goofing around in the kitchen, she moves with such joy and freedom!',
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

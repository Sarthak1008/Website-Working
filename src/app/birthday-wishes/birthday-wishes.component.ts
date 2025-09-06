import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface BirthdayWish {
  id: string;
  name: string;
  message: string;
  relationship: string;
  emoji: string;
  color: string;
  timestamp: Date;
}

@Component({
  selector: 'app-birthday-wishes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './birthday-wishes.component.html',
  styleUrl: './birthday-wishes.component.css'
})
export class BirthdayWishesComponent implements OnInit {
  wishes: BirthdayWish[] = [];
  showAddWish = false;
  newWish = {
    name: '',
    message: '',
    relationship: 'friend'
  };

  // Floating background elements
  floatingEmojis = ['🎂', '🎉', '🎈', '✨', '💖', '🎁', '🌟', '💝', '🎊', '🦄'];

  ngOnInit() {
    this.initializeWishes();
  }

  private initializeWishes() {
    this.wishes = [
      {
        id: '1',
        name: 'Mom',
        message: 'Happy Birthday to my amazing daughter! You bring so much joy and love into our lives. May this year be filled with happiness, success, and all your dreams coming true!',
        relationship: 'family',
        emoji: '👩‍👧',
        color: 'pink',
        timestamp: new Date('2024-01-15')
      },
      {
        id: '2',
        name: 'Sarah',
        message: 'Happy Birthday, bestie! 🎉 You\'re not just my friend, you\'re family. Here\'s to another year of adventures, laughter, and making amazing memories together!',
        relationship: 'friend',
        emoji: '👯‍♀️',
        color: 'purple',
        timestamp: new Date('2024-01-15')
      },
      {
        id: '3',
        name: 'Dad',
        message: 'Happy Birthday, sweetheart! Watching you grow into the incredible person you are today has been the greatest joy of my life. Love you to the moon and back!',
        relationship: 'family',
        emoji: '👨‍👧',
        color: 'blue',
        timestamp: new Date('2024-01-15')
      },
      {
        id: '4',
        name: 'Emma',
        message: 'Happy Birthday! 🎂 You\'re such an inspiration to everyone around you. Your kindness, creativity, and positive energy light up every room you enter!',
        relationship: 'friend',
        emoji: '✨',
        color: 'yellow',
        timestamp: new Date('2024-01-15')
      },
      {
        id: '5',
        name: 'Grandma',
        message: 'Happy Birthday, my precious granddaughter! You\'ve grown into such a beautiful, smart, and caring young woman. I\'m so proud of you!',
        relationship: 'family',
        emoji: '👵',
        color: 'green',
        timestamp: new Date('2024-01-15')
      },
      {
        id: '6',
        name: 'Alex',
        message: 'Happy Birthday! 🎉 You\'re one of the most genuine and amazing people I know. Thanks for being such an awesome friend and making life more fun!',
        relationship: 'friend',
        emoji: '🤝',
        color: 'orange',
        timestamp: new Date('2024-01-15')
      }
    ];
  }

  addWish(): void {
    if (this.newWish.name.trim() && this.newWish.message.trim()) {
      const wish: BirthdayWish = {
        id: Date.now().toString(),
        name: this.newWish.name.trim(),
        message: this.newWish.message.trim(),
        relationship: this.newWish.relationship,
        emoji: this.getRelationshipEmoji(this.newWish.relationship),
        color: this.getRandomColor(),
        timestamp: new Date()
      };

      this.wishes.unshift(wish);
      this.newWish = { name: '', message: '', relationship: 'friend' };
      this.showAddWish = false;
    }
  }

  toggleAddWish(): void {
    this.showAddWish = !this.showAddWish;
  }

  public getRelationshipEmoji(relationship: string): string {
    const emojis: { [key: string]: string } = {
      'family': '👨‍👩‍👧‍👦',
      'friend': '👯‍♀️',
      'colleague': '👔',
      'neighbor': '🏠',
      'other': '💝'
    };
    return emojis[relationship] || '💝';
  }

  private getRandomColor(): string {
    const colors = ['pink', 'purple', 'blue', 'yellow', 'green', 'orange', 'red', 'teal', 'indigo'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  getWishesByRelationship(relationship: string): BirthdayWish[] {
    return this.wishes.filter(wish => wish.relationship === relationship);
  }

  getRelationshipName(relationship: string): string {
    const names: { [key: string]: string } = {
      'family': 'Family',
      'friend': 'Friends',
      'colleague': 'Colleagues',
      'neighbor': 'Neighbors',
      'other': 'Others'
    };
    return names[relationship] || 'Others';
  }

}

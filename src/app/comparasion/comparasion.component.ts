import { Component } from '@angular/core';

@Component({
  selector: 'app-comparasion',
  standalone: true,
  imports: [],
  templateUrl: './comparasion.component.html',
  styleUrls: ['./comparasion.component.css']
})
export class ComparasionComponent {
  // Changed default friend's name to shivani
  friendName: string = 'Shivani';
  private sparkleInterval: any;

  updateName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.friendName = input.value || 'shivani';
  }

  onInputFocus(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.classList.add('pulse-glow');
    this.createSparkles(input);
  }

  onInputBlur(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.classList.remove('pulse-glow');
  }

  onCardHover(event: Event): void {
    const card = event.currentTarget as HTMLElement | null;
    if (card) {
      card.classList.add('shimmer-effect');
      this.addGlowEffect(card);
    }
  }

  onCardLeave(event: Event): void {
    const card = event.currentTarget as HTMLElement | null;
    if (card) {
      card.classList.remove('shimmer-effect');
      this.removeGlowEffect(card);
    }
  }

  onButtonHover(event: Event): void {
    const button = event.currentTarget as HTMLElement | null;
    if (button) {
      button.style.transform = 'scale(1.1) translateY(-5px)';
    }
  }

  onButtonLeave(event: Event): void {
    const button = event.currentTarget as HTMLElement | null;
    if (button) {
      button.style.transform = 'scale(1) translateY(0)';
    }
  }

  private createSparkles(element: HTMLElement): void {
    for (let i = 0; i < 4; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'magic-sparkle';
      element.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 2000);
    }
  }

  private addGlowEffect(card: HTMLElement): void {
    if (card.classList.contains('border-orange-300')) {
      card.classList.add('glow-orange');
    } else if (card.classList.contains('border-blue-300')) {
      card.classList.add('glow-blue');
    } else if (card.classList.contains('border-pink-300')) {
      card.classList.add('glow-pink');
    } else if (card.classList.contains('border-green-300')) {
      card.classList.add('glow-green');
    } else if (card.classList.contains('border-purple-300')) {
      card.classList.add('glow-purple');
    } else if (card.classList.contains('border-yellow-300')) {
      card.classList.add('glow-yellow');
    }
  }

  private removeGlowEffect(card: HTMLElement): void {
    card.classList.remove('glow-orange', 'glow-blue', 'glow-pink', 'glow-green', 'glow-purple', 'glow-yellow');
  }

  // Enhanced explosive burst effect with cake-themed confetti
  triggerExplosiveBurst(card: any): void {
    const cardElement = card as HTMLElement | null;
    if (!cardElement) return;
    const emojis = ['💥', '✨', '🎉', '🍰', '🎂', '🧁', '🍩', '🍪', '🍭'];
    const numPieces = 30;

    // Make sure the card is relatively positioned.
    cardElement.style.position = 'relative';

    // Add screen shake effect
    cardElement.style.animation = 'wiggle 0.5s ease-in-out 3';

    for (let i = 0; i < numPieces; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'absolute';
        confetti.style.top = '50%';
        confetti.style.left = '50%';
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';

        // Generate random angle and distance for explosion.
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 200 + 80;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        confetti.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        confetti.style.opacity = '1';
        confetti.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease-out';

        cardElement.appendChild(confetti);
        // Fade out and remove the element.
        setTimeout(() => {
          confetti.style.opacity = '0';
          setTimeout(() => confetti.remove(), 1500);
        }, 100);
      }, i * 15);
    }

    // Add a brief burst animation to the card.
    cardElement.classList.add('explosive-animation');
    setTimeout(() => {
      cardElement.classList.remove('explosive-animation');
      cardElement.style.animation = '';
    }, 1000);

    // Add glow effect
    this.addGlowEffect(cardElement);
    setTimeout(() => this.removeGlowEffect(cardElement), 2000);
  }

  triggerSleep(card: any): void {
    const cardElement = card as HTMLElement | null;
    if (!cardElement) return;
    const sleepyFace = cardElement.querySelector('.sleepy-eyes') as HTMLElement;
    sleepyFace.classList.add('blink');

    // Add gentle glow effect
    this.addGlowEffect(cardElement);

    setTimeout(() => {
      sleepyFace.textContent = '😪';
      sleepyFace.classList.remove('blink');
    }, 300);

    setTimeout(() => {
      sleepyFace.textContent = '💤';
      // Add floating Z's
      this.createFloatingZ(cardElement);
    }, 1000);

    setTimeout(() => {
      sleepyFace.textContent = '😴';
    }, 2000);

    setTimeout(() => {
      this.removeGlowEffect(cardElement);
    }, 3000);
  }

  private createFloatingZ(card: HTMLElement): void {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const z = document.createElement('div');
        z.textContent = '💤';
        z.style.position = 'absolute';
        z.style.fontSize = '2rem';
        z.style.left = Math.random() * 80 + 10 + '%';
        z.style.top = Math.random() * 60 + 20 + '%';
        z.style.opacity = '0.7';
        z.style.animation = 'float 2s ease-in-out infinite';
        z.style.pointerEvents = 'none';
        z.style.zIndex = '1000';
        
        card.appendChild(z);
        setTimeout(() => z.remove(), 3000);
      }, i * 200);
    }
  }

  triggerCuddles(card: any): void {
    const cardElement = card as HTMLElement | null;
    if (!cardElement) return;
    const hearts = ['💖', '💕', '💗', '💝', '💘', '💞', '🍰', '🎂', '🧁'];

    // Add glow effect
    this.addGlowEffect(cardElement);

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'snack-rain';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 1 + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        cardElement.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
      }, i * 100);
    }

    const cuddleEmoji = cardElement.querySelector('#cuddleEmoji') as HTMLElement;
    cuddleEmoji.textContent = '🥰';
    cuddleEmoji.style.animation = 'heartbeat 0.5s ease-in-out 3';
    
    setTimeout(() => {
      cuddleEmoji.textContent = '🤗';
      cuddleEmoji.style.animation = 'bounce 0.5s ease-in-out 2';
    }, 1500);

    setTimeout(() => {
      this.removeGlowEffect(cardElement);
    }, 3000);
  }

  triggerPlay(card: any): void {
    const cardElement = card as HTMLElement | null;
    if (!cardElement) return;
    const playEmoji = cardElement.querySelector('#playEmoji') as HTMLElement;
    const playSequence = ['🎮', '🎯', '🎪', '🎨', '🎭', '🎮', '🍰', '🎂'];

    // Add glow effect
    this.addGlowEffect(cardElement);

    playSequence.forEach((emoji, index) => {
      setTimeout(() => {
        playEmoji.textContent = emoji;
        playEmoji.style.animation = 'wiggle 0.3s ease-in-out';
      }, index * 200);
    });

    cardElement.style.animation = 'bounce 0.5s ease-in-out 3';
    setTimeout(() => {
      cardElement.style.animation = '';
      this.removeGlowEffect(cardElement);
    }, 2000);
  }

  triggerGentle(card: any): void {
    const cardElement = card as HTMLElement | null;
    if (!cardElement) return;
    const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🍰', '🎂', '🧁'];

    // Add gentle glow effect
    this.addGlowEffect(cardElement);

    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const flower = document.createElement('div');
        flower.className = 'snack-rain';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 1 + 's';
        flower.style.fontSize = (Math.random() * 8 + 12) + 'px';
        cardElement.appendChild(flower);

        setTimeout(() => flower.remove(), 3000);
      }, i * 150);
    }

    setTimeout(() => {
      this.removeGlowEffect(cardElement);
    }, 3000);
  }

  triggerSpecial(card: any): void {
    const cardElement = card as HTMLElement | null;
    if (!cardElement) return;
    const sparkles = ['✨', '⭐', '🌟', '💫', '⚡', '🎆', '🍰', '🎂', '🧁', '💎'];

    // Add special glow effect
    this.addGlowEffect(cardElement);

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'snack-rain';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 1 + 's';
        sparkle.style.fontSize = (Math.random() * 12 + 18) + 'px';
        cardElement.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
      }, i * 80);
    }

    // Enhanced golden glow effect
    cardElement.style.boxShadow = '0 0 40px gold, 0 0 80px rgba(255, 215, 0, 0.3)';
    cardElement.style.animation = 'pulse-glow 1s ease-in-out 3';
    
    setTimeout(() => {
      cardElement.style.boxShadow = '';
      cardElement.style.animation = '';
      this.removeGlowEffect(cardElement);
    }, 3000);
  }

  celebrateAll(event: Event): void {
    const cards = document.querySelectorAll('.panda-card') as NodeListOf<HTMLElement>;
    
    // Create a grand celebration effect
    this.createGrandCelebration();
    
    cards.forEach((card, index) => {
      setTimeout(() => {
        if (index === 0) this.triggerExplosiveBurst(card);
        else if (index === 1) this.triggerSleep(card);
        else if (index === 2) this.triggerCuddles(card);
        else if (index === 3) this.triggerPlay(card);
        else if (index === 4) this.triggerGentle(card);
        else if (index === 5) this.triggerSpecial(card);
      }, index * 400);
    });

    const button = event.target as HTMLElement;
    button.textContent = '🎊 PANDA PARTY! 🎊';
    button.classList.add('bounce-animation');
    button.style.animation = 'pulse-glow 0.5s ease-in-out 6';

    // Add screen-wide confetti
    this.createScreenConfetti();

    setTimeout(() => {
      button.textContent = '🎉 Celebrate Our Panda Friend! 🎉';
      button.classList.remove('bounce-animation');
      button.style.animation = '';
    }, 4000);
  }

  private createGrandCelebration(): void {
    const celebrationEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '🍰', '🎂', '🧁', '🍩', '🍪', '🍭'];
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.textContent = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = 'fall 4s linear forwards';
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
      }, i * 50);
    }
  }

  private createScreenConfetti(): void {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = 'fall 3s linear forwards';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }, i * 30);
    }
  }
}

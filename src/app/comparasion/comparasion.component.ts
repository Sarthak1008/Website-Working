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
  friendName: string = 'shivani';

  updateName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.friendName = input.value || 'shivani';
  }

  // Replaced triggerSnackRain with a new explosive burst effect for interactivity.
  triggerExplosiveBurst(card: HTMLElement): void {
    const emojis = ['💥', '✨', '🎉'];
    const numPieces = 25;

    // Make sure the card is relatively positioned.
    card.style.position = 'relative';

    for (let i = 0; i < numPieces; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'absolute';
        confetti.style.top = '50%';
        confetti.style.left = '50%';

        // Generate random angle and distance for explosion.
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 150 + 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        confetti.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        confetti.style.opacity = '1';
        confetti.style.transition = 'transform 1s ease-out, opacity 1s ease-out';

        card.appendChild(confetti);
        // Fade out and remove the element.
        setTimeout(() => {
          confetti.style.opacity = '0';
          setTimeout(() => confetti.remove(), 1000);
        }, 50);
      }, i * 20);
    }

    // Add a brief burst animation to the card.
    card.classList.add('explosive-animation');
    setTimeout(() => card.classList.remove('explosive-animation'), 1000);
  }

  triggerSleep(card: HTMLElement): void {
    const sleepyFace = card.querySelector('.sleepy-eyes') as HTMLElement;
    sleepyFace.classList.add('blink');

    setTimeout(() => {
      sleepyFace.textContent = '😪';
      sleepyFace.classList.remove('blink');
    }, 300);

    setTimeout(() => {
      sleepyFace.textContent = '💤';
    }, 1000);

    setTimeout(() => {
      sleepyFace.textContent = '😴';
    }, 2000);
  }

  triggerCuddles(card: HTMLElement): void {
    const hearts = ['💖', '💕', '💗', '💝', '💘', '💞'];

    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'snack-rain';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 1 + 's';
        card.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
      }, i * 150);
    }

    const cuddleEmoji = card.querySelector('#cuddleEmoji') as HTMLElement;
    cuddleEmoji.textContent = '🥰';
    setTimeout(() => cuddleEmoji.textContent = '🤗', 1500);
  }

  triggerPlay(card: HTMLElement): void {
    const playEmoji = card.querySelector('#playEmoji') as HTMLElement;
    const playSequence = ['🎮', '🎯', '🎪', '🎨', '🎭', '🎮'];

    playSequence.forEach((emoji, index) => {
      setTimeout(() => {
        playEmoji.textContent = emoji;
      }, index * 300);
    });

    card.style.animation = 'bounce 0.5s ease-in-out 3';
    setTimeout(() => card.style.animation = '', 1500);
  }

  triggerGentle(card: HTMLElement): void {
    const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼'];

    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const flower = document.createElement('div');
        flower.className = 'snack-rain';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 1 + 's';
        card.appendChild(flower);

        setTimeout(() => flower.remove(), 3000);
      }, i * 200);
    }
  }

  triggerSpecial(card: HTMLElement): void {
    const sparkles = ['✨', '⭐', '🌟', '💫', '⚡', '🎆'];

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'snack-rain';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 1 + 's';
        card.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
      }, i * 100);
    }

    card.style.boxShadow = '0 0 30px gold';
    setTimeout(() => card.style.boxShadow = '', 2000);
  }

  celebrateAll(event: Event): void {
    const cards = document.querySelectorAll('.panda-card') as NodeListOf<HTMLElement>;
    cards.forEach((card, index) => {
      setTimeout(() => {
        if (index === 0) this.triggerExplosiveBurst(card);
        else if (index === 1) this.triggerSleep(card);
        else if (index === 2) this.triggerCuddles(card);
        else if (index === 3) this.triggerPlay(card);
        else if (index === 4) this.triggerGentle(card);
        else if (index === 5) this.triggerSpecial(card);
      }, index * 500);
    });

    const button = event.target as HTMLElement;
    button.textContent = '🎊 PANDA PARTY! 🎊';
    button.classList.add('bounce-animation');

    setTimeout(() => {
      button.textContent = '🎉 Celebrate Our Panda Friend! 🎉';
      button.classList.remove('bounce-animation');
    }, 3000);
  }
}

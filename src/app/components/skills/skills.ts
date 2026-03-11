import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private sanitizer = inject(DomSanitizer);

  skills = signal<{ title: string; description: string; icon: SafeHtml }[]>([
    {
      title: 'Product Development',
      description:
        'Crafting reactive and scalable web applications with Angular, React, and Vue. Specialized in building seamless cross-platform mobile experiences using Flutter.',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="48" height="48" rx="8" stroke="#2d2d2d" stroke-width="3"/>
        <circle cx="32" cy="32" r="10" stroke="#2d2d2d" stroke-width="3"/>
        <line x1="32" y1="8" x2="32" y2="22" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
        <line x1="32" y1="42" x2="32" y2="56" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
        <line x1="8" y1="32" x2="22" y2="32" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
        <line x1="42" y1="32" x2="56" y2="32" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
      </svg>`),
    },
    {
      title: 'Front End Skills',
      description:
        'Building web solutions since 2018, from lightweight landing pages to robust corporate software. Focused on delivering high-quality, scalable code powered by the JavaScript ecosystem.',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8 L56 48 H8 Z" stroke="#2d2d2d" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="32" cy="38" r="6" fill="#2d2d2d"/>
      </svg>`),
    },
    {
      title: 'Using Ai as a collaborator',
      description: `Embracing the future of AI-driven development. I integrate AI as a core collaborator in my workflow to optimize efficiency, automate tasks, and deliver smarter software solutions.`,
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" stroke="#2d2d2d" stroke-width="3"/>
        <path d="M20 32 Q26 20 32 32 Q38 44 44 32" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`),
    },
  ]);
}

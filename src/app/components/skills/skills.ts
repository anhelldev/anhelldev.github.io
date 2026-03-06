import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private sanitizer = inject(DomSanitizer);

  skills: { title: string; description: string; icon: SafeHtml }[] = [
    {
      title: 'Product Design',
      description: 'End-to-end product design from wireframes to polished, developer-ready UI that solves real user problems.',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="48" height="48" rx="8" stroke="#2d2d2d" stroke-width="3"/>
        <circle cx="32" cy="32" r="10" stroke="#2d2d2d" stroke-width="3"/>
        <line x1="32" y1="8" x2="32" y2="22" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
        <line x1="32" y1="42" x2="32" y2="56" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
        <line x1="8" y1="32" x2="22" y2="32" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
        <line x1="42" y1="32" x2="56" y2="32" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round"/>
      </svg>`),
    },
    {
      title: 'Visual Design',
      description: 'Crafting compelling visual systems, typography hierarchies, and color palettes that resonate with your audience.',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8 L56 48 H8 Z" stroke="#2d2d2d" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="32" cy="38" r="6" fill="#2d2d2d"/>
      </svg>`),
    },
    {
      title: 'Art Direction',
      description: 'Guiding creative vision across campaigns and brand touchpoints to build a cohesive, memorable identity.',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" stroke="#2d2d2d" stroke-width="3"/>
        <path d="M20 32 Q26 20 32 32 Q38 44 44 32" stroke="#2d2d2d" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`),
    },
  ];
}

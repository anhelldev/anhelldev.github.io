import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  projects = [
    { title: 'Brand Identity System', tags: 'Branding, Visual Design', color: '#e8e0f0' },
    { title: 'Mobile Banking App', tags: 'UI, Product Design', color: '#dff0e8' },
    { title: 'E-commerce Redesign', tags: 'UI, Art Direction', color: '#f0e8df' },
    { title: 'SaaS Dashboard', tags: 'UI, Product Design', color: '#dfe8f0' },
    { title: 'Campaign Visuals', tags: 'Branding, Art Direction', color: '#f0dfdf' },
    { title: 'Design System', tags: 'UI, Visual Design', color: '#f0f0df' },
  ];
}

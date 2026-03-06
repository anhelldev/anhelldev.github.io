import { Component } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      role: 'Senior Visual Designer',
      company: 'Acme Studio',
      period: '2023 — Present',
      location: 'San Francisco, CA',
      description:
        'Leading the visual design direction across brand and product. Collaborated with PMs and engineers to ship a full rebrand and new design system adopted by a team of 30+.',
      skills: ['Brand Identity', 'Design Systems', 'Figma', 'Art Direction'],
      current: true,
    },
    {
      role: 'Product Designer',
      company: 'Bright Labs',
      period: '2021 — 2023',
      location: 'Remote',
      description:
        'Owned end-to-end design for three core product areas. Ran user research, created wireframes through high-fidelity prototypes, and launched features used by 200k+ users.',
      skills: ['UX Research', 'Prototyping', 'User Testing', 'Figma'],
    },
    {
      role: 'UI/UX Designer',
      company: 'Pixel & Co.',
      period: '2019 — 2021',
      location: 'New York, NY',
      description:
        'Designed interfaces for clients across fintech, health, and e-commerce. Delivered pixel-perfect handoffs and worked closely with dev teams using agile workflows.',
      skills: ['UI Design', 'Responsive Design', 'Sketch', 'InVision'],
    },
    {
      role: 'Junior Designer',
      company: 'Creative Dept.',
      period: '2017 — 2019',
      location: 'New York, NY',
      description:
        'Started as a generalist covering print, social media, and early digital product work. Grew into a focused product design role within the first year.',
      skills: ['Visual Design', 'Typography', 'Adobe CC', 'Branding'],
    },
  ];
}

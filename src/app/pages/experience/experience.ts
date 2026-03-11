import { Component, signal } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  mainFeatures?: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = signal<ExperienceItem[]>([
    {
      role: 'Senior Frontend Developer',
      company: 'Fluvip',
      period: '2023 — 2026',
      location: 'Remote',
      mainFeatures: [
        'Architected, developed, and maintained scalable enterprise web applications using Angular 15+, applying modern frontend architecture patterns to ensure performance, maintainability, and long-term scalability.',
        'Spearheaded Angular version migrations across legacy codebases, enhancing application security, optimizing performance, and reducing technical debt.',
        'Partnered closely with designers, product managers, and backend teams to translate business requirements into seamless, high-quality UI/UX experiences.',
        'Mentored and coached junior developers, promoting best practices in clean code, code reviews, performance optimization, and advanced Angular development techniques.',
      ],
      description:
        'Leading the frontend development for Fluvip, a company that leds the marketing influencer industry in Latam, Collaborate with the PM, CTO, and Software Lead to create a new platform for the componay',
      skills: ['Angular', 'GraphQL', 'Apollo GraphQL', 'RXJs', 'Signals', 'Streams', 'Jest', 'Mentoring'],
      current: false,
    },
    {
      role: 'Freelance',
      company: 'Upwork Contracts',
      period: '2020 — Present',
      location: 'Remote',
      mainFeatures: [
        'Created and maintained scalable enterprise web applications using Angular 15+, applying modern frontend architecture patterns to ensure performance, maintainability, and long-term scalability.',
        'Fixed bugs and improved performance of existing applications.',
        'Collaborated with clients to understand their needs and translate them into technical requirements.',
        'Developed new features and improvements based on client requirements.',
      ],
      description:
        'Leading the frontend development for Fluvip, a company that leds the marketing influencer industry in Latam, Collaborate with the PM, CTO, and Software Lead to create a new platform for the componay',
      skills: [
        'Angular',
        'React',
        'Vue',
        'Ionic',
        'GraphQL',
        'Apollo GraphQL',
        'RXJS',
        'Vue',
        'Wordpress',
        'Three.js',
        'Tailwind CSS',
        'Bootstrap',
        'Css Animation',
      ],
      current: false,
    },
    {
      role: 'Senior Developer',
      company: 'Quik',
      period: '2022 — 2023',
      location: 'Maracaibo, Venezuela',
      mainFeatures: [
        `Led development of two core Flutter mobile applications, owning the implementation of key features, new user interfaces, and the launch of Quik Go, a ridesharing functionality integrated into the main platform.`,
        `Conducted thorough code reviews, validated pull requests, and supervised commits from Flutter and Angular teams to ensure high code quality and consistency.`,
        `Collaborated with the product owner to analyze requirements, define technical solutions, and provide accurate time estimations for new features.`,
        `Resolved cross-platform issues, managed build processes, and configured iOS project deployments, publishing applications to the App Store and Google Play.`,
        `Developed backend features using Firebase Cloud Functions with Node.js and Express, extending platform capabilities and supporting mobile app integrations.`,
      ],
      description:
        'Led the development of two core Flutter mobile applications, owning the implementation of key features, new user interfaces, and the launch of Quik Go, a ridesharing functionality integrated into the main platform.',
      skills: ['Flutter', 'Dart', 'Firebase', 'Angular', 'Node.js', 'Express', 'Git', 'Agile'],
    },
    {
      role: 'Mobile Developer',
      company: 'BOITAS',
      period: '2021 — 2022',
      location: 'Remote',
      mainFeatures: [
        'Developed and enhanced a Rider mobile application, implementing end-to-end delivery tracking and multi-step workflow processes to ensure a smooth operational flow.',
        'Integrated secure external authentication using OAuth within WebView components, ensuring safe and seamless user access.',
        'Connected the mobile app to a GraphQL backend, enabling efficient data fetching, real-time updates, and optimized performance.',
        'Implemented new features and improvements in the web application, enhancing usability and aligning functionality with business requirements.',
      ],
      description:
        'Created and enhanced a Rider mobile application, implementing end-to-end delivery tracking and multi-step workflow processes to ensure a smooth operational flow.',
      skills: ['Ionic', 'Angular', 'GraphQL', 'OAuth', 'JWT', 'Agile'],
    },
    {
      role: 'Full Stack Developer',
      company: 'DLDS',
      period: '2021 — 2021',
      location: 'Remote',
      mainFeatures: [
        'Developed and implemented new features in the main Angular application, creating reusable modules and integrating frontend components seamlessly with backend services.',
        'Enhanced the user interface by incorporating advanced charting and graphical libraries to deliver dynamic,data-driven visualizations.',
        'Designed and implemented new backend endpoints using NestJS and Node.js, working with MySQL andMongoDB to support scalable and efficient data management.',
        'Built and maintained integrations with external APIs, ensuring reliable data exchange and system interoperability.',
      ],
      description:
        'Led the development of a new Angular application, incorporating advanced charting and graphical libraries to deliver dynamic, data-driven visualizations, and designed and implemented new backend endpoints using NestJS and Node.js, working with MySQL andMongoDB to support scalable and efficient data management.',
      skills: ['Angular', 'NestJS', 'Node.js', 'MySQL', 'MongoDB', 'Agile'],
    },
    {
      role: 'Full Stack Developer',
      company: 'LINNKR',
      period: '2020 — 2021',
      location: 'Remote',
      mainFeatures: [
        'Developed and delivered new features in the main Angular application, leveraging RxJS to manage reactive data flows and ensure efficient communication between components.',
        'Designed and implemented reusable services, APIs, and custom pipes to improve modularity, maintainability, and application performance.',
        'Built and integrated new backend API services using Node.js and NestJS, enabling seamless frontend-backend communication and scalable system architecture.',
      ],
      description: '',
      skills: ['Angular', 'NestJS', 'Node.js', 'MySQL', 'MongoDB', 'Agile'],
    },
    {
      role: 'Frontend Developer',
      company: 'Intelenz',
      period: '2018 — 2020',
      location: 'Maracaibo, Venezuela',
      mainFeatures: [
        'Implemented new features in the core Angular application, utilizing RxJS to manage reactive data streams and optimize component communication.',
        'Integrated new APIs and developed data-driven functionalities, including dashboards, dynamic forms, and enhanced backend interactions.',
        'Translated UI/UX designs into responsive, high-quality frontend implementations, delivering new features aligned with business and product requirements.',
      ],
      description: '',
      skills: ['Angular', 'NestJS', 'Node.js', 'MySQL', 'MongoDB', 'Agile'],
    },
  ]);
}

import { Component, signal } from '@angular/core';
import { PROJECTS, ProjectData } from '../../data/projects.data';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  projects = signal<ProjectData[]>(PROJECTS);
}

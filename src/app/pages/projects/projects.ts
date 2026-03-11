import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS, ProjectData } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  featured = signal<ProjectData[]>(PROJECTS);
  projects = signal<ProjectData[]>(PROJECTS.slice(2));
}

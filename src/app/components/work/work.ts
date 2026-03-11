import { Component, signal } from '@angular/core';
import { PROJECTS, ProjectData } from '../../data/projects.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work',
  imports: [RouterLink],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  projects = signal<ProjectData[]>(PROJECTS);
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS, ProjectData } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  featured: ProjectData[] = PROJECTS.slice(0, 2);
  projects: ProjectData[] = PROJECTS.slice(2);
}

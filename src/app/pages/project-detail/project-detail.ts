import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectData, getNextProject, getProjectById } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  project: ProjectData | undefined;
  nextProject: ProjectData | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.project = getProjectById(id);
      this.nextProject = getNextProject(id);
      if (!this.project) this.router.navigate(['/projects']);
    });
  }
}

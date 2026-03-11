import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProjectData, getNextProject, getProjectById } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), {
    initialValue: '',
  });

  project = computed<ProjectData | undefined>(() => getProjectById(this.id()));
  nextProject = computed<ProjectData | undefined>(() => getNextProject(this.id()));

  constructor() {
    effect(() => {
      if (this.id() && !this.project()) {
        this.router.navigate(['/projects']);
      }
    });
  }
}

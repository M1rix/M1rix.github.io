import { Component, input } from '@angular/core';

import { PortfolioProject } from '../../../core/models/project.models';

@Component({
  selector: 'mx-project-visual',
  standalone: true,
  styleUrl: './project-visual.component.scss',
  template: `
    <div class="project-visual" [attr.data-accent]="project().accent" [attr.data-project]="project().slug">
      <div class="visual-frame">
        <div class="visual-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="visual-body">
          @switch (project().slug) {
            @case ('hostplanner') {
              <div class="floor-layout">
                @for (item of tiles; track item) {
                  <span></span>
                }
              </div>
            }
            @case ('reportix') {
              <div class="report-stack">
                @for (item of [1, 2, 3]; track item) {
                  <span></span>
                }
              </div>
            }
            @case ('team-devkit') {
              <div class="installer-list">
                @for (item of ['Git', 'Docker', 'Java', 'Node']; track item) {
                  <span>{{ item }}</span>
                }
              </div>
            }
            @case ('jhipster-template-migration') {
              <div class="migration-map">
                <span>generated</span>
                <span>custom</span>
                <span>stable</span>
              </div>
            }
            @case ('rift-party') {
              <div class="game-map">
                <i></i>
                <i></i>
                <i></i>
              </div>
            }
            @default {
              <div class="admin-preview">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            }
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectVisualComponent {
  readonly project = input.required<PortfolioProject>();
  readonly tiles = Array.from({ length: 9 }, (_, index) => index);
}

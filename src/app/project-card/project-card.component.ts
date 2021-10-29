import { Component, Input, OnInit } from '@angular/core';
import { project } from '../projects/projects.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: project;

  constructor() {}

  ngOnInit(): void {}

  adaptColor(tag: string): string {
    if (tag === 'Data Science') {
      return 'rgb(221, 159, 226)';
    } else if (tag === 'Teaching') {
      return 'rgb(178, 146, 230)';
    } else {
      return 'rgb(141, 147, 241)';
    }
  }
}

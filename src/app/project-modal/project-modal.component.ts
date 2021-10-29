import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { project } from '../projects/projects.component';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit {
  @Input() project: project;
  @Output()
  closingEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.closingEmitter.emit();
  }

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

import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
/*export interface tag {
  text: string;
  color: string;
}*/

/*export const MYTAGS: tag[] = [
  {
    text: 'Data Science',
    clicked: false,
    styleDefault: 'DS',
    styleClicked: 'DS-Clicked',
  },
  {
    text: 'Teaching',
    clicked: false,
    styleDefault: 'T',
    styleClicked: 'T-Clicked',
  },
  {
    text: 'Work in Progress',
    clicked: false,
    styleDefault: 'WIP',
    styleClicked: 'WIP-Clicked',
  },
];
*/
export const MYTAGS = [
  { text: 'Data Science', clicked: false, style: 'button' },
  { text: 'Teaching', clicked: false, style: 'button' },
  { text: 'Work in Progress', clicked: false, style: 'button' },
];

export interface project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export const PROJECT_LIST = [
  {
    title: 'Title 1',
    description: 'description 1',
    link: '',
    tags: ['Data Science', 'Work in Progress'],
  },
  {
    title: 'Title 2',
    description: 'description 2',
    link: '',
    tags: ['Teaching', 'Work in Progress'],
  },
  {
    title: 'Title 3',
    description: 'description 3',
    link: '',
    tags: ['Teaching'],
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  /*animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
    ]),
  ],*/
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  mytags = MYTAGS;
  userTags = [];
  userProjectList: project[];
  activeModal = false;
  clickedProject: project;
  //btnStyle = 'btn-default';

  ngOnInit(): void {
    this.userProjectList = PROJECT_LIST;
  }

  selectUserTags(tag: string): void {
    if (this.userTags.indexOf(tag) > -1) {
      this.userTags.splice(this.userTags.indexOf(tag), 1);
      for (var i = 0; i < this.mytags.length; i++) {
        if (this.mytags[i].text === tag) {
          this.mytags[i].clicked = false;
          this.mytags[i].style = 'button';
        }
      }
      //unclick
    } else {
      this.userTags.push(tag);
      for (var i = 0; i < this.mytags.length; i++) {
        if (this.mytags[i].text === tag) {
          this.mytags[i].clicked = true;
          this.mytags[i].style = 'buttonclicked';
        }
      }
      //clicked
    }
    this.updateProjectList();
    console.log(this.userTags);
  }
  updateProjectList(): void {
    //updating available projects
    this.userProjectList = [];
    for (const project of PROJECT_LIST) {
      let check = true;
      //console.log(project);
      for (var i = 0; i < this.userTags.length; i++) {
        //console.log(this.userTags[i]);
        //console.log(this.userTags[i], project.tags);
        //console.log(this.userTags[i] in project.tags);
        if (!project.tags.includes(this.userTags[i])) {
          console.log(false);
          check = false;
          //console.log(!(this.userTags[i] in project.tags));
        }
      }
      if (check === true) {
        this.userProjectList.push(project);
      }
    }
  }
  openModal(p: project): void {
    this.activeModal = true;
    this.clickedProject = p;
    console.log('open modal');
  }

  closeModal(): void {
    this.activeModal = false;
    console.log('close modal');
  }
}

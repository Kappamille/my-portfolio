import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  redirect(to: string): void {
    if (to === 'github') {
      window.location.href = 'https://github.com/Kappamille';
    } else if (to === 'mail') {
      window.location.href = 'mailto:camille.duquesne@cri-paris.org';
    } else if (to === 'kaggle') {
      window.location.href = 'https://www.kaggle.com/kappamille';
    } else if (to === 'linkedin') {
      window.location.href = 'https://www.linkedin.com/in/camilleduquesne/';
    } else if (to === 'stackoverflow') {
      window.location.href =
        'https://stackoverflow.com/users/15514721/kappamille';
    }
  }
}

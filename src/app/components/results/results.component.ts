import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  constructor(public profileService: ProfileService) {}
  name: string = '';
  ngOnInit(): void {
    this.name = this.profileService.name;
  }
}

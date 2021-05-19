import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  constructor(public profileService: ProfileService) {}
  name: string = '';
  ngOnInit(): void {}
  passName() {
    this.profileService.name = this.name;
  }
}

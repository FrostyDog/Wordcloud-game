import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(public profileService: ProfileService) {}

  name: string = '';

  passName() {
    this.profileService.name = this.name;
  }
}

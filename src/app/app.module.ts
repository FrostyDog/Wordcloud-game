import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { GameComponent } from './components/game/game.component';
import { ResultsComponent } from './components/results/results.component';
import { ProfileService } from './services/profile.service';
import { WordsService } from './services/words.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LogInComponent, GameComponent, ResultsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [ProfileService, WordsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

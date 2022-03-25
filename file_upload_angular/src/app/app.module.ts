import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndDirective } from './direcitves/dnd.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { UploadService } from './services/upload.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }

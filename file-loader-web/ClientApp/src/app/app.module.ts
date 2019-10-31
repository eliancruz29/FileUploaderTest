import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { UploaderFileComponent } from './components/uploader-file/uploader-file.component';
import { FilesViewerComponent } from './components/files-viewer/files-viewer.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { AlertComponent } from './widgets/alert/alert.component';
import { LoadingComponent } from './widgets/loading/loading.component';
import { TableComponent } from './widgets/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    UploaderFileComponent,
    FilesViewerComponent,
    BytesPipe,
    AlertComponent,
    LoadingComponent,
    TableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

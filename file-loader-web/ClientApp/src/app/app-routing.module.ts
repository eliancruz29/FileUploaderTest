import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploaderFileComponent } from './components/uploader-file/uploader-file.component';
import { FilesViewerComponent } from './components/files-viewer/files-viewer.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'upload-page'
    },
    {
        path: 'upload-page',
        component: UploaderFileComponent
    },
    {
        path: 'view-page',
        component: FilesViewerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }

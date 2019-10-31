import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UploaderFileComponent } from './uploader-file/uploader-file.component';

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
        component: FetchDataComponent
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

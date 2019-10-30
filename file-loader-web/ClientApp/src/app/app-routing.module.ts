import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'upload-page'
    },
    {
        path: 'upload-page',
        component: CounterComponent
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

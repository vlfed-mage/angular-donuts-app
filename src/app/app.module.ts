import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleModule } from './example/example.module';
import { RouterModule, Routes } from '@angular/router';

import { ExampleListComponent } from './example/containers/example-list/example-list.component';
import { ExampleSingleComponent } from './example/containers/example-single/example-single.component';

export const routes: Routes = [
    {
        path: 'admin',
        children: [
            { path: 'donuts', component: ExampleListComponent },
            { path: 'donut', component: ExampleSingleComponent },
            { path: '', pathMatch: 'full', redirectTo: 'donuts' },
        ],
    },
    {
        path: '',
        pathMatch: 'full', // full matching ('prefix' | 'full')
        redirectTo: 'admin',
    },
    {
        path: '**', // any not found path
        redirectTo: 'admin',
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes), ExampleModule],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'example',
        loadChildren: () =>
            import('./example/example.module').then(x => x.ExampleModule), // lazy-loading
    },
    {
        path: '',
        pathMatch: 'full', // full matching ('prefix' | 'full')
        redirectTo: 'example',
    },
    {
        path: '**', // any not found path
        redirectTo: 'example',
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent],
})
export class AppModule {}

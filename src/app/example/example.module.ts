// ng g module admin --module=app.module from terminal for creating

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// need for using #form="ngForm" in example-form.component.ts
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { ExampleListComponent } from './containers/example-list/example-list.component';
import { ExampleSingleComponent } from './containers/example-single/example-single.component';

// components
import { ExampleCardComponent } from './components/example-card/example-card.component';
import { ExampleFormComponent } from './components/example-form/example-form.component';

export const routes: Routes = [
    { path: 'donuts', component: ExampleListComponent },
    {
        path: 'donuts/new',
        component: ExampleSingleComponent,
        data: { isEdit: false },
    },
    {
        path: 'donuts/:id',
        component: ExampleSingleComponent,
        data: { isEdit: true },
    },
    { path: '', pathMatch: 'full', redirectTo: 'donuts' },
];

@NgModule({
    declarations: [
        ExampleListComponent,
        ExampleCardComponent,
        ExampleSingleComponent,
        ExampleFormComponent,
    ],
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [ExampleListComponent, ExampleSingleComponent],
})
export class ExampleModule {}

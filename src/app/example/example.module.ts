// ng g module admin --module=app.module from terminal for creating

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { ExampleListComponent } from './containers/example-list/example-list.component';
import { ExampleSingleComponent } from './containers/example-single/example-single.component';

// components
import { ExampleCardComponent } from './components/example-card/example-card.component';
import { ExampleFormComponent } from './components/example-form/example-form.component';

@NgModule({
    declarations: [
        ExampleListComponent,
        ExampleCardComponent,
        ExampleSingleComponent,
        ExampleFormComponent,
    ],
    imports: [CommonModule],
    exports: [ExampleListComponent, ExampleSingleComponent],
})
export class ExampleModule {}

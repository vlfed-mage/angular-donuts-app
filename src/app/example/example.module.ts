// ng g module admin --module=app.module from terminal for creating

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleListComponent } from './containers/example-list/example-list.component';
import { ExampleCardComponent } from './components/example-card/example-card.component';

@NgModule({
    declarations: [ExampleListComponent, ExampleCardComponent],
    imports: [CommonModule],
    exports: [ExampleListComponent, ExampleCardComponent],
})
export class ExampleModule {}

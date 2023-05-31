// ng g module admin --module=app.module from terminal for creating

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutCardComponent } from './components/donut-card/donut-card.component';

@NgModule({
    declarations: [DonutListComponent, DonutCardComponent],
    imports: [CommonModule],
    exports: [DonutListComponent, DonutCardComponent],
})
export class AdminModule {}

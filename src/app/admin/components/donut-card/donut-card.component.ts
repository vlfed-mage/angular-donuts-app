// ng generate component admin/components/donut-card

import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
    selector: 'donut-card',
    template: `
        <div class="donut-card">
            <!-- JsonPipe -->
            <!-- <p>{{ donut | json }}</p>-->
            <!-- -->
            <img
                src="assets/img/{{ donut.icon }}.svg"
                [alt]="donut.name"
                class="donut-card-icon" />
            <p class="donut-card-name">
                {{ donut.name }}
            </p>
            <p class="donut-card-price">
                {{ donut.price }}
            </p>
        </div>
    `,
    styles: [],
})
export class DonutCardComponent {
    @Input() donut!: Donut;
}

// ng generate component admin/containers/example-single

// smart container

import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/example.model';

@Component({
    selector: 'example-single',
    template: `
        <div>
            <example-form
                [donut]="donut"
                (create)="onCreate($event)"></example-form>
        </div>
    `,
    styles: [],
})
export class ExampleSingleComponent implements OnInit {
    donut!: Donut;

    ngOnInit() {
        this.donut = {
            id: 'y8z0As',
            name: 'Just Chocolate',
            icon: 'just-chocolate',
            price: 119,
            promo: 'limited',
            description: 'For the pure chocoholic.',
        };
    }

    onCreate(donut: Donut) {
        console.log('onCreate', donut);
    }
}

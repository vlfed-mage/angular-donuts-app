// ng generate component admin/containers/example-single

// smart container

import { Component } from '@angular/core';
import { Donut } from '../../models/example.model';

@Component({
    selector: 'example-single',
    template: `
        <div>
            <example-form (create)="onCreate($event)"></example-form>
        </div>
    `,
    styles: [],
})
export class ExampleSingleComponent {
    onCreate(donut: Donut) {
        console.log('onCreate', donut);
    }
}

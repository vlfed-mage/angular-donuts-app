// ng generate component admin/containers/example-single

// smart container

import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/example.model';
import { ExampleService } from '../../services/example.service';

@Component({
    selector: 'example-single',
    template: `
        <div>
            <example-form
                [donut]="donut"
                (create)="onCreate($event)"
                (update)="onUpdate($event)"
                (delete)="onDelete($event)">
            </example-form>
        </div>
    `,
    styles: [],
})
export class ExampleSingleComponent implements OnInit {
    donut!: Donut;

    constructor(private exampleService: ExampleService) {}

    ngOnInit() {
        // this.donut = this.exampleService.readOne('ae098s');
    }

    onCreate(donut: Donut) {
        this.exampleService.create(donut);
    }

    onUpdate(donut: Donut) {
        this.exampleService.update(donut);
    }

    onDelete(donut: Donut) {
        this.exampleService.delete(donut);
    }
}

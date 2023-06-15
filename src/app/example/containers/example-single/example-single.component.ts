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
        this.exampleService
            .readOne('xxx')
            .subscribe((donut: Donut) => (this.donut = donut));
    }

    onCreate(donut: Donut) {
        this.exampleService
            .create(donut)
            .subscribe(() => console.log('Successfully created!'));
    }

    onUpdate(donut: Donut) {
        this.exampleService.update(donut);
    }

    onDelete(donut: Donut) {
        this.exampleService.delete(donut);
    }
}

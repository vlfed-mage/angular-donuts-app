// ng generate component admin/containers/example-single

// smart container

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor(
        private route: ActivatedRoute,
        private exampleService: ExampleService
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');

        this.exampleService
            .readOne(id)
            .subscribe((donut: Donut) => (this.donut = donut));
    }

    onCreate(donut: Donut) {
        this.exampleService
            .create(donut)
            .subscribe(() => console.log('Successfully created!'));
    }

    onUpdate(donut: Donut) {
        this.exampleService.update(donut).subscribe({
            next: () => console.log('Successfully updated!'),
            error: err => console.log('onUpdate error', err),
        });
    }

    onDelete(donut: Donut) {
        this.exampleService
            .delete(donut)
            .subscribe(() => console.log('Successfully deleted!'));
    }
}

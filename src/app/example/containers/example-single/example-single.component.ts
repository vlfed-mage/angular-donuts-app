// ng generate component admin/containers/example-single

// smart container

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Donut } from '../../models/example.model';

import { ExampleService } from '../../services/example.service';

@Component({
    selector: 'example-single',
    template: `
        <div>
            <example-form
                [donut]="donut"
                [isEdit]="isEdit"
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
    isEdit!: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private exampleService: ExampleService
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');

        this.exampleService
            .readOne(id)
            .subscribe((donut: Donut) => (this.donut = donut));

        this.isEdit = this.route.snapshot.data['isEdit'];
    }

    onCreate(donut: Donut) {
        this.exampleService
            .create(donut)
            .subscribe(donut =>
                this.router.navigate(['example', 'donuts', donut.id])
            );
    }

    onUpdate(donut: Donut) {
        this.exampleService.update(donut).subscribe({
            next: () => this.router.navigate(['example']),
            error: err => console.log('onUpdate error', err),
        });
    }

    onDelete(donut: Donut) {
        this.exampleService
            .delete(donut)
            .subscribe(() => this.router.navigate(['example']));
    }
}

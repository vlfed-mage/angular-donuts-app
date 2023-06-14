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
                (create)="onCreate($event)"></example-form>
        </div>
    `,
    styles: [],
})
export class ExampleSingleComponent implements OnInit {
    donut!: Donut;

    constructor(private exampleService: ExampleService) {}

    ngOnInit() {
        const id = '3u98Kl';
        this.donut = this.exampleService.donuts.find(
            (donut: Donut) => donut.id === id
        ) || { name: '', icon: '', price: 0, description: '' };
    }

    onCreate(donut: Donut) {
        console.log('onCreate', donut);
    }
}

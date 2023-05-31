// ng generate component admin/containers/donut-list from terminal for creating
// --dry-run you can use this flag for testing creation

import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
    selector: 'donut-list',
    template: `
        <donut-card [donut]="donuts[0]"></donut-card>
        <donut-card [donut]="donuts[1]"></donut-card>
        <donut-card [donut]="donuts[2]"></donut-card>
    `,
    styles: [],
})
export class DonutListComponent implements OnInit {
    donuts!: Donut[];

    ngOnInit(): void {
        this.donuts = [
            {
                id: 'y8z0As',
                name: 'Just Chocolate',
                icon: 'just-chocolate',
                price: 119,
                description: 'For the pure chocoholic.',
            },
            {
                id: '3u98Kl',
                name: 'Glazed Fudge',
                icon: 'glazed-fudge',
                price: 129,
                description: 'Sticky perfection.',
            },
            {
                id: 'ae098s',
                name: 'Caramel Swirl',
                icon: 'caramel-swirl',
                price: 129,
                description: 'Chocolate drizzled with caramel.',
            },
        ];
    }
}

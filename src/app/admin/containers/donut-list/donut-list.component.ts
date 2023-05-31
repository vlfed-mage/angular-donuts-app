// ng generate component admin/containers/donut-list from terminal for creating
// --dry-run you can use this flag for testing creation

import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
    selector: 'donut-list',
    template: `
        <ng-container *ngIf="donuts.length; else nothing">
            <donut-card
                *ngFor="let donut of donuts; trackBy: trackById"
                [donut]="donut"></donut-card>

            <!-- it's the same as -->
            <!-- but we can pass other data deeper -->

            <ng-template
                ngFor
                [ngForOf]="donuts"
                [ngForTrackBy]="trackById"
                let-donut
                let-i="index"
                let-o="odd"
                let-e="even">
                {{ i }}
                {{ e }}
                {{ o }}
                <donut-card [donut]="donut"></donut-card>
            </ng-template>
        </ng-container>
        <ng-template #nothing>
            <p>Nothing is here...</p>
        </ng-template>
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
                promo: true,
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

    trackById(index: number, value: Donut) {
        return value.id;
    }
}

// ng generate component admin/containers/donut-list from terminal for creating
// --dry-run you can use this flag for testing creation

import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/example.model';

@Component({
    selector: 'example-list',
    template: `
        <ng-container *ngIf="donuts.length; else nothing">
            <example-card
                *ngFor="let donut of donuts; trackBy: trackById"
                [donut]="donut">
            </example-card>

            <!-- it's the same -->
            <!-- but we can pass data deeper -->

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
                <example-card [donut]="donut"></example-card>
            </ng-template>

            <div
                *ngFor="
                    let donut of donuts;
                    trackBy: trackById;
                    index as i;
                    odd as o;
                    even as e
                "
                [style.color]="e ? 'red' : 'blue'">
                {{ i + 1 }}
                {{ o }}
                {{ e }}
            </div>
        </ng-container>
        <ng-template #nothing>
            <p>Nothing is here...</p>
        </ng-template>
    `,
    styles: [],
})
export class ExampleListComponent implements OnInit {
    donuts!: Donut[];

    ngOnInit(): void {
        this.donuts = [
            {
                id: 'y8z0As',
                name: 'Just Chocolate',
                icon: 'just-chocolate',
                price: 119,
                promo: 'limited',
                description: 'For the pure chocoholic.',
            },
            {
                id: '3u98Kl',
                name: 'Glazed Fudge',
                icon: 'glazed-fudge',
                price: 129,
                promo: 'new',
                description: 'Sticky perfection.',
            },
            {
                id: 'ae098s',
                name: 'Caramel Swirl',
                icon: 'caramel-swirl',
                price: 129,
                description: 'Chocolate drizzled with caramel.',
            },
            {
                id: '8amkZ9',
                name: 'Sour Supreme',
                icon: 'sour-supreme',
                price: 139,
                description: 'For the sour advocate.',
            },
            {
                id: 'l3M0nz',
                name: 'Zesty Lemon',
                icon: 'zesty-lemon',
                price: 129,
                description: 'Delicious lucious lemon.',
            },
        ];
    }

    trackById(index: number, value: Donut) {
        return value.id;
    }
}

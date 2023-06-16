// ng generate component admin/containers/donut-list from terminal for creating
// --dry-run you can use this flag for testing creation

import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/example.model';
import { ExampleService } from '../../services/example.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'example-list',
    template: `
        <div>
            <div class="donut-list-actions">
                <a routerLink="new" class="btn btn--green"> New Donut </a>
            </div>
            <ng-container *ngIf="donuts?.length; else nothing">
                <!-- ng-container *ngIf="donuts$ | async as donuts; else nothing" -->
                <example-card
                    *ngFor="let donut of donuts; trackBy: trackById"
                    [donut]="donut">
                </example-card>

                <!-- it's the same -->
                <!-- but we can pass more data deeper -->

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
                    <example-card [donut]="donut" [e]="e"></example-card>
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
        </div>
    `,
    styles: [
        `
            .donut-list {
                &-actions {
                    margin-bottom: 10px;
                }
            }
        `,
    ],
})
export class ExampleListComponent implements OnInit {
    donuts: Donut[] = [];
    // donuts$!: Observable<Donut[]>;

    constructor(private exampleService: ExampleService) {}

    ngOnInit(): void {
        this.exampleService
            .read()
            .subscribe((donuts: Donut[]) => (this.donuts = donuts));
        // can be done in another way:
        // this.donuts$ = this.exampleService.read()
    }

    trackById(index: number, value: Donut) {
        return value.id;
    }
}

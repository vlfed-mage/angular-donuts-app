// ng generate component admin/components/example-form

// dumb component

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/example.model';

@Component({
    selector: 'example-form',
    template: `
        <form class="donut-form" #form="ngForm" (ngSubmit)="handleSubmit(form)">
            <label>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    class="input"
                    minlength="5"
                    required
                    [ngModel]="donut.name"
                    [ngModelOptions]="{
                        updateOn: 'blur'
                    } // change' (by default) | 'blur' | 'submit'"
                    #name="ngModel" />
                <p>Possible cases</p>
                <p>valid: {{ name.valid }}</p>
                <p>invalid: {{ name.invalid }}</p>
                <p>touched (was in focus): {{ name.touched }}</p>
                <p>untouched (wasn't in focus): {{ name.untouched }}</p>
                <p>
                    pristine (незайманий) (value hasn't been entered, even after
                    undo the changes): {{ name.pristine }}
                </p>
                <p>
                    dirty (value's been entered, even after undo the changes):
                    {{ name.dirty }}
                </p>

                <br />

                <ng-container *ngIf="name.invalid && name.touched">
                    <div class="donut-form-error" *ngIf="name.errors?.required">
                        Name is required
                    </div>
                    <div
                        class="donut-form-error"
                        *ngIf="name.errors?.minlength">
                        Minimum length of a name is 5!
                    </div>
                </ng-container>
            </label>
            <label>
                <span>Icon</span>
                <select
                    name="icon"
                    class="input input--select"
                    required
                    [ngModel]="donut.icon"
                    #icon="ngModel">
                    <option *ngFor="let icon of icons" [ngValue]="icon">
                        {{ icon }}
                    </option>
                </select>
                <ng-container *ngIf="icon.invalid && icon.touched">
                    <div class="donut-form-error" *ngIf="icon.errors?.required">
                        Icon is required
                    </div>
                </ng-container>
            </label>
            <label>
                <span>Price</span>
                <input
                    type="number"
                    name="price"
                    class="input"
                    required
                    [ngModel]="donut.price"
                    #price="ngModel" />
                <ng-container *ngIf="price.invalid && price.touched">
                    <div
                        class="donut-form-error"
                        *ngIf="price.errors?.required">
                        Price is required
                    </div>
                </ng-container>
            </label>
            {{ price }}
            <div class="donut-form-radios">
                <p class="donut-form-radios-label">Promo:</p>
                <label>
                    <input
                        type="radio"
                        name="promo"
                        required
                        [value]="undefined"
                        [ngModel]="donut.promo" />
                    <span>None</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="promo"
                        value="new"
                        required
                        [ngModel]="donut.promo" />
                    <span>New</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="promo"
                        value="limited"
                        required
                        [ngModel]="donut.promo" />
                    <span>Limited</span>
                </label>
            </div>
            <label>
                <span>Description</span>
                <textarea
                    name="description"
                    class="input input--textarea"
                    required
                    [ngModel]="donut.description"
                    #description="ngModel"></textarea>
                <ng-container
                    *ngIf="description.invalid && description.touched">
                    <div
                        class="donut-form-error"
                        *ngIf="description.errors?.required">
                        Description is required
                    </div>
                </ng-container>
            </label>
            <button type="submit" class="btn btn--green">
                <!-- [disabled]="form.invalid"-->
                Submit
            </button>
            <button
                type="button"
                class="btn btn--gray"
                (click)="form.resetForm()">
                Reset form
            </button>
            <div
                class="donut-form-working"
                *ngIf="form.valid && form.submitted">
                Working...
            </div>

            <pre>form.submitted: {{ form.submitted }}</pre>
            <pre>form.value: {{ form.value | json }}</pre>
            <!--
                {
                    "name": "",
                    "icon": "",
                    "price": "",
                    "promo": "",
                    "description": ""
                }
            -->
            <pre>donut: {{ donut | json }}</pre>
            <pre>form.status: {{ form.status | json }}</pre>
            <!--
                "INVALID" / "VALID"
            -->
            <pre>form.valid: {{ form.valid | json }}</pre>
            <!--
                true / false
            -->

            <pre>price: {{ price.value }}</pre>
        </form>
    `,
    styles: [
        `
            .donut-form {
                &-radios {
                    display: flex;
                    align-content: center;

                    &-label {
                        margin-right: 10px;
                    }

                    input {
                        margin: 0;
                    }

                    label {
                        display: flex;
                        align-items: center;
                        margin: 0 8px 0 0;

                        span {
                            color: #444;
                            margin: 0 0 0 4px;
                        }
                    }
                }

                &-working {
                    font-size: 12px;
                    font-style: italic;
                    margin: 10px 0;
                }

                &-error {
                    font-size: 12px;
                    color: #e66262;
                }
            }
        `,
    ],
})
export class ExampleFormComponent {
    @Input() donut!: Donut;
    @Output() create = new EventEmitter<Donut>();

    icons: string[] = [
        'caramel-swirl',
        'glazed-fudge',
        'just-chocolate',
        'sour-supreme',
        'strawberry-glaze',
        'vanilla-sundae',
        'zesty-lemon',
    ];

    handleSubmit(f: NgForm) {
        if (f.valid) {
            this.create.emit(f.value);
        } else {
            f.form.markAllAsTouched();
        }
    }
}

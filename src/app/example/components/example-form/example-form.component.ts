// ng generate component admin/components/example-form

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
                    ngModel
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
                    dirty (value's been entered, even after undo the change):
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
                    ngModel
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
                    ngModel
                    #price="ngModel" />
                <ng-container *ngIf="price.invalid && price.touched">
                    <div
                        class="donut-form-error"
                        *ngIf="price.errors?.required">
                        Price is required
                    </div>
                </ng-container>
            </label>
            <div class="donut-form-radios">
                <p class="donut-form-radios-label">Promo:</p>
                <label>
                    <input
                        type="radio"
                        name="promo"
                        required
                        [value]="undefined"
                        ngModel />
                    <span>None</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="promo"
                        value="new"
                        required
                        ngModel />
                    <span>New</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="promo"
                        value="limited"
                        required
                        ngModel />
                    <span>Limited</span>
                </label>
            </div>
            <label>
                <span>Description</span>
                <textarea
                    name="description"
                    class="input input--textarea"
                    required
                    ngModel
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
            <pre>{{ form.value | json }}</pre>
            <!--
                {
                    "name": "",
                    "icon": "",
                    "price": "",
                    "promo": "",
                    "description": ""
                }
            -->
            <pre>{{ form.status | json }}</pre>
            <!--
                "INVALID" / "VALID"
            -->
            <pre>{{ form.valid | json }}</pre>
            <!--
                true / false
            -->
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

                &-error {
                    font-size: 12px;
                    color: #e66262;
                }
            }
        `,
    ],
})
export class ExampleFormComponent {
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
            console.log(f.value);
        } else {
            f.form.markAllAsTouched();
        }
    }
}

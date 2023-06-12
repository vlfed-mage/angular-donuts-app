// ng generate component admin/components/example-form

import { Component } from '@angular/core';

@Component({
    selector: 'example-form',
    template: `
        <form class="donut-form" #form="ngForm">
            <label>
                <span>Name</span>
                <input type="text" name="name" class="input" ngModel />
            </label>
            <label>
                <span>Price</span>
                <input type="number" name="price" class="input" ngModel />
            </label>
            <div class="donut-form-radios">
                <p class="donut-form-radios-label">Promo:</p>
                <label>
                    <input
                        type="radio"
                        name="promo"
                        [value]="undefined"
                        ngModel />
                    <span>None</span>
                </label>
                <label>
                    <input type="radio" name="promo" value="new" ngModel />
                    <span>New</span>
                </label>
                <label>
                    <input type="radio" name="promo" value="limited" ngModel />
                    <span>Limited</span>
                </label>
            </div>

            <pre>{{ form.value | json }}</pre>
            <!--
                {
                    "name": "",
                    "price": ""
                }
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
            }
        `,
    ],
})
export class ExampleFormComponent {}

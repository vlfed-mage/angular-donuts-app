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

            <pre>{{ form.value | json }}</pre>
            <!--
                {
                    "name": "",
                    "price": ""
                }
            -->
        </form>
    `,
    styles: [],
})
export class ExampleFormComponent {}

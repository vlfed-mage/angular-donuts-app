// ng generate component admin/components/example-form

import { Component } from '@angular/core';

@Component({
    selector: 'example-form',
    template: `
        <form class="donut-form" #form="ngForm">
            <pre>{{ form.value | json }}</pre>
            <!-- {} -->
        </form>
    `,
    styles: [],
})
export class ExampleFormComponent {}

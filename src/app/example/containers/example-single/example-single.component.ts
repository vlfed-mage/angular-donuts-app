// ng generate component admin/containers/example-single

import { Component } from '@angular/core';

@Component({
    selector: 'example-single',
    template: `
        <div>
            <example-form></example-form>
        </div>
    `,
    styles: [],
})
export class ExampleSingleComponent {}
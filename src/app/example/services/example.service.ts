// ng generate service example/services/donut

import { Injectable } from '@angular/core';
import { Donut } from '../models/example.model';
import { retry } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ExampleService {
    private donuts: Donut[] = [
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

    constructor() {}

    // CRUD

    read() {
        return this.donuts;
    }

    readOne(id: string) {
        const donut = this.read().find((donut: Donut) => donut.id === id);

        if (donut) {
            return donut;
        }

        return {
            id,
            name: '',
            icon: '',
            price: 0,
            description: '',
        };
    }

    create(payload: Donut) {
        this.donuts = [...this.donuts, payload];
        console.log(this.donuts);
    }

    update(payload: Donut) {
        this.donuts = this.donuts.map((donut: Donut) =>
            donut.id === payload.id ? payload : donut
        );
        console.log(this.donuts);
    }

    delete(payload: Donut) {
        this.donuts = this.donuts.filter(
            (donut: Donut) => donut.id !== payload.id
        );
        console.log(this.donuts);
    }
}

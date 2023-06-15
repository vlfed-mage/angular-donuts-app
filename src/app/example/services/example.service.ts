// ng generate service example/services/donut

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Donut } from '../models/example.model';

@Injectable({
    providedIn: 'root',
})
export class ExampleService {
    private donuts: Donut[] = [];

    constructor(private http: HttpClient) {}

    // CRUD

    read() {
        return this.http.get<Donut[]>(`/api/donuts`);
        // return this.donuts;
    }

    // readOne(id: string) {
    //     const donut = this.read().find((donut: Donut) => donut.id === id);
    //
    //     if (donut) {
    //         return donut;
    //     }
    //
    //     return {
    //         id,
    //         name: '',
    //         icon: '',
    //         price: 0,
    //         description: '',
    //     };
    // }

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

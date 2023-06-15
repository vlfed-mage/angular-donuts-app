// ng generate service example/services/donut

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map, of, tap, throwError } from 'rxjs';

import { Donut } from '../models/example.model';

@Injectable({
    providedIn: 'root',
})
export class ExampleService {
    private donuts: Donut[] = [];

    constructor(private http: HttpClient) {}

    // CRUD

    read() {
        if (this.donuts.length) {
            return of(this.donuts);
        }
        return this.http.get<Donut[]>(`/api/donuts`).pipe(
            tap(donuts => {
                this.donuts = donuts;
            }),
            catchError(this.handleError)
        );
    }

    readOne(id: string) {
        return this.read().pipe(
            map(donuts => {
                const donut = donuts.find((donut: Donut) => donut.id === id);

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
            })
        );
    }

    create(payload: Donut) {
        return this.http.post<Donut>(`/api/donuts`, payload).pipe(
            tap(donut => (this.donuts = [...this.donuts, donut])),
            catchError(this.handleError)
        );
    }

    update(payload: Donut) {
        return this.http.put<Donut>(`/api/donuts/${payload.id}`, payload).pipe(
            tap(donut => {
                this.donuts = this.donuts.map((item: Donut) =>
                    item.id === donut.id ? donut : item
                );
            }),
            catchError(this.handleError)
        );
    }

    delete(payload: Donut) {
        return this.http.delete<Donut>(`/api/donuts/${payload.id}`).pipe(
            tap(() => {
                this.donuts = this.donuts.filter(
                    (donut: Donut) => donut.id !== payload.id
                );
            }),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
            // client-side error
            console.warn('Client', err.message);
        } else {
            // server-side error
            console.warn('Server', err.status);
        }
        return throwError(() => new Error(err.message));
    }
}

// ng generate service example/services/donut

import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';

import {
    catchError,
    delay,
    map,
    of,
    retry,
    retryWhen,
    take,
    tap,
    throwError,
} from 'rxjs';

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

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Api-Token': '1234abcd',
        });

        headers = headers.append('Api-Token', '1234abcd'); // for dynamic adding

        const options = {
            headers,
        };

        return this.http.get<Donut[]>(`/api/donuts`, options).pipe(
            tap(donuts => {
                this.donuts = donuts;
            }),
            // retry(2), // retry 2 times
            // retryWhen(errors => {
            //     return errors.pipe(delay(1000), take(2)); // retry twice with delay 1 sec
            // }), // deprecated. Will be removed in v9 or v10, use retry's delay option instead.
            retry({
                count: 1,
                delay: 1000,
            }), // retry with config options

            catchError(this.handleError)
        );
    }

    readOne(id: string | null) {
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

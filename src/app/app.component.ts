import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="app">
            <!-- <h1>{{ newMessage }}</h1>-->
            <!-- or with property binding syntax&ndash -->
            <!-- <h1-->
            <!--     [innerText]="message.length ? message : 'Nothing here...'"-->
            <!--     (click)="handleClick($event)"></h1>-->

            <!-- value as just a string &ndash -->
            <!-- <input type="text" value="message" />-->

            <!-- value as property binding &ndash -->
            <!-- <input-->
            <!--     type="text"-->
            <!--     [value]="message"-->
            <!--     (input)="handleInput($event)"-->
            <!--     #messageInput />-->

            <!-- #messageInput - Template ref variable. It's like ref in React &ndash -->
            <!-- <p>{{ messageInput }}</p>-->
            <!-- [object HTMLInputElement] but: &ndash -->
            <!-- <p>{{ messageInput.value }}</p>-->

            <!-- So, we can avoid to use event functions and $event&ndash -->

            <!-- <input-->
            <!--     type="text"-->
            <!--     [value]="message"-->
            <!--     (input)="refMessage = refMessageInput.value"-->
            <!--     #refMessageInput />-->
            <!-- <p>{{ refMessage }}</p>-->
            <header class="header">
                <img src="assets/img/logo.svg" alt="Donuts logo" class="logo" />
            </header>
            <donut-list></donut-list>
        </div>
    `,
    styles: [
        `
            .app {
                background: #fff;
                border-radius: 8px;
                max-width: 400px;
                width: 94%;
                margin: 25px auto;
                padding: 25px;
                border: 4px solid #ef9fc7;
            }

            .header {
                display: flex;
                justify-content: center;
                margin-bottom: 25px;
            }

            .logo {
                width: 100px;
                height: 88px;
            }
        `,
    ],
})
export class AppComponent implements OnInit {
    message!: string;
    newMessage!: string;
    refMessage!: string;

    ngOnInit() {
        this.message = 'One-way-data-flow';
    }

    handleClick = (e: Event) => {
        console.log(e);
    };

    handleInput = (e: Event) => {
        const { value } = e.target as HTMLInputElement;
        this.newMessage = value;
    };
}

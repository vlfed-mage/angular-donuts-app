import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="app">
            <h1>{{ newMessage }}</h1>
            <!-- or with property binding syntax-->
            <h1
                [innerText]="message.length ? message : 'Nothing here...'"
                (click)="handleClick($event)"></h1>

            <!-- value as just a string -->
            <input type="text" value="message" />

            <!-- value as property binding -->
            <input
                type="text"
                [value]="message"
                (input)="handleInput($event)"
                #messageInput />

            <!-- #messageInput - Template ref variable. It's like ref in React -->
            <p>{{ messageInput }}</p>
            <!-- [object HTMLInputElement] but: -->
            <p>{{ messageInput.value }}</p>

            <!-- So, we can avoid to use event functions and $event-->

            <input
                type="text"
                [value]="message"
                (input)="refMessage = refMessageInput.value"
                #refMessageInput />
            <p>{{ refMessage }}</p>
        </div>
    `,
    styles: [
        `
            .app {
                margin-top: 50px;
                font-size: 22px;
                color: #fff;
                text-align: center;
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

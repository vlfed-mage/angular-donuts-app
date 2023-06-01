// ng generate component admin/components/donut-card

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
    selector: 'donut-card',
    encapsulation: ViewEncapsulation.Emulated, // https://angular.io/guide/view-encapsulation
    template: `
        <div
            class="donut-card"
            [style.border]="donut.promo ? '2px solid gray' : 'none'"
            [ngStyle]="{
                'font-size.px': donut.promo ? 20 : 16
            }"
            [ngStyle]="setStyles()"
            [class.donut-card-promo]="donut.promo"
            [class.donut-card-new]="true"
            [ngClass]="{
                'donut-card-not-promo': !donut.promo
            }">
            <!-- we can use background-color instead backgroundColor and so on -->

            <!-- JsonPipe -->
            <!-- <p>{{ donut | json }}</p>-->
            <!-- -->
            <img
                src="assets/img/{{ donut.icon }}.svg"
                [alt]="donut.name"
                class="donut-card-icon" />
            <div>
                <p class="donut-card-name">
                    {{ donut.name }}
                    <!-- <ng-container [ngSwitch]="donut.promo">-->
                    <!--     <span *ngSwitchCase="'new'" class="donut-card-label">-->
                    <!--         NEW-->
                    <!--     </span>-->
                    <!--     <span-->
                    <!--         *ngSwitchCase="'limited'"-->
                    <!--         class="donut-card-label">-->
                    <!--         LIMITED-->
                    <!--     </span>-->
                    <!--     <span *ngSwitchDefault class="donut-card-label">-->
                    <!--         Nothing special...-->
                    <!--     </span>-->
                    <!-- </ng-container>-->

                    <ng-container [ngSwitch]="donut.promo">
                        <span *ngIf="donut.promo" class="donut-card-label">
                            <ng-template [ngSwitchCase]="'new'">
                                NEW
                            </ng-template>
                            <ng-template [ngSwitchCase]="'limited'">
                                LIMITED
                            </ng-template>
                        </span>
                    </ng-container>
                </p>
                <p class="donut-card-price">
                    {{ donut.price / 100 | currency : 'USD' : 'symbol' }}
                    <!-- https://angular.io/guide/pipes-overview -->
                </p>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
            }

            .donut-card {
                width: 100%;
                display: flex;
                align-items: center;
                background: #f7f7f7;
                border-radius: 5px;
                margin-bottom: 5px;
                padding: 5px 15px;
                transition: all 0.1s ease-in-out;

                &:hover {
                    transform: translateY(-3px);
                }

                &-promo {
                    color: white;
                }

                &-icon {
                    width: 50px;
                    margin-right: 10px;
                }

                &-name {
                    //font-size: 16px;
                }

                &-label {
                    border: 1px solid #c14583;
                    border-radius: 4px;
                    padding: 0 4px;
                    margin-left: 5px;
                    font-size: 12px;
                    color: #c14583;
                }

                &-price {
                    //font-size: 14px;
                    color: #c14583;
                }
            }
        `,
    ],
})
export class DonutCardComponent {
    @Input() donut!: Donut;

    setStyles = () => {
        if (!this.donut.promo) {
            return;
        }
        return {
            'box-shadow': '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            background: 'gray',
        };
    };
}

// ng generate interface admin/models/Donut model

export interface Donut {
    id: string;
    name: string;
    icon: string;
    price: number;
    promo?: 'new' | 'limited';
    description: string;
}

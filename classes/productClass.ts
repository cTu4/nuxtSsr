import {Rating} from "~/types/rating";

export default class Product{
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    rating: Rating;
    constructor(data: Product) {
        this.id = data.id;
        this.category= data.category;
        this.description= data.description;
        this.image= data.image;
        this.price= data.price;
        this.title= data.title;
        this.rating= data.rating;
    }
    add2Busket() : void {
        console.log(this);
    }
}
import {Rating} from "~/types/rating";

export interface Product{
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    title: string,
    favorite: boolean,
    rating: Rating
}

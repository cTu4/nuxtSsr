import {Product} from "~/types/product";

export const useProductsStore = defineStore('products', () => {
    let products: ref<Product[] | []> = ref([])

    async function getProducts(){
        products.value = await $fetch('https://fakestoreapi.com/products/');
    }
    async function addProduct(id: number){
        products.value.push(await $fetch(`https://fakestoreapi.com/products/${id}`));
    }
    return { products, getProducts,addProduct }
})
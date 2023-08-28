import {Product} from "~/types/product";

export const useSectionStore = defineStore('section', () => {
    let products: ref<Product[] | []> = ref([])

    async function getProducts(section_code){
        products.value = await $fetch(`https://fakestoreapi.com/products/category/${section_code}`);
    }
    async function addProduct(id: number){
        products.value.push(await $fetch(`https://fakestoreapi.com/products/${id}`));
    }
    return { products, getProducts,addProduct }
})
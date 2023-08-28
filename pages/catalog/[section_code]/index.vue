<template>
  <div>
    <Head>
      <Title>
        Купить товары {{ section_code }}
      </Title>
      <Meta name="description" :content="'Купить товары ' + section_code + ' по низкой цене'"/>
    </Head>
    <div>
      <p>{{ section_code }}</p>
      <div
        :class="$style.products__wrapper"
      >
        <NuxtLink
            :class="$style.product_item"
            :to="'/catalog/'+section_code+'/'+product.id"
            v-for="product in products"
            :key="product.id"
        >
          <div>
            <div
                :class="$style.product__favorite"
                @click.prevent="add2Fav(product)"
            >
              <v-icon
                  v-if="product.favorite"
                  color="info"
                  icon="mdi-heart"
                  size="small"
              ></v-icon>
              <v-icon
                  v-else
                  color="info"
                  icon="mdi-heart-outline"
                  size="small"
              ></v-icon>

            </div>
            <div
                :class="$style.product__img"
            >
              <picture>
                <img :src="product.image" :alt="product.title">
              </picture>
            </div>
            <div
                :class="$style.product_info"
            >

              <div
                  :class="$style.product__title"
              >
                {{ product.title }}
              </div>
              <div
                  :class="$style.product__description"
              >
                {{ product.description }}
              </div>
            </div>
          </div>
          <div>
            <div
                :class="$style.product__add2BusketBtn"
            >
              <v-btn
                  color="info"
                  block
                  @click.prevent="add2Busket(product)"
              >
                Button
              </v-btn>
            </div>
          </div>


        </NuxtLink>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">

definePageMeta({
  layout: 'catalog'
})
const { section_code } = useRoute().params;
const sectionStore = useSectionStore();
const { getProducts } = sectionStore;
await getProducts(section_code);
const { products } = sectionStore;
console.log(products);
function add2Fav(product: Product): void {
  product.favorite = !product.favorite;
}
async function add2Busket(product: Product): Promise<any> {
  const resp = await fetch('https://fakestoreapi.com/carts',{
    method:"POST",
    body:JSON.stringify(
        {
          userId:5,
          products:[{productId:product.id,quantity:1}]
        }
    )
  })
  console.log(resp);
}

</script>
<style lang="scss" module>
.products__wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  .product_item{
    //flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-radius: 4px;
    border: #c2c2c2 1px solid;
    position: relative;
    flex-grow: 1;
    flex: 1;
    min-width: 30%;
    z-index: 100;
    @include xs{
        min-width: 90%;
    }
    .product__favorite{
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 101;
    }
    .product__img{
      text-align: center;
      img{
        width: auto;
        height: 100px;
      }
    }

    .product_info{
      display: flex;
      flex-direction: column;
      .product__title{
        font-size: 16px;
        font-family: Roboto-medium;
        margin-bottom: 8px;
      }
      .product__description{
        font-size: 14px;
        font-family: Roboto-light;
      }
    }
    .product__add2BusketBtn{
      padding-top: 10px;
    }

  }
}

</style>
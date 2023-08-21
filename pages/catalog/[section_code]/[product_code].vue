<template>
  <div>
    <Head>
      <Title>
        Купить {{ product_code }}
      </Title>
      <Meta name="description" :content="'Самый лучший товар: ' + product_code"/>
    </Head>
    <div>
      <p>{{ product_code }}</p>
    </div>
  </div>

</template>
<script setup lang="ts">
const {product_code} = useRoute().params
definePageMeta({
  layout: 'catalog'
})
</script>
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
    </div>
  </div>

</template>
<script setup lang="ts">

definePageMeta({
  layout: 'catalog'
})
const { section_code } = useRoute().params

</script>
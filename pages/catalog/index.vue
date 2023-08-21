<template>
  <div>
    CATALOG
    <div class="wrapper">
      <div
          class="section"
          v-for="section in sections"
          :key="section"
      >
        <NuxtLink :to="'/catalog/' + section">{{ section }}</NuxtLink>
      </div>
    </div>
    <Head>
      <Title>
        Список категорий
      </Title>
      <Meta name="description" content="Список категорий проекта для тестирования SSR"/>
    </Head>
  </div>
</template>
<script setup lang="ts">
  definePageMeta({
    layout: "catalog",
  });
  const sections = await $fetch('https://fakestoreapi.com/products/categories')
  console.log(sections)
</script>
<style scoped lang="scss">
  .wrapper{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .section{
      padding: 10px;
      border-radius: 10px;
      background: #c2c2c2;
      margin-right: 5px;
    }
  }
</style>
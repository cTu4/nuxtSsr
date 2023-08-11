<template>
  <Head>
    <Title>
      Купить {{ code }}
    </Title>
    <Meta name="description" :content="'Самый лучший товар: ' + code"/>
  </Head>
  <div>
    <p>{{ code }}</p>
  </div>
</template>
<script setup lang="ts">
  const {code} = useRoute().params
  definePageMeta({
    layout: 'catalog'
  })
</script>
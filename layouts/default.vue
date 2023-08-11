<template>
  <div :class="$style.nuxtApp">
    <header>
      <nav :class="$style.mainNavigation">
        <ul :class="$style.headerMenu">
          <li :class="$style.headerMenuItem">
            <NuxtLink :class="$style.headerMenuItemLink" to="/">Home</NuxtLink>
          </li>
          <li :class="$style.headerMenuItem">
            <NuxtLink :class="$style.headerMenuItemLink" to="/catalog">Catalog</NuxtLink>
          </li>
          <li :class="$style.headerMenuItem">
            <NuxtLink :class="$style.headerMenuItemLink" to="/catalog/test">Test section</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div :class="$style.mainContent">
      <slot ></slot>
    </div>
    <footer>
      <div :class="$style.footer">

      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" module>
  .nuxtApp{
    height: 100%;
    display: flex;
    flex-direction: column;
    //padding: $base-padding;
  }
  ul{
    list-style-type: none;
  }
  .mainContent{
    flex: 2;
  }
  .mainNavigation{
    width: 100%;
    .headerMenu{
      display: flex;
      padding-inline-start: 0;
      .headerMenuItemLink{
        margin: 0 10px;
        padding: 10px;
        border-radius: 10px;
        background: #ffffff;
      }

    }
  }
  header{
    background: #c2c2c2;
    position: sticky;
    top: 0;
  }
  footer{
    height: 100px;
    background: #c2c2c2;
  }
  header, footer, .mainContent{
    padding: $base-padding;
  }
</style>
<style lang="scss">
html, body, #__nuxt{
  height: 100%;
  margin: 0;
}

.router-link-active{
  color: #ff7676;
}
a{
  outline: none;
  text-decoration: none;
  color: #000000;
}
</style>

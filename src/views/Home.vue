<template>
  <div class="home">
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

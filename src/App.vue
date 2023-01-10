<template>
  <header-component />
  <echo-form />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import EchoForm from './components/EchoForm.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    EchoForm
  }
  
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>

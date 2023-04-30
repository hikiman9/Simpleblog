<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to = '/'><a class="navbar-brand" href="#">Hikiman Blog</a></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to = '/list'><a class="nav-link active" aria-current="page" href="#">글목록</a></router-link>
          <a class="nav-link" href="#">About</a>
        </div>
      </div>
    </div>
  </nav>

  <router-view :contents = 'contents'></router-view>

  <!-- <ListComponent :content = 'contents[i]' v-for = '(a, i) in contents' :key="i"/> -->

</template>

<script>

  // import ListComponent from './components/ListComponent.vue';
  import contents from './assets/contents.js';

  export default {
    name: 'App',

    components: {
      // ListComponent : ListComponent,
    },

    data() {
      return {
        contents : contents,
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

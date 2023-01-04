<template>
  <div class="container">
    <div>Name: container</div>
    <Remote1 class="container-pink"></Remote1>
    <Remote2 class="container-purple"></Remote2>
    <br>
    <button type="button" class="btn btn-info" @click="success">
      <i class="ri-add-line align-bottom me-1"></i> Tıkla 
    </button>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const Remote1 = defineAsyncComponent(() => import("remote1/Remote1"));
const Remote2 = defineAsyncComponent(() => import("remote2/Remote2"));

export default {
  name: "App",
  components: {
    Remote1,
    Remote2,
  },
  methods: { 
    success() { 
      let self = this;
      self.successMsq();
    }
  }
};
</script>

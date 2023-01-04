<template>
  <div class="container">
    <div>Remote2</div>
    <button type="button" class="btn btn-info" @click="success">
      <i class="ri-add-line align-bottom me-1"></i> Tıkla 
    </button>
</div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  mixins:["notificationMixin"],
 
  methods: { 
    success() { 
      let self = this;
      self.successMsq();
    }
  }
};
</script>
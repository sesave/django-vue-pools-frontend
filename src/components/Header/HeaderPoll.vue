<template>
  <div class="header">
    <v-btn variant="outlined" @click="goBack">{{ "<- Voltar" }} </v-btn>
  </div>
</template>

<script>
import router from "../../router";
export default {
  name: "HeaderPoll",
  data() {
    return {
      choices: null,
    };
  },
  methods: {
    goBack() {
      router.back();
    },
  },
};
</script>

<style>
.header {
}
</style>

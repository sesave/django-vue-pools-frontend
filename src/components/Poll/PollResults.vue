<script>
import axios from "axios";
import router from "../../router/";
import HeaderPoll from "../Header/HeaderPoll";
export default {
  name: "PollsResults",
  data() {
    return {
      choices: null,
    };
  },
  methods: {
    async getPollResult() {
      const id = this.$route.params.id;
      const config = {
        method: "get",
        url: `http://localhost:8081/polls/${id}/results`,
      };
      axios(config).then((response) => (this.choices = response.data));
    },
    voteAgain() {
      router.back();
    },
    goHome() {
      router.push({ name: "Polls" });
    },
  },
  created() {
    this.getPollResult();
  },
  updated() {
    console.log(this.choices);
  },
  components: {
    HeaderPoll,
  },
};
</script>

<template>
  <div class="resultsWrapper">
    <HeaderPoll />

    <div class="form">
      <div class="titleWrapper">
        <h3>Escolha</h3>
        <h3>Votos</h3>
      </div>
      <div v-for="choice in choices" :key="choice.id" class="voteWrapper">
        <span>{{ choice.choice_text }}</span>
        <span>{{ choice.votes }}</span>
      </div>
      <div class="btnWrapper">
        <v-btn variant="outlined" @click="voteAgain"> Vote de novo </v-btn>
        <v-btn variant="outlined" @click="goHome"> Vá para o início </v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.resultsWrapper {
  max-width: 1440px;
  margin: 2rem auto 0 auto;
}
.form {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 2rem;
}
.voteWrapper {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  border: 1px solid;
}
.btnWrapper,
.titleWrapper {
  display: flex;
  justify-content: space-around;
}
.titleWrapper {
  margin-bottom: 2rem;
}
</style>

<script>
import axios from "axios";
import router from "../../router/";
import HeaderPoll from "../Header/HeaderPoll";
export default {
  name: "PollsDetail",
  data() {
    return {
      choices: null,
      picked: null,
      idRoute: this.$route.params.id,
    };
  },
  methods: {
    async getPollResult() {
      const config = {
        method: "get",
        url: `http://localhost:8081/polls/${this.idRoute}/results`,
      };
      axios(config).then((response) => (this.choices = response.data));
    },
    vote() {
      const choice = this.choices.find((e) => e.id == this.picked);
      console.log(choice);
      const data = JSON.stringify({
        votes: choice.votes + 1,
      });

      var config = {
        method: "put",
        url: `http://localhost:8081/polls/${choice.id}/vote`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          //const query = `/results/${choice.question_id}`;
          router.push({ name: "Poll Results", params: { id: "1" } });
        })
        .catch(function (error) {
          console.log(error);
        });
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
    <div class="formDetail">
      <label v-for="choice in choices" :key="choice.id">
        <input
          type="radio"
          :key="choice.id"
          :value="choice.id"
          v-model="picked"
        />
        <span>{{ choice.choice_text }}</span>
      </label>
      <div class="buttonWrapper">
        <v-btn variant="outlined" @click="vote"> Vote </v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.formDetail {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 2rem auto 0 auto;
}
.formDetail label {
  border: 1px solid;
  padding: 5px;
}
.formDetail label > span {
  margin-left: 8px;
}
.buttonWrapper {
  padding: 1rem 0;
  display: flex;
  align-self: center;
}
</style>

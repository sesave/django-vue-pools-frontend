<template>
  <div class="pollsWrapper">
    <h1>Enquetes</h1>
    <div class="pollGrid">
      <div v-for="poll in polls" v-bind:key="poll.id" class="poll">
        <v-card
          variant="tonal"
          class="transition-fast-in-fast-out v-card--reveal"
        >
          <v-card-title v-text="poll.question_text"></v-card-title>
          <v-card-text v-text="this.formatDate(poll.pub_date)"></v-card-text>
          <v-card-actions>
            <v-btn variant="outlined" @click="redirectVote(poll.id)">
              Vote
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from '../../router/'
export default {
  name: "PollsList",
  data() {
    return {
      polls: null,
    };
  },
  methods: {
    async getPolls() {
      await axios
        .get("https://django-vue-pools.vercel.app/polls/")
        .then((response) => (this.polls = response.data.questions));
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "America/Sao_Paulo",
      }).format(date);
    },
    redirectVote(id) {
      router.push({ name: "Poll Details", params: { id } });
    },
  },
  created() {
    this.getPolls();
  },
  updated() {
    console.log(this.polls);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pollsWrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 2rem;
}
.poll {
  margin-top: 1rem;
  width: fit-content;
}
.pollGrid {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  grid-auto-columns: max-content;
}
</style>

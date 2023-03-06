<template>
  <div class="hello">
    <h1>Polls</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PollsList", 

  mounted () {
    axios
      .get('http://localhost:8081/polls/')
      .then(response => (this.info = response))
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

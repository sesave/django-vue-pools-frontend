<template>
  <PollsList />
</template>

<script>
import PollsList from './components/Polls/PollsList'
export default { 
  name: 'App',
  components: {
    PollsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="index">
    <Header/>
    <Calender/>
  </div>
</template>

<script>
import Header from '@/components/modules/Header.vue'
import Calender from '@/components/modules/Calender.vue'

export default {
  name: 'Index',
  components: {
    Header,
    Calender
  },
  props: {
    msg: String
  }
}
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

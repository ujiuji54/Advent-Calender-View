<template>
  <div class="header">
    <h1> Advent Calender </h1>
      <md-button class="md-raised md-primary signup">サインアップ</md-button>
      <md-button class="md-raised md-primary login">ログイン</md-button>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.header {
  display: flex;
  align-items: center;
  justify-content:space-around;
  background-color: mediumblue;
}

.header h1 {
  margin-right: 40%;
  color:white;
}

</style>
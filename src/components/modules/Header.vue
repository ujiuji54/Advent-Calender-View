<template>
  <div class="header">
    <h2> Advent Calender </h2>
    <ul class="main_menu">
      <li><a href="">サインアップ</a></li>
      <li><a href="">ログイン</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.header {
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content:space-around;
}

.main_menu {
  list-style: none;
  width:50%;
  display: flex;
  justify-content: space-around;
}

.main_menu li a {
	text-decoration: none;
	color: black;
}
</style>
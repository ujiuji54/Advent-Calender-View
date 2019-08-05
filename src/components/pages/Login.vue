<template>
  <div class="Login">
    <Header/>
    <div class="container">
      <label for="id"><b>id</b></label>
      <input type="text" placeholder="Enter id" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>
  </div>
</template>

<script>
import Header from '@/components/modules/Header.vue'

export default {
  name: 'Login',
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .container{
    width: 400px;
    height: 200px;
    padding: 16px;
    margin: auto;
  }
</style>

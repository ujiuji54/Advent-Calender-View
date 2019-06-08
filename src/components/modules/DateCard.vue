<template>
  <div class="date_card">
    {{ day }} <br>
    {{ blog['title'] }} <br>
    {{ blog['user']['name'] }}
  </div>
</template>

<script>
export default {
  name: 'date_card',
  props: {
    blog: {},
    day: Number,
  }
}
</script>

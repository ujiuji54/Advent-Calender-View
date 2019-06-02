<template>
  <div class="date_card">
    {{ day }} <br>
    {{ title }} <br>
    {{ pagelink }}
  </div>
</template>

<script>
export default {
  name: 'date_card',
  props: {
    day: Number,
    title: String,
    pagelink: String,
  }
}
</script>

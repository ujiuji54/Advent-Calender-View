<template>
  <div class="calender">
    <h3>{{ yearMonth }}</h3>
    <p>
      <table>
        <tr>
          <th v-for="date in weekList" :key="date">{{ date }}</th>
        </tr>
        <tr v-for="week in calenderData" :key="week">
          <td v-for="day in week" :key="day">
            {{ day }}
            <br> title
            <br> pagelink
          </td>
        </tr>
      </table>
    </p>
    {{ info.data }}
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

export default {
  name: 'Calender',
  data () {
    return {
      current: 0,
      weekList: ['日', '月', '火', '水', '木', '金', '土'],
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/blogs?month=0', {
        headers: {},
        data: {}
      })
      .then(response => (this.info = response))
  },
  computed: {
    currentMoment () {
      return moment().add(this.current, 'months')
    },
    yearMonth () {
      return this.currentMoment.format('YYYY MM')
    },
    calenderData () {
      // この月に何日まであるかを算出
      const numOfMonth = this.currentMoment.endOf('month').date()
      // この月の1日〜最終日までの配列
      const daysOfMonth = [...Array(numOfMonth).keys()].map(i => ++i)
      // 1日の曜日（0~6の数値で取得）
      const firstWeekDay = this.currentMoment.startOf('month').weekday()
      // 週ごとの二次元配列を生成
      const data = [...Array(6)].map((empty, weekIndex) =>
        [...Array(7)].map((empty, dayIndex) => {
          const i = 7 * weekIndex + dayIndex - firstWeekDay
          if (i < 0 || daysOfMonth[i] === undefined) {
            return null
          }
          return daysOfMonth[i]
        })
      )
      // 全てnullの配列があれば除去する
      return data.filter(week => week.filter(day => day != null).length > 0)
    }
  }
}
</script>

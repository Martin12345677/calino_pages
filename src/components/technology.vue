<style lang="less" scoped>
.technology-page {
  background-image: url(../assets/bg.png);
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>

<template>
  <div class="technology-page">
    <my-form
      title="技术支持中心"
      show-time
      :rows="news"
      pagination-align="right"
    ></my-form>
  </div>
</template>

<script>
import form from './form'

export default {
  components: {
    'my-form': form
  },
  data () {
    return {
      news: [
        {
          name: '技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心技术支持中心',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '技术支持中心技术支持中心技术支持中心',
          date: '2020-05-20',
          nid: '123'
        },
      ]
    }
  }
}
</script>
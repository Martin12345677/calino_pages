<style lang="less" scoped>
.warns-page {
  background-image: url(../assets/bg.png);
  background-size: 100% 100%;
  background-attachment: fixed;
  box-sizing: border-box;
  padding: 15px;
  color: white;

  .warns-title {
    margin: 10px;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .warns-main {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;

    & > div {
      margin: 20px;
      width: 50%;
    }
  }
}
</style>

<template>
  <div class="warns-page">
    <div class="warns-title">
      异常信息汇总
    </div>
    <div class="warns-main">
      <my-form
        title="待处理"
        :rows="news"
        pagination-align="center"
        showBackground
        :size="10"
        hideSize
      ></my-form>
      <my-form
        title="历史信息"
        :rows="allNews"
        pagination-align="center"
        showBackground
        :size="10"
        hideSize
      ></my-form>
    </div>
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
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
      ],
      allNews: [
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总异常信息汇总',
          date: '2019-05-20',
          nid: '123'
        },
        {
          name: '异常信息汇总异常信息汇总异常信息汇总',
          date: '2020-05-20',
          nid: '123'
        },
      ]
    }
  }
}
</script>
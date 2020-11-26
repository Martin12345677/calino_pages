<style scoped>
.warn-body {
  width: 30%;
  box-sizing: border-box;
  text-align: center;
  background-image: url('../assets/item_bg_2.png');
  background-size: 100% 100%;
  padding: 20px;
  color: rgb(223, 223, 223);
}
.warn-title {
  width: 40%;
  margin: 10px;
}
.warn-info >div, .suggestion-part, .input-part, .submit-btn > div {
  box-sizing: border-box;
  background-image: url('../assets/item_bg_2.png');
  background-size: 100% 100%;
  border: 1px solid rgb(25, 48, 89);
  border-radius: 5px;
}
.warn-info {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-image: url('../assets/bg_2.png');
  background-size: 100% 100%;
  justify-content:space-around;
  border-radius: 5px;
}
.warn-info > div {
  width: 45%;
  text-align: left;
  padding: 3px;
  margin: 10px;
  font-size: 16px;
  line-height: 50px;
}
.info-img {
  float: left;
  margin-left: 5px;
  margin-right: 5px;
  width: 45px;
  height: 45px;
  background-size: 100% 100%;
}
.middle-part {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.middle-part > div {
  width: 48%;
  box-sizing: border-box;
  padding: 20px;
}
.suggestion-title {
  letter-spacing: 2px;
  font-size: 16px;
}
.suggestion-part > div {
  background-color: rgb(25, 48, 85);
  margin-top: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  min-height: 150px;
  text-align: left;
  text-indent: 10px;
}
.input-part {
  text-align: left;
  box-sizing: border-box;
  padding: 10px;
}
.input-part > div {
  margin-bottom: 18px;
  margin-left: 10px;
}
.input-part > div > div {
  margin-bottom: 10px;
}
.input-part input {
  border: none;
  background-color: rgb(22, 41, 70);
  height: 20px;
  border-radius: 3px;
}
.submit-btn {
  cursor: pointer;
  display: inline-block;
  box-sizing: content-box;
  margin: 30px;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 20px;
  text-indent: 10px;
  background-image: url('../assets/item_bg_1.png');
  background-size: 100% 100%;
  border: 1px solid rgb(25, 48, 89);
  padding: 10px;
  border-radius: 40px;
}
.submit-btn > div {
  box-sizing: content-box;
  padding: 10px;
  border-radius: 30px;

}
.submit-btn > div:hover {
  background-image: url('../assets/item_bg_1.png');
  color: rgb(255, 255, 255);
}

</style>

<template>
  <div class="warn-body">
    <img class="warn-title" src="/static/image/warn/警告.png"/>
    <div class="warn-info">
      <div v-for="(i, index) in warnInfo" :key="index">
        <div class="info-img" :style="{backgroundImage: 'url(' + i.img + ')'}"></div>
        <span>{{i.text}}：</span>
        {{warnData[i.name]}}
      </div>
    </div>
    <div class="middle-part">
      <div class="suggestion-part">
        <span class="suggestion-title">参考值范围以及建议措施</span>
        <div>
          <div v-for="(s, sindex) in warnData.suggestion.split(';')" :key="sindex">
            <span v-if="s !== ''">□</span>{{s}}
          </div>
        </div>
      </div>
      <div class="input-part">
        <div v-for="(i, index) in inputInfo" :key="index">
          <div>{{i.text}}：</div>
          <input type="text" name="i.name">
        </div>
      </div>
    </div>
    <div class="submit-btn"><div>上报</div></div>
  </div>
</template>

<script>
var warnData = {
  bid: 10231023,
  eid: 12345678,
  warnName: '体重',
  warnData: 260,
  suggestion: '病症A 评估概率50%;病症B 评估概率70%'
}
var warnInfo = [
  {
    name: 'bid',
    text: '基站号',
    img: '/static/image/warn/基站管理.png'
  },
  {
    name: 'eid',
    text: '耳标编号',
    img: '/static/image/warn/编号.png'
  },
  {
    name: 'warnName',
    text: '异常数据名',
    img: '/static/image/warn/异常.png'
  },
  {
    name: 'warnData',
    text: '异常值',
    img: '/static/image/warn/数据.png'
  }
];
var inputInfo = [
  {
    text: '实测异常数据值',
    name: 'realData'
  },
  {
    text: '其他说明',
    name: 'other'
  },
  {
    text: '兽医编号',
    name: 'doctorid'
  }
]
export default {
  data: function() {
    return {
      warnInfo,
      inputInfo
    }
  },
  props: {
    warnData: Object
  }
}
</script>
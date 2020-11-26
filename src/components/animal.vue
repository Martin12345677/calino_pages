
表格
<style scoped>
.main-part {
  background-image: url('../assets/bg.png');
  background-size: 100% 100%;
  background-attachment: fixed;
  color: white;
}
.main-title {
  font-size: 30px;
  font-weight: bold;
  padding: 30px 0px 0 0;
  text-indent: 30px;
  background-color: rgb(21, 31, 51);
}
.brief-data {
  padding-top: 7px;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
}
.detail-data {
  display: flex;
}
.data-table {
  background-color: rgba(13, 23, 44, 0.507);
  width: 70%;
  column-count: 3;
  font-size: 20px;
  padding: 0 20px 10px 20px;
}
.data-table>div {
  box-sizing: content-box;
  padding: 10px;
  /* border-bottom: 1px solid rgb(171, 178, 191); */
}
.label {
  float: left;
  height: 20px;
  width: 3px;
  background-color: rgb(117, 124, 138);
  margin-left: -10px;
  margin-top: 5px;
}
.data-img {
  margin-left: 50px;
  background-image: url('../assets/pig.jpg');
  background-size: 100% 100%;
  width: 200px;
  height: inherit;
  border-radius: 15px;
}

</style>
发育情况
<style scoped>
.grow-data {
  width: 21%;
  box-sizing: border-box;
  margin: 10px;
  border: rgba(97, 119, 165, 0.726) 1px solid;
  background-image: url('../assets/item_bg_2.png');
  background-size: 20% 100%;
  padding: 17px;
  font-size: 20px;
}
.grow-text, .grow-input, .grow-btn, .preview-float {
  box-sizing: border-box;
  border: rgba(61, 79, 117, 0.726) 1px solid;
  background-image: url('../assets/item_bg_1.png');
  background-size: 100% 100%;
}
.grow-text {
  font-size: 17px;
  margin-top: 10px;
  padding: 10px;
  line-height: 30px;
}
.grow-input {
  display: block;
  width: 100%;
  height: 30px;
  color: white;
  text-align: center;
  font-size: 15px;
  margin-top: 30px;
}
.grow-btn {
  width: 50%;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  font-size: 15px;
  padding: 5px;
  letter-spacing: 10px;
  cursor: pointer;
}
.grow-input::placeholder {
  color: white;
}
.grow-input:focus::placeholder {
  color: rgba(122, 122, 122, 0.603);
}


</style>

组件
<style scoped>
.right-data {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
}
.right-data>div {
  width: 45%;
  margin-right: 10px;
  margin-bottom: 10px;
}
.canvas {
  margin: auto;
  width: 100%;
  height: 260px;
  box-sizing: border-box;
  padding: 15px;
  border: rgba(97, 119, 165, 0.726) 1px solid;
  background-image: url('../assets/item_bg_2.png');
  background-size: 100% 100%;
}
</style>


预测
<style scoped>
.preview-data>div>div {
  margin: 10px;
  font-size: 15px;
  line-height: 25px;
  padding: 5px;
}
.preview-float {
  float: right;
  width: 50%;
  border-radius: 4px;
  text-align: center;
  padding: 5px;
}
.preview-data>div>div:last-child>.preview-float {
  min-height: 80px;
}
</style>
<template>
  <div class="main-part">
    <div class="main-title">
      人工智能监控台
    </div>
    <div class="brief-data">
      <div class="data-table">
        <div v-for="(info, index) in briefInfo" :key="index">
          <div class="label"></div>
          <span> {{info.text}}:</span>
          {{animal[info.name]}}{{info.unit}}
        </div>
      </div>
      <div class="data-img"></div>
    </div>
    <div class="detail-data">
      <div class="grow-data">
        <div class="grow-title">
          发育情况记录
        </div>
        <div class="grow-text">
          {{animal.growRecord}}
        </div>
        <input type="text" class="grow-input" placeholder="这是输入框">
        <div class="grow-btn">
          上报
        </div>
      </div>
      <div class="right-data">
        <div class="sport-data">
          <mycanvas v-bind="sportCanvas" class="canvas">
          </mycanvas>
        </div>
        <div class="food-data">
          <mycanvas v-bind="foodCanvas" class="canvas"></mycanvas>
        </div>
        <div class="weight-data">
          <mycanvas v-bind="weightCanvas" class="canvas"></mycanvas>
        </div>
        <div class="preview-data">
          <div class="canvas">
            <div v-for="(info, index) in previewData" :key="index">
              <div class="preview-float">{{animal[info.name]}}{{info.unit}}</div>
              <span> {{info.text}}:</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      briefInfo: [
        {
          name: 'aid',
          text: '编号',
          unit: ''
        },
        {
          name: 'sex',
          text: '性别',
          unit: ''
        },
        {
          name: 'time',
          text: '入槛时间',
          unit: ''
        },
        {
          name: 'weight',
          text: '体重',
          unit: 'kg'
        },
        {
          name: 'lastEat',
          text: '进食时间',
          unit: 'min'
        },
        {
          name: 'sport',
          text: '运动量',
          unit: ''
        },
        {
          name: 'sleep',
          text: '睡眠质量',
          unit: ''
        },
        {
          name: 'battery',
          text: '耳标电量',
          unit: ''
        },
        {
          name: 'sexy',
          text: '发情情况',
          unit: ''
        },
      ],
      previewData: [
        {
          name: 'previewSexy',
          text: '下次发情日期预测',
          unit: ''
        },
        {
          name: 'previewFood',
          text: '本日饲料建议',
          unit: ''
        },
        {
          name: 'goalWeight',
          text: '目标出栏体重',
          unit: 'kg'
        },
        {
          name: 'other',
          text: '其他',
          unit: ''
        },
      ],
      animal: {
        aid: '12564638',
        sex: '公',
        time: '2000-01-01',
        lastEat: 15,
        weight: 100,
        sport: 4,
        sleep: 8,
        battery: 100,
        sexy: '否',
        growRecord: '2001年，体重110\n2002年，体重120\n2003年，体重110\n2004年，体重120\n2005年，体重110\n2006年，体重120\n2007年，体重110\n2008年，体重120\n',
        sportRecord: [
          8, 9, 10, 10, 8, 9, 9, 7, 8, 9, 10, 8
        ],
        foodRecord: [
          200, 201, 190, 195, 220, 210, 200, 201, 190, 195, 220, 210
        ],
        weightRecord: [
          200, 201, 190, 195, 220, 210, 200, 201, 190, 195, 220, 210
        ],
        previewSexy: '2020-03-31',
        previewFood: 220,
        goalWeight: 240,
        other: ' '
      },
      sportCanvas: {
        id: 'sport-canvas',
        Yname: 'sport',
        Ytitle: 'Sports in a week',
        title: '运动量统计',
        data: [
          8, 9, 10, 10, 8, 9, 9, 7, 8, 9, 10, 8
        ]
      },
      foodCanvas: {
        id: 'food-canvas',
        Yname: 'food',
        title: '进食量统计',
        data: [
          200, 201, 190, 195, 220, 210, 200, 201, 190, 195, 220, 210
        ]
      },
      weightCanvas: {
        id: 'weight-canvas',
        Yname: 'weight',
        title: '体重统计',
        data: [
          200, 201, 190, 195, 220, 210, 200, 201, 190, 195, 220, 210
        ]
      }
    };
  },
  created: function() {
    console.log(this.$route.params.pid);
    console.log(this.$route.params.bid);
  }
}
</script>


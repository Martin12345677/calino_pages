<style>
body {
    background-attachment: fixed;
    min-width: 1400px;
    font-family: 'Microsoft YaHei', Arial ,Verdana;
    overflow-x: auto;
    overflow-y: auto;
}
</style>
<style scoped>
.main {
    background-color: rgb(12, 19, 33);
    min-height: 100vh;
}
.left-menu {
    width: 15%;
    float: left;
    background-color: rgba(39, 72, 116, 0.418);
}
.left-top {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border-right: 1px solid rgb(50, 63, 88);
    border-bottom: 1px solid rgb(50, 63, 88);
    background-image: url('../static/image/logo.png');
    background-size: 100% 100%;
}
.left-body {
  background-color: rgb(12, 19, 33);
  padding: 24px 0 24px 0;
  font-size: 21px;
  color: white;
  font-weight: 500;
}
.title-part {
    width: 85%;
    height: 80px;
    margin-left: 15%;
    border-left: 1px solid rgb(50, 63, 88);

}
.title-img {
    background-image: url('./assets/title.png');
    margin: auto;
    background-size: 100% 85%;
    background-position-y: center;
    background-repeat: no-repeat;
    width: 480px;
    height: 80px;
}
.left-body>a {
  margin: auto;
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 7px 25px 7px 25px;
  margin: 12px 0 22px 0;
  cursor: pointer;
  position: relative;
  color: white;
  text-decoration: none;
}
.left-body>a:hover {
  background-color: rgb(29, 39, 61);
}
.menu-img {
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  margin-right: 20px;
}
.menu-label {
  display: none;
}
.menu-selected .menu-label {
  display: block;
  position: absolute;
  margin-right: 0;
  width: 4px;
  height: 17px;
  background-color: rgb(60, 118, 244);
  right: 0;
  top: 13px;
}
.menu-selected {
  background-color: rgb(29, 39, 61);
}

.footer {
    width: 85%;
    margin-left: 15%;
    height: 40px;
    text-align: center;
    font-size: 18px;
    font-family: 'Microsoft YaHei UI';
    line-height: 40px;
    color: snow;
}

.route-part {
  margin-left: 15%;
  width: 85%;
}

</style>

<template>
  <div id="app">
    <div class="main">
      <div class="left-menu">
        <div class="left-top"></div>
        <div class="left-body">
          <router-link v-for="m in menuInfo" :key="m.id" :to="m.href" :class="{'menu-selected': $route.name===m.routeName}">
            <div class="menu-img" :style="{backgroundImage: 'url(' + m.img + ')'}">
            </div>
            <span>
              {{m.name}}
            </span>
            <div class="menu-label"></div>
          </router-link>
        </div>
      </div>
      <div class="title-part">
          <div class="title-img"></div>
      </div>
      <router-view class="route-part" @change_menu="changePage($event)"/>
      <div class="footer">
          <label class="right-text">津ICP备19005810号</label>
      </div>
    </div>
  </div>
</template>

<script>
var menuInfo = [
  {
    name: '中央控制台',
    id: 1,
    img: 'static/image/控制.png',
    href: '/',
    routeName: 'home'
  },
  {
    name: '实时数据大屏',
    id: 2,
    img: 'static/image/数据.png',
    href: '/',
    routeName: 'pig'
  },
  {
    name: '视频监控系统',
    id: 3,
    img: 'static/image/视频.png',
    href: '/',
    routeName: 'video'
  },
  {
    name: '异常信息汇总',
    id: 4,
    img: 'static/image/异常答复.png',
    href: '/warns',
    routeName: 'warns'
  },
  {
    name: '资讯中心',
    id: 5,
    img: 'static/image/资讯.png',
    href: '/news',
    routeName: 'news'
  },
  {
    name: '技术支持中心',
    id: 6,
    img: 'static/image/客服.png',
    href: '/technology',
    routeName: 'technology'
  },
]

export default {
  name: 'App',
  data: function () {
    return {
      menuId: 1,
      menuInfo,
    }
  },
  methods: {
    changePage : function (id) {
      if(this.menuId === id) return;
      try {
        id = parseInt(id);
      } catch (e) {
        console.log(e);
        return;
      }
      this.menuId = id;
      if(id === 1) {
        this.$router.push('/');
      }
    }
  }
}
</script>

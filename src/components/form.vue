<style lang="less">
@border-style: 1px solid rgba(39, 53, 82, 0.856);
.date-container {

  .el-input {
    line-height: 30px;
    .el-input__inner {
      height: 30px;
      line-height: 30px;
      background-image: url(../assets/item_bg_1.png);
      background-size: 100% 100%;
      color: white;
      border: @border-style;
    }
    .el-input__icon {
      line-height: 30px;
    }
  }
}
.form-footer {

  .pagination-center {
    text-align: center;
  }
  .pagination-right {
    text-align: right;
  }
  .pagination-left {
    text-align: left;
  }

  .el-pagination {
    color: white;

    span {
      color: white;
    }

    .el-input {

      .el-input__inner {
        color: white;
        background-image: url(../assets/item_bg_1.png);
        background-size: 100% 100%;
        border: @border-style;
        
      }
      .el-input__icon {
        color: white;
      }
    }

    button {
      background-image: url(../assets/item_bg_1.png);
      background-size: 100% 100%;
      border: @border-style;
      color: white;
      &:disabled {
        color: rgb(182, 182, 182);
      }
    }

    ul {
      li {
        background-image: url(../assets/item_bg_1.png);
        background-size: 100% 100%;
        border: @border-style;
        color: rgb(182, 182, 182);
        &.active {
          color: white;
        }
      }
    }
    
  }
}
</style>

<style lang="less" scoped>

.form-container {
  color: white;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;

  .form-header {
    position: relative;
    box-sizing: border-box;
    margin: 20px;

    .form-title {
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 3px;
    }

    .search-part {
      float: right;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      .search-icon {
        width: 20px;
        height: 20px;
        background-image: url(/static/image/search.png);
        background-size: 100% 100%;
        margin-right: 5px;
      }
    }
  }

  .form-main {
    margin-left: 5px;
    margin-right: 20px;
    min-height: 430px;

    .border-style(@width) {
      @style: svg-gradient(to right, rgba(26, 43, 77, 0.568), rgba(207, 207, 207, 0.856) 50%, rgba(26, 43, 77, 0.568)) @width stretch;

      -moz-border-image: @style; /* 老版本的 Firefox */
      -webkit-border-image: @style; /* Safari */
      -o-border-image: @style; /* Opera */
      border-image: @style;
    }

    .form-item {
      box-sizing: border-box;
      width: 100%;
      padding: 7px 0;
      font-size: 20px;
      cursor: pointer;
      border: 1px solid transparent;
      .border-style(1 0 0 0);

      &:last-child {
        .border-style(1 0 1 0);
      }

      .item-name {
        letter-spacing: 2px;

        span {
          color: red;
        }
      }
      .item-time {
        float: right;
      }

      &:hover {
        color: rgb(203, 211, 248);
      }
    }
  }

  .form-footer {
    margin: 15px;

  }
}

.show-bg {
  
  background-image: url(../assets/item_bg_2.png);
  background-size: 100% 100%;
  border-radius: 5px;
  box-shadow: 2px 0px 10px rgba(74, 123, 202, 0.863);
	-webkit-box-shadow: 2px 0px 10px rgba(74, 123, 202, 0.863);

}
 
</style>

<template>
  <div class="form-container" :class="{'show-bg': showBackground}">
    <div class="form-header">
      <div class="search-part">
        <div class="search-icon"></div>
        <div class="date-container">
          <el-date-picker
            prefix-icon="none"
            type="year"
            placeholder=""
            v-model="date"
            value-format="yyyy"
          ></el-date-picker>
        </div>
      </div>
      <div class="form-title">
        {{ title }}
      </div>
    </div>

    <div class="form-main">
      <div class="form-item"
        v-for="(item, index) in currentRows"
        :key="index"
      >
        <div class="item-time" v-if="showTime">
          {{item.date}}
        </div>
        <div class="item-name">
          <span>●</span>{{item.name}}
        </div>
      </div>
    </div>

    <div class="form-footer">
      <el-pagination
        :class="'pagination-' + paginationAlign"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curentIndex + 1"
        :page-sizes="[10, 15, 20, 30]"
        :page-size="size"
        :layout="hideSize ? 'total, prev, pager, next' : 'total, sizes, prev, pager, next, jumper'"
        :total="showRows.length"
      ></el-pagination>
    </div>

  </div>
</template>

<script>
import {
  DatePicker,
  Pagination
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: 'my-form',
  components: {
    'el-date-picker': DatePicker,
    'el-pagination': Pagination
  },
  props: {
    title: String,
    showTime: Boolean,
    showBackground: Boolean,
    rows: Array,
    paginationAlign: String,
    hideSize: Boolean,
    size: {
      type: Number,
      default: 15
    }
  },
  data () {
    return {
      date: '',
      curentIndex: 0
    }
  },
  computed: {
    currentRows: function () {
      return this.showRows.slice(this.curentIndex, this.size);
    },
    showRows: function () {
      return this.date ? this.rows.filter(item => {
        return item.date.startsWith(this.date)
      }) : this.rows;
    }
  },
  methods: {

    handleSizeChange: function (size) {
      this.size = size;
      this.curentIndex = 0;
    },

    handleCurrentChange: function (index) {
      this.curentIndex = index - 1;
    }
  }
}
</script>

<style scoped>
.title {
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 20px;
}
.canvas-part {
  width: 100%;
  height: 95%;
}
</style>
<template>
  <div class="canvas-body">
    <div class="title">{{title}}</div>
    <div :id="id" class="canvas-part"></div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
// // am4core.useTheme(am4themes_animated);
// // am4core.useTheme(am4themes_kelly);
export default {
  props: {
    Xname: String,
    Xtitle: String,
    Yname: String,
    Ytitle: String,
    data: Array,
    title: String,
    id: String
  },
  mounted: function() {
    this.$nextTick(this.buildCanvas);
  },
  methods: {
    buildCanvas: function () {
      try {
         var chart = am4core.create(
          this.id,
          am4charts.XYChart
        );
        chart.cursor = new am4charts.XYCursor();

        let date = new Date();
        let i = 0;
        chart.data = this.data.map(d => {
          var o = {};
          o[this.Yname] = d;
          o.date = new Date(date.getTime()-i*24*60*60*1000);
          i++;
          return o;
        });

        var categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
        categoryAxis.dataFields.category = 'date';
        categoryAxis.gridAlpha = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0.3;
        categoryAxis.renderer.grid.template.stroke = am4core.color("white");
        categoryAxis.renderer.labels.template.fill = am4core.color("white");

        // categoryAxis.renderer.grid.template.location = 0.5;
        // categoryAxis.renderer.labels.template.location = 0.5;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.strokeOpacity = 0.3;
        valueAxis.renderer.grid.template.stroke = am4core.color("white");
        valueAxis.renderer.labels.template.fill = am4core.color("white");
        // valueAxis.title.text = this.Ytitle;

        var series = chart.series.push(new am4charts.LineSeries());
        // series.name = this.Ytitle;
        // series.bullets.push(new am4charts.CircleBullet());
        series.dataFields.valueY = this.Yname;
        series.dataFields.dateX = 'date';
        series.name = this.Yname;
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        series.strokeWidth = 2;
        series.stroke = am4core.color("rgb(60, 118, 244)");
        try {
          document.querySelectorAll(".canvas-part > div > svg > g > g:nth-child(2) > g:nth-child(2) > g > g:nth-child(3)").forEach(d => {
            d.style.display = 'none';
          })
        }
        catch (e) {
          console.log(e);
        }
      }
      catch(e) {
        console.log(e);
        // setTimeout(this.buildCanvas, 100);
      }
      
    }
  }
}
</script>

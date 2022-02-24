<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
export default {
  name: 'Flaymap',
  mixins: [common],
  data() {
    return {}
  },
  computed: {
    geoCoordMap() {
      return this.dataChart.geoCoordMap || {}
    },
    mapData() {
      return this.option.mapData || {}
    },
    borderWidth() {
      return this.option.borderWidth || 3
    },
    borderColor() {
      return this.option.borderColor || '#389BB7'
    },
    areaColor() {
      return this.option.areaColor || '#0c162f'
    },
    empColor() {
      return this.option.empColor || '#fff'
    },
    empAreaColor() {
      return this.option.empAreaColor || 'yellow'
    },
    color() {
      return this.option.color || '#fff'
    }
  },
  watch: {
    mapData() {
      this.updateChart()
    },
    width() {
      this.updateData()
    },
    height() {
      this.updateData()
    }
  },
  methods: {
    async updateChart() {
      this.$echarts.registerMap('china', this.option.chinaData)
      const color = ['#a6c84c', '#ffa022', '#46bee9']
      const planePath =
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
      const series = []
      this.dataChart.series.forEach((item, i) => {
        series.push(
          {
            name: item.name,
            type: 'lines',
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: '#fff',
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
              }
            },
            data: this.convertData(item.data)
          },
          {
            name: item.name,
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: this.convertData(item.data)
          },
          {
            name: item.name,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbolSize(val) {
              return val[2] / 8
            },
            itemStyle: {
              normal: {
                color: color[i]
              }
            },
            data: item.data.map(dataItem => {
              return {
                name: dataItem[1].name,
                value: this.geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value
                ])
              }
            })
          }
        )
      })
      const option = {
        title: this.title(),
        tooltip: {
          trigger: 'item'
        },
        animation: this.animation,
        // legend: this.legend(),
        grid: this.grid(),
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          zoom: this.option.zoom,
          itemStyle: {
            borderWidth: this.borderWidth,
            borderColor: this.borderColor,
            areaColor: this.areaColor,
            emphasis: {
              areaColor: this.option.empColor || '#2a333d'
            }
          }
        },
        series
      }
      this.myChart.resize()
      this.myChart.setOption(option)
    },
    convertData(data) {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const dataItem = data[i]
        const fromCoord = this.geoCoordMap[dataItem[0].name]
        const toCoord = this.geoCoordMap[dataItem[1].name]
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord]
          })
        }
      }
      return res
    }
  }
}
</script>

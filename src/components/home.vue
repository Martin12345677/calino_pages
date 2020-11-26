
<style scoped>

.data-part {
    background-image: url('../assets/bg.png');
    background-size: 120% 120%;
    background-position: center center;
    margin-left: 15%;
    display: flex;
    flex-wrap: nowrap;
    min-height: 800px;
}
.data-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 95%;
}
.data-container>div {
    width: 30%;
    color: aliceblue;
}
.base-info {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
    background-color: rgba(39, 72, 116, 0.418);
    border-radius: 10px;
}
.base-info>div {
    width: 46%;
    margin: 2px;
    font-size: 16px;
    background-image: url(../assets/item_bg.png);
    background-size: 100% 100%;
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 5px;
    border: 2px solid rgba(60, 103, 172, 0.863);
}
.base-info>div:last-of-type {
    background: none;
    border: none;
    font-size: 20px;
    text-indent: 10px;
}
.info-id>div {
    font-size: 25px;
    font-weight: bold;
    margin-top: 5px;
}

.info-img {
    width: 50px;
    height: 50px;
    background-size: contain;
    float: right;
    margin: 5px;
}
.info-data {
    font-size: 20px;
    font-weight: bold;
}
.info-name {
    margin-top: 5px;
}
.info-data, .info-name {
    margin-left: 20px;
}

.animal-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}
.animal-info>div {
    margin-top: 10px;
    width: 48%;
    background-color: rgba(39, 72, 116, 0.418);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px;
    padding-top: 4px;
    cursor: pointer;
}
.animal-info>div>div {
    background-image: url(../assets/item_bg_2.png);
    background-size: 100% 100%;
    margin-top: 2px;
    border-radius: 5px;
    border: 1px solid rgba(60, 103, 172, 0.863);
    line-height: 30px;
}
.animal-info>div>div:last-of-type {
    border: none;
    background: none;
    text-align: center;
    font-size: 20px;
}
.animal-id>span {
    margin-left: 7px;
}
.animal-info .info-img {
    float: left;
    width: 30px;
    height: 25px;
    background-size: 150% 170%;
    background-position: center center;
    padding: 0;
    margin-right: 0;
}
.animal-info .info-name {
    margin-left: 10px;
    font-size: 13px;
}
.animal-info .info-data {
    float: right;
    margin-right: 5px;
    margin-left: 0;
    font-size: 18px;
}

.page-menu {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5px;
    margin-top: 20vh;
}
.pageup-btn, .pagedown-btn {
    width: 40px;
    height: 35px;
    background-size: 100% 100%;
    margin: 5px;
    opacity: 0.3;
    cursor: pointer;
}
.pageup-btn:hover, .pagedown-btn:hover {
    opacity: 1;
}
.pageup-btn {
    background-image: url(../assets/pageup.png);
}
.pagedown-btn {
    background-image: url(../assets/pagedown.png);
}
.page-menu>input {
    width: 30px;
    height: 40px;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    color: snow;
    background-color: rgb(31, 53, 85);
    border: rgb(102, 107, 117) solid 1px;
}
.page-menu>input:focus {
    border: none;
    border-radius: 5px;
}

</style>

<template>
        <div class="data-part">
            <div class="data-container">
                <div v-for="base in allBases.bases" class="base-part" :key="base.index">
                    <div class="base-info">
                        <div v-for="(info, index) in baseInfo" :key="index">
                            <div :style='{ backgroundImage: "url(" + info.src + ")" }' class="info-img"></div>
                            <div class="info-name">
                                {{info.name}}
                            </div>
                            <div class="info-data">
                                {{base[info.pname]}}
                                <span>{{info.unit}}</span>
                            </div>
                        </div>
                        <div class="info-id">
                            基站号
                            <div>{{base.bid}}</div>
                        </div>
                    </div>
                    <div class="animal-info">
                        <div v-for="(animal, aindex) in base.showAnimals" :key="aindex" @click="getDetail(base.bid, animal.aid)" title="查看详情">
                            <div v-for="(info, index) in animalInfo" :key="index">
                                <div class="info-img" :style='{ backgroundImage: "url(" + info.src + ")" }'></div>
                                <span class="info-name">{{info.name}} : </span>
                                <span class="info-data">{{animal[info.pname]}}{{info.unit}}</span>
                            </div>
                            <div class="animal-id">
                                编号<span>{{animal.aid}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-menu">
                <div class="pageup-btn" @click="page-->1?changePage():page++"></div>
                <input v-model="page" @change="changePage()">
                <div class="pagedown-btn" @click="page++;changePage()"></div>
            </div>
        </div>
</template>

<script>
export default {
    data: function () {
        return {
            page: 1,
            baseInfo: [
                {
                    name: '一氧化碳',
                    unit: '',
                    pname: 'co',
                    src: '/static/image/一氧化碳.png'
                },
                {
                    name: '二氧化碳',
                    unit: '',
                    pname: 'co2',
                    src: '/static/image/二氧化碳.png'
                },
                {
                    name: '硫化氢',
                    unit: '',
                    pname: 'h2s',
                    src: '/static/image/硫化氢.png'
                },
                {
                    name: '氨气',
                    unit: '',
                    pname: 'nh3',
                    src: '/static/image/氨气.png'
                },
                {
                    name: '光照值',
                    unit: '',
                    pname: 'sun',
                    src: '/static/image/光照值.png'
                },
                {
                    name: '温度',
                    unit: '℃',
                    pname: 'temperature',
                    src: '/static/image/温度.png'
                },
                {
                    name: '湿度',
                    unit: '',
                    pname: 'damp',
                    src: '/static/image/湿度.png'
                },
            ],
            animalInfo: [
                {
                    name: '进食时间',
                    unit: 'min',
                    pname: 'time',
                    src: '/static/image/时间.png'
                },
                {
                    name: '体重',
                    unit: 'kg',
                    pname: 'weight',
                    src: '/static/image/体重.png'
                },
                {
                    name: '运动量',
                    unit: '',
                    pname: 'sport',
                    src: '/static/image/运动量.png'
                },
                {
                    name: '睡眠质量',
                    unit: '',
                    pname: 'sleep',
                    src: '/static/image/睡眠质量.png'
                },
                {
                    name: '电量',
                    unit: '%',
                    pname: 'battery',
                    src: '/static/image/电量.png'
                }
            ],
            allBases: {
                baseNum: 10,
                bases: [
                   {
                        index: 0,
                        bid: 123456789,
                        co: 0,
                        h2s: 0,
                        sun: 0,
                        temperature: 0,
                        damp: 0,
                        nh3: 0,
                        co2: 0,
                        animals: [
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123457,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123457,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123457,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123457,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123458,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                        ],
                    },
                    {
                        index: 1,
                        bid: 123456789,
                        co: 0,
                        co2: 0,
                        h2s: 0,
                        sun: 0,
                        temperature: 0,
                        damp: 0,
                        nh3: 0,
                        animals: [
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                        ],
                    },
                    {
                        index: 2,
                        bid: 123456789,
                        co: 0,
                        co2: 0,
                        h2s: 0,
                        sun: 0,
                        temperature: 0,
                        damp: 0,
                        nh3: 0,
                        animals: [
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                            {
                                aid: 123456,
                                time: 15,
                                weight: 66,
                                sport: 123,
                                battery: 100,
                                sleep: 100
                            },
                        ],
                    }
                ]

            },
            showBases: [
                
            ]
        }
    },
    created: function () {
        let start = (this.page - 1) * 3;
        let end = start + 4;

        this.showBases = this.allBases.bases.slice(0, 3).map(base => {
            base.showAnimals = base.animals.slice(start, end);
            return base;
        });
    },
    methods: {
        changePage: function() {
            try{
                var page = parseInt(this.page);
            }
            catch(err){
                return;
            }
            let bases = this.showBases;
            var start, end;
            if(page < 1) {
                this.page = 1;
                start = 0;
                end = 3;
            }else{
                let length = bases[0].animals.length;
                if ((page - 1) * 4 >= length) {
                    page = Math.ceil(length / 4);
                }
                start = 4 * (page - 1);
                end = start + 4;
                this.page = page;
            }
            bases = [].concat(bases);
            this.showBases.bases = bases.slice(0, 3).map(base => {
                base.showAnimals = base.animals.slice(start, end);
                return base;
            });
            bases = null;

        }, 
        getDetail: function (bid, aid) {
            this.$emit('change_menu', 2);
            this.$router.push('/' + bid + '/pig/' + aid);
        }
    }
}
</script>

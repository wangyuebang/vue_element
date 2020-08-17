<template>
    <div>
        <van-tabs v-model="active" stick>
            <van-tab title="关注">
                <van-button type="primary" url="/colorUiTestPage">跳转colorUI</van-button>
            </van-tab>
            <van-tab title="问答">内容 2</van-tab>
            <van-tab title="栏目">内容 3</van-tab>
            <van-tab title="视频">内容 4</van-tab>
            <van-tab title="直播">内容 5</van-tab>
            <van-tab title="日报">内容 6</van-tab>
        </van-tabs>
        <!--底部菜单栏-->
        <van-tabbar v-model="active" >
            <van-tabbar-item >首页</van-tabbar-item>
            <van-tabbar-item >答题</van-tabbar-item>
            <van-tabbar-item >
                <van-cell is-link @click="showPopup">问</van-cell>
                <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }" >
                    <van-grid direction="horizontal" :column-num="1">
                        <van-grid-item icon="photo-o" text="图文提问" />
                        <van-grid-item icon="photo-o" text="视频提问" />
                        <van-grid-item icon="photo-o" text="1V1找人问" />
                    </van-grid>
                </van-popup>
            </van-tabbar-item>
            <van-tabbar-item >在线聊</van-tabbar-item>
            <van-tabbar-item >我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tag } from 'vant';
    import Vue from 'vue';
    import {Tabbar, TabbarItem} from "vant";
    import { Popup } from 'vant';
    import { Grid, GridItem } from 'vant';
    import { Tab, Tabs } from 'vant';
    import { Button } from 'vant';

    Vue.use(Button);
    Vue.use(Tab);
    Vue.use(Tabs);
    Vue.use(Grid);
    Vue.use(GridItem);
    Vue.use(Popup);
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Tag);

    export default {
        data() {
            return {
                active: 0,
                show: false,
                ColorList: this.ColorList,
                shadow: false,
                bordersize: ''

            };
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            SetShadow(e) {
                this.shadow = e.detail.value
            },
            SetBorderSize(e) {
                this.bordersize = e.detail.value
            }
        },
    }
</script>

<style scoped>

</style>
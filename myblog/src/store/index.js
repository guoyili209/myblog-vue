import Vue from 'vue'
import Vuex from 'vuex'

import { request } from '../network/request'

import qs from "qs"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        leaveMsgData: [],
        pageCountData: []
    },
    getters: {
        leaveMsgData(state) {
            return state.leaveMsgData;
        },
        pageCountData(state) {
            return state.pageCountData;
        }
    },
    mutations: {
    },
    actions: {
        requestLeaveMessage(context, payload) {
            context.state.leaveMsgData=[]
            return new Promise((resolve, reject) => {
                request({
                    url: "/msgboard?page=1"
                }).then(res => {
                    // console.log(res.data);
                    // console.log(res.status);
                    // console.log(res.statusText);
                    // console.log(res.headers);
                    // console.log(res.config);
                    var objdata = res.data;
                    for (var i = 0; i < objdata.length; i++) {
                        var date = new Date(objdata[i].time);
                        context.state.leaveMsgData.unshift({ msg: objdata[i].msg, ymd: date.toLocaleDateString(), time: date.toLocaleTimeString(), ipregion: objdata[i].ipregion });
                    }
                    resolve(context.state.leaveMsgData)
                }).catch(err => {
                    console.log(err);
                })
            })

        },
        requestPagesCount(context, payload) {
            context.state.pageCountData=[]
            return new Promise((resolve, reject) => {
                request({
                    url: "/msgpagecount"
                }).then(res => {
                    var pagecount = res.data;
                    for (var i = 0; i < res.data; i++) {
                        context.state.pageCountData.push(i + 1);
                    }
                    resolve(context.state.pageCountData)

                }).catch(err => {
                    console.log(err);
                })
            })
        },
        submitMsg(context, str) {
            return new Promise((resolve, reject) => {
                request({
                    method: "post",
                    url: "/msgboard",
                    data: qs.stringify({
                        msg: str
                    })
                }).then(res => {
                    var objdata = res.data;
                    var date = new Date(objdata.time);
                    context.state.leaveMsgData.unshift({
                        msg: str,
                        ymd: date.toLocaleDateString(),
                        time: date.toLocaleTimeString(),
                        ipregion: objdata.ipregion
                    });
                    resolve(context.state.leaveMsgData)

                })
            })
        }
    },
    modules: {
    }
})

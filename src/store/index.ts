import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone";
import fetch from "@/lib/fetch";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        recordList: [] as RecordItem[],
        newRecord: [],
        myChoices: [] as ItemSelected[],
        show: false
    },
    mutations: {
        fetchMyChoices(state) {
            state.myChoices = fetch('choicesItem', `[{"id": "in", "name": "入账"}]`)
        },
        fetchRecordList(state) {
            state.recordList = fetch('recordList', '[]')
        },
        saveRecord(state, record) {
            const record2 = clone(record);
            record2.createAt = new Date();
            state.recordList.push(record2);
        },
        saveRecordList(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
        },
        pushItem(state, value) {
            store.commit('fetchMyChoices');
            let i: number;
            let index: undefined | number;
            for (i = 0; i < state.myChoices.length; i++) {
                if (state.myChoices[i].id === value.id) {
                    index = i
                }
            }
            if (index) {
                state.myChoices.splice(index, 1);
            } else {
                state.myChoices.push(value);
            }
            const choicesItem = clone(state.myChoices);
            window.localStorage.setItem('choicesItem', JSON.stringify(choicesItem));
        },
    },
});

export default store

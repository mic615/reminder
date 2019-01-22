import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state:{
    reminders: []
  },
  actions:{
    getReminders(context){
      axios.get('/api/reminder').then(data=>{
        context.commit('getReminders', data.data)
      })
    },
    addReminder(context,reminder){
      axios.post('/api/reminder',reminder).then(data=>{
        context.commit('addReminder', data.data)
      })

    }

  },
  mutations:{
    getReminders(state,reminders){
      state.reminders=reminders
    },
    addReminder(state,reminder){
      state.reminders.push(reminder)
    }
  },
  getters:{
    reminders: state => {
      return state.reminders
    }
  }
});

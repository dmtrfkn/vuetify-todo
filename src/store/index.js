import Vue from 'vue';
import Vuex from 'vuex';
import { taskModule } from './taskModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { task: taskModule },
});

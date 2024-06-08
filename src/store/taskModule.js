import axios from 'axios';

export const taskModule = {
  namespaced: true,
  state: {
    tasks: [],
  },
  getters: {
    filterTasksByTitle(state) {
      return [...state.tasks].sort((task1, task2) => task1.title?.localeCompare(task2.title));
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    async fetchTasks({ state, commit }) {
      try {
        const fetchedTodos = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        commit('setTasks', fetchedTodos.data);
      } catch (error) {
        console.alert(error);
      }
    },
  },
};

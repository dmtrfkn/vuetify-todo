<template>
  <div class="root">
    <v-text-field
      @click:append="addTask"
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      outlined
      label="Add task"
      class="pa-3 task__text__color"
      append-icon="mdi-plus"
      hide-details
      clearable
      :color="color"
    ></v-text-field>
    <v-btn @click="filterTasks" class="ml-10 mb-3" color="blue" size="x-large">
      Filter By Title
    </v-btn>
    <v-list class="root pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="taskToggle(task.id)"
          class="task__background__default"
          :class="{ task__background: task.completed }"
        >
          <template>
            <v-list-item-action>
              <v-checkbox :input-value="task.completed" color="#512DA8"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content class="flex">
              <v-list-item-title
                class="task__text"
                :class="{ 'text-decoration-line-through': task.completed }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action @click.stop="deleteTask(task.id)">
              <v-btn icon>
                <v-icon color="indigo lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider></v-divider>
      </div>
    </v-list>
    <v-alert v-if="tasks.length < 1" color="purple" outlined class="ma-3">
      <h2>Так держать!</h2>
      Все задачи на сегодня выполнены, теперь можешь отдохнуть за чтением документации
    </v-alert>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Todo',
  data() {
    return {
      newTaskTitle: '',
      color: 'white',
    };
  },
  methods: {
    taskToggle(taskId) {
      let task = this.tasks.filter((i) => i.id === taskId)[0];
      task.completed = !task.completed;
    },
    deleteTask(taskId) {
      this.setTasks(this.tasks.filter((task) => task.id !== taskId));
    },
    addTask() {
      this.setTasks([
        ...this.tasks,
        { id: Date.now(), title: this.newTaskTitle, completed: false },
      ]);
      this.newTaskTitle = '';
    },
    ...mapActions({
      fetchTasks: 'task/fetchTasks',
    }),
    ...mapMutations({
      setTasks: 'task/setTasks',
    }),
    filterTasks() {
      this.setTasks(this.filterTasksByTitle);
    },
  },
  computed: {
    ...mapState({
      tasks: (state) => state.task.tasks,
    }),
    ...mapGetters({
      filterTasksByTitle: 'task/filterTasksByTitle',
    }),
  },
  mounted() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
.root {
  margin: 0;
  padding: 0;
}
.task__background__default {
  background-color: #7899d2;
}
.task__background {
  background-color: #b39ddb;
}

.task__text {
  color: #fff;
}
</style>

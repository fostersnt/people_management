<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <li>{{ myName }}</li>
    <li>{{ myAge }}</li>
  </div>
  <div>
    <form @submit.prevent="getAPI_data" action="">
      <div class="col-md-6">
        <h1>{{ getCounter }}</h1>
        <h1 class="text-success">{{ normalizeCounter }}</h1>
        <label for="name">Name</label>
        <input
          class="form-control mb-2"
          type="text"
          v-model="formData.name"
          name=""
          id=""
        />
        <button class="btn btn-primary w-100" type="submit">Submit</button>
      </div>
      <div></div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";
// import { mapState } from 'vuex'; // Import the mapping functions if needed
// import store from '../store'; // Import your Vuex store

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      formData: {
        name: "",
      },
      myName: "car",
      myAge: 0,
      baseURL: "https://catfact.ninja/",
    };
  },

  computed: {
    ...mapGetters('counterMod', ['getCounter', 'normalizeCounter'])
  },

  methods: {
    currentValues() {
      this.myName = "Fo";
    },
    updateName() {
      // this.$store.commit('UPDATE_NAME', this.formData.name);
    },

    getAPI_data() {
      let url = this.baseURL;
      let endpoint = "fact";

      axios
        .get(url + endpoint)
        .then((response) => {
          this.formData.name = response.data.fact;
          this.$store.commit("counterMod/increment", 5);
          // this.$store.state.counter = this.formData.name;
          console.log(response.data);
          console.log(this.myName);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <form @submit.prevent="getAPI_data" action="">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="formData.name" name="" id="">
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return {
      formData: {
        name: '',
      },
      baseURL: 'https://catfact.ninja/',
    }
  },

  methods: {
    getAPI_data(){
      let url = this.baseURL;
      let endpoint = 'fact';
      
      axios.get(url + endpoint)
      .then(response => {
        this.formData.name = response.data.fact;
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      })
    }
  }
}
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

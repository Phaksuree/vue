<template>
  <div class="AddUser">
    <h1>{{ msg }}</h1>
    <!-- <button v-on:click="Message">Click here</button> -->
    <div class="vframe">
    <form action="">
        <div class="form-group">
            <label class="pull-left">First Name: </label>
            <input type="text" class="form-control" name="" id="" placeholder="firstname" v-model="User.firstName">
        </div>
        <div class="form-group">
            <label class="pull-left">Last Name: </label>
            <input type="text" class="form-control" name="" id="" placeholder="lastname" v-model="User.lastName">
        </div>
        <div class="form-group">
            <label class="pull-left">Email: </label>
            <input type="text" class="form-control" name="" id="" placeholder="enail" v-model="User.email">
        </div>
        <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">submit</button>
        <button type="submit" class="btn btn-large btn-block btn-success full-width">Go to User Page</button>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddUSer',
  data () {
    return {
      msg: 'AddUser',
      User: {
          firstName: '',
          lastName: '',
          email: ''
      }
    }
  },
    methods:{
      Message: function(){
        alert("egco427")
      },
      addToAPI(){
          let newUser= {
              firstName: this.User.firstName,
              lastName: this.User.lastName,
              email: this.User.email
          }
          console.log(newUser);
          axios.post('http://localhost:3000/users', newUser)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
                 
            })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

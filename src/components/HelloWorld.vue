<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-field">
        <label for="name">* Name</label>
        <input type="text" id="name" required>
      </div>
      <div class ="submit-btn">
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
.form-field input  {
  outline: none;
  border: 2px solid black;
  border-radius: 4px;
  padding: 8px 16px;
}

</style>

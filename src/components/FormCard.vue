<template>
  <div class="card">
    <div id ="card-text">
        Форма обратной связи
    </div>
    <div class= "form-field">
      <form>
        <div id="form-field-name">
          <input type="text" id="name" placeholder="Ваше имя" required >
        </div>
        <div id="form-field-mail">
          <input type="text" id="mail" placeholder="E-mail" required>
        </div>
          <textarea type="text" id="text-area" placeholder="О себе" class="textarea-text"></textarea>
        <div>
          <input type="submit" value="Submit" class = "submit-btn">
        </div>
      </form>
    </div>
  </div>
</template>



<script>
export default {
  name: 'FormCard',
  props: {
    msg: String
  }
}
</script>

<style scoped>

#card-text{
  margin: 15px;
}

.form-field input  {
  outline: none;
  border: 2px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 5px;
  height: 30px;
}

.textarea-text{
  border-radius: 4px;
  border: 2px solid black;
  padding: 10px 11px;
  height: 100px;
  margin: 5px;
}

.submit-btn:hover{
  background: #C0C0C0;
}

</style>
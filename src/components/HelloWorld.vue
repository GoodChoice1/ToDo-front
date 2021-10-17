<template>
  <div class="hello">
    <div class="card">
      <h3>
        Фоминых А.Е.
      </h3>
      <div>
        БСБО-06-19
      </div>
      <img src = "@/assets/ava.jpg" width="150" height="150" id ="img">
      <div>
         Мои навыки:
      </div>
      <ul>
        <li>Ем</li>
        <li>Сплю</li>
        <li>Держу банан</li>
      </ul>
    </div>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<style scoped>

.form-field input  {
  outline: none;
  border: 2px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 5px;
  height: 30px;
}

.card {
  border: 2px solid black;
  border-radius: 8px;
  width: 275px;
  height: 350px;
  background: #F29987;
  box-shadow: 6px 8px 8px gray ;
  margin: 20px;
  padding: 10px;
  line-height: 0.7;
  display: inline-block;
  vertical-align: top;
}

#img {
  border: 2px solid black;
  border-radius: 100px;
  margin: 10px;
}

.textarea-text{
  border-radius: 4px;
  border: 2px solid black;
  padding: 10px 11px;
  height: 100px;
  margin: 5px;
}

li{
  margin-bottom: 15px;
}

#card-text{
  margin: 15px;
}

.submit-btn:hover{
  background: #C0C0C0;
}

@media screen and (max-width:600px){
   .button {
      display: block;
   }
}
</style>

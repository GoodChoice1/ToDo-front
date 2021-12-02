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
          <textarea type="text" placeholder="О себе" id="textarea-form-card"></textarea>
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

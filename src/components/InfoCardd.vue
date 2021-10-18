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
  </div>
</template>


<script>
export default {
  name: 'InfoCard',
  props: {
    msg: String
  }
}
</script>

<style scoped>

#img {
  border: 2px solid black;
  border-radius: 100px;
  margin: 10px;
}

li{
  margin-bottom: 15px;
}

</style>

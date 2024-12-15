<template>
    <div class="movies-table">
      <!-- Заголовок таблицы -->
      <div class="movies-table__row movies-table__header">
        <div class="movies-table__cell">id</div>
        <div class="movies-table__cell">Название</div>
        <div class="movies-table__cell">Дата</div>
       
      </div>
  
      <div v-for="movie in movies" :key="movie.id" class="movies-table__row">
    <div class="movies-table__cell">{{ movie.id }}</div>
    <div class="movies-table__cell">{{ movie.name }}</div>
    <div class="movies-table__cell">{{ movie.data }}</div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref} from 'vue'

 export type moviesType = {
  id: number
  name: string
  data:  string | Date
}

const movies = ref<moviesType[]>([ 
    { 
      id: 0, 
      name: 'В метре друг от друга', 
      data: '15.12.2024', 
    }, 
    { 
      id: 1, 
      name: 'Назови меня своим именем', 
      data: '24.12.2024', 
    }, 
    { 
      id: 2, 
      name: 'Энканто', 
      data: '25.12.2024', 
    }, 
    { 
      id: 3, 
      name: 'Русалочка', 
      data: '27.12.2024', 
    } 
  ]) 

</script>
  
  <style scoped>
  .movies-table {
    display: flex;
    flex-direction: column;
    overflow: hidden; 
  }
  
  .movies-table__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #fad89976; 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0; /* Убирает отступы между строками */
    font-weight: lighter;
  }
  
  .movies-table__cell {
    min-width: 120px;
    border: 1px solid #fffbfb; 
    text-align: center;
    padding: 5px; /* Убирает отступ внутри ячеек */
    font-weight: bold;
  }
  
  .movies-table__cell input {
    width: 100%; /* Занимает всю ширину родительского контейнера */
    border: none; /* Убирает стандартную рамку */
    outline: none; /* Убирает обводку при фокусе */
    padding: 4px; /* Добавьте немного внутреннего отступа для удобства */
    box-sizing: border-box; /* Позволяет учитывать padding в ширине элемента */
    background-color: transparent; /* Убирает фон */
    font-weight: bold;
  }
  
  .movies-table__header {
    background-color: #7a3301b9; 
    color: white; 
    font-weight: bold; 
  }
  
  
  
  
  
  
  </style>
  
<template> 
    <div class="tickets-table"> 
        <div class="tickets-table__row"> 
            <div class="tickets-table__cell tickets-table__header">ID</div> 
            <div class="tickets-table__cell tickets-table__header">Пользователь</div> 
            <div class="tickets-table__cell tickets-table__header">Фильм</div> 
            <div class="tickets-table__cell tickets-table__header">Дата</div> 
        </div> 
 
        <div v-for="tickets in ticketss" :key="tickets.id" class="tickets-table__row"> 
            <div class="tickets-table__cell">{{ tickets.id }}</div> 
            <div class="tickets-table__cell">{{ tickets.user.name }}</div> 
            <div class="tickets-table__cell">{{ tickets.movie.name }}</div> 
            <div class="tickets-table__cell">{{ tickets.movie.data }}</div> 
        </div> 
    </div> 
</template> 
 
<script setup lang="ts"> 
import { ref } from 'vue'; 
import { type UserType } from '../UsersPage/UsersTable.vue'; 
import { type moviesType } from '../MoviesPage/MoviesTable.vue'; 
 
type ticketsType = { 
    id: number; 
    user: UserType; 
    movie: moviesType; 
}; 
 
 
const users = ref<UserType[]>([ 
    { id: 0, name: 'Ann', email: 'ann@example.com', created: new Date() }, 
    { id: 1, name: 'Alex', email: 'alex@example.com', created: new Date() }, 
    { id: 2, name: 'Art', email: 'art@art.art', created: new Date()  }, 
    { id: 3, name: 'you', email: 'you@you.you',created: new Date()  }, 
 
]); 
 
const movies = ref<moviesType[]>([ 
    { id: 0, name: 'В метре друг от друга', data: '15.12.2024' }, 
    { id: 1, name: 'Назови меня своим именем', data: '24.12.2024' }, 
    { id: 2, name: 'Энканто', data: '25.12.2024' }, 
    {id: 3, name: 'Русалочка', data: '27.12.2024'}, 
]); 
 
const ticketss = ref<ticketsType[]>([ 
    { 
        id: 0, 
        user: users.value[0], 
        movie: movies.value[0], 
    }, 
    { 
        id: 1, 
        user: users.value[1], 
        movie: movies.value[1], 
    }, 
    { 
        id: 3, 
        user: users.value[2], 
        movie: movies.value[2], 
    }, 
    { 
        id: 4, 
        user: users.value[3], 
        movie: movies.value[3], 
    } 
]); 
</script> 
 
<style scoped> 
.tickets-table { 
    display: flex;
    flex-direction: column;
    overflow: hidden; 
  }
 
.tickets-table__row { 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #fad89976; 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0; /* Убирает отступы между строками */
    font-weight: lighter;
  }
 
.tickets-table__cell { 
    min-width: 120px;
    border: 1px solid #fffbfb; 
    text-align: center;
    padding: 5px; /* Убирает отступ внутри ячеек */
    font-weight: bold;
  }
 
.tickets-table__header { 
    background-color: #7a3301b9; 
    color: white; 
    font-weight: bold; 
  }
</style>
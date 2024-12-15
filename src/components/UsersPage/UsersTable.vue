<template>
  <div class="users-table">
    <button @click="showModal = true" class="add-button">Добавить пользователя</button>
  
    <!-- Заголовок таблицы -->
    <div class="users-table__row users-table__header">
      <div class="users-table__cell">id</div>
      <div class="users-table__cell">Имя</div>
      <div class="users-table__cell">Почта</div>
      <div class="users-table__cell">Дата создания</div>
      <div class="users-table__cell">Действия</div>  
    </div>

    <!-- Перебор пользователей для отображения их данных --> 
    <div v-for="user in users" :key="user.id" class="users-table__row"> 
      <div class="users-table__cell">{{ user.id }}</div> 
      <div class="users-table__cell">
        <input v-model="user.name" :disabled="user.id !== editingUserId" /> 
      </div>
      <div class="users-table__cell"> 
        <input v-model="user.email" :disabled="user.id !== editingUserId" /> 
      </div>  
      <div class="users-table__cell">{{ user.created }}</div> 
      <div class="users-table__cell">  
        <button v-if="user.id === editingUserId" @click="saveUser(user)" class="save-button">Сохранить</button> 
        <button v-else @click="editUser(user.id)" class="edit-button">Редактировать</button> 
        <button @click="deleteUser(user.id)" class="delete-button">Удалить</button> 
      </div> 
    </div>

    <!-- Модальное окно для добавления пользователя --> 
    <AddUserModal  
      :isVisible="showModal"  
      @close="showModal = false"  
      @add="addUser"  
    /> 
  </div>
</template>

<script setup lang="ts"> 
import { ref, computed } from 'vue'; 
import AddUserModal from '../../common/AddUserModal.vue';

export type UserType = { 
  id: number; 
  name: string; 
  email: string; 
  created: string | Date; 
} 

const currentDate = new Date(); 
const createdMockDate = computed(() => { 
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`; 
}); 

const users = ref<UserType[]>([ 
  { id: 0, name: 'Ann', email: 'alex@alex.alex', created: createdMockDate.value }, 
  { id: 1, name: 'Alex', email: 'ann@ann.ann', created: createdMockDate.value }, 
  { id: 2, name: 'Art', email: 'art@art.art', created: createdMockDate.value }, 
  { id: 3, name: 'you', email: 'you@you.you', created: createdMockDate.value }, 
]);  

const showModal = ref(false); 
const editingUserId = ref<number | null>(null); 

function addUser(newUserData: { name: string; email: string }) { 
  const newUser: UserType = { 
    id: users.value.length, 
    name: newUserData.name, 
    email: newUserData.email, 
    created: createdMockDate.value, 
  }; 
  users.value.push(newUser); 
} 

function editUser(id: number) { 
  editingUserId.value = id; 
} 

function saveUser(user: UserType) { 
  const index = users.value.findIndex(u => u.id === user.id);
  
  if (index !== -1) {
    users.value[index] = { ...users.value[index], name: user.name, email: user.email }; 
  }
  
  editingUserId.value = null; 
}


function deleteUser(id: number) { 
  users.value = users.value.filter(user => user.id !== id); 
} 
</script> 

<style scoped>
.users-table {
  display: flex;
  flex-direction: column;
  overflow: hidden; 
}

.users-table__row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #fad89976; 
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0; /* Убирает отступы между строками */
  font-weight: lighter;
}

.users-table__cell {
  min-width: 120px;
  border: 1px solid #fffbfb; 
  text-align: center;
  padding: 5px; /* Убирает отступ внутри ячеек */
  font-weight: bold;
}

.users-table__cell input {
  width: 100%; /* Занимает всю ширину родительского контейнера */
  border: none; /* Убирает стандартную рамку */
  outline: none; /* Убирает обводку при фокусе */
  padding: 4px; /* Добавьте немного внутреннего отступа для удобства */
  box-sizing: border-box; /* Позволяет учитывать padding в ширине элемента */
  background-color: transparent; /* Убирает фон */
  font-weight: bold;
}

.users-table__header {
  background-color: #7a3301b9; 
  color: white; 
  font-weight: bold; 
}


.edit-button { 
  background-color: #cafaab;  
  color: black; 
  padding: 5px 10px; 
  cursor: pointer; 
  font-weight: bold;
}
.save-button { 
  background-color: #cafaab;  
  color: black; 
  padding: 5px 10px; 
  cursor: pointer; 
  font-weight: bold;
} 

.delete-button { 
  background-color: #f0776e;  
  color: black; 
  padding: 5px 10px; 
  cursor: pointer; 
  font-weight: bold;
} 


.add-button { 
  padding: 8px;  
  margin-bottom: 8px; 
  border-radius: 5px; 
  background-color: #fad89976; 
  width: 200px;  
  cursor: pointer; 
  text-align: center; 
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
  font-weight: bold;
} 



</style>

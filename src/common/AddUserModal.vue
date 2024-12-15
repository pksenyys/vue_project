<template> 
    <div v-if="isVisible" class="modal-overlay"> 
      <div class="modal-content"> 
        <h3 class="modal-title">Добавить пользователя</h3> 
        <form @submit.prevent="addUser"> 
          <div class="form-group"> 
            <label for="name">Имя</label> 
            <input v-model="name" id="name" type="text" class="form-input" placeholder="Введите имя" /> 
          </div> 
          <div class="form-group"> 
            <label for="email">Почта</label> 
            <input v-model="email" id="email" type="email" class="form-input" placeholder="Введите почту" /> 
          </div> 
          <div class="button-group"> 
            <button type="submit" class="btn btn-save">Сохранить</button> 
            <button type="button" @click="closeModal" class="btn btn-cancel">Закрыть</button> 
          </div> 
        </form> 
      </div> 
    </div> 
  </template> 
  
  <script setup lang="ts"> 
  import { ref } from 'vue'; 
  
  const props = defineProps({ 
    isVisible: { 
      type: Boolean, 
      required: true, 
    }, 
  }); 
  
  const emit = defineEmits(['close', 'add']); 
  
  const name = ref(''); 
  const email = ref(''); 
  
  const addUser = () => { 
    if (name.value && email.value) { 
      emit('add', { name: name.value, email: email.value }); 
      name.value = ''; 
      email.value = ''; 
      emit('close'); 
    } 
  }; 
  
  const closeModal = () => { 
    emit('close'); 
  }; 
  </script> 
  
  <style scoped> 
  .modal-overlay { 
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    background-color: rgba(0, 0, 0, 0.8); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    backdrop-filter: blur(8px);  
  } 
  
  .modal-content { 
    background: #ffffff; 
    padding: 40px; 
    border-radius: 10px; 
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); 
    width: 400px; 
    max-width: 90%; 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: transform 0.3s ease; 
    transform: translateY(0); 
  } 
  
  .modal-title { 
    text-align: center; 
    margin-bottom: 20px; 
    color: #333; 
    font-size: 26px; 
  } 
  
  .form-group { 
    margin-bottom: 20px; 
  } 
  
  label { 
    display: block; 
    margin-bottom: 8px; 
    color: #555; 
  } 
  
  .form-input { 
    width: 100%; 
    padding: 12px; 
    border: 2px solid #dbe0e7; 
    border-radius: 6px; 
    font-size: 16px; 
    transition: border-color 0.3s; 
  } 
  
  .form-input:focus { 
    border-color: #4caf50; 
    outline: none; 
  } 
  
  .button-group { 
    display: flex; 
    justify-content: space-between; 
  } 
  
  .btn { 
    padding: 12px 18px; 
    border: none; 
    border-radius: 6px; 
    cursor: pointer; 
    font-weight: bold; 
    width: 48%;  
    transition: background-color 0.3s; 
  } 
  
  .btn-save { 
    background-color: #4caf50;  
    color: white; 
  } 
  
  .btn-save:hover { 
    background-color: #45a049; 
  } 
  
  .btn-cancel { 
    background-color: #f44336;  
    color: white; 
  } 
  
  .btn-cancel:hover { 
    background-color: #e53935; 
  } 
  </style>
  
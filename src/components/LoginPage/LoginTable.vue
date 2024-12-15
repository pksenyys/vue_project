<template> 
    <div class="login-table">  
      <div class="login-card"> 
        <h2>Вход</h2> 
        <form @submit.prevent="handleLogin"> 
          <div class="form-group"> 
            <label for="username">Логин:</label> 
            <input type="text" id="username" v-model="username" required placeholder="Введите логин" /> 
          </div> 
          <div class="form-group"> 
            <label for="password">Пароль:</label> 
            <input type="password" id="password" v-model="password" required placeholder="Введите пароль" /> 
          </div> 
          <button type="submit" class="login-button">Войти</button> 
        </form> 
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div> 
      </div> 
    </div> 
  </template> 
   
  <script setup lang="ts"> 
  import { ref } from 'vue'; 
   
  const username = ref(''); 
  const password = ref(''); 
  const errorMessage = ref(''); 
   
  const handleLogin = () => { 
    if (username.value === 'admin' && password.value === '123456') { 
      alert('Успешный вход!'); 
    } else { 
      errorMessage.value = 'Неправильный логин или пароль'; 
    } 
  }; 
  </script> 
   
  <style scoped> 
  .login-table { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 20px; 
  } 
   
  .login-card { 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    background: #faeedb; 
    border-radius: 8px; 
    padding: 20px; 
    width: 300px; 
    text-align: center; 
  } 
   
  h2 { 
    margin-bottom: 20px; 
    color: #050505; 
    text-align: center; /* Центрирование текста */
    font-family: Verdana, Geneva, Tahoma, sans-serif; /* Установка шрифта */
    font-size: 28px; /* Размер шрифта (при необходимости измените) */
    margin-bottom: 20px; 
  } 
   
  .form-group { 
    margin-bottom: 15px; 
  } 
   
  label { 
    display: block; 
    color: #666; 
    margin-bottom: 5px; 
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
  } 
   
  input[type="text"], 
  input[type="password"] { 
    width: 100%; 
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    margin-top: 5px; 
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
  } 
   
  input[type="text"]:focus, 
  input[type="password"]:focus { 
    border-color: #fab56f; 
    outline: none; 
    
  } 
   
  .login-button { 
    width: 100%; 
    padding: 10px; 
    background-color: #63370b; 
    color: rgb(255, 247, 247); 
    border: none; 
    border-radius: 4px; 
    cursor: pointer; 
    font-size: 16px; 
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
  } 
   
  .login-button:hover { 
    background-color: #e0c6ad; 
  } 
   
  .error { 
    margin-top: 10px; 
    color: red; 
  } 
  </style>
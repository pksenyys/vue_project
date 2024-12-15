<template>
  <h1 class="page-title">таблица пользователей</h1>
  <users-table />
</template>

<script setup lang="ts">
import UsersTable from '../components/UsersPage/UsersTable.vue'
</script>

<style scoped>
.page-title {
  text-align: center; /* Центрирование текста */
  font-family: Verdana, Geneva, Tahoma, sans-serif; /* Установка шрифта */
  font-size: 28px; /* Размер шрифта (при необходимости измените) */
  margin-bottom: 20px; /* Отступ снизу (при необходимости измените) */
}
</style>

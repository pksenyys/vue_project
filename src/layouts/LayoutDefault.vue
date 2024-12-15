<template>
  <div class="layout-default">
    <header class="layout-default__header"></header> <!-- Удалены надписи -->
    <div class="layout-default__content">
      <div class="container">
        <slot name="default" />
      </div>
    </div>
    <footer class="layout-default__footer"></footer> <!-- Удалены надписи -->
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout-default {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #EFDECD; /* Пыльно-розовый цвет для фона */
  overflow: hidden;
  border: 35px solid #FFEEE5; /* Рамка вокруг всего компонента */
  box-sizing: border-box; /* Чтобы рамка не увеличивала размеры компонента */
}

.layout-default__footer,
.layout-default__header {
  height: 1px;
  display: flex;
  justify-content: space-between;
  background-color: #FFEEE5; /* Пыльно-розовый цвет для заголовка и подвала */
  padding: 20px 0 8px;
}

.layout-default__content {
  position: relative;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
}
</style>

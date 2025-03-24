<template>
  <header>
    <div class="logo">Swaply</div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Utilisation de ref pour définir l'élément du menu actif
const activeMenu = ref("1");
</script>

<style scoped>
/* Style personnalisé pour le header */
.el-header {
  background-color: #409eff;
  padding: 10px;
  display: flex;

  justify-content: space-between;
  height: auto;
}

.logo {
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.el-menu-demo {
  display: flex;
  flex-wrap: nowrap;
  background-color: transparent;
}

.el-menu-item {
  min-width: auto;
  color: white;
}

.el-menu-item:hover {
  background-color: #66b1ff;
}
</style>

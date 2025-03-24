<template>
  <footer class="footer">
    <div class="footer-content">
      <span>&copy; 2025 Swaply. All right reserved.</span>
    </div>
  </footer>
</template>

<script setup>
// Pas de logique spécifique ici, c'est principalement le template
</script>

<style scoped>
.footer {
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.footer-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-menu {
  width: fit-content;
  display: inline-flex;
  margin: 0;
  padding: 0;
}

.el-menu-item {
  color: #333;
  font-size: 14px;
}

.el-menu-item:hover {
  color: #409eff;
}
</style>

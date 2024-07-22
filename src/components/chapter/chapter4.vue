<template>
    <h3>第四次尝试</h3>
    <div>
      <p>总价: {{ total_price }}</p>
      <p>单价: {{ price }}</p>
      <p>数量: {{ num }}</p>
    </div>
    <div>
      <p>
        <button @click="num++" @mouseover="showTooltip($event, '增加数量')" @mouseleave="hideTooltip">
          增加数量
        </button>
      </p>
      <p>
        <button @click="num == 0 ? 0 : num--" @mouseover="showTooltip($event, '减少数量')" @mouseleave="hideTooltip">
          减少数量
        </button>
      </p>
      <div v-if="tooltipVisible" :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }" class="tooltip">
        {{ tooltipText }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const price = 20;
  const num = ref(0);
  const tooltipText = ref('');
  const tooltipVisible = ref(false);
  const tooltipX = ref(0);
  const tooltipY = ref(0);
  
  const total_price = computed(() => {
    return price * num.value;
  });
  
  const showTooltip = (event, text) => {
    tooltipText.value = text;
    tooltipVisible.value = true;
    tooltipX.value = event.clientX + 10; // 鼠标位置 + 偏移量
    tooltipY.value = event.clientY + 10; // 鼠标位置 + 偏移量
  };
  
  const hideTooltip = () => {
    tooltipVisible.value = false;
  };
  </script>
  
  <style scoped>
  .tooltip {
    position: absolute;
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
    z-index: 1000;
  }
  </style>
  
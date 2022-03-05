<script setup lang="ts">
import { useCounterStore } from "../store/counter";

const counter = useCounterStore();

const incre = () => counter.increment();
</script>

<template>
  <div>{{ counter.doubleCount }} {{ counter.counter }}</div>

  <button @click="incre" class="bg-blue-500 rounded-md text-white px-5 py-3">
    vuamosssz
  </button>

  <section>yo quiero probar 🙂</section>
</template>

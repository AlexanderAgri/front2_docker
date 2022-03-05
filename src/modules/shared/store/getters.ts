import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("counter.getters", () => {
  const state = useState();

  const doubleCount = computed((): number => {
    return state.counter * 2;
  });

  return {
    doubleCount,
  };
});

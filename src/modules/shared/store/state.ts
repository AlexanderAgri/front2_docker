import type { State } from "./interfaces/store";
import { defineStore } from "pinia";

export const useState = defineStore("counter.state", {
  state: (): State => ({
    counter: 0,
  }),
});

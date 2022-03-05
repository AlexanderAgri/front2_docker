import { defineStore } from "pinia";
import { extractStore } from "@/helpers/extractStore";
import { useState } from "./state";
import { useGetters } from "./getters";
import { useActions } from "./actions";

export const useCounterStore = defineStore("counter", () => ({
  ...extractStore(useState()),
  ...extractStore(useGetters()),
  ...extractStore(useActions()),
}));

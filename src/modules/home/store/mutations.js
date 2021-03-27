import { INCREASE_COUNTER, DECREASE_COUNTER } from "./action-types";

export const mutations = {
  [INCREASE_COUNTER](state) {
    ++state.counter;
  },
  [DECREASE_COUNTER](state) {
    --state.counter;
  },
};

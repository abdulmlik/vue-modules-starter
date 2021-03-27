import { INCREASE_COUNTER, DECREASE_COUNTER } from "./action-types";

export const actions = {
  [INCREASE_COUNTER]({ commit }) {
    commit(INCREASE_COUNTER);
  },
  [DECREASE_COUNTER]({ commit }) {
    commit(DECREASE_COUNTER);
  },
};

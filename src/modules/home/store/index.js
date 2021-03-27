import { initialState } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const homeStore = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};

export const NAMESPACE = "home";

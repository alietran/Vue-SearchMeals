import { createStore } from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";
import state from "./state";

const store = createStore({
  actions,
  mutations,
  state,
  getters,
});

export default store;

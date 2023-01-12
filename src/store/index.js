import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default new Vuex.Store({
  state: {
    people: {},
    planets: {},
    species: {},
    starships: {},
    vehicles: {},
    films: [],
    person: {},
    planet: {},
    specie: {},
    starship: {},
    vehicle: {},
    film: {},
  },
  actions,
  mutations,
  getters,
});

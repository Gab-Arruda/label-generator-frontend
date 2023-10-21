import { createStore } from "vuex";

export default createStore({
    state: {
        recipe_name: "",
        unit_of_measure: "g"
    },
    mutations: {
        changeRecipeName(state, recipe_name) {
            state.recipe_name = recipe_name
        },
        changeUnitOfMeasure(state, unit_of_measure) {
            state.unit_of_measure = unit_of_measure
        }
    },
    actions: {
        
    },
    getters: {

    },
    modules: {

    }
});
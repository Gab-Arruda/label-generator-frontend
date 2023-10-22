import { createStore } from "vuex";

export default createStore({
    state: {
        food_list: [],
        recipe_name: "",
        unit_of_measure: "g"
    },
    mutations: {
        setRecipeName(state, recipe_name) {
            state.recipe_name = recipe_name
        },
        setUnitOfMeasure(state, unit_of_measure) {
            state.unit_of_measure = unit_of_measure
        },
        setFoodList(state, food_list) {
            state.food_list = food_list
        }
    },
    actions: {
        
    },
    getters: {

    },
    modules: {

    }
});
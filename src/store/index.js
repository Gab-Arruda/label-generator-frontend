import { createStore } from "vuex";

export default createStore({
    state: {
        food_list: [],
        recipe_name: "",
        unit_of_measure: "g",
        recipe_items: [],
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
        },
        setRecipeIngredient(state, recipe_item) {
            state.recipe_items.push(recipe_item);
        }
    },
    actions: {
        
    },
    getters: {

    },
    modules: {

    }
});
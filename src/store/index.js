import { createStore } from "vuex";

export default createStore({
    state: {
        food_list: [],
        categories_list: [],
        recipe_name: "",
        unit_of_measure: "g",
        recipe_items: [],
        reference: {
            value: "50",
            unit_of_measure: "g",
            quantity: "1",
            homemade_measure: "fatia"
        }
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
        pushToRecipeItems(state, recipe_item) {
            state.recipe_items.push(recipe_item);
        },
        setRecipeItems(state, recipe_items) {
            state.recipe_items = recipe_items;
        },
        setReference(state, reference) {
            state.reference = reference;
        },
        setCategoriesList(state, categories_list) {
            state.categories_list = categories_list;
        }
    },
    actions: {
        
    },
    getters: {

    },
    modules: {

    }
});
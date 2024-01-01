import { createStore } from "vuex";

export default createStore({
    state: {
        food_list: [],
        categories_list: [],
        recipe_name: "",
        recipe_items: [],
        reference: {
            value: "0",
            unit_of_measure: "g",
            quantity: "1",
            homemade_measure: "fatia"
        },
        recipe_mass_when_done: "0",
        combined_nutrients: {}
    },
    mutations: {
        setRecipeName(state, recipe_name) {
            state.recipe_name = recipe_name
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
        },
        setRecipeMassWhenDone(state, recipe_mass_when_done) {
            state.recipe_mass_when_done = recipe_mass_when_done;
        },
        setCombinedNutrients(state, combined_nutrients) {
            state.combined_nutrients = combined_nutrients
        }
    },
    actions: {
        
    },
    getters: {
        getRecipeItemTotal(state) {
            return state.recipe_items.reduce((total, obj) => total + obj.quantity, 0);
        }
    },
    modules: {

    }
});
import store from '../store'

export default {
    generateTabelaNutricional() {
        const nutrientsUsedArray = store.state.recipe_items.map(ingredient => {
            let nutrients = {};
            let notNutrients = ['id', 'category_id', 'nome', 'created_at', 'updated_at'];
            for (let nutrient in ingredient.data) {
                if(!notNutrients.includes(nutrient)) {
                    nutrients[nutrient] = ingredient.data[nutrient] * ingredient.quantity / 100;
                } else {
                    nutrients[nutrient] = ingredient.data[nutrient];
                }
            }
            return nutrients;
        });
    }
}
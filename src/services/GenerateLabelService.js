import store from '../store'

export default {
    generateTabelaNutricional() {
        let notNutrients = ['id', 'category_id', 'nome', 'created_at', 'updated_at'];
        const nutrientsUsedArray = store.state.recipe_items.map(ingredient => {
            let nutrients = {};
            for (let nutrient in ingredient.data) {
                if(!notNutrients.includes(nutrient)) {
                    nutrients[nutrient] = ingredient.data[nutrient] * ingredient.quantity / 100;
                } else {
                    nutrients[nutrient] = ingredient.data[nutrient];
                }
            }
            return nutrients;
        });
          
        const totalNutrientsSum = nutrientsUsedArray.reduce((result, currentObject) => {
            for (let key in currentObject) {
                if (!result[key]) {
                    result[key] = 0;
                }
                result[key] += currentObject[key];
            }
            return result;
        }, {});

        let hundredGramNutrients = {};
        for (let key in totalNutrientsSum) {
            hundredGramNutrients[key] = 100 * totalNutrientsSum[key] / store.state.recipe_mass_when_done;
        }
    }
}
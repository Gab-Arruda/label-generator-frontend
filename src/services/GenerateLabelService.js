import store from '../store'
import vdr from '../assets/vdr.json'

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

        let referenceValueNutrients = {};
        for (let key in hundredGramNutrients) {
            referenceValueNutrients[key] = hundredGramNutrients[key] * store.state.reference.value / 100;
        }

        let vdrValueNutrients = {};
        for (let key in referenceValueNutrients) {
            vdrValueNutrients[key] = referenceValueNutrients[key] / vdr[key] * 100;
        }
    }
}
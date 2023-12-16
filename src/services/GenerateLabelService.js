import store from '../store'
import vdr from '../assets/vdr.json'

export default {
    generateTabelaNutricional(router) {
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
            hundredGramNutrients[key] = this.roundNutrientsValue(key, 100 * totalNutrientsSum[key] / store.state.recipe_mass_when_done);
        }

        let referenceValueNutrients = {};
        for (let key in hundredGramNutrients) {
            referenceValueNutrients[key] = this.roundNutrientsValue(key, hundredGramNutrients[key] * store.state.reference.value / 100);
        }

        let vdrValueNutrients = {};
        for (let key in referenceValueNutrients) {
            vdrValueNutrients[key] = this.roundNutrientsValue(key, referenceValueNutrients[key] / vdr[key] * 100);
        }
        const combinedNutrients = {};
        Object.keys(hundredGramNutrients).forEach((key) => {
            combinedNutrients[key] = {
                hundredGram: hundredGramNutrients[key],
                referenceValue: referenceValueNutrients[key],
                vdrValue: vdrValueNutrients[key],
            };
        });
        store.commit('setCombinedNutrients', combinedNutrients)
        router.push('/label');

    },
    roundNutrientsValue(nutrient, value) {
        const nutrientsInGrams = ["proteina", "lipideos", "carboidrato", "fibra_alimentar", "cinzas"];
        if (value >= 10) {
            // Obtém a primeira casa decimal
            const decimal1 = Math.floor((value % 1) * 10);

            // Se a primeira casa decimal for menor que 5, mantém o número inteiro
            // Se for maior ou igual a 5, arredonda para cima em 1 unidade
            if (decimal1 >= 5) {
                return Math.ceil(value);
            } else {
                return Math.floor(value);
            }
        } else if (value >= 1 || value < 1 && nutrientsInGrams.includes(nutrient)) {
            // Obtém a segunda casa decimal
            const decimal2 = Math.floor((value % 1) * 100) % 10;

            // Se a segunda casa decimal for menor que 5, mantém a primeira casa decimal inalterada
            // Se for maior ou igual a 5, arredonda a primeira casa decimal para cima em 1 unidade
            if (decimal2 >= 5) {
                return Math.ceil(value * 10) / 10;
            } else {
                return Math.floor(value * 10) / 10;
            }
        } else {
            // Multiplica o número por 1000 para poder retornar a terceira casa decimal a segunda
            const numeroMultiplicado = value * 1000;

            // Obtém a segunda e terceira casa decimal
            const decimal2 = Math.floor((numeroMultiplicado % 1000) / 10);
            const decimal3 = Math.floor(numeroMultiplicado % 10);

            // Se a terceira casa decimal for menor que 5, mantém a segunda casa decimal inalterada
            // Se for maior ou igual a 5, arredonda a segunda casa decimal para cima em 1 unidade
            const novaDecimal2 = decimal3 < 5 ? decimal2 : decimal2 + 1;

            // Divide o resultado por 100 para obter o número com duas casas decimais
            return novaDecimal2 / 100;
        }
    }
}
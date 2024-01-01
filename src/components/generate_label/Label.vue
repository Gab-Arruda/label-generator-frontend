<script>
import { mapState } from 'vuex';
import nutrientsLabelJson from '../../assets/nutrients_label.json'

export default {
    data() {
        return {
            nutrientsArray: []
        }
    },
    mounted() {
        const combinedArray = Object.keys(nutrientsLabelJson)
        .map(key => ({ key, ...this.combined_nutrients[key], order: nutrientsLabelJson[key].order }));

        this.nutrientsArray = combinedArray.sort((a, b) => a.order - b.order);

        this.printLabel();
    },
    computed: {
        ...mapState(['combined_nutrients']),
        ...mapState(['reference']),
        ...mapState(['recipe_mass_when_done']),
        ...mapState(['recipe_name'])
    },
    methods: {
        getNutrientName(key) {
            return nutrientsLabelJson[key] ? nutrientsLabelJson[key].label : key;
        },
        getNutrientOrder(key) {
            return nutrientsLabelJson[key] ? nutrientsLabelJson[key].order : 500;
        },
        printLabel() {
            setTimeout(function() {
                window.print();
            }, 2000);
        },
        formatNumberWithTwoDecimalPlaces(number) {
            return parseFloat(number).toFixed(2).replace(/\.?0+$/, '');
        }
    }
}
</script>

<template>
    <div class="w-full flex flex-col items-center">
        <!-- ALERTAS -->

        <!-- TABELA NUTRICIONAL -->
        <h1 class="my-4 text-xl font-bold self-center w-full text-center">{{ recipe_name }}</h1>
        <div class="flex flex-col w-3/5 my-4">
            <h1 class="font-bold self-center border border-b-0 border-slate-800 w-full text-center">INFORMAÇÂO NUTRICIONAL</h1>
            <div class="flex flex-col items-center border border-b-0 border-slate-800 ">
                <span class="w-full text-center">Porções por embalagem: {{ Math.floor(reference.total_in_package / reference.value) }}</span>
                <span class="w-full text-center">Porção de {{reference.value}}g ({{ reference.quantity }} {{ reference.homemade_measure }})</span>
            </div>
            <table>
                <tr class="border border-slate-800">
                    <th></th>
                    <th>100g</th>
                    <th>Porção</th>
                    <th>%VD</th>
                </tr>
                <tr v-for="nutrient in nutrientsArray" :key="nutrient.key" class="border border-slate-800">
                    <td class="px-1" v-if="nutrient.hundredGram">{{ getNutrientName(nutrient.key) }}</td>
                    <td class="text-center px-1" v-if="nutrient.hundredGram">{{ formatNumberWithTwoDecimalPlaces(nutrient.hundredGram) }}</td>
                    <td class="text-center px-1" v-if="nutrient.hundredGram">{{ formatNumberWithTwoDecimalPlaces(nutrient.referenceValue) }}</td>
                    <td class="text-center px-1" v-if="nutrient.hundredGram">{{ formatNumberWithTwoDecimalPlaces(nutrient.vdrValue) }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
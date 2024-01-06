<script>
import { mapState } from 'vuex';
import nutrientsLabelJson from '../../assets/nutrients_label.json'

export default {
    data() {
        return {
            nutrientsArray: [],
            gordurasLabelArray: ['saturados', 'mono_insaturados', 'poli_insaturados'],
            highFatAlert: false,
            highSodiumAlert: false,
            highSugarAlert: false
        }
    },
    mounted() {
        const combinedArray = Object.keys(nutrientsLabelJson)
        .map(key => ({ key, ...this.combined_nutrients[key], order: nutrientsLabelJson[key].order }));

        this.nutrientsArray = combinedArray.sort((a, b) => a.order - b.order);

        this.highFatAlert = this.showHighFatLabel();
        this.highSodiumAlert = this.showHighSodiumLabel();
        // this.highSugarAlert = this.showHighSugarLabel();
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
        },
        showHighFatLabel() {
            return this.nutrientsArray.find(x => x.key == 'saturados').hundredGram >= 6;
        },
        showHighSodiumLabel() {
            return this.nutrientsArray.find(x => x.key == 'sodio').hundredGram >= 600;
        },
        showHighSugarLabel () {
            return this.nutrientsArray.find(x => x.key == 'acucar').hundredGram >= 15;
        }
    }
}
</script>

<template>
    <div class="w-full flex flex-col items-center">
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
                    <template v-if="nutrient.hundredGram">
                        <td class="px-4" v-if="gordurasLabelArray.includes(nutrient.key)">{{ getNutrientName(nutrient.key) }}</td>
                        <td class="px-1" v-else>{{ getNutrientName(nutrient.key) }}</td>
                        <td class="text-center px-1">{{ formatNumberWithTwoDecimalPlaces(nutrient.hundredGram) }}</td>
                        <td class="text-center px-1">{{ formatNumberWithTwoDecimalPlaces(nutrient.referenceValue) }}</td>
                        <td class="text-center px-1">{{ formatNumberWithTwoDecimalPlaces(nutrient.vdrValue) }}</td>
                    </template>
                </tr>
            </table>
        </div>
        <div v-if="highFatAlert || highSodiumAlert || highSugarAlert" class="flex flex-col items-center w-full">
            <h1 class="font-bold text-center p-2">Utilize os seguintes alertas em sua embalagem:</h1>
            <div class="flex flex-row items-center">    
                <img v-if="highFatAlert" src="../../assets/high_fat.png" alt="High Fat Alert" class="p-1 w-40">
                <img v-if="highSodiumAlert" src="../../assets/high_sodium.png" alt="High Sodium Alert" class="p-1 w-40">
                <img v-if="highSugarAlert" src="../../assets/high_sugar.png" alt="High Sugar Alert" class="p-1 w-40">
            </div>
        </div>
    </div>
</template>
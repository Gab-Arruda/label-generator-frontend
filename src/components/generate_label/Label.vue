<script>
import { mapState } from 'vuex';
import nutrientsLabelJson from '../../assets/nutrients_label.json'

export default {
    data() {
        return {
            nutrientsLabel: {}
        }
    },
    mounted() {
        this.nutrientsLabel = Object.fromEntries(
            Object.entries(this.combined_nutrients).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
        );
        this.printLabel();
    },
    computed: {
        ...mapState(['combined_nutrients']),
        ...mapState(['reference']),
        ...mapState(['recipe_mass_when_done'])
    },
    methods: {
        getNutrientName(key) {
            return nutrientsLabelJson[key] ? nutrientsLabelJson[key] : key;
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
        <div class="flex flex-col w-3/5 my-8">
            <h1 class="font-bold self-center border border-b-0 border-slate-800 w-full text-center">INFORMAÇÂO NUTRICIONAL</h1>
            <div class="flex flex-col items-center border border-b-0 border-slate-800 ">
                <span class="w-full text-center">Porções por embalagem: {{ Math.floor(recipe_mass_when_done / reference.value) }}</span>
                <span class="w-full text-center">Porção de {{reference.value}}g ({{ reference.quantity }} {{ reference.homemade_measure }})</span>
            </div>
            <table>
                <tr class="border border-slate-800">
                    <th></th>
                    <th>100g</th>
                    <th>Porção</th>
                    <th>%VD</th>
                </tr>
                <tr v-for="key in Object.keys(combined_nutrients)" :key="key" class="border border-slate-800">
                    <td class="px-1">{{ getNutrientName(key) }}</td>
                    <td class="text-center px-1">{{ formatNumberWithTwoDecimalPlaces(combined_nutrients[key].hundredGram) }}</td>
                    <td class="text-center px-1">{{ formatNumberWithTwoDecimalPlaces(combined_nutrients[key].referenceValue) }}</td>
                    <td class="text-center px-1">{{ formatNumberWithTwoDecimalPlaces(combined_nutrients[key].vdrValue) }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
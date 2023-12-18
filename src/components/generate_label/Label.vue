<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    mounted() {

    },
    computed: {
        ...mapState(['combined_nutrients']),
        ...mapState(['reference']),
        ...mapState(['recipe_mass_when_done'])
    },
    methods: {
        printLabel() {
            window.print();
        }
    }
}
</script>

<template>
    <div class="w-full flex flex-col items-center">
        <!-- ALERTAS -->

        <!-- TABELA NUTRICIONAL -->
        <div class="flex flex-col w-1/2">
            <h1 class="font-bold self-center">INFORMAÇÂO NUTRICIONAL</h1>
            <div class="flex flex-col items-center">
                <span>Porções por embalagem: {{ Math.floor(recipe_mass_when_done / reference.value) }}</span>
                <span>Porção de {{reference.value}}g ({{ reference.quantity }} {{ reference.homemade_measure }})</span>
            </div>
            <table>
                <tr>
                    <th></th>
                    <th>100g</th>
                    <th>Porção</th>
                    <th>%VD</th>
                </tr>
                <tr v-for="key in Object.keys(combined_nutrients)" :key="key">
                    <td>{{ key }}</td>
                    <td class="text-center">{{ combined_nutrients[key].hundredGram }}</td>
                    <td class="text-center">{{ combined_nutrients[key].referenceValue }}</td>
                    <td class="text-center">{{ combined_nutrients[key].vdrValue }}</td>
                </tr>
            </table>
        </div>

        <button class="bg-blue-400 text-white self-center text-xl font-bold px-4 py-2 my-8 rounded-md hover:cursor-pointer hover:bg-blue-200"
            @click="printLabel()">Imprimir
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        reference: {
            get() { return this.$store.state.reference },
            set(newValue) { this.$store.commit('SetReference', newValue)}
        }
    }
}
</script>

<template>
    <div class="flex flex-col bg-white border border-slate-200 rounded-md justify-between shadow-md shadow-slate-400 p-4 mt-4 md:ml-4 grow">
        <div class="flex flex-col justify-start">
            <div class="flex flex-col w-full pb-4">
                <label for="reference_value" class="font-bold text-slate-600">Valor de referência para consumo: <span class="text-red-400 text-bold">*</span></label>
                <div class="flex flex-wrap justify-between sm:flex-nowrap">
                    <input id="reference_value" type="number" v-model="reference.value" class="bg-slate-200 py-1 px-2 w-1/3 rounded-sm outline-none grow">
                    <select name="reference_unit_of_measure" id="reference_unit_of_measure" class="bg-slate-200 py-1 px-1 rounded-sm outline-none" v-model="reference.unit_of_measure">
                        <option value="g">gramas (g)</option>
                        <option value="ml">mililitros (ml)</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col w-full py-4">
                <label for="reference_quantity" class="font-bold text-slate-600">Quantidade: <span class="text-red-400 text-bold">*</span></label>
                <div class="flex justify-between">
                    <input id="reference_quantity" type="number" min="0" v-model="reference.quantity" class="bg-slate-200 py-1 px-2 rounded-sm outline-none grow">
                </div>
            </div>
            <div class="flex flex-col w-full py-4">
                <label for="homemade_measurement" class="font-bold text-slate-600">Medida caseira: <span class="text-red-400 text-bold">*</span></label>
                <div class="flex justify-between">
                    <select name="homemade_measurement" id="homemade_measurement" class="bg-slate-200 py-1 px-1 rounded-sm  w-full outline-none"
                    v-model="reference.homemade_measure">
                        <option value="fatia">Fatia</option>
                        <option value="colher_de_cha">Colher de chá</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col items-start pt-4">
                <p class="text-slate-600 font-bold">Preview do valor de referência:</p>
                <p class="text-slate-500">Porção de {{ reference.value }}{{ reference.unit_of_measure }} ({{ reference.quantity }} {{ reference.homemade_measure }})
                    x kcal ou y kJ</p>
            </div> 
        </div>
        <button class="bg-blue-400 text-white self-center text-xl font-bold px-8 py-4 rounded-md w-full md:w-2/3 hover:cursor-pointer hover:bg-blue-200">Rotular</button>
    </div>
</template>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}
</style>
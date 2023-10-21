<script>
export default {
    data() {
        return {
            recipeName: "",
            unitOfMeasure: "gramas",
        }
    },
    watch: {
        recipeName() {
            console.log(this.recipeName);
        },
        unitOfMeasure() {
            console.log(this.unitOfMeasure);
        }
    }
}
</script>

<template>
    <div class="flex flex-row items-center bg-white border border-slate-200 justify-around shadow-md shadow-slate-400 p-4">
        <div class="flex flex-col grow mx-4">    
            <label for="recipeName" class="font-bold text-slate-600">Nome: <span class="text-red-400 text-bold">*</span></label>
            <input id="recipeName" type="text" placeholder="Bolo de laranja" v-model="recipeName" class="bg-slate-200 py-1 px-2 rounded-sm outline-none">
        </div>
        <div class="flex flex-col mx-4">
            <label for="unit_of_measure" class="font-bold text-slate-600">Unidade de medida: <span class="text-red-400 text-bold">*</span></label>
            <select name="unit_of_measure" id="unit_of_measure" class="bg-slate-200 py-1.5 px-2 rounded-sm outline-none" v-model="unitOfMeasure">
                <option value="gramas">gramas (g)</option>
                <option value="ml">mililitros (ml)</option>
            </select>
        </div>
    </div>
</template>
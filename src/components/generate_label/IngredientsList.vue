<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['recipe_items'])
    },
    methods: {
        deleteFromRecipeItems(ingredient) {
            const filteredRecipeItems = this.recipe_items.filter(item => item.data.id !== ingredient.data.id);
            this.$store.commit('setRecipeItems', filteredRecipeItems)
        }
    }
}
</script>

<template>
    <div class="flex flex-col items-center bg-white border border-slate-200 rounded-md justify-start shadow-md shadow-slate-400 p-4 mt-4
    md:w-3/4 max-h-[590px] overflow-y-scroll">
        <div class="flex flex-row justify-between w-full">
            <h1 class="font-bold text-base">Ingrediente</h1>
            <h1 class="font-bold text-base mr-16">Quantidade</h1>
        </div>
        <div v-for="ingredient in recipe_items" class="flex justify-between  items-center w-full">
            <span>{{ ingredient.data.nome }}</span>
            <div class="flex items-center justify-between">
                <p class="mr-16">{{ ingredient.quantity }}</p>
                <div class="bg-red-400 self-end hover:cursor-pointer my-1" @click="deleteFromRecipeItems(ingredient)">
                    <img src="../../assets/trash.png" alt="Excluir" class="w-8 h-8 p-1 rounded">
                </div>
            </div>
        </div>
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
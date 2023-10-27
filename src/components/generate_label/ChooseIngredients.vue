<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            typed_ingredient_name: "",
            filtered_ingredient_list: [],
            selected_ingredient: { nome:"" },
            ingredient_quantity: null
        }
    },
    computed: {
        ...mapState(['food_list'])
    },
    methods: {
        setSelectedIngredient(selected_ingredient) {
            this.selected_ingredient = selected_ingredient;
            this.filtered_ingredient_list = [];
            this.typed_ingredient_name = "";
        },
        addToRecipeIngredientsList() {
            if (this.ingredient_quantity <= 0) {
                alert('Necessário fornecer um valor válido para quantidade!');
            } else if (!this.selected_ingredient.nome) {
                alert('Necessário selecionar um ingrediente da lista!');
            } else {
                this.$store.commit('pushToRecipeItems', { data: this.selected_ingredient, quantity:this.ingredient_quantity });
                this.typed_ingredient_name = "";
                this.ingredient_quantity = null;
                this.selected_ingredient = { nome: "" };
            }
        }
    },
    watch: {
        typed_ingredient_name(typed_ingredient_name) {
            if (typed_ingredient_name) {
                this.filtered_ingredient_list = this.food_list.filter(ingredient => ingredient.nome.toLowerCase().includes(typed_ingredient_name.toLowerCase()));
            } else {
                this.filtered_ingredient_list = [];
            }
        }
    }
}
</script>

<template>
    <h1 class="font-bold mt-4 mb-2 text-xl">Ingredientes:</h1>
    <div class="flex flex-col flex-wrap items-center bg-white border border-slate-200 rounded-md justify-around shadow-md shadow-slate-400 py-4 px-8">
        <div class="flex flex-col grow relative w-full">
            <label for="typed_ingredient_name" class="text-slate-600 font-bold">Lista de ingredientes: </label>
            <input id="typed_ingredient_name" type="text" placeholder="Bolo de laranja" v-model="typed_ingredient_name" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none">
            <div class="flex flex-col max-h-48 overflow-y-auto absolute top-16 bg-slate-300/90 w-full">
                <span v-for="ingredient in filtered_ingredient_list" class="py-1 px-2 hover:bg-slate-400/80 hover:cursor-pointer"
                @click="setSelectedIngredient(ingredient)"> {{ ingredient.nome }} </span>
            </div>
        </div>
        <div class="flex flex-wrap w-full justify-between">
            <div class="flex flex-col justify-between">
                <p class="text-sm">Não encontrou o ingrediente? <span class="text-red-400 underline decoration-solid hover:cursor-pointer">
                    Adicionar novo alimento </span></p>
                <p><span class="text-slate-600 font-bold">Ingrediente selecionado: </span>{{ selected_ingredient.nome }}</p>
            </div>
            <div class="flex justify-self-start">
                <div class="flex flex-col mr-4">
                    <label for="ingredient_quantity" class="text-slate-600 font-bold">Quantidade (g/ml): </label>
                    <input id="ingredient_quantity" type="number" min="0" v-model="ingredient_quantity" class="bg-slate-200 py-1 px-2 rounded-sm outline-none">
                </div>
                <div class="bg-blue-400 self-end hover:cursor-pointer hover:bg-blue-200" @click="addToRecipeIngredientsList()">
                    <img src="../../assets/plus.png" alt="Adicionar" class="w-8 h-8 p-1 rounded">
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
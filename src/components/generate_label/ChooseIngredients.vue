<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            typed_ingredient_name: "",
            filtered_ingredient_list: [],
            selected_ingredient: "",
            ingredient_quantity: 0
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
            this.$store.commit('setRecipeIngredient', { ingredient: this.selected_ingredient, quantity:this.ingredient_quantity });
            this.typed_ingredient_name = "";
            this.ingredient_quantity = 0;
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
    <h1 class="font-bold mt-8 mb-2 text-xl">Ingredientes:</h1>
    <div class="flex flex-row flex-wrap items-center bg-white border border-slate-200 rounded-md justify-around shadow-md shadow-slate-400 p-4">
        <div class="flex flex-col grow mx-4 relative">
            <label for="typed_ingredient_name" class="text-slate-600">Escolha os ingredientes: </label>
            <input id="typed_ingredient_name" type="text" placeholder="Bolo de laranja" v-model="typed_ingredient_name" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none">
            <div class="flex flex-col max-h-48 overflow-y-auto absolute top-16 bg-slate-300/90 w-full">
                <span v-for="ingredient in filtered_ingredient_list" class="py-1 px-2 hover:bg-slate-400/80 hover:cursor-pointer"
                @click="setSelectedIngredient(ingredient)"> {{ ingredient.nome }} </span>
            </div>
        </div>
        <div class="flex justify-self-start">
            <div class="flex flex-col mx-4">
                <label for="ingredient_quantity" class="text-slate-600">Quantidade (g/ml): </label>
                <input id="ingredient_quantity" type="number" min="0" v-model="ingredient_quantity" class="bg-slate-200 py-1 px-2 rounded-sm outline-none">
            </div>
            <div class="bg-blue-400 self-end hover:cursor-pointer" @click="addToRecipeIngredientsList()">
                <img src="../../assets/plus.png" alt="Adicionar" class="w-8 h-8 p-1 rounded">
            </div>
        </div>
    </div>
</template>
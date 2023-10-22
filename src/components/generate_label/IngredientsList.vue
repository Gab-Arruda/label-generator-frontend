<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['recipe_items'])
    }
}
</script>

<template>
    <div class="flex flex-col items-center bg-white border border-slate-200 rounded-md justify-around shadow-md shadow-slate-400 p-4 mt-8 w-2/3">
        <div class="flex flex-row justify-between w-full">
            <h1 class="font-bold text-base">Ingredientes</h1>
            <h1 class="font-bold text-base">Quantidade</h1>
        </div>
        <div v-for="ingredient in recipe_items" class="flex justify-between w-full">
            <span>{{ ingredient.data.nome }}</span>
            <span>{{ ingredient.quantity }}</span>
        </div>
    </div>
</template>
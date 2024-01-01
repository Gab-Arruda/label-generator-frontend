<script>
export default {
    computed: {
        recipe_name: {
            get() { return this.$store.state.recipe_name },
            set(newValue) { this.$store.commit('setRecipeName', newValue) }
        }
    }
}
</script>

<template>
    <div class="flex flex-row flex-wrap items-center bg-white border border-slate-200 rounded-md justify-around shadow-md shadow-slate-400 p-4">
        <div class="flex flex-col grow mx-4">    
            <label for="recipe_name" class="font-bold text-slate-600">Nome: <span class="text-red-400 text-bold">*</span></label>
            <input id="recipe_name" type="text" placeholder="Bolo de laranja" v-model="recipe_name" class="bg-slate-200 py-1 px-2 rounded-sm outline-none">
        </div>
    </div>
</template>
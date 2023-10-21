<script>
    import RecipeTitle from '../components/generate_label/RecipeTitle.vue';
    import ChooseIngredients from '../components/generate_label/ChooseIngredients.vue';
    export default {
        data() {
            return {

            }
        },
        components: {
            RecipeTitle,
            ChooseIngredients
        }
    }
</script>

<template>
    <div class="bg-slate-200 p-4 h-screen">
        <RecipeTitle/>
        <ChooseIngredients/>
    </div>
</template>
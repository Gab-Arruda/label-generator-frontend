<script>
    import RecipeTitle from '../components/generate_label/RecipeTitle.vue';
    import ChooseIngredients from '../components/generate_label/ChooseIngredients.vue';
    import IngredientsList from '../components/generate_label/IngredientsList.vue';
    import axios from 'axios';
    export default {
        data() {
            return {
                waitingAPI: false
            }
        },
        components: {
            RecipeTitle,
            ChooseIngredients,
            IngredientsList
        },
        mounted() {
            this.getFoodList();
        },
        methods: {
            async getFoodList() {
                try {
                    this.waitingAPI = true;
                    const { data } = await axios.get('http://localhost:8000/api/food/');
                    this.$store.commit('setFoodList', data);
                } catch (error) {
                    alert('Error fetching food list: ' + error.message);
                }
                this.waitingAPI = false;
            }
        }
    }
</script>

<template>
    <div class="bg-slate-200 p-4 h-screen">
        <RecipeTitle/>
        <ChooseIngredients/>
        <IngredientsList/>
    </div>
</template>
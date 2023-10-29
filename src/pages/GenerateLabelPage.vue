<script>
    import RecipeTitle from '../components/generate_label/RecipeTitle.vue';
    import ChooseIngredients from '../components/generate_label/ChooseIngredients.vue';
    import IngredientsList from '../components/generate_label/IngredientsList.vue';
    import ReferenceValue from '../components/generate_label/ReferenceValue.vue';
    import WaitingResponseModal from '../components/generate_label/WaitingResponseModal.vue';
    import axios from 'axios';
    export default {
        data() {
            return {
                waitingAPI: false,
                modalTitle: 'Buscando lista de alimentos...'
            }
        },
        components: {
            RecipeTitle,
            ChooseIngredients,
            IngredientsList,
            ReferenceValue,
            WaitingResponseModal
        },
        mounted() {
            this.waitingAPI = true;
            this.getFoodList();
            this.getCategoriesList();
        },
        methods: {
            async getFoodList() {
                this.waitingAPI = true;
                try {
                    const { data } = await axios.get('http://localhost:8000/api/food/');
                    this.$store.commit('setFoodList', data);
                } catch (error) {
                    alert('Error fetching food list: ' + error.message);
                }
            },
            async getCategoriesList() {
                try {
                    const { data } = await axios.get('http://localhost:8000/api/category/');
                    this.$store.commit('setCategoriesList', data);
                } catch (error) {
                    alert('Error fetching categories list: ' + error.message);
                }
                this.waitingAPI = false;
            }
        }
    }
</script>

<template>
    <div class="bg-slate-200 p-4 min-h-screen flex flex-col">
        <RecipeTitle/>
        <ChooseIngredients/>
        <div class="flex flex-col justify-between md:flex-row grow">
            <IngredientsList/>
            <ReferenceValue/>
        </div>
        <WaitingResponseModal v-if="waitingAPI" :title="modalTitle"/>
    </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        new_ingredient: {},
        new_ingredient_quantity: null
      }
    },
    methods: {
      addNewIngredientToUserList() {
        if(this.new_ingredient_quantity <= 0) {
          alert('Necessário fornecer um valor válido para quantidade!');
        } else {
          this.$store.commit('pushToRecipeItems', { data: this.new_ingredient, quantity:this.new_ingredient_quantity });
          this.closeModal();
        }
      },
      closeModal() {
        this.new_ingredient = {};
        this.$emit('close')
      }
    },
    computed: {
      ...mapState(['categories_list'])
    }
  }
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <div class="flex justify-between">
        <span class="font-bold text-slate-600 text-xl">Considere os valores para uma porção de 100 g/ml</span>
        <img src="../../assets/close.png" alt="close icon" @click="closeModal()" class="hover:cursor-pointer">
      </div>

      <div class="flex">
        <div class="flex flex-col m-1 grow">
          <label for="nome">Nome <span class="text-red-400">*</span></label>
          <input type="text" id="nome" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.nome">
        </div>
        <div class="flex flex-col m-1">
          <label for="nome">Categoria <span class="text-red-400">*</span></label>
          <select name="category_select" id="category_select" class="bg-slate-200 py-1.5 px-1 rounded-sm  w-full outline-none" v-model="new_ingredient.category_id">
            <option v-for="category in categories_list" :value="category.id">{{category.nome}}</option>
          </select>
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col m-1">
          <label for="energia">Energia(kcal) <span class="text-red-400">*</span></label>
          <input type="number" id="energia" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.energia">
        </div>
        <div class="flex flex-col m-1">
          <label for="proteina">Proteína(g) <span class="text-red-400">*</span></label>
          <input type="number" id="proteina" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.proteina">
        </div>
        <div class="flex flex-col m-1">
          <label for="lipideos">Lipídeos(g) <span class="text-red-400">*</span></label>
          <input type="number" id="lipideos" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.lipideos">
        </div>
        <div class="flex flex-col m-1">
          <label for="colesterol">Colesterol(g) <span class="text-red-400">*</span></label>
          <input type="number" id="colesterol" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.colesterol">
        </div>
        <div class="flex flex-col m-1">
          <label for="carboidrato">Carboidrato(g) <span class="text-red-400">*</span></label>
          <input type="number" id="carboidrato" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.carboidrato">
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col m-1">
          <label for="fibra_alimentar">Fibra Alimentar(g) <span class="text-red-400">*</span></label>
          <input type="number" id="fibra_alimentar" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.fibra_alimentar">
        </div>
        <div class="flex flex-col m-1">
          <label for="cinzas">Cinzas(g) <span class="text-red-400">*</span></label>
          <input type="number" id="cinzas" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.cinzas">
        </div>
        <div class="flex flex-col m-1">
          <label for="calcio">Calcio(g) <span class="text-red-400">*</span></label>
          <input type="number" id="calcio" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.calcio">
        </div>
        <div class="flex flex-col m-1">
          <label for="magnesio">Magnesio(g) <span class="text-red-400">*</span></label>
          <input type="number" id="magnesio" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.magnesio">
        </div>
        <div class="flex flex-col m-1">
          <label for="manganes">Manganes(g) <span class="text-red-400">*</span></label>
          <input type="number" id="manganes" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.manganes">
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col m-1">
          <label for="fosforo">Fosforo(g) <span class="text-red-400">*</span></label>
          <input type="number" id="fosforo" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.fosforo">
        </div>
        <div class="flex flex-col m-1">
          <label for="ferro">Ferro(g) <span class="text-red-400">*</span></label>
          <input type="number" id="ferro" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.ferro">
        </div>
        <div class="flex flex-col m-1">
          <label for="sodio">Sódio(g) <span class="text-red-400">*</span></label>
          <input type="number" id="sodio" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.sodio">
        </div>
        <div class="flex flex-col m-1">
          <label for="potassio">Potassio(g) <span class="text-red-400">*</span></label>
          <input type="number" id="potassio" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.potassio">
        </div>
        <div class="flex flex-col m-1">
          <label for="cobre">Cobre(g) <span class="text-red-400">*</span></label>
          <input type="number" id="cobre" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.cobre">
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col m-1">
          <label for="zinco">Zinco(g) <span class="text-red-400">*</span></label>
          <input type="number" id="zinco" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.zinco">
        </div>
        <div class="flex flex-col m-1">
          <label for="retinol">Retinol(g) <span class="text-red-400">*</span></label>
          <input type="number" id="retinol" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.retinol">
        </div>
        <div class="flex flex-col m-1">
          <label for="re">RE(g) <span class="text-red-400">*</span></label>
          <input type="number" id="re" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.re">
        </div>
        <div class="flex flex-col m-1">
          <label for="rae">RAE(g) <span class="text-red-400">*</span></label>
          <input type="number" id="rae" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.rae">
        </div>
        <div class="flex flex-col m-1">
          <label for="tiamina">Tiamina(g) <span class="text-red-400">*</span></label>
          <input type="number" id="tiamina" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.tiamina">
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col m-1">
          <label for="riboflavina">Riboflavina(g) <span class="text-red-400">*</span></label>
          <input type="number" id="riboflavina" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.riboflavina">
        </div>
        <div class="flex flex-col m-1">
          <label for="piridoxina">Piridoxina(g) <span class="text-red-400">*</span></label>
          <input type="number" id="piridoxina" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.piridoxina">
        </div>
        <div class="flex flex-col m-1">
          <label for="niacina">Niacina(g) <span class="text-red-400">*</span></label>
          <input type="number" id="niacina" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.niacina">
        </div>
        <div class="flex flex-col m-1">
          <label for="vitamina_c">Vitamina C(g) <span class="text-red-400">*</span></label>
          <input type="number" id="vitamina_c" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.vitamina_c">
        </div>
      </div>
      
      <div class="flex flex-col">
        <p class="font-bold text-slate-600 pl-1">Gorduras:</p>
        <div class="flex">
          <div class="flex flex-col m-1">
            <label for="saturados">Saturadas(g) <span class="text-red-400">*</span></label>
            <input type="number" id="saturados" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.saturados">
          </div>
          <div class="flex flex-col m-1">
            <label for="mono_insaturados">Mono-insaturadas(g) <span class="text-red-400">*</span></label>
            <input type="number" id="mono_insaturados" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.mono_insaturados">
          </div>
          <div class="flex flex-col m-1">
            <label for="poli_insaturados">Poli-insaturadas(g) <span class="text-red-400">*</span></label>
            <input type="number" id="poli_insaturados" class="bg-slate-200 py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient.poli_insaturados">
          </div>
        </div>
      </div>
      
      <div class="flex flex-col">
        <label for="quantity" class="font-bold text-slate-600 pl-1">Qual quantidade desse alimento você irá utilizar?</label>
        <input type="number" id="quantity" class="bg-slate-200 max-w-sm py-1 px-2 mb-1 rounded-sm outline-none" v-model="new_ingredient_quantity">
      </div>
      
      <div class="flex justify-center mt-2"> 
        <button class="bg-blue-400 text-white self-center text-xl font-bold px-8 py-4 rounded-md hover:cursor-pointer hover:bg-blue-200"
        @click="addNewIngredientToUserList()">Adicionar</button>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
  }

  .modal {
    position: relative; 
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
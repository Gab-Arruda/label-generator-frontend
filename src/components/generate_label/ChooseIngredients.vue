<script>
export default {

}
</script>

<template>
    <h1 class="font-bold mt-8 mb-2 text-xl">Ingredientes:</h1>
    <div class="flex flex-row items-center bg-white border border-slate-200 rounded-md justify-around shadow-md shadow-slate-400 p-4">
        <div class="flex flex-col grow mx-4">
            <label for="choose_ingredients" class="text-slate-600">Escolha os ingredientes: </label>
            <input id="choose_ingredients" type="text" placeholder="Bolo de laranja" v-model="choose_ingredients" class="bg-slate-200 py-1 px-2 rounded-sm outline-none">
        </div>
        <div class="flex flex-col mx-4">
            <label for="quantity" class="text-slate-600">Quantidade: </label>
            <input id="quantity" type="number" min="0" v-model="quantity" class="bg-slate-200 py-1 px-2 rounded-sm outline-none">
        </div>
        <div class="bg-blue-400 self-end hover:cursor-pointer">
            <img src="../../assets/plus.png" alt="Adicionar" class="w-8 h-8 p-1 rounded">
        </div>
    </div>
</template>
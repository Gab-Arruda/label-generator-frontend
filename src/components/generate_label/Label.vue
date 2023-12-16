<script>

export default {
    data() {

    },
    methods: {
        printLabel() {
            window.print();
        }
    }
}
</script>

<template>
    <div>
        Tabela Nutricional
    </div>
    <button @click="printLabel()">Imprimir</button>
</template>
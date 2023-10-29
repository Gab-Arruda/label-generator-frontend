<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
            default: 'Realizando operações...'
        },
    }
}
</script>

<template>
    <div class="modal-container">
        <div class="modal">
            <div class="flex justify-center">
                <p class="text-3xl text-slate-600">{{ this.title }}</p>
            </div>
            <img type="image" src="../../assets/loading-screen.gif" alt="carregando" />
        </div>
    </div>
</template>

<style>
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
<script setup>
import PanelAlert from './PanelAlert.vue'
defineProps({
    type: String,
    name: String,
    question: String
})
</script>

<template>
    <label>
        <h5>
            <slot></slot>
        </h5>

        <div class="flex-row-align-center position-relative" id="group-input">
            <input :value="question" class="input-public" :type="type" :name="name" readonly>
        </div>
        <PanelAlert></PanelAlert>
    </label>
</template>

<style scoped>
#group-input {
    background: var(--bgcolor-navigation);
    width: 100%;
    height: 2.37rem;
    box-shadow: none;
    border: 1px solid var(--color-border);
}

.input-public {
    flex: 1;
    background: none;
    border: none;

    height: 100%;

    /* font-size: 1.3rem; */
    color: var(--color-text);
    text-align: center;
}

@media (max-width: 430px) {
    #group-input {
        width: auto;
        flex-grow: 0;
        height: 2.3rem;
    }
}
</style>
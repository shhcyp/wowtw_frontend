<script setup>
import { ref } from 'vue'

const charts = ref([
    { image: 'src/assets/charts/tank_raid.webp', name: '坦克（团本）' },
    { image: 'src/assets/charts/tank_dungeon.webp', name: '坦克（副本）' },
    { image: 'src/assets/charts/healer_raid.webp', name: '治疗（团本）' },
    { image: 'src/assets/charts/healer_dungeon.webp', name: '治疗（副本）' },
    { image: 'src/assets/charts/dps_raid.webp', name: 'DPS（团本）' },
    { image: 'src/assets/charts/dps_dungeon.webp', name: 'DPS（副本）' },
])
</script>

<template>
    <li class="prompt-details-container-image">
        <div v-for="item in charts" :key="item.id" class="prompt-details">
            <span>{{ item.name }}</span>
            <img :src="item.image" class="box-size-class-list">
        </div>
    </li>
</template>

<style scoped>
.prompt-details-container-image {
    margin-left: 3.7rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.prompt-details {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
}

@media (max-width: 1080px) {
    .prompt-details-container-image {
        grid-auto-flow: row;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .prompt-details-container-image {
        margin-left: 0.7rem;
    }
}

@media (max-width: 700px) {
    .prompt-details-container-image {
        margin-left: 0;
        grid-auto-flow: column;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);

        place-items: center;
    }
}
</style>

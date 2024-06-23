<script setup>
</script>

<template>
    <li class="flex-row" id="extra-info-container">
        <span id="left-extra-info">其他</span>
        <ul id="right-extra-info-list">
            <!-- *详细装备额外信息 -->
            <slot name="extra-info">
                <!-- <li v-for="item in 5" :key="item.id" class="flex-row-align-center" id="extra-info">
            <div class="flex-center-center" id="extra-info-icon-container">
              <img src="#">
            </div>
            <span id="extra-info-desc">文字说明</span>
          </li> -->
            </slot>
        </ul>
    </li>
</template>

<style scoped>
#extra-info-container {
    margin-left: 0.37rem;
    margin-top: 0.37rem;
    margin-right: 0.7rem;
    padding-top: 0.37rem;
    border-top: 1px solid var(--color-border);
}

#left-extra-info {
    width: 2.3rem;
    text-align: center;
    margin-right: 1rem;
}

#right-extra-info-list {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

#extra-info-icon-container {
    width: 1.3rem;
    height: 1.3rem;
    background-color: black;
    margin-right: 0.7rem;
}

#extra-info-desc {
    font-size: 0.9rem;
}
</style>

<script setup>
</script>

<template>
    <div id="footer-container">
        <ul class="wrapper">
            <li class="no-select"><a>隐私政策</a></li>
            <li class="no-select"><span>|</span></li>
            <li class="no-select"><a>使用条款</a></li>
            <li class="no-select"><span>|</span></li>
            <li> <a href="https://beian.miit.gov.cn" target="_blank">滇ICP备2024031975号</a></li>
        </ul>
    </div>
</template>

<style scoped>
#footer-container {
    height: 2.6rem;
    line-height: 2.6rem;
    background-color: var(--color-footer);
    font-size: 0.8rem;
}

.wrapper {
    display: flex;
    justify-content: center;
}

li {
    padding: 0 0.5rem;
}
</style>

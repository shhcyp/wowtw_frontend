<script setup>
</script>

<template>
    <div class="container wrapper" id="page-head-container">
        <div class="title">
            <!-- <h1>{{ blogPage.title }}</h1>
                <p>{{ blogPage.subtitle }}</p> -->
            <h1>
                <slot name="page-title"></slot>
            </h1>
            <p>
                <slot name="page-subtitle1"></slot>
            </p>
            <p>
                <slot name="page-subtitle2"></slot>
            </p>
        </div>
    </div>
</template>

<style scoped>
#page-head-container {
    min-height: 7.3rem;
    margin-top: 2.7rem;
    /* padding-bottom: 3rem; */
}

.title {
    text-align: center;
}

p {
    padding-top: 1rem;
    line-height: 2rem;
    white-space: pre-line;
    /* padding: 1rem; */
}

@media screen and (max-width:432px) {
    p {
        text-align: left;
    }

    #page-head-container {
        min-height: 4.3rem;
        margin-top: 1.7rem;
        /* padding-bottom: 3rem; */
    }
}
</style>

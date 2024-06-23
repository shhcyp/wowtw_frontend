<template>
    <ul id="icon-show-nav">
        <li id="line1"></li>
        <li id="line2"></li>
        <li id="line3"></li>
        <li id="line4"></li>
    </ul>
</template>

<style scoped>
#icon-show-nav {
    height: 1.45rem;
    width: 1.55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

}

#line1 {
    width: 1.55rem;
    height: 0.2rem;
    background-color: var(--color-heading);
    border-radius: 0.1rem;
}

#line2,
#line3,
#line4 {
    width: 1.55rem;
    height: 0.1rem;
    background-color: var(--c-gray);
    /* background-color: #838383; */
    border-radius: 0.05rem;
}

#icon-show-nav:hover * {
    background-color: var(--color-heading);
}
</style>
<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis impedit commodi perspiciatis delectus
            quos suscipit libero ratione nisi pariatur! Dolore mollitia quos suscipit nobis praesentium? Laboriosam
            veniam rerum maxime.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nisi eveniet, veritatis quis porro dolorem
            velit, quos laboriosam perferendis eaque asperiores! Perferendis sequi voluptatibus minima pariatur ratione,
            in officiis iure!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
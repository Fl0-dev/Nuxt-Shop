<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products',
})

useHead({
    title: 'Nuxt-Shop | Merch',
    meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
    ]
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>
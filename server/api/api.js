export default defineEventHandler(async (event) => {
    ///params
    // const { name } = getQuery(event)
    //body
    // const { age } = await readBody(event)
    //apikey
    const { currencyKey } = useRuntimeConfig()
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)
    return {
        // message: `Hello ${name}! Your are ${age} years old.`
        data
    }
})
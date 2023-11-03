<template>
    <div1>
        <h1><span>Iron All brands</span></h1>
        <ul>
            <li style="--clr: #00ade1;">
            <a href="#/tefals" data-text="TEFAI">TEFAI</a>
            </li>
            <li style="--clr: #ff6493;">
            <a href="#/philipss" data-text="PHILIPS">PHILIPS</a>
            </li>
            <li style="--clr: #ffdd1c;">
            <a href="#/xiaomis" data-text="XIAOMI">XIAOMI</a>
            </li>
            <li style="--clr: #00dc82;">
            <a href="#/electroluxs" data-text="ELECTROLUX">ELECTROLUX</a>
            </li>
        </ul>
    </div1>
</template>
<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    },
}
</script>
<style scoped></style>
   
<template>
    <div>
        <p><b>name:</b> {{ product.name }}</p>
        <p><b>price:</b> {{ formattedPrice }}.</p>
        <p><b>quantity:</b> {{ product.quantity }}.</p>
        <p v-if="prodAvail"><b>status:</b>  available</p>
        <p v-else>status: Out of stock</p>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    props: {
        product: {
            type: Object,
            default: function () { return { name: '', price: '', available: '', quantity: '' } }
        }
    },
    data() {
        return {
            currency: 'P'   // just in case
        }
    },
    computed: {
        formattedPrice() {
            // return `${this.product.price} ${this.currency}`
            return new Intl.NumberFormat(window.navigator.language, { style: 'currency', currency: 'EUR' }).format(
                this.product.price,
            )
        },
        prodAvail() {
            return this.product.quantity > 0 && this.product.available
        }
    },

}
</script>

<style lang="scss"></style>
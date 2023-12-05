<template>
    <section>
        <h2>Products list</h2>
        <ol>
            <li v-for="item in products" :key="item.id">
                <ProductComp :product="item" />
            </li>
        </ol>

    </section>
</template>
  
<script>
import ProductComp from './ProductComp.vue';

export default {
    name: 'ProductsList',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'prod 01',
                    price: 100,
                    quantity: 0,
                    available: true
                }, {
                    id: 2,
                    name: 'prod 02',
                    price: 200,
                    quantity: 1,
                    available: true
                }, {
                    id: 3,
                    name: 'prod 03',
                    price: 300,
                    quantity: 4,
                    available: true
                }, {
                    id: 4,
                    name: 'prod 04',
                    price: 400,
                    quantity: 3,
                    available: true
                }, {
                    id: 5,
                    name: 'prod 05',
                    price: 500,
                    quantity: 2,
                    available: true
                }, {
                    id: 6,
                    name: 'prod 06',
                    price: 100,
                    quantity: 2,
                    available: false
                }
            ]
        };
    },
    components: { ProductComp }
}
</script>
  
<style scoped lang="scss"></style>
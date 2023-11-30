<template>
    <div>
        <p>Name: {{ product.name }} <button @click="details = !details">details</button></p>
        
        <div v-if="details">
            <ProductDetails :product="product"/>
        </div>
    </div>
</template>
  
<script>
import ProductDetails from './ProductDetails.vue';

export default {
    name: 'ProductComp',
    props: {
        product: Object
    },
    data() {
        return {
            details: false
        };
    },
    components: { ProductDetails }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
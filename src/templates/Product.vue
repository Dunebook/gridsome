<template>
    <Layout>
        <div v-if="this.$page.gcms.product" class="product_layout" >
            <div> 
              <g-image :src="product.images[0].url" class="img" alt="new image" />    
            </div>
            <div>
                <h1> {{ product.name }} </h1>
                <p > {{ product.description.markdown }} </p>
                <p>
                    ${{ product.price}}
                </p>
            </div>
            
        </div>
    </Layout>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: '',
                description: {
                    markdown: ''
                },
                images: [{
                    url: ''
                }]

            }
        
        }
    },
    created(){
        this.product = this.$page.gcms.product
        console.log('Product here', this.product)
    }
}  
</script>

<page-query>
query GetProduct($id: ID) {
    gcms {
        product(where: {id: $id}) {
                id
            name
            description{
                markdown
            }
            price
            images{
                url
            }
        }
    }
}
</page-query>

<style scoped>
    .img{
        width: 300px;
    }
    .product_layout{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 2rem;
    }
</style>
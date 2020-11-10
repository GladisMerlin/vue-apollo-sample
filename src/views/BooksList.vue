<template>
  <div class="hello">
   <h1>Book List</h1>
    
  
    <ApolloQuery :query="require('../graphql/query/books.gql')">
        <template v-slot="{result: { data } }">
          <div v-if="data">
            <div v-for="book in data.books" :key="book.id">
              {{book.name}}
             
            </div>
          </div>
        </template>
    </ApolloQuery>
   

   
  </div>
</template>

<script>


export default {
  name: 'BooksList',
  data(){
    return{
      
    };
  },
  methods: {
    
  },
  apollo:{
    
  },
  
}
</script>
<style scoped>
.link-margin{
  margin: 0 10px;
}
</style>


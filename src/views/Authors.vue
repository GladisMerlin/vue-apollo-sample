<template>
  <div>
    
    <h1>Authors</h1>
    <ApolloQuery :query="authorsQuery">
      <template v-slot="{result: { data }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="data">
          <a href="#" class="link-margin" @click.prevent="selectAuthor('all')">All</a>
          <a href="#" v-for="author in data.authors" :key="author.id" 
            @click.prevent="selectAuthor(author.id)" class="link-margin">
            {{author.name}}
          </a>
      
      </div>
      <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>


    <div v-if="selectedAuthor === 'all'">
      <ApolloQuery :query="query">
        <template v-slot="{result: { data }, isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else-if="data">
            <div v-for="book in data.books" :key="book.id" class="link-margin">
               <router-link :to="`/books/${book.id}`">
                {{book.id}} . {{book.name}}
              </router-link>
            
            </div>
        </div>
        <div v-else>No result :(</div>
        </template>
      </ApolloQuery>
    </div>

    <div v-else>
      <ApolloQuery :query="query" :variables="{ id:selectedAuthor }">
        <template v-slot="{result: { data }, isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else-if="data">
            <div v-for="book in data.author.books" :key="book.id" class="link-margin">
              <router-link :to="`/books/${book.id}`">
                {{book.id}} . {{book.name}}
              </router-link>
            </div>
        </div>
        <div v-else>No result :(</div>
        </template>
      </ApolloQuery>
    </div>

  </div>
</template>

<script>
import authorsQuery from '@/graphql/query/authors.gql'
import authorQuery from '@/graphql/query/author.gql'
import booksQuery from '@/graphql/query/books.gql'

export default {
  name: 'Authors',
  data(){
    return{
      authorsQuery,
      authorQuery,
      booksQuery,
      selectedAuthor: 'all',
      query :booksQuery
    };
  },
  methods: {
   selectAuthor(author){
     if(author === 'all') {
       this.query = booksQuery
     }
     else{
       this.query = authorQuery
     }
     this.selectedAuthor = author
   }
  }
}
</script>
<style>
.link-margin {
  margin-right: 24px;
}
</style>


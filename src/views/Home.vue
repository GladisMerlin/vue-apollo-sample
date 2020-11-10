<template>
  <div>
    <h1>Create Book</h1>
    <form action="#" method="post" @submit.prevent="addBook">
      <div>
        <label for="book">Book Name</label>
        <input type="text" name="book" id="book" v-model="bookName" />
      </div>
    
       <div>
        

      <ApolloQuery
      :query="gql => gql`
        query {
          authors{
            id
            name
          }
        }`">
        <template v-slot="{ result: { loading, error, data } }">
          <div v-if="loading">Loading...</div>
          <div v-else-if="error">An error occurred</div>
          <div v-else-if="data">
            <select v-if="data" v-model="author">
              <option v-for="author in data.authors" :key="author.id" :value="author.id">
                {{author.name}}
              </option>
            </select>
          </div>
          <div v-else class="no-result apollo">No result :(</div>
        </template>
    </ApolloQuery>
      </div>
      
      <button type="submit">Add Book</button>
    </form>
    <add-author />
  </div>
</template>

<script>
import createBook from '@/graphql/mutations/createBook.gql'
import AddAuthor from '../components/AddAuthor.vue'

export default {
  name: 'Home',
  components:{
    AddAuthor
  },

  data(){
    return{
      bookName:'',
      author:'',
    };
  },
  methods: {
    addBook(){
      this.$apollo.mutate({
        // Query
        mutation: createBook,
        // Parameters
        variables: {
          bookName: this.bookName,
          author: this.author
        }
      }).then((data) => {
        console.log(data)

        this.$router.push("/booksList").catch(err => {
            if (err.name !== 'NavigationDuplicated') {
                throw err;
            }
        });

      }).catch((error) => {
        console.error(error)
      })
    }
  
  }
}
</script>


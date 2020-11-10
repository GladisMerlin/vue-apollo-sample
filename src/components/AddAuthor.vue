<template>
  <div>
    <h1>Add Author</h1>
    <form action="#" method="post" @submit.prevent="addAuthor">
    <input type="text" v-model="authorName" />
     <button type="submit">Add Author</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'AddAuthor',
  data(){
    return{
      authorName:'',
    };
  },
  methods: {

    
    addAuthor(){
      console.log(this.authorName)
      // Call to the graphql mutation
      this.$apollo.mutate({
        // Query
        mutation: gql`mutation ($authorName: String!) {
          addAuthor(name: $authorName)
            {
              id 
              name
            }
        }`,
        // Parameters
        variables: {
          authorName: this.authorName
        }
      })
      .then((data) => {
        console.log(data)

        this.$router.push("/authors").catch(err => {
            if (err.name !== 'NavigationDuplicated') {
                throw err;
            }
        });

      })
      .catch((e) => {console.log("catch", e)})
    }
  }
}
</script>


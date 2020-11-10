<template>
    <div>
       hjhjhj: {{ this.$route.params.id }}
       <div>
          {{ book }}
           {{ book.name }}
       </div>
        
    </div>
</template>
<script>
import { BOOK_QUERY } from '@/bookgql'
export default {
    name:'Book',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    apollo:{
        book: {
            query: BOOK_QUERY,
            variables () {
                return {
                    id: 5
                }
            }
        }
    }
}
</script>
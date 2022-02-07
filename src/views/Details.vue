<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
  </div>
  <button @click="handleClick">Delete post</button>
</template>

<script>
import getPost from '../composables/getPost'
import { useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'
export default {
    props: ['id'],
    setup(props) {
        const { post, error, load} = getPost(props.id)
        const router = useRouter()
        load()

        const handleClick = async () => {
            await projectFirestore.collection('posts').doc(props.id).delete()

            router.push({name: 'Home'})
        }
        return {post, error, handleClick}
    }
}
</script>

<style>

</style>
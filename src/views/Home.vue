<template>
  <div>
    <h3>Home</h3>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" v-if="showPost" />
    </div>
    <div v-else><Spinner /></div>
    <button @click="showPost = !showPost">
      <span v-if="showPost">Hide Post</span>
      <span v-else>Show Post</span>
    </button>
    <button @click="posts.pop()">Update Post</button>
    <router-link :to="{name: 'CreatePost'}"><button>Create Post</button></router-link>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
export default {
  name: "Home",
  components: {PostList, Spinner},
  setup() {
    const { posts, error, load, showPost} = getPosts()
    load()
    return {posts, error, load, showPost}
  }
};
</script>

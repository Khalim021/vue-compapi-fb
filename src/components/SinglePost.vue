<template>
  <div>
      <router-link :to="{ name: 'Details', params: {id: post.id}}">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p>{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag.id">
        #{{ tag }}
      </span>
  </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>

</style>
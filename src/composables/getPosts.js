import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const load = async () => {
      try {
        const res = await projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc')
        .get()
        posts.value = res.docs.map(doc => {
          return {...doc.data(), id: doc.id}
        })
      }
      catch (err) {
        error.value = err.message
        console.log(err.message)
      }
    }
    const showPost = ref(true)
    return { posts, showPost, error, load}
}
export default getPosts
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    const load = async () => {
      try {
        let res = await projectFirestore.collection('posts').doc(id).get()
        if (!res.exists) {
          throw Error('Match not exists')
        }
        post.value = {...res.data(), id: res.id}
        console.log(post.value)
      }
      catch (err) {
        error.value = err.message
        console.log(err.message)
      }
    }
    return { post, error, load}
}
export default getPost
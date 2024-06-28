import axiosClient from './api/axiosClient'
import postApi from './api/postApi'

console.log('hello from main.js')

async function main() {
  // const respone = await axiosClient.get('/posts')
  const queryParams = {
    _page: 1,
    _limit: 5,
  }
  const respone = await postApi.getAll(queryParams)
  console.log('posts: ', respone)
}

main()

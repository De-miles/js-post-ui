import axiosClient from './api/axiosClient'
import postApi from './api/postApi'

async function main() {
  // const respone = await axiosClient.get('/posts')
  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    }
    const data = await postApi.getAll(queryParams)
    console.log('main.js data : ', data)
  } catch (error) {
    console.log('get All failed', error)
    // show modal, toast error
  }

  // await postApi.updateFormData({
  //   id: 'aqbbx1vj1lqrtv3wg',
  //   title: 'Est et rerum 222',
  // })
}

main()

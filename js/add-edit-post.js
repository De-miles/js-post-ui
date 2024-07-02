import postApi from './api/postApi'

// MAIN
;(async () => {
  try {
    const searchParams = new URLSearchParams(window.location.search)
    const postId = searchParams.get('id')

    const defaultValues = postId
      ? await postApi.getById(postId)
      : {
          title: '',
          description: '',
          author: '',
          imageUrl: '',
        }

    console.log('add edit page', postId)
    console.log(postId ? 'edit' : 'add')
    console.log('def', defaultValues)
  } catch (error) {
    console.log('failed to fetch post details: ', error)
  }
})()

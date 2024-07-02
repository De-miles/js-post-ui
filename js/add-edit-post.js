import postApi from './api/postApi'

// MAIN
import { initPostForm } from './utils'
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

    initPostForm({
      formId: 'postForm',
      defaultValues,
      onSubmit: (formValues) => console.log('submit', formValues),
    })
  } catch (error) {
    console.log('failed to fetch post details: ', error)
  }
})()

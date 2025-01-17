import postApi from './api/postApi.js'
import { initPagination, initSearch, renderPostList, renderPagination, toast } from './utils'

async function handleFilterChange(filterName, filterValue) {
  try {
    // update query params
    const url = new URL(window.location)
    if (filterName) url.searchParams.set(filterName, filterValue)

    //reset page if needed - case search
    if (filterName === 'title_like') url.searchParams.set('_page', 1)

    history.pushState({}, '', url)

    // fetch API
    const { data, pagination } = await postApi.getAll(url.searchParams)
    // re-render post list
    renderPostList('postList', data)
    renderPagination('pagination', pagination)
  } catch (error) {
    console.log('failed to fetch post list', error)
  }
}

function registerPostDeleteEvent() {
  document.addEventListener('post-delete', async (event) => {
    try {
      const post = event.detail
      const message = `Are you sure to remove post "${post.title}"?`
      if (window.confirm(message)) {
        await postApi.remove(post.id)
        await handleFilterChange()

        toast.success('Remove post successfully')
      }
    } catch (error) {
      console.log('failed to remove post', error)
      toast.error(error.message)
    }
  })
}

// MAIN
;(async () => {
  try {
    const url = new URL(window.location)

    // update search params if needed
    if (!url.searchParams.get('_page')) url.searchParams.set('_page', 1)
    if (!url.searchParams.get('_limit')) url.searchParams.set('_limit', 6)

    history.pushState({}, '', url)
    const queryParams = url.searchParams

    initPagination({
      elementId: 'pagination',
      defaultParams: queryParams,
      onChange: (page) => handleFilterChange('_page', page),
    })

    initSearch({
      elementId: 'searchInput',
      defaultParams: queryParams,
      onChange: (value) => handleFilterChange('title_like', value),
    })

    registerPostDeleteEvent()

    const { data, pagination } = await postApi.getAll(queryParams)
    renderPostList('postList', data)
    renderPagination('pagination', pagination)
  } catch (error) {
    console.log('get all failed', error)
    // show modal, toast error
  }
})()

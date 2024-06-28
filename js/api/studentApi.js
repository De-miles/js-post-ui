import axiosClient from './axiosClient.js'

const studentApi = {
  getAll(params) {
    const url = '/student'
    return axiosClient.get(url, { params })
  },

  getById(id) {
    const url = `/student/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/student'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/student/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `/student/${id}`
    return axiosClient.delete(url)
  },
}

export default studentApi

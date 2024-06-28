import axiosClient from './axiosClient.js'

// import: default import, named import
// export: default export, named export
// --
// default: can use alias name --> have one default export ONLY (per page)
// name export: must use exactly name --> have multiple export

export function getAllCities(params) {
  const url = '/cities'
  return axiosClient.get(url, { params })
}

// namme export
export function getCityById(id) {
  const url = `/cities/${id}`
  return axiosClient.get(url)
}

// const cityApi = {
//   getAll(params) {
//     const url = '/cities'
//     return axiosClient.get(url, { params })
//   },

//   getById(id) {
//     const url = `/cities/${id}`
//     return axiosClient.get(url)
//   },

//   add(data) {
//     const url = '/cities'
//     return axiosClient.post(url, data)
//   },

//   update(data) {
//     const url = `/cities/${data.id}`
//     return axiosClient.patch(url, data)
//   },

//   remove(id) {
//     const url = `/cities/${id}`
//     return axiosClient.delete(url)
//   },
// }

// export default cityApi

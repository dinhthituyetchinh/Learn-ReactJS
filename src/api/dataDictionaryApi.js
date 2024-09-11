import axiosClient from './axiosClient';

const dataDictionaryApi = {
  getAll(params) {
    const url = '/data-dictionary/get-all';
    return axiosClient.get(url, { params: { params } });
  },
  get(id) {
    const url = '/data-dictionary/${id}';
    return axiosClient.get(url);
  },
  add(data) {const url = '/data-dictionary';
    return axiosClient.post(url, data);},
  update(data) {
    const url = '/data-dictionary/${data.id}';
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = '/data-dictionary/${id}';
    return axiosClient.delete(url);},
};

export default dataDictionaryApi;

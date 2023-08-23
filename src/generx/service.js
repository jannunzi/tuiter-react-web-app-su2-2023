import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

function GnrxService(collection, base) {
  const create = async (obj) => {
    const response = await request.post(`${base}/${collection}`, obj);
    return response.data;
  };
  const findOneToMany = async (one, id, many) => {
    const response = await request.get(`${base}/${one}/${id}/${many}`);
    return response.data;
  };
  const findAll = async () => {
    const response = await request.get(`${base}/${collection}`);
    return response.data;
  };
  const findOne = async (id) => {
    const response = await request.get(`${base}/${collection}/${id}`);
    return response.data;
  };
  const update = async (id, updates) => {
    const response = await request.put(`${base}/${collection}/${id}`, updates);
    return response.data;
  };
  const remove = async (id) => {
    const response = await request.delete(`${base}/${collection}/${id}`);
    return response.data;
  };
  return {
    create,
    findOneToMany,
    findAll,
    findOne,
    update,
    remove,
  };
}

export default GnrxService;

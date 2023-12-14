import { api } from '../api';
import { company, paginationTopLimit } from '../constants/consts/company';

const PropertiesServices = {
  getSelects: async () => {
    const response = await api.get(`properties/select-filters`);
    return { data: response.data };
  },

  getCommunesByStateId: async (id) => {
    const response = await api.get(`properties/communes?stateId=${id}`);
    return { data: response.data };
  },

};

export default PropertiesServices;
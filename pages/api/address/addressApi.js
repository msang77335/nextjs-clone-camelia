import axios from "axios";

const accessToken = "55941373-e474-11eb-9389-f656af98cb33";

const apiUrl = "https://online-gateway.ghn.vn/shiip/public-api/master-data";

axios.interceptors.request.use(
   (config) => {
      config.headers.token = `${accessToken}`;
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

const addressApi = {
   getProvince: async () => {
      return await (
         await axios.get(`${apiUrl}/province`)
      ).data.data;
   },
   getDistrict: async (provinceId) => {
      return await (
         await axios.get(`${apiUrl}/district`, {
            params: { province_id: provinceId },
         })
      ).data.data;
   },
   getWard: async (districtId) => {
      return await (
         await axios.get(`${apiUrl}/ward`, {
            params: { district_id: districtId },
         })
      ).data.data;
   },
   getServices: async (shopId, fromDistrictID, toDistrictID) => {
      return await (
         await axios.get(
            `https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services`,
            {
               params: {
                  shop_id: shopId,
                  from_district: fromDistrictID,
                  to_district: toDistrictID,
               },
            }
         )
      ).data.data;
   },
};

export default addressApi;

import axios from "axios";
import addressApi from "./addressApi";

const shopId = "1812214";

const accessToken = "55941373-e474-11eb-9389-f656af98cb33";

const apiUrl =
   "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee";

const weightProduct = 500;

const formDistrictID = 1444;

axios.interceptors.request.use(
   (config) => {
      config.headers.token = `${accessToken}`;
      config.headers.shop_id = `${shopId}`;
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

const transferCostApi = {
   getTransferCost: async (
      priceProduct,
      toDistrictID,
      toWardCode,
      amountProduct
   ) => {
      const services = await addressApi.getServices(
         shopId,
         formDistrictID,
         toDistrictID
      );
      return await (
         await axios.get(`${apiUrl}`, {
            params: {
               service_id: services[0].service_id,
               insurance_value: priceProduct,
               coupon: null,
               from_district_id: formDistrictID,
               to_district_id: toDistrictID,
               to_ward_code: toWardCode,
               weight: weightProduct * amountProduct,
            },
         })
      ).data.data;
   },
};

export default transferCostApi;

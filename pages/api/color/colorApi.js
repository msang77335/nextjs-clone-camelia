import ColorSchema from "../../../models/Color";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

const colorApi = {
   getAll: async () => {
      return await ColorSchema.find({});
   },
};

export default colorApi;

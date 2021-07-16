const validateInfo = {
   checkName: (name) => {
      if (!name) {
         return "Tên không hợp lệ";
      }
      return "";
   },
   checkEmail: (email) => {
      if (!email) {
         return "Email không hợp lệ";
      }
      return "";
   },
   checkPhone: (phone) => {
      if (!phone) {
         return "Số điện thoại không hợp lệ";
      }
      return "";
   },
   checkAddress: (address) => {
      if (!address) {
         return "Địa chỉ không hợp lệ";
      }
      return "";
   },
};

export default validateInfo;

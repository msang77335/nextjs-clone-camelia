import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { State } from "../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import * as s from "../../styles/emotion/StyleCheckouts";
import Link from "next/link";
import swal from "sweetalert";
import addressApi from "../api/address/addressApi";
import transferCostApi from "../api/address/transferCostApi";
import useInput from "../../hooks/UseInput";
import validateInfo from "../../validation/validateInfo";
import useSelectOption from "../../hooks/UseSelectOption";
import EmtpyLayout from "../../components/EmtpyLayout";
const CheckoutsProductItem = dynamic(
   () => import("../../components/CheckoutsProductItem")
);
const CheckoutsSelect = dynamic(
   () => import("../../components/CheckoutsSelect")
);
const FormGroup = dynamic(() => import("../../components/FormGroup"));

interface Option {
   key: number;
   value: string;
}

const Checkouts: React.FC & { Layout: React.FC } = () => {
   const [nameValue, handleNameChange, nameError, changeNameError] =
      useInput("");
   const [emailValue, handleEmailChange, emailError, changeEmailError] =
      useInput("");
   const [phoneValue, handlePhoneChange, phoneError, changePhoneError] =
      useInput("");
   const [addressValue, handleAddressChange, addressError, changeAddressError] =
      useInput("");
   const [codeValue, handleCodeChange, codeError, changeCodeError] =
      useInput("");
   const [
      provinceValue,
      provinceChange,
      provinceError,
      setProvinceError,
      resetProvince,
   ] = useSelectOption({} as Option);
   const [
      districtValue,
      districtChange,
      districtError,
      setDistrictError,
      resetDistrict,
   ] = useSelectOption({} as Option);
   const [wardValue, wardChange, wardError, setWardError, resetWard] =
      useSelectOption({} as Option);

   const router = useRouter();
   const dispatch = useDispatch();
   const { resetCart } = bindActionCreators(actionCreators, dispatch);
   var products = useSelector((state: State) => state.cart.products);
   const totalAmount = useSelector((state: State) => state.cart.amount);
   const temporaryPrice = useSelector((state: State) => state.cart.totalPrice);
   const [isTabInfo, setIsTabInfo] = useState<boolean>(true);
   const [isTransferMoney, setIsTransferMoney] = useState<boolean>(false);
   const [provinceOptions, setProvinceOptions] = useState<Option[]>([]);
   const [districtOptions, setDistrictOptions] = useState<Option[]>([]);
   const [wardOptions, setWardOptions] = useState<Option[]>([]);
   const [transferCost, setTransferCost] = useState(0);
   const [totalPrice, setTotalPrice] = useState(temporaryPrice);
   useEffect(() => {
      async function fetchProvince() {
         const newProvinceOptions = [] as Option[];
         const provinceData = await addressApi.getProvince();
         provinceData.map((provinceDataItem) =>
            newProvinceOptions.push({
               key: provinceDataItem.ProvinceID,
               value: provinceDataItem.ProvinceName,
            })
         );
         setProvinceOptions(newProvinceOptions);
      }
      fetchProvince();
   }, []);
   const handleProvinceChange = (province: Option) => {
      resetDistrict();
      resetWard();
      const newDistrictOptions = [] as Option[];
      const newWardOptions = [] as Option[];
      async function fetchDistrict() {
         try {
            const districtData = await addressApi.getDistrict(province.key);
            districtData.map((districtDataItem) =>
               newDistrictOptions.push({
                  key: districtDataItem.DistrictID,
                  value: districtDataItem.DistrictName,
               })
            );
            setDistrictOptions(newDistrictOptions);
            setWardOptions(newWardOptions);
         } catch (error) {
            swal({
               title: "Rất lấy làm tiếc!!!",
               text: "Cửa hàng chưa hỗ trợ giao hàng tại địa chỉ bạn chọn!",
               icon: "info",
            });
         }
      }
      fetchDistrict();
   };
   const handleDistrictChange = (district: Option) => {
      resetWard();
      const newWardOptions = [] as Option[];
      async function fetchWard() {
         try {
            const wardData = await addressApi.getWard(district.key);
            wardData.map((wardDataItem) =>
               newWardOptions.push({
                  key: parseInt(wardDataItem.WardCode),
                  value: wardDataItem.WardName,
               })
            );
            setWardOptions(newWardOptions);
         } catch (error) {
            swal({
               title: "Rất lấy làm tiếc!!!",
               text: "Cửa hàng chưa hỗ trợ giao hàng tại địa chỉ bạn chọn!",
               icon: "info",
            });
         }
      }
      fetchWard();
   };
   const handleWardChange = (ward: Option) => {};
   const handleContinue = () => {
      const nameErMess = validateInfo.checkName(nameValue);
      const emailErMess = validateInfo.checkEmail(emailValue);
      const phoneErMess = validateInfo.checkPhone(phoneValue);
      const addressErMess = validateInfo.checkAddress(addressValue);
      const isEmtpyProvince =
         Object.keys(provinceValue).length === 0 ? "Chưa chọn Tỉnh thành" : "";
      const isEmtpyDistrict =
         Object.keys(districtValue).length === 0 ? "Chưa chọn Quận/Huyện" : "";
      const isEmtpyWard =
         Object.keys(wardValue).length === 0 ? "Chưa chọn Phường/Xã" : "";
      changeNameError(nameErMess);
      changeEmailError(emailErMess);
      changePhoneError(phoneErMess);
      changeAddressError(addressErMess);
      setProvinceError(isEmtpyProvince);
      setDistrictError(isEmtpyDistrict);
      setWardError(isEmtpyWard);

      async function fetchCost() {
         try {
            const cost = await transferCostApi.getTransferCost(
               temporaryPrice,
               districtValue.key,
               wardValue.key,
               totalAmount
            );
            setTransferCost(cost.total);
            setTotalPrice(temporaryPrice + cost.total);
            setIsTabInfo(false);
         } catch (error) {
            swal({
               title: "Rất lấy làm tiếc!!!",
               text: "Cửa hàng chưa hỗ trợ giao hàng tại địa chỉ bạn chọn!",
               icon: "info",
            });
         }
      }
      if (
         !nameErMess &&
         !emailErMess &&
         !phoneErMess &&
         !addressErMess &&
         !isEmtpyProvince &&
         !isEmtpyDistrict &&
         !isEmtpyWard
      ) {
         fetchCost();
      }
   };
   const handleUseCode = () => {
      if (!codeValue) {
         changeCodeError("Mã Code không tồn tại");
      }
   };
   const handleCompletedPay = () => {
      router.push("/");
      resetCart();
      swal({
         title: "Mua hàng thành công!!!",
         text: "Cảm ơn bạn đã mua sản phẩm của chúng tôi!",
         icon: "success",
      });
   };
   return (
      <s.CheckoutsContainer>
         <s.Left>
            <s.LeftTop>
               <s.Title>
                  <Link href="/">
                     <a>Camelia Brand</a>
                  </Link>
               </s.Title>
               <s.Breadcrumb>
                  <s.BreadcrumbItem>
                     <Link href="/cart">
                        <a>Giỏ hàng</a>
                     </Link>
                     <s.ChevronRightIcon />
                  </s.BreadcrumbItem>
                  <s.BreadcrumbItem isActice>
                     {isTabInfo ? (
                        <p>
                           <span>Thông tin khách hàng</span>
                        </p>
                     ) : (
                        <span onClick={() => setIsTabInfo(true)}>
                           Thông tin khách hàng
                        </span>
                     )}
                     <s.ChevronRightIcon />
                  </s.BreadcrumbItem>
                  <s.BreadcrumbItem>
                     {isTabInfo ? (
                        <p>Phương thức thanh toán</p>
                     ) : (
                        <p>
                           <span>Phương thức thanh toán</span>
                        </p>
                     )}
                  </s.BreadcrumbItem>
               </s.Breadcrumb>
               <AnimatePresence exitBeforeEnter>
                  {isTabInfo ? (
                     <motion.div
                        key="TabInfo"
                        initial={{ x: -700, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -700, opacity: 0 }}
                        transition={{ duration: 0.45 }}
                     >
                        <s.TabInfo>
                           <s.FormTitle>Thông tin khách hàng</s.FormTitle>
                           <s.Form>
                              <s.FormRow>
                                 <FormGroup
                                    id="name"
                                    label="Tên của bạn"
                                    value={nameValue}
                                    onChange={handleNameChange}
                                    error={nameError}
                                 />
                              </s.FormRow>
                              <s.FlexRow>
                                 <s.Email>
                                    <FormGroup
                                       id="email"
                                       label="Email (không bắt buộc)"
                                       value={emailValue}
                                       onChange={handleEmailChange}
                                       error={emailError}
                                    />
                                 </s.Email>
                                 <s.Phone>
                                    <FormGroup
                                       id="phone"
                                       label="Số điện thoại"
                                       value={phoneValue}
                                       onChange={handlePhoneChange}
                                       error={phoneError}
                                    />
                                 </s.Phone>
                              </s.FlexRow>
                              <s.FormRow>
                                 <FormGroup
                                    id="address"
                                    label="Số nhà và tên đường"
                                    value={addressValue}
                                    onChange={handleAddressChange}
                                    error={addressError}
                                 />
                              </s.FormRow>
                              <s.FlexRow>
                                 <s.SelectLeft>
                                    <s.Select>
                                       <CheckoutsSelect
                                          value={provinceValue}
                                          title="Tỉnh thành"
                                          options={provinceOptions}
                                          handleOptionChange={provinceChange}
                                          changeCallBack={handleProvinceChange}
                                          error={provinceError}
                                       />
                                    </s.Select>
                                    <s.Select>
                                       <CheckoutsSelect
                                          value={districtValue}
                                          title="Quận/Huyện"
                                          options={districtOptions}
                                          handleOptionChange={districtChange}
                                          changeCallBack={handleDistrictChange}
                                          error={districtError}
                                       />
                                    </s.Select>
                                 </s.SelectLeft>
                                 <s.SelectRight>
                                    <CheckoutsSelect
                                       value={wardValue}
                                       title="Phường/Xã"
                                       options={wardOptions}
                                       handleOptionChange={wardChange}
                                       changeCallBack={handleWardChange}
                                       error={wardError}
                                    />
                                 </s.SelectRight>
                              </s.FlexRow>
                              <s.FormBottom>
                                 <s.FormBottomBack>
                                    <s.ChevronLeftIcon />
                                    <Link href="/cart">
                                       <a>Giỏ hàng</a>
                                    </Link>
                                 </s.FormBottomBack>
                                 <s.Btn
                                    type="button"
                                    onClick={() => handleContinue()}
                                 >
                                    Tiếp tục
                                 </s.Btn>
                              </s.FormBottom>
                           </s.Form>
                        </s.TabInfo>
                     </motion.div>
                  ) : (
                     <motion.div
                        key="TabPay"
                        initial={{ x: 700, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 700, opacity: 0 }}
                        transition={{ duration: 0.45 }}
                     >
                        <s.RadioGroup>
                           <s.RadioTitle>Thông tin khách hàng</s.RadioTitle>
                           <s.RadioList>
                              <s.RadioItem isChose>
                                 <s.RadioItemLabel>
                                    <s.RadioLeft>
                                       <s.Radio />
                                       <p>Vận chuyển trong 2-4 ngày (trừ CN)</p>
                                    </s.RadioLeft>
                                    <p>
                                       {transferCost
                                          .toString()
                                          .replace(
                                             /(\d)(?=(\d{3})+(?!\d))/g,
                                             "$1,"
                                          )}
                                       ₫
                                    </p>
                                 </s.RadioItemLabel>
                              </s.RadioItem>
                           </s.RadioList>
                        </s.RadioGroup>
                        <s.RadioGroup>
                           <s.RadioTitle>Thông tin khách hàng</s.RadioTitle>
                           <s.RadioList>
                              <s.RadioItem
                                 isChose={!isTransferMoney}
                                 onClick={() => setIsTransferMoney(false)}
                              >
                                 <s.RadioItemLabel isBorder>
                                    <s.RadioLeft>
                                       <s.Radio />
                                       <p>
                                          Thanh toán tiền mặt khi nhận hàng
                                          (COD)
                                       </p>
                                    </s.RadioLeft>
                                    <p></p>
                                 </s.RadioItemLabel>
                              </s.RadioItem>
                              <s.RadioItem
                                 isChose={isTransferMoney}
                                 onClick={() => setIsTransferMoney(true)}
                              >
                                 <s.RadioItemLabel isBorder>
                                    <s.RadioLeft>
                                       <s.Radio />
                                       <p>
                                          Chuyển khoản ngân hàng (Miễn phí thanh
                                          toán)
                                       </p>
                                    </s.RadioLeft>
                                    <p></p>
                                 </s.RadioItemLabel>
                                 <s.RadioDesc>
                                    <p>Quý khách vui lòng chuyển tiền vào:</p>
                                    <span></span>
                                    <p>
                                       Ngân hàng: Vietcombank (TMCP Ngoại thương
                                       VN) – Chi nhánh Hội sở
                                    </p>
                                    <p>Số tài khoản: 0071001233377</p>
                                    <p>Chủ tài khoản: Trần Đức Minh</p>
                                    <p>
                                       Nội dung chuyển khoản:
                                       Số-điện-thoại-của-bạn
                                    </p>
                                    <span></span>
                                    <p>
                                       Sau đó, bấm nút &apos;Hoàn tất&apos; phía
                                       dưới.
                                    </p>
                                 </s.RadioDesc>
                              </s.RadioItem>
                           </s.RadioList>
                        </s.RadioGroup>
                        <s.FormBottom>
                           <s.FormBottomBack onClick={() => setIsTabInfo(true)}>
                              <s.ChevronLeftIcon />
                              <p> Chỉnh sửa thông tin</p>
                           </s.FormBottomBack>
                           <s.Btn onClick={handleCompletedPay}>Hoàn tất</s.Btn>
                        </s.FormBottom>
                     </motion.div>
                  )}
               </AnimatePresence>
            </s.LeftTop>
            <s.LeftBottom>Powered by Haravan</s.LeftBottom>
         </s.Left>
         <s.Right>
            <s.RightTop>
               <s.Title>
                  <Link href="/">
                     <a>Camelia Brand</a>
                  </Link>
               </s.Title>
            </s.RightTop>
            <s.RightCenter>
               {" "}
               <s.ProductList>
                  {products.map((product, i) => (
                     <CheckoutsProductItem key={i} product={product} />
                  ))}
               </s.ProductList>
               {/* <s.CodeForm>
                  <s.FormRow>
                     <s.Code>
                        <FormGroup
                           id="code"
                           label="Mã code"
                           value={codeValue}
                           onChange={handleCodeChange}
                           error={codeError}
                        />
                     </s.Code>
                     <s.Btn type="button" onClick={handleUseCode}>
                        Sử dụng
                     </s.Btn>
                  </s.FormRow>
               </s.CodeForm> */}
               <s.Fee>
                  <s.FeeRow>
                     <p>Tạm tính</p>
                     <p>
                        {temporaryPrice
                           .toString()
                           .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        ₫
                     </p>
                  </s.FeeRow>
                  <s.FeeRow>
                     <p>Phí vận chuyển</p>
                     {transferCost !== 0 ? (
                        <p>
                           {transferCost
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                           đ
                        </p>
                     ) : (
                        <p>--</p>
                     )}
                  </s.FeeRow>
               </s.Fee>
               <s.Total>
                  <s.TotalTitle>Tổng tiền</s.TotalTitle>
                  <s.TotalRow>
                     <s.TotalUnit>VND</s.TotalUnit>
                     <s.TotalPrice>
                        {totalPrice
                           .toString()
                           .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        ₫
                     </s.TotalPrice>
                  </s.TotalRow>
               </s.Total>
            </s.RightCenter>
         </s.Right>
      </s.CheckoutsContainer>
   );
};

Checkouts.Layout = EmtpyLayout;

export default Checkouts;

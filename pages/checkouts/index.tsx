import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { State } from "../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
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
   const [isShowProducts, setIsShowProducts] = useState(false);
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
               title: "R???t l???y l??m ti???c!!!",
               text: "C???a h??ng ch??a h??? tr??? giao h??ng t???i ?????a ch??? b???n ch???n!",
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
               title: "R???t l???y l??m ti???c!!!",
               text: "C???a h??ng ch??a h??? tr??? giao h??ng t???i ?????a ch??? b???n ch???n!",
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
         Object.keys(provinceValue).length === 0 ? "Ch??a ch???n T???nh th??nh" : "";
      const isEmtpyDistrict =
         Object.keys(districtValue).length === 0 ? "Ch??a ch???n Qu???n/Huy???n" : "";
      const isEmtpyWard =
         Object.keys(wardValue).length === 0 ? "Ch??a ch???n Ph?????ng/X??" : "";
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
               title: "R???t l???y l??m ti???c!!!",
               text: "C???a h??ng ch??a h??? tr??? giao h??ng t???i ?????a ch??? b???n ch???n!",
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
         changeCodeError("M?? Code kh??ng t???n t???i");
      }
   };
   const handleCompletedPay = () => {
      router.push("/");
      resetCart();
      swal({
         title: "Mua h??ng th??nh c??ng!!!",
         text: "C???m ??n b???n ???? mua s???n ph???m c???a ch??ng t??i!",
         icon: "success",
      });
   };
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Thanh to??n h??a ????n - Camelia Brand</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width, maximum-scale=1"
            />
         </Head>{" "}
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
                           <a>Gi??? h??ng</a>
                        </Link>
                        <s.ChevronRightIcon />
                     </s.BreadcrumbItem>
                     <s.BreadcrumbItem isActice>
                        {isTabInfo ? (
                           <p>
                              <span>Th??ng tin kh??ch h??ng</span>
                           </p>
                        ) : (
                           <span onClick={() => setIsTabInfo(true)}>
                              Th??ng tin kh??ch h??ng
                           </span>
                        )}
                        <s.ChevronRightIcon />
                     </s.BreadcrumbItem>
                     <s.BreadcrumbItem>
                        {isTabInfo ? (
                           <p>Ph????ng th???c thanh to??n</p>
                        ) : (
                           <p>
                              <span>Ph????ng th???c thanh to??n</span>
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
                              <s.FormTitle>Th??ng tin kh??ch h??ng</s.FormTitle>
                              <s.Form>
                                 <s.FormRow>
                                    <FormGroup
                                       id="name"
                                       label="T??n c???a b???n"
                                       value={nameValue}
                                       onChange={handleNameChange}
                                       error={nameError}
                                    />
                                 </s.FormRow>
                                 <s.FlexRow>
                                    <s.Email>
                                       <FormGroup
                                          id="email"
                                          label="Email (kh??ng b???t bu???c)"
                                          value={emailValue}
                                          onChange={handleEmailChange}
                                          error={emailError}
                                       />
                                    </s.Email>
                                    <s.Phone>
                                       <FormGroup
                                          id="phone"
                                          label="S??? ??i???n tho???i"
                                          value={phoneValue}
                                          onChange={handlePhoneChange}
                                          error={phoneError}
                                       />
                                    </s.Phone>
                                 </s.FlexRow>
                                 <s.FormRow>
                                    <FormGroup
                                       id="address"
                                       label="S??? nh?? v?? t??n ???????ng"
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
                                             title="T???nh th??nh"
                                             options={provinceOptions}
                                             handleOptionChange={provinceChange}
                                             changeCallBack={
                                                handleProvinceChange
                                             }
                                             error={provinceError}
                                          />
                                       </s.Select>
                                       <s.Select>
                                          <CheckoutsSelect
                                             value={districtValue}
                                             title="Qu???n/Huy???n"
                                             options={districtOptions}
                                             handleOptionChange={districtChange}
                                             changeCallBack={
                                                handleDistrictChange
                                             }
                                             error={districtError}
                                          />
                                       </s.Select>
                                    </s.SelectLeft>
                                    <s.SelectRight>
                                       <CheckoutsSelect
                                          value={wardValue}
                                          title="Ph?????ng/X??"
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
                                          <a>Gi??? h??ng</a>
                                       </Link>
                                    </s.FormBottomBack>
                                    <s.Btn
                                       type="button"
                                       onClick={() => handleContinue()}
                                    >
                                       Ti???p t???c
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
                              <s.RadioTitle>Th??ng tin kh??ch h??ng</s.RadioTitle>
                              <s.RadioList>
                                 <s.RadioItem isChose>
                                    <s.RadioItemLabel>
                                       <s.RadioLeft>
                                          <s.Radio />
                                          <p>
                                             V????n chuy????n trong 2-4 nga??y (tr???? CN)
                                          </p>
                                       </s.RadioLeft>
                                       <p>
                                          {transferCost
                                             .toString()
                                             .replace(
                                                /(\d)(?=(\d{3})+(?!\d))/g,
                                                "$1,"
                                             )}
                                          ???
                                       </p>
                                    </s.RadioItemLabel>
                                 </s.RadioItem>
                              </s.RadioList>
                           </s.RadioGroup>
                           <s.RadioGroup>
                              <s.RadioTitle>Th??ng tin kh??ch h??ng</s.RadioTitle>
                              <s.RadioList>
                                 <s.RadioItem
                                    isChose={!isTransferMoney}
                                    onClick={() => setIsTransferMoney(false)}
                                 >
                                    <s.RadioItemLabel isBorder>
                                       <s.RadioLeft>
                                          <s.Radio />
                                          <p>
                                             Thanh to??n ti????n m????t khi nh????n h??ng
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
                                             Chuy????n khoa??n ng??n ha??ng (Mi????n phi??
                                             thanh toa??n)
                                          </p>
                                       </s.RadioLeft>
                                       <p></p>
                                    </s.RadioItemLabel>
                                    <s.RadioDesc>
                                       <p>
                                          Quy?? kha??ch vui lo??ng chuy????n ti????n va??o:
                                       </p>
                                       <span></span>
                                       <p>
                                          Ng??n h??ng: Vietcombank (TMCP Ngo???i
                                          th????ng VN) ??? Chi nha??nh H????i s????
                                       </p>
                                       <p>S??? t??i kho???n: 0071001233377</p>
                                       <p>Ch??? t??i kho???n: Tr???n ?????c Minh</p>
                                       <p>
                                          N????i dung chuy????n khoa??n:
                                          S????-??i????n-thoa??i-cu??a-ba??n
                                       </p>
                                       <span></span>
                                       <p>
                                          Sau ??o??, b????m nu??t &apos;Hoa??n t????t&apos;
                                          phi??a d??????i.
                                       </p>
                                    </s.RadioDesc>
                                 </s.RadioItem>
                              </s.RadioList>
                           </s.RadioGroup>
                           <s.FormBottom>
                              <s.FormBottomBack
                                 onClick={() => setIsTabInfo(true)}
                              >
                                 <s.ChevronLeftIcon />
                                 <p> Ch???nh s???a th??ng tin</p>
                              </s.FormBottomBack>
                              <s.Btn onClick={handleCompletedPay}>
                                 Ho??n t???t
                              </s.Btn>
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
                  <s.ToggleProducts>
                     <s.ToggleProductsLeft
                        onClick={() => setIsShowProducts(!isShowProducts)}
                     >
                        <s.ShoppingCartIcon />
                        {isShowProducts ? (
                           <p>
                              ???n th??ng tin ????n h??ng <s.ChevronUpIcon />
                           </p>
                        ) : (
                           <p>
                              Hi???n th??? th??ng tin ????n h??ng <s.ChevronDownIcon />
                           </p>
                        )}
                     </s.ToggleProductsLeft>
                     <s.ToggleProductsRight>
                        <p>
                           {totalPrice
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                           ???
                        </p>
                     </s.ToggleProductsRight>
                  </s.ToggleProducts>
                  {isShowProducts && (
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                     >
                        <s.ProductList>
                           {products.map((product, i) => (
                              <CheckoutsProductItem key={i} product={product} />
                           ))}
                        </s.ProductList>
                     </motion.div>
                  )}
                  {/* <s.CodeForm>
                  <s.FormRow>
                     <s.Code>
                        <FormGroup
                           id="code"
                           label="M?? code"
                           value={codeValue}
                           onChange={handleCodeChange}
                           error={codeError}
                        />
                     </s.Code>
                     <s.Btn type="button" onClick={handleUseCode}>
                        S??? d???ng
                     </s.Btn>
                  </s.FormRow>
               </s.CodeForm> */}
                  <s.Fee>
                     <s.FeeRow>
                        <p>T???m t??nh</p>
                        <p>
                           {temporaryPrice
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                           ???
                        </p>
                     </s.FeeRow>
                     <s.FeeRow>
                        <p>Phi?? v????n chuy????n</p>
                        {transferCost !== 0 ? (
                           <p>
                              {transferCost
                                 .toString()
                                 .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                              ??
                           </p>
                        ) : (
                           <p>--</p>
                        )}
                     </s.FeeRow>
                  </s.Fee>
                  <s.Total>
                     <s.TotalTitle>T???ng ti???n</s.TotalTitle>
                     <s.TotalRow>
                        <s.TotalUnit>VND</s.TotalUnit>
                        <s.TotalPrice>
                           {totalPrice
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                           ???
                        </s.TotalPrice>
                     </s.TotalRow>
                  </s.Total>
               </s.RightCenter>
            </s.Right>
         </s.CheckoutsContainer>
      </motion.div>
   );
};

Checkouts.Layout = EmtpyLayout;

export default Checkouts;

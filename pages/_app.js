import "../styles/globals/reset.css";
import "../styles/globals/globals.css";
import "../styles/libraries/_nprogress.scss";
import "../styles/libraries/_sweetAlert.scss";
import MainLayout from "../components/Layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store, { persistor } from "../state/stote";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
   NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps, router }) {
   const Layout = Component.Layout || MainLayout;
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Layout>
               <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} key={router.route} />
               </AnimatePresence>
            </Layout>
         </PersistGate>
      </Provider>
   );
}

export default MyApp;

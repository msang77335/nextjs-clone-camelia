import "../styles/globals/reset.css";
import "../styles/globals/globals.css";
import "../styles/libraries/_nprogress.scss";
import Layout from "../components/Layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "../state/stote";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
   NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps, router }) {
   return (
      <Provider store={store}>
         <Layout>
            <AnimatePresence exitBeforeEnter>
               <Component {...pageProps} key={router.route} />
            </AnimatePresence>
         </Layout>
      </Provider>
   );
}

export default MyApp;

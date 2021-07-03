import "../styles/globals/reset.css";
import "../styles/globals/globals.css";
import "../styles/libraries/_nprogress.scss";
import Layout from "../components/Layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { AnimatePresence } from "framer-motion";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
   NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps, router }) {
   return ( 
      <Layout>
         <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
         </AnimatePresence>
      </Layout>
   );
}

export default MyApp;

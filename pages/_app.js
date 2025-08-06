import Preloader from '@/components/elements/Preloader';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useEffect, useState } from 'react';
// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import 'swiper/css/free-mode';
import AddClassBody from '@/components/elements/AddClassBody';
import '/public/assets/css/style.css';
import '/public/assets/css/responsive.css';
import '/public/assets/css/Mix.css';
import { Provider } from 'react-redux';
import appstore from '@/components/store/appStore';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);




  return (
    <>
      {!loading ? (
        <>
          <AddClassBody />
          <Provider store={appstore}>
            <Component {...pageProps} />
          </Provider>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;

import 'cirrus-ui/dist/cirrus.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/general.css';

export function reportWebVitals(metric) {
  console.log(metric)
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
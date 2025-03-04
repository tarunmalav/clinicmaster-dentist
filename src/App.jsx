import { useEffect } from "react";
import Root from "./route/route";
import "../src/assets/css/style.css";
import 'swiper/css';

function App() {
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme-color', 'skin-2')
    document.querySelector('html').setAttribute('class', 'skrollr skrollr-desktop')
    document.querySelector('body').setAttribute('id', 'bg')
  }, [])
  return (
    <>
      <Root />
    </>
  )
}
export default App;
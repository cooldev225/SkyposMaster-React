import React, {useEffect} from "react"
import { Helmet } from "react-helmet"

const Meta = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/602f651e918aa26127406a48/1eusi60q4";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, [])
  return <Helmet>
    <title>
    POS Systems | QR Menu Ordering | WiFi Captive Portal | Hospitality IT
    </title>
    
  </Helmet>
}

export default Meta

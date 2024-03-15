import { useEffect } from "react";

export default function GoogleAnalyticsScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-QKRGZFQFVP";
    script.async = true;
    document.body.appendChild(script);

    const scriptInnerHtml = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QKRGZFQFVP');
        `;

    const innerScript = document.createElement("script");
    innerScript.innerHTML = scriptInnerHtml;
    document.body.appendChild(innerScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(innerScript);
    };
  }, []);

  return null;
}

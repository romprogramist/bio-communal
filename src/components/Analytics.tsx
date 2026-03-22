"use client";

import Script from "next/script";

export default function Analytics() {
  const tawkId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const metrikaId = process.env.NEXT_PUBLIC_METRIKA_ID;

  return (
    <>
      {/* Tawk.to live chat */}
      {tawkId && (
        <Script id="tawk-to" strategy="lazyOnload">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;s1.src='https://embed.tawk.to/${tawkId}/default';
          s1.charset='UTF-8';s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);})();`}
        </Script>
      )}

      {/* Yandex Metrica */}
      {metrikaId && (
        <Script id="yandex-metrika" strategy="lazyOnload">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
          ym(${metrikaId},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`}
        </Script>
      )}
    </>
  );
}

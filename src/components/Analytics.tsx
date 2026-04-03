"use client";

import Script from "next/script";

const METRIKA_ID = 108340938;

export default function Analytics() {
  const tawkId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;

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
      <Script id="yandex-metrika" strategy="lazyOnload">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}","ym");
          ym(${METRIKA_ID},"init",{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`}
      </Script>
      <noscript>
        <div>
          <img src={`https://mc.yandex.ru/watch/${METRIKA_ID}`} style={{ position: "absolute", left: "-9999px" }} alt="" />
        </div>
      </noscript>
    </>
  );
}

/** Map of service/package IDs to Metrika goal names */
const goalMap: Record<string, string> = {
  // Services
  sale: "application_sale_closets",
  rental: "application_rent_closets",
  shower: "application_rent_shower_cabins",
  "daily-rental": "application_daily_rent_vip_closets",
  waste: "application_pumping_concrete",
  service: "application_maintenance_closets",
  // Pricing packages
  standard: "application_rent_standard",
  fresh: "application_rent_fresh",
  event: "application_rent_event_pro",
};

/**
 * Send a Metrika reachGoal event.
 * @param serviceId — the service or package ID from the form
 * @param source — "header" for navbar/hero forms, "contacts" for the contacts section form
 */
export function sendMetrikaGoal(serviceId?: string, source?: "header" | "contacts") {
  if (typeof window === "undefined" || typeof window.ym !== "function") return;

  // Always send specific service/package goal if available
  if (serviceId && goalMap[serviceId]) {
    window.ym(METRIKA_ID, "reachGoal", goalMap[serviceId]);
  }

  // Send source-based goal
  if (source === "header") {
    window.ym(METRIKA_ID, "reachGoal", "application_header");
  } else if (source === "contacts") {
    window.ym(METRIKA_ID, "reachGoal", "application_contacts");
  }
}

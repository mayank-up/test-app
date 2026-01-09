
"use client";

// export default function Home() {
// return <div>
//   <FlowOne/>
// </div>
// }

import { useEffect, useState } from "react";

export default function CCTFLlow() {

  const stage = 'https://redirection-handler.alpha.stage-upswing.one'
  const local = 'http://localhost:8080'
  const BASE = typeof window !== 'undefined' && window.origin.includes('localhost')?local:stage
  const redirectionHandler = `${BASE}/redirect/cct-auto-closure`;
  // https://sample-partner-webapp.web.app/ACME?action=webview&redirect=deeplink-manager/fd/VIEW_TEST_MODULE

  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      window.location.href = redirectionHandler;
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev ? prev - 1 : null);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleClick = () => {
    setCountdown(3);
  };

  const openApp = () => {
    window.location.href =
      "https://sample-partner-webapp.web.app/ACME?action=webview&redirect=deeplink-manager/fd/VIEW_TEST_MODULE";
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen" style={{ padding: "20px" }}>
    
    
    {countdown !== null && (
        <p>Redirecting  in {countdown} seconds...</p>
      )}
      <button className="bg-black text-white p-4 rounded" onClick={handleClick} disabled={countdown !== null}>
        Go to Page
      </button>
    </div>
  );
}


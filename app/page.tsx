
"use client"

export default function Home() {

  const launchIntent = (phoneNumber: string, content: string) => {
    let intent = 'intent:#Intent;package=com.google.android.apps.messaging;type=text/plain;action=android.intent.action.SEND;S.text=Hello;S.address=1234567898;end';
    intent = intent.replace(/S\.text=[^;]*/i, `S.text=${encodeURIComponent(content)}`).replace(/S\.address=[^;]*/i, `S.address=${encodeURIComponent(phoneNumber)}`);
      window.location.href = intent;
  }

  const launchDefault = (phoneNumber: string, content: string) => {
    window.open(`smsto:${phoneNumber}?body=${encodeURIComponent(content)}`, '_blank');
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button className="border-2 bg-black text-white text-xl py-4 px-10" onClick={() => launchIntent('+918859167328','Hello world')}>Intent</button>
      <button className="border-2 bg-black text-white text-xl py-4 px-10" onClick={() => launchDefault('+918859167328','Hello world')}>Default</button>
    </div>
  );
}

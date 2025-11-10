'use client';

export default function Home() {
  const launchIntent = (phoneNumber: string, content: string) => {
    const encodedPhone = encodeURIComponent(phoneNumber);
    const encodedText = encodeURIComponent(content);
  
    const intent = `intent:smsto:${encodedPhone}?body=${encodedText}` +
                   `#Intent;action=android.intent.action.SENDTO;` +
                   `package=com.google.android.apps.messaging;end`;
  
    window.location.href = intent;
  };

  const launchDefault = (phoneNumber: string, content: string) => {
    window.open(`smsto:${phoneNumber}?body=${encodeURIComponent(content)}`, '_blank');
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-xl font-semibold mb-5">Version: 0.0.3</p>
      <div className="">
        <button className="border-2 bg-black text-white text-xl py-4 px-10" onClick={() => launchIntent('+918859167328', 'Hello world')}>
          Intent
        </button>
        <button className="border-2 bg-black text-white text-xl py-4 px-10" onClick={() => launchDefault('+918859167328', 'Hello world')}>
          Default
        </button>
      </div>
    </div>
  );
}

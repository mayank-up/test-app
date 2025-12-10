'use client';

import { useState } from 'react';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [selectedApp, setSelectedApp] = useState('com.google.android.apps.messaging');

  const smsApps = [
    { name: 'Google Messages - 500 cr+', value: 'com.google.android.apps.messaging' },
    { name: 'Truecaller - 100Cr+', value: 'com.truecaller' },
    { name: 'Textra SMS - 1Cr+', value: 'com.textra' },
    { name: 'Chomp SMS - 1Cr+', value: 'com.p1.chompsms' },
    { name: 'Messages - 1cr+', value: 'com.textmessage.messenger' },
    { name: 'Jiomessages - 5M+', value: 'com.jio.messageslite' },
    { name: 'SMS Organizer - 10L+', value: 'com.microsoft.android.smsorganizer' },
    { name: 'Samsung Messages', value: 'com.samsung.android.messaging' },
    { name: 'Simple SMS Messenger - 10L+', value: 'com.simplemobiletools.smsmessenger' },
    { name: 'Pulse SMS - 10L+', value: 'xyz.klinker.messenger' },
  ];

  const launchIntent = () => {
    if (!phoneNumber || !message) {
      alert('Please enter both phone number and message.');
      return;
    }

    const encodedPhone = encodeURIComponent(phoneNumber);
    const encodedText = encodeURIComponent(message);

    const intent = `intent:smsto:${encodedPhone}?body=${encodedText}#Intent;action=android.intent.action.SENDTO;package=${selectedApp};end`;

    window.location.href = intent;
  };

  const launchDefault = () => {
    if (!phoneNumber || !message) {
      alert('Please enter both phone number and message.');
      return;
    }
    window.open(`smsto:${phoneNumber}?body=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <p className="text-xl font-semibold mb-5">Version: 0.0.4</p>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {/* Phone Number */}
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-2 rounded text-lg"
        />

        {/* Message */}
        <textarea
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded text-lg resize-none h-24"
        />

        {/* App Dropdown */}
        <select
          value={selectedApp}
          onChange={(e) => setSelectedApp(e.target.value)}
          className="border p-2 rounded text-lg"
        >
          {smsApps.map((app) => (
            <option key={app.value} value={app.value}>
              {app.name}
            </option>
          ))}
        </select>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 border-2 bg-black text-white text-xl py-3 rounded"
            onClick={launchIntent}
          >
            Launch Intent
          </button>
          <button
            className="flex-1 border-2 bg-black text-white text-xl py-3 rounded"
            onClick={launchDefault}
          >
            Launch Default
          </button>
        </div>
      </div>
    </div>
  );
}

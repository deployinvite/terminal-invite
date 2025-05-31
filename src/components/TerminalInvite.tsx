import { useEffect, useState } from "react";

export default function TerminalInvite() {
  const [lines, setLines] = useState<string[]>([]);
  const fullText = [
    "Last login: Mon Oct 9 16:58:32 on ttys000",
    "shaantminhas@Shaants-MacBook-Air ~ % ./invite",
    "> Initializing terminal...",
    "> Loading invitation protocol...",
    "> Access granted.",
    "",
    "Welcome, Engineer.",
    "You’ve been selected for a legacy reconnection.",
    "",
    "Event      : 2025 컴퓨터공학전공 홈커밍데이",
    "Date       : 2025.11.01",
    "Location   : 대진대학교",
    "",
    "[참가 신청 링크] -> https://forms.gle/example",
    "",
    "Tip: Try adding '?debug=true' to the URL..."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, fullText[index]]);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black font-mono p-4 min-h-screen flex flex-col justify-start items-center">
      <div className="w-full max-w-3xl border border-gray-300 rounded-md shadow-md">
        {/* Terminal header */}
        <div className="bg-gray-100 flex items-center justify-between px-3 py-1 rounded-t-md">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="text-xs text-gray-600">shaantminhas — zsh — 113x32</div>
          <div></div>
        </div>

        {/* Terminal body */}
        <div className="bg-white text-black p-4">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">{line}</div>
          ))}
          <div className="flex items-center mt-2">
            <span className="text-black">%</span>
            <span className="w-2 h-4 bg-black ml-1 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
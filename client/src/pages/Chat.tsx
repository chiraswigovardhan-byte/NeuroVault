import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! Upload a document and ask me anything about it.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { sender: "You", text: input },
      {
        sender: "AI",
        text: "🤖 AI integration coming in the next sprint!",
      },
    ]);

    setInput("");
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <Topbar />

        <h1 className="text-4xl font-bold">
          🤖 AI Assistant
        </h1>

        <p className="mt-2 text-slate-400">
          Chat with your uploaded documents.
        </p>

        <div className="mt-8 h-[500px] overflow-y-auto rounded-2xl bg-slate-900 p-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "You"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <span
                className={`inline-block rounded-xl px-4 py-3 ${
                  msg.sender === "You"
                    ? "bg-cyan-500 text-black"
                    : "bg-slate-800"
                }`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <input
            type="text"
            placeholder="Ask something about your document..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-xl bg-slate-900 p-4 outline-none"
          />

          <button
            onClick={sendMessage}
            className="rounded-xl bg-cyan-500 px-6 font-bold text-black hover:bg-cyan-400"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default Chat;
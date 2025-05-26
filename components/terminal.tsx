"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";

interface TerminalAuthProps {
  onLogin?: () => void;
  onRegister?: () => void;
  className?: string;
}

const TerminalAuth: React.FC<TerminalAuthProps> = ({ className = "" }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { text: "Hey there! type help to get started.", color: "text-gray-500" },
    { text: "Available commands:", color: "text-[#00FFFF]" },
    { text: "- about: Who am I?", color: "text-[#00FFFF]" },
    { text: "- contact: How to reach me", color: "text-[#00FFFF]" },
    { text: "- resume: Get my resume", color: "text-[#00FFFF]" },
    { text: "- theme: Toggle theme", color: "text-[#00FFFF]" },
    { text: "- clear : clear the terminal", color: "text-[#00FFFF]" },
    { text: "- sudo : try it out!", color: "text-[#00FFFF]" },
    { text: "- matrix : experience the matrix", color: "text-[#00FFFF]" },
    { text: "- history : view command history", color: "text-[#00FFFF]" },
    { text: "- linkedin : open LinkedIn", color: "text-[#00FFFF]" },
    { text: "- github : open GitHub", color: "text-[#00FFFF]" },
    { text: "- reload : reload this terminal", color: "text-[#00FFFF]" },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    setCommandHistory((prev) => [...prev, cmd]);

    switch (cmd) {
      case "help":
        setOutput((prev) => [
          ...prev,
          { text: "Available commands:", color: "text-[#00FFFF]" },
          { text: "- about: Who am I?", color: "text-[#00FFFF]" },
          { text: "- contact: How to reach me", color: "text-[#00FFFF]" },
          { text: "- resume: Get my resume", color: "text-[#00FFFF]" },
          { text: "- theme: Toggle theme", color: "text-[#00FFFF]" },
          { text: "- clear : clear the terminal", color: "text-[#00FFFF]" },
          { text: "- sudo : try it out!", color: "text-[#00FFFF]" },
          {
            text: "- matrix : experience the matrix",
            color: "text-[#00FFFF]",
          },
          {
            text: "- history : view command history",
            color: "text-[#00FFFF]",
          },
          { text: "- linkedin : open LinkedIn", color: "text-[#00FFFF]" },
          { text: "- github : open GitHub", color: "text-[#00FFFF]" },
          { text: "- reload : reload this terminal", color: "text-[#00FFFF]" },
        ]);
        break;

      case "about":
        setOutput((prev) => [
          ...prev,
          {
            text: "I'm Viraj Pawar, a full-stack developer from India.",
            color: "text-green-300",
          },
        ]);
        break;

      case "contact":
        setOutput((prev) => [
          ...prev,
          {
            text: "📧 Email: viraj25092004@gmail.com",
            color: "text-green-300",
          },
          {
            text: "🔗 GitHub: https://github.com/viraj-ap",
            color: "text-green-300",
          },
          {
            text: "💼 LinkedIn: https://linkedin.com/in/viraj-ap",
            color: "text-green-300",
          },
        ]);
        break;

      case "resume":
        setOutput((prev) => [
          ...prev,
          { text: "Opening resume...", color: "text-green-300" },
        ]);
        window.open("/VirajPawar_Resume.pdf", "_blank");
        break;

      case "theme":
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setOutput((prev) => [
          ...prev,
          { text: `Switched to ${newTheme} mode.`, color: "text-green-300" },
        ]);
        break;

      case "clear":
        setOutput([]);
        break;

      case "sudo":
        setOutput((prev) => [
          ...prev,
          {
            text: "sudo? really? it's my website — no superpowers for you.",
            color: "text-red-400",
          },
        ]);
        break;

      case "history":
        setOutput((prev) => [
          ...prev,
          { text: "Command History:", color: "text-yellow-300" },
          ...commandHistory.map((cmd, idx) => ({
            text: `${idx + 1}: ${cmd}`,
            color: "text-gray-400",
          })),
        ]);
        break;

      case "linkedin":
        setOutput((prev) => [
          ...prev,
          { text: "Opening LinkedIn...", color: "text-green-300" },
        ]);
        window.open("https://linkedin.com/in/viraj-ap", "_blank");
        break;

      case "github":
        setOutput((prev) => [
          ...prev,
          { text: "Opening GitHub...", color: "text-green-300" },
        ]);
        window.open("https://github.com/viraj-ap", "_blank");
        break;

      case "reload":
        setOutput((prev) => [
          ...prev,
          { text: "Reloading terminal...", color: "text-green-300" },
        ]);
        setTimeout(() => {
          window.location.reload();
        }, 500);
        break;

      case "matrix":
        const matrixLines = Array.from({ length: 15 }, () =>
          Math.random().toString(16).slice(2, 34)
        );

        let i = 0;
        const matrixInterval = setInterval(() => {
          if (i < matrixLines.length) {
            setOutput((prev) => [
              ...prev,
              { text: matrixLines[i], color: "text-green-500" },
            ]);
            i++;
          } else {
            clearInterval(matrixInterval);
          }
        }, 100);
        break;

      default:
        setOutput((prev) => [
          ...prev,
          { text: `Command not recognized: ${cmd}`, color: "text-red-400" },
          {
            text: 'Please type "help" for more details.',
            color: "text-gray-500",
          },
        ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setOutput((prev) => [
      ...prev,
      { text: `➝ ~ ${input}`, color: "text-amber-400 font-bold" },
    ]);

    handleCommand(input);
    setInput("");
  };

  const handleInputClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className={`terminal p-5 rounded-lg font-mono md:w-[50vw] mt-20 ${className}`}
    >
      <div className="terminal-header bg-zinc-700 text-white p-2 rounded-t-lg flex items-center">
        <span className="text-red-500 text-5xl leading-[0px] align-middle -mt-2">
          •
        </span>
        <span className="text-yellow-500 text-5xl leading-[0px] align-middle -mt-2 ml-1">
          •
        </span>
        <span className="text-green-500 text-5xl leading-[0px] align-middle -mt-2 ml-1">
          •
        </span>
        <span className="ml-4 align-baseline">
          Hey there, Welcome to my Portfolio --bash
        </span>
      </div>

      <div
        ref={outputRef}
        className="pl-4 pt-2 bg-black max-h-[500px] overflow-auto text-sm"
        id="output"
      >
        {output.map((line, index) => (
          <p key={index} className={line.color}>
            {line.text}
          </p>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="input flex pl-4 bg-black pb-4 rounded-b-lg items-center cursor-text"
          onClick={handleInputClick}
        >
          <span className="text-green-500 font-bold">➝</span>
          <span className="text-sky-300 ml-2 font-bold">~</span>
          <input
            ref={inputRef}
            className="bg-transparent border-none outline-none ring-0 focus:ring-0 text-amber-400 w-full ml-2 font-bold caret-amber-400"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </form>
    </div>
  );
};

export default TerminalAuth;

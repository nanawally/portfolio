"use client";

type Props = {
  mode: "pro" | "personal";
  onToggle: () => void;
};

export default function ModeToggle({ mode, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium border border-border transition-colors"
      title={mode === "pro" ? "Enter the fun zone" : "Back to business"}
    >
      {mode === "pro" ? "✨" : "💼"}
    </button>
  );
}

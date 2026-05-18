"use client";
import { useState, useEffect } from "react";

export default function PersonalSite() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function tick() {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: true }));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="min-h-screen font-mono text-sm p-4"
      style={{ background: "#ffe4e8" }}
    >
      {/* Header */}
      <div className="text-center mb-4">
        <h1
          className="text-4xl font-bold mb-1"
          style={{
            fontFamily: "Comic Sans MS, cursive",
            background: "linear-gradient(90deg, #c084fc, #60a5fa, #34d399)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          anna's corner
        </h1>
        <p className="text-xs" style={{ color: "#888" }}>
          welcome to my little corner of the internet ~
        </p>
      </div>

      {/* Three column layout */}
      <div className="max-w-5xl mx-auto flex gap-3">
        {/* Left sidebar */}
        <div className="w-48 shrink-0 flex flex-col gap-3">
          <SideBox title="navigation">
            <ul className="space-y-1">
              {["home", "about me", "blog"].map((item) => (
                <li key={item}>
                  <span style={{ color: "#c084fc" }}>★</span>{" "}
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </SideBox>

          <SideBox title="my status">
            <p>currently: building this website and pretending it's 2004</p>
          </SideBox>

          <SideBox title="my time">
            <p className="text-center font-bold">{time}</p>
          </SideBox>

          <SideBox title="changelog">
            <p>
              <span style={{ color: "#c084fc" }}>now:</span> site created!
              everything is new~
            </p>
          </SideBox>
        </div>

        {/* Main content */}
        <div
          className="flex-1 border-2 border-dashed p-4"
          style={{ borderColor: "#d8b4fe", background: "#fff9fb" }}
        >
          <h2
            className="text-2xl font-bold text-center mb-1"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            welcome to my website!
          </h2>
          <p className="text-center text-xs mb-4" style={{ color: "#888" }}>
            (best viewed with an open mind and a sense of nostalgia)
          </p>

          <div className="space-y-3 leading-relaxed" style={{ color: "#555" }}>
            <p>
              hello everyone, i'm anna! thanks for stopping by. this is the
              non-professional side of my website — a place for me to put
              whatever i want, however i want. think of it like a personal
              homepage from the old internet.
            </p>
            <p>
              by day i'm a fullstack developer (you can see the fancy version of
              me by clicking the briefcase icon up there). but here? here is
              just for fun :)
            </p>
            <p>
              this page will grow over time as i add more things — a blog, some
              collections, maybe a guestbook? who knows!
            </p>
          </div>

          <hr
            className="my-4"
            style={{ borderColor: "#d8b4fe", borderStyle: "dashed" }}
          />

          {/* Blog section */}
          <h3
            className="text-lg font-bold mb-2"
            style={{ fontFamily: "Comic Sans MS, cursive", color: "#c084fc" }}
          >
            ✿ blog
          </h3>
          <div
            className="border border-dashed p-3"
            style={{ borderColor: "#d8b4fe" }}
          >
            <p style={{ color: "#888" }}>no posts yet... check back soon! ♪</p>
          </div>

          <hr
            className="my-4"
            style={{ borderColor: "#d8b4fe", borderStyle: "dashed" }}
          />

          {/* About me section */}
          <h3
            className="text-lg font-bold mb-2"
            style={{ fontFamily: "Comic Sans MS, cursive", color: "#c084fc" }}
          >
            ✿ a little about me
          </h3>
          <div className="flex gap-6" style={{ color: "#555" }}>
            <div>
              <p className="font-bold mb-1">me:</p>
              <ul className="space-y-0.5">
                <li>★ anna, swedish</li>
                <li>★ dev + fencer + musician</li>
                <li>★ musicology graduate</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-1">favorites:</p>
              <ul className="space-y-0.5">
                <li>★ coffee</li>
                <li>★ building things</li>
                <li>★ the old internet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-48 shrink-0 flex flex-col gap-3">
          <SideBox title="my links">
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/nanawally"
                  className="hover:underline"
                >
                  github
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:underline">
                  linkedin
                </a>
              </li>
            </ul>
          </SideBox>

          <SideBox title="currently playing">
            <p>🎵 probably something</p>
          </SideBox>

          <SideBox title="visitor count">
            <p className="text-center font-bold">
              you are visitor #<span style={{ color: "#c084fc" }}>???</span>
            </p>
          </SideBox>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-xs" style={{ color: "#999" }}>
        <p>made with ♥ and nostalgia — anna, 2026</p>
      </div>
    </div>
  );
}

function SideBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="border-2 border-dashed p-2"
      style={{ borderColor: "#d8b4fe", background: "#fff9fb" }}
    >
      <h3
        className="font-bold mb-1"
        style={{
          fontFamily: "Comic Sans MS, cursive",
          color: "#c084fc",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

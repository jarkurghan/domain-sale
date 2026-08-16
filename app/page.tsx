"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [domainName, setDomainName] = useState("domen");
  const [lineAnimate, setLineAnimate] = useState(false);

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="domain">{domainName}</h1>
        <p className="subtitle">domen sotiladi</p>
      </div>

      <div className="divider"></div>

      <div className="content">
        <p className="description">
          Yaxshi domen - eslab qolish oson va qidiruv tizimlarida foydalanuvchilarni o&apos;ziga torta olishi kerak
        </p>

        <div
          className="button-container"
          onMouseEnter={() => setLineAnimate(true)}
          onMouseLeave={() => setLineAnimate(false)}
        >
          <a
            href="https://t.me/full_full_stack"
            target="_blank"
            className="cta-button"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.9 21.4c-.6 0-.5-.2-.7-.7l-1.8-6.6L20.3 3.7" />
              <path d="M9.9 21.4c.4 0 .6-.2.8-.4l2.2-2.1-2.8-1.7" />
              <path d="M10.3 14.6l8.1 6c.9.5 1.5.2 1.7-.8l3-14.2c.3-1.3-.5-1.8-1.4-1.5L2.7 10.6c-1.3.5-1.3 1.2-.2 1.5l5.2 1.6 12-7.5c.6-.4 1.2-.2.7.3" />
            </svg>
            Bog&apos;lanish
          </a>
          <div className={`button-line${lineAnimate ? " animate" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}

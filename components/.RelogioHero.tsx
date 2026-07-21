"use client";

import { useEffect, useState } from "react";

export default function RelogioHero() {
  const [agora, setAgora] = useState<Date | null>(null);

  useEffect(() => {
    setAgora(new Date());
    const id = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const segundos = agora ? agora.getSeconds() : 0;
  const minutos = agora ? agora.getMinutes() : 0;
  const horas = agora ? agora.getHours() % 12 : 0;

  const grausSegundo = segundos * 6;
  const grausMinuto = minutos * 6 + segundos * 0.1;
  const grausHora = horas * 30 + minutos * 0.5;

  const marcas = Array.from({ length: 12 });

  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
      <div className="absolute inset-0 rounded-full border border-hairline" />
      <div className="absolute inset-3 rounded-full border border-hairline/60" />

      {marcas.map((_, i) => (
        <div
          key={i}
          className="absolute h-full w-full"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          <div
            className={
              i % 3 === 0
                ? "mx-auto h-3 w-[2px] bg-brass"
                : "mx-auto h-1.5 w-px bg-hairline"
            }
          />
        </div>
      ))}

      {/* ponteiro das horas */}
      <div
        className="absolute bottom-1/2 left-1/2 h-[26%] w-[3px] origin-bottom -translate-x-1/2 rounded-full bg-cream transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-50%) rotate(${grausHora}deg)` }}
      />
      {/* ponteiro dos minutos */}
      <div
        className="absolute bottom-1/2 left-1/2 h-[38%] w-[2px] origin-bottom -translate-x-1/2 rounded-full bg-cream/90 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-50%) rotate(${grausMinuto}deg)` }}
      />
      {/* ponteiro dos segundos */}
      <div
        className="absolute bottom-1/2 left-1/2 h-[42%] w-px origin-bottom -translate-x-1/2 bg-brass transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-50%) rotate(${grausSegundo}deg)` }}
      />

      <div className="absolute h-2 w-2 rounded-full bg-brass" />
    </div>
  );
}

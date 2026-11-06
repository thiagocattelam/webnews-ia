"use client";

import { useState } from "react";

const FALA_INICIAL =
  "Os dedos: inchados. O orgulho: ferido. A dignidade: desaparecida.";
const FALA_PERDAO = "Sarou. Tudo perdoado. Te amo, sua agressora de dedos.";
const FALAS = [
  "Ai! Esse doeu até na alma.",
  "Acabei de sentir o dedinho me pedindo demissão.",
  "Vou ligar pro meu advogado. Com o nariz, porque os dedos não dão.",
  "O curativo já pediu transferência de setor.",
  "Neste momento, meu mindinho não fala mais comigo.",
  "Testemunhas relatam um barulho de régua e um choro bem fininho.",
];
const LIMITE = FALAS.length;

const CORACAO = "c-16 -24 -48 -4 -30 22 l30 30 l30 -30 c18 -26 -14 -46 -30 -22 z";

export default function DramaDosDedos() {
  const [batidas, setBatidas] = useState(0);
  const [perdoado, setPerdoado] = useState(false);
  // Cada golpe tem um id novo: a `key` remonta os elementos e reinicia a animação.
  const [golpe, setGolpe] = useState(0);

  const ardor = perdoado ? 0 : 0.2 + (batidas / LIMITE) * 0.65;

  let fala = FALA_INICIAL;
  if (perdoado) fala = FALA_PERDAO;
  else if (batidas > 0) fala = FALAS[batidas - 1];

  let rotulo = "Dar nos dedos de novo";
  if (perdoado) rotulo = "Recomeçar o drama";
  else if (batidas === LIMITE) rotulo = "Dar um beijinho pra sarar";

  function aoClicar() {
    if (perdoado) {
      setPerdoado(false);
      setBatidas(0);
    } else if (batidas === LIMITE) {
      setPerdoado(true);
    } else {
      setBatidas(batidas + 1);
      setGolpe(batidas + 1);
    }
  }

  return (
    <main style={{ "--ardor": ardor }}>
      <p className="selo">Um drama em um ato</p>
      <h1>depois que eu te dei nos dedos</h1>

      <svg
        viewBox="0 -130 600 590"
        role="img"
        aria-label="Uma mão de desenho animado chorando, com os dedos vermelhos e um curativo, enquanto uma régua com cara de deboche se prepara para bater de novo."
      >
        <g
          stroke="#2b1a16"
          strokeWidth="7"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <g id="mao" key={`mao-${golpe}`} className={golpe ? "sofre" : ""}>
            {/* manga */}
            <path d="M205 400 h190 l14 62 h-218 z" fill="#5b7cfa" />
            {/* dedos */}
            <g fill="#ffcfa8">
              <rect x="172" y="108" width="58" height="210" rx="29" />
              <rect x="232" y="66" width="60" height="250" rx="30" />
              <rect x="294" y="74" width="60" height="240" rx="30" />
              <rect x="356" y="116" width="56" height="200" rx="28" />
              <rect
                x="412"
                y="250"
                width="56"
                height="130"
                rx="28"
                transform="rotate(32 440 315)"
              />
              <rect x="165" y="240" width="256" height="190" rx="76" />
            </g>
            <rect
              x="212"
              y="232"
              width="170"
              height="18"
              fill="#ffcfa8"
              stroke="none"
            />
            {/* pontas vermelhas: a opacidade cresce a cada batida */}
            <g stroke="none">
              <ellipse className="ponta" cx="201" cy="140" rx="24" ry="27" />
              <ellipse className="ponta" cx="262" cy="98" rx="25" ry="28" />
              <ellipse className="ponta" cx="324" cy="106" rx="25" ry="28" />
              <ellipse className="ponta" cx="384" cy="146" rx="23" ry="26" />
            </g>
            {/* curativo */}
            <g transform="rotate(-14 324 176)">
              <rect x="284" y="156" width="80" height="38" rx="12" fill="#ffe7c9" />
              <rect
                x="308"
                y="156"
                width="32"
                height="38"
                fill="#ffd9dc"
                strokeWidth="4"
              />
              <g fill="#2b1a16" stroke="none">
                <circle cx="317" cy="168" r="2.5" />
                <circle cx="331" cy="168" r="2.5" />
                <circle cx="317" cy="182" r="2.5" />
                <circle cx="331" cy="182" r="2.5" />
              </g>
            </g>
            {/* rosto */}
            <path d="M222 292 q24 -22 48 -6" fill="none" />
            <path d="M330 286 q24 -16 48 6" fill="none" />
            <circle cx="248" cy="322" r="23" fill="#fff" />
            <circle cx="352" cy="322" r="23" fill="#fff" />
            <circle cx="252" cy="328" r="10" fill="#2b1a16" />
            <circle cx="348" cy="328" r="10" fill="#2b1a16" />
            {perdoado ? (
              <path d="M260 380 q40 40 80 0" fill="none" />
            ) : (
              <>
                <path
                  d="M266 396 q9 -16 18 -3 q9 12 16 -2 q9 -14 16 2 q7 13 18 3"
                  fill="none"
                />
                <path
                  className="lagrima"
                  d="M232 346 q-10 15 0 20 q10 -5 0 -20 z"
                  fill="#6fd0ff"
                  strokeWidth="3"
                />
                <path
                  className="lagrima b"
                  d="M368 346 q-10 15 0 20 q10 -5 0 -20 z"
                  fill="#6fd0ff"
                  strokeWidth="3"
                />
              </>
            )}
          </g>

          {!perdoado && (
            <g id="regua" key={`regua-${golpe}`} className={golpe ? "bate" : ""}>
              <rect x="110" y="16" width="480" height="64" rx="8" fill="#ffb627" />
              <path
                d="M150 16 v20 M180 16 v12 M210 16 v20 M240 16 v12 M270 16 v20 M300 16 v12 M330 16 v20 M360 16 v12 M390 16 v20 M420 16 v12 M450 16 v20 M480 16 v12 M510 16 v20 M540 16 v12 M570 16 v20"
                strokeWidth="4"
                fill="none"
              />
              {/* deboche */}
              <path
                d="M142 42 q14 -9 26 0 M196 42 q14 -9 26 0"
                fill="none"
                strokeWidth="5"
              />
              <path d="M162 62 q24 12 44 -4" fill="none" strokeWidth="5" />
            </g>
          )}

          {golpe > 0 && (
            <g
              id="pow"
              key={`pow-${golpe}`}
              className="mostra"
              onAnimationEnd={() => setGolpe(0)}
            >
              <path
                d="M300 -30 l26 44 l50 -22 l-12 50 l52 10 l-44 28 l28 46 l-54 -10 l-14 52 l-32 -42 l-44 32 l6 -52 l-54 -2 l40 -36 l-38 -38 l54 -2 l-4 -54 l44 30 z"
                fill="#ff5d8f"
              />
              <text
                className="pow-texto"
                x="300"
                y="82"
                textAnchor="middle"
                fontSize="58"
                fill="#fff"
                strokeWidth="3"
                paintOrder="stroke"
              >
                PÁ!
              </text>
            </g>
          )}

          {perdoado && (
            <g fill="#ff5d8f" strokeWidth="5">
              <path className="coracao" d={`M120 150 ${CORACAO}`} />
              <path className="coracao b" d={`M500 110 ${CORACAO}`} />
              <path className="coracao c" d={`M300 -10 ${CORACAO}`} />
            </g>
          )}
        </g>
      </svg>

      <p className="fala" aria-live="polite">
        {fala}
      </p>
      <button type="button" onClick={aoClicar}>
        {rotulo}
      </button>
      <p className="placar">
        Dedadas registradas: <strong>{batidas}</strong>
      </p>
    </main>
  );
}

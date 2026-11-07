import React from 'react';
import {AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import './fonts.css';

const GOLD = '#D7A66A';
const PALE = '#F5E9D8';
const DEEP = '#120906';
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const Canvas = ({children, opacity = 1}: {children: React.ReactNode; opacity?: number}) => (
  <AbsoluteFill style={{overflow: 'hidden', color: PALE, opacity, background: 'radial-gradient(circle at 50% 48%, #3C2317 0%, #21120C 45%, #100805 100%)'}}>{children}</AbsoluteFill>
);

const Grain = () => <AbsoluteFill style={{opacity: 0.16, backgroundImage: 'radial-gradient(#D7A66A 0.8px, transparent 0.8px)', backgroundSize: '34px 34px'}} />;

const Border = () => <AbsoluteFill style={{margin: 46, width: 988, height: 1828, border: '2px solid #BE8C5140', pointerEvents: 'none'}} />;

const Eyebrow = ({children}: {children: React.ReactNode}) => <div style={{fontFamily: 'DM Sans', fontSize: 26, fontWeight: 700, letterSpacing: 8, color: GOLD}}>{children}</div>;

const Bean = ({size, rotation = 0, opacity = 1}: {size: number; rotation?: number; opacity?: number}) => (
  <svg width={size} height={size} viewBox="0 0 300 300" style={{rotate: `${rotation}deg`, opacity, overflow: 'visible'}}>
    <defs>
      <radialGradient id="beanBody" cx="34%" cy="25%" r="78%"><stop offset="0" stopColor="#A86D3A"/><stop offset="0.44" stopColor="#70401F"/><stop offset="1" stopColor="#24120C"/></radialGradient>
      <linearGradient id="beanEdge" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0BD78"/><stop offset="1" stopColor="#66351A"/></linearGradient>
    </defs>
    <ellipse cx="150" cy="150" rx="91" ry="128" fill="url(#beanBody)" stroke="url(#beanEdge)" strokeWidth="4" transform="rotate(-30 150 150)"/>
    <path d="M137 28 C193 86 91 104 148 160 C204 212 110 228 160 277" fill="none" stroke="#160A06" strokeWidth="15" strokeLinecap="round"/>
    <path d="M140 28 C193 86 94 107 151 160 C207 212 113 228 162 275" fill="none" stroke="#D09350" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const Opening = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12, 92, 105], [0, 1, 1, 0], clamp);
  const titleY = interpolate(frame, [0, 42], [130, 0], {...clamp, easing: ease});
  const ring = interpolate(frame, [8, 78], [0, 1], clamp);
  const beanScale = interpolate(frame, [3, 48], [0.55, 1], {...clamp, easing: ease});
  return <Canvas opacity={opacity}>
    <Grain/><Border/>
    <div style={{position: 'absolute', top: 155, left: 88}}><Eyebrow>AN INVITATION TO SLOW DOWN</Eyebrow></div>
    <div style={{position: 'absolute', top: 290, left: 83, right: 83, textAlign: 'center', fontFamily: 'Italiana', fontSize: 196, letterSpacing: 12, translate: `0 ${titleY}px`}}>AUREL</div>
    <div style={{position: 'absolute', left: 0, right: 0, top: 560, textAlign: 'center', fontFamily: 'DM Sans', fontSize: 30, letterSpacing: 12, color: GOLD}}>SPECIALTY COFFEE</div>
    <div style={{position: 'absolute', left: 130, top: 702, width: 820, height: 820}}>
      <svg width="820" height="820" style={{position: 'absolute'}}>
        <circle cx="410" cy="410" r="330" fill="none" stroke="#DBA66A" strokeWidth="2" strokeDasharray={`${ring * 2074} 2074`} transform="rotate(-90 410 410)" opacity="0.7"/>
        <circle cx="410" cy="410" r="285" fill="none" stroke="#DBA66A" strokeWidth="1" opacity="0.3"/>
        <circle cx="410" cy="410" r="232" fill="#26140D" stroke="#DBA66A" strokeWidth="1" opacity="0.8"/>
        <path d="M410 40 V110 M410 710 V780 M40 410 H110 M710 410 H780" stroke={GOLD} strokeWidth="2" opacity="0.6"/>
      </svg>
      <div style={{position: 'absolute', left: 260, top: 260, scale: beanScale, rotate: `${-25 + frame * 0.16}deg`}}><Bean size={300}/></div>
      <div style={{position: 'absolute', left: 635, top: 235, scale: 0.29, rotate: `${frame * 0.4}deg`, opacity: 0.75}}><Bean size={300}/></div>
      <div style={{position: 'absolute', left: 85, top: 495, scale: 0.22, rotate: `${-frame * 0.32}deg`, opacity: 0.55}}><Bean size={300}/></div>
    </div>
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 205, textAlign: 'center', fontFamily: 'Italiana', fontSize: 67}}>Coffee, considered.</div>
    <div style={{position: 'absolute', left: 88, right: 88, bottom: 94, height: 2, background: '#D7A66A55'}}/>
    <div style={{position: 'absolute', right: 88, bottom: 117, fontFamily: 'DM Sans', fontSize: 22, letterSpacing: 6, color: GOLD}}>01 / 04</div>
  </Canvas>;
};

const Ritual = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 14, 91, 105], [0, 1, 1, 0], clamp);
  const titleY = interpolate(frame, [0, 38], [110, 0], {...clamp, easing: ease});
  const pour = interpolate(frame, [17, 57], [0, 1], clamp);
  const steam = interpolate(frame, [28, 60, 92], [0, 1, 0.7], clamp);
  const ripple = interpolate(frame, [38, 90], [0.5, 1.4], clamp);
  return <Canvas opacity={opacity}>
    <Grain/><Border/>
    <div style={{position: 'absolute', top: 165, left: 88}}><Eyebrow>THE RITUAL</Eyebrow></div>
    <div style={{position: 'absolute', left: 86, top: 265, fontFamily: 'Italiana', fontSize: 145, lineHeight: 1.04, translate: `0 ${titleY}px`}}>Good things<br/>take time.</div>
    <svg style={{position: 'absolute', left: 90, top: 675}} width="900" height="1000" viewBox="0 0 900 1000">
      <defs>
        <linearGradient id="cup" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#4B2A1B"/><stop offset="0.25" stopColor="#8D5934"/><stop offset="0.56" stopColor="#2A150D"/><stop offset="1" stopColor="#0C0705"/></linearGradient>
        <radialGradient id="liquid"><stop stopColor="#CC8542"/><stop offset="0.7" stopColor="#9A5527"/><stop offset="1" stopColor="#48210F"/></radialGradient>
      </defs>
      <path d="M450 0 V355" stroke="#E3B174" strokeWidth="13" strokeLinecap="round" opacity={pour} strokeDasharray={`${pour * 360} 360`} />
      <path d="M160 485 C165 730 285 818 450 818 C615 818 735 730 740 485Z" fill="url(#cup)" stroke="#D29B5D" strokeWidth="5"/>
      <path d="M731 545 C928 515 895 760 723 721" fill="none" stroke="#A87043" strokeWidth="43"/>
      <path d="M729 553 C845 548 837 676 723 684" fill="none" stroke="#21120B" strokeWidth="29"/>
      <ellipse cx="450" cy="484" rx="291" ry="91" fill="#1A0C07" stroke="#D8A66B" strokeWidth="7"/>
      <ellipse cx="450" cy="483" rx="267" ry="70" fill="url(#liquid)"/>
      <ellipse cx="450" cy="483" rx={95 * ripple} ry={23 * ripple} fill="none" stroke="#F3C88F" strokeWidth="4" opacity={0.8 - (ripple - 0.5) * 0.5}/>
      <ellipse cx="450" cy="483" rx={48 * ripple} ry={12 * ripple} fill="none" stroke="#F7D5A2" strokeWidth="3" opacity="0.7"/>
      <path d="M340 360 C278 295 391 258 340 179 C291 105 391 67 353 10 M457 355 C393 290 511 242 456 171 C404 103 508 65 466 0 M570 360 C505 284 619 245 567 169 C522 103 616 65 575 8" fill="none" stroke="#EDBD7A" strokeWidth="7" strokeLinecap="round" opacity={steam * 0.65} strokeDasharray="16 17" strokeDashoffset={-frame * 2}/>
      <ellipse cx="450" cy="840" rx="320" ry="25" fill="#070403" opacity="0.55"/>
    </svg>
    <div style={{position: 'absolute', left: 88, right: 88, bottom: 142, textAlign: 'center', fontFamily: 'DM Sans', fontSize: 27, letterSpacing: 5, color: GOLD}}>ROASTED SLOWLY. SAVORED FULLY.</div>
    <div style={{position: 'absolute', right: 88, bottom: 84, fontFamily: 'DM Sans', fontSize: 22, letterSpacing: 6, color: GOLD}}>02 / 04</div>
  </Canvas>;
};

const Origin = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 14, 91, 105], [0, 1, 1, 0], clamp);
  const lineWidth = interpolate(frame, [8, 62], [0, 700], {...clamp, easing: ease});
  const entries = [
    {text: 'SINGLE ORIGIN', y: 555, start: 12, number: '01'},
    {text: 'SLOW ROASTED', y: 833, start: 30, number: '02'},
    {text: 'DEEPLY FELT', y: 1111, start: 48, number: '03'},
  ];
  return <Canvas opacity={opacity}>
    <Grain/><Border/>
    <div style={{position: 'absolute', top: 162, left: 88}}><Eyebrow>OUR PHILOSOPHY</Eyebrow></div>
    <div style={{position: 'absolute', top: 274, left: 88, fontFamily: 'Italiana', fontSize: 98}}>Every detail matters.</div>
    <div style={{position: 'absolute', left: 88, top: 476, width: lineWidth, height: 2, background: GOLD}}/>
    {entries.map((entry) => {
      const entryOpacity = interpolate(frame, [entry.start, entry.start + 22], [0, 1], clamp);
      const entryX = interpolate(frame, [entry.start, entry.start + 34], [100, 0], {...clamp, easing: ease});
      return <div key={entry.number} style={{position: 'absolute', top: entry.y, left: 88, right: 88, display: 'flex', alignItems: 'center', gap: 45, opacity: entryOpacity, translate: `${entryX}px 0`, borderBottom: '1px solid #C9975D66', paddingBottom: 48}}>
        <span style={{fontFamily: 'DM Sans', fontSize: 28, color: GOLD, letterSpacing: 4}}>{entry.number}</span>
        <span style={{fontFamily: 'Italiana', fontSize: 91, whiteSpace: 'nowrap'}}>{entry.text}</span>
      </div>;
    })}
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 240, display: 'flex', justifyContent: 'center', opacity: interpolate(frame, [53, 78], [0, 1], clamp)}}>
      <div style={{width: 170, height: 170, border: '2px solid #D7A66A88', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', rotate: `${frame * 0.3}deg`}}><Bean size={115}/></div>
    </div>
    <div style={{position: 'absolute', right: 88, bottom: 84, fontFamily: 'DM Sans', fontSize: 22, letterSpacing: 6, color: GOLD}}>03 / 04</div>
  </Canvas>;
};

const Pack = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], clamp);
  const rise = interpolate(frame, [0, 54], [280, 0], {...clamp, easing: ease});
  const packScale = interpolate(frame, [0, 52], [0.75, 1], {...clamp, easing: ease});
  const arc = interpolate(frame, [20, 76], [0, 1], clamp);
  return <Canvas opacity={opacity}>
    <Grain/><Border/>
    <div style={{position: 'absolute', top: 150, left: 88}}><Eyebrow>MEET YOUR NEW RITUAL</Eyebrow></div>
    <div style={{position: 'absolute', left: 95, top: 300, width: 890, height: 1160}}>
      <svg width="890" height="1160" style={{position: 'absolute'}}>
        <circle cx="445" cy="565" r="440" fill="none" stroke="#C9955C" strokeWidth="2" opacity="0.6" strokeDasharray={`${arc * 2765} 2765`} transform="rotate(-90 445 565)"/>
        <circle cx="445" cy="565" r="371" fill="none" stroke="#C9955C" strokeWidth="1" opacity="0.27"/>
      </svg>
      <div style={{position: 'absolute', left: 153, top: 125, width: 584, height: 880, translate: `0 ${rise}px`, scale: packScale, filter: 'drop-shadow(0 45px 38px #080403bb)'}}>
        <svg width="584" height="880" viewBox="0 0 584 880">
          <defs>
            <linearGradient id="pouch" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#2A140C"/><stop offset="0.12" stopColor="#6E4027"/><stop offset="0.35" stopColor="#28140C"/><stop offset="0.7" stopColor="#180C08"/><stop offset="1" stopColor="#4B2918"/></linearGradient>
            <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#D59C5F" stopOpacity="0.4"/><stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0"/><stop offset="1" stopColor="#D59C5F" stopOpacity="0.23"/></linearGradient>
          </defs>
          <path d="M70 15 H514 L536 95 L525 835 Q292 883 59 835 L48 95Z" fill="url(#pouch)" stroke="#A37045" strokeWidth="4"/>
          <path d="M48 96 H536 M58 123 H526" stroke="#D2A066" strokeWidth="5" opacity="0.65"/>
          <path d="M70 15 H514 L536 95 L525 835 Q292 883 59 835 L48 95Z" fill="url(#shine)"/>
          <path d="M110 155 L85 790 M476 155 L506 790" stroke="#C18B56" strokeWidth="3" opacity="0.33"/>
          <rect x="112" y="263" width="360" height="347" rx="3" fill="#1D100B" stroke="#D7A66A" strokeWidth="3"/>
          <path d="M142 294 H442 M142 577 H442" stroke="#D7A66A" strokeWidth="2" opacity="0.65"/>
        </svg>
        <div style={{position: 'absolute', left: 0, right: 0, top: 337, textAlign: 'center', fontFamily: 'Italiana', fontSize: 93, letterSpacing: 9}}>AUREL</div>
        <div style={{position: 'absolute', left: 0, right: 0, top: 460, textAlign: 'center', fontFamily: 'DM Sans', fontSize: 19, letterSpacing: 5, color: GOLD}}>SPECIALTY COFFEE</div>
        <div style={{position: 'absolute', left: 0, right: 0, top: 547, textAlign: 'center', fontFamily: 'DM Sans', fontSize: 16, letterSpacing: 4, color: PALE}}>SINGLE ORIGIN · 250G</div>
      </div>
    </div>
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 266, textAlign: 'center', fontFamily: 'Italiana', fontSize: 82, opacity: interpolate(frame, [38, 73], [0, 1], clamp)}}>Savor the slow.</div>
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 169, textAlign: 'center', fontFamily: 'DM Sans', fontSize: 27, letterSpacing: 8, color: GOLD, opacity: interpolate(frame, [48, 83], [0, 1], clamp)}}>COFFEE, CONSIDERED.</div>
    <div style={{position: 'absolute', right: 88, bottom: 84, fontFamily: 'DM Sans', fontSize: 22, letterSpacing: 6, color: GOLD}}>04 / 04</div>
  </Canvas>;
};

export const Spot = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{background: DEEP}}>
    <Sequence from={0} durationInFrames={3.5 * fps}><Opening/></Sequence>
    <Sequence from={85} durationInFrames={3.5 * fps}><Ritual/></Sequence>
    <Sequence from={170} durationInFrames={3.5 * fps}><Origin/></Sequence>
    <Sequence from={255} durationInFrames={3.5 * fps}><Pack/></Sequence>
  </AbsoluteFill>;
};

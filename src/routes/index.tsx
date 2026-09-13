import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, CalendarDays, ChevronRight, CirclePause, CirclePlay,
  Headphones, Instagram, Menu, Music2, Pause, Play, Send, Sparkles, Ticket,
  Volume2, X, Youtube,
} from "lucide-react";
import { type FormEvent, type MouseEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/drew-hero.jpg";
import portraitImage from "@/assets/drew-portrait.jpg";
import neonHorizon from "@/assets/neon-horizon.jpg";
import afterimage from "@/assets/afterimage.jpg";
import velocity from "@/assets/velocity.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DREW VARDY — Electronic Music Artist & DJ" },
    { name: "description", content: "Enter the world of DREW VARDY. New electronic music, hybrid DJ sets, global tour dates and bookings." },
    { property: "og:title", content: "DREW VARDY — Sonic Architect" },
    { property: "og:description", content: "New music, hybrid DJ sets, global tour dates and bookings." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const tracks = [
  { title: "Neon Horizon", meta: "Original Mix · 06:42", art: neonHorizon },
  { title: "Afterimage", meta: "Warehouse Edit · 05:58", art: afterimage },
  { title: "Escape Velocity", meta: "Extended Mix · 07:16", art: velocity },
];
const releases = [
  { title: "Neon Horizon", year: "2026", genre: "Melodic Techno", art: neonHorizon },
  { title: "Afterimage", year: "2025", genre: "Peak Time", art: afterimage },
  { title: "Escape Velocity", year: "2025", genre: "Progressive", art: velocity },
];
const upcoming = [
  { day: "24", month: "OCT", venue: "Sisyphos", city: "Berlin, DE", flag: "🇩🇪", stage: "Hammerhalle · 02:00", status: "LOW TICKETS" },
  { day: "08", month: "NOV", venue: "NDSM Warehouse", city: "Amsterdam, NL", flag: "🇳🇱", stage: "Area 01 · 23:30", status: "HEADLINE SET" },
  { day: "31", month: "DEC", venue: "Printworks NYE", city: "London, UK", flag: "🇬🇧", stage: "Press Halls · 01:15", status: "SOLD OUT" },
  { day: "17", month: "JAN", venue: "Circoloco", city: "Ibiza, ES", flag: "🇪🇸", stage: "Main Room · 00:30", status: "ON SALE" },
];
const past = [
  { day: "19", month: "JUL", venue: "Sonar Festival", city: "Barcelona, ES", flag: "🇪🇸", stage: "SónarHall · 01:00", status: "HIGHLIGHT" },
  { day: "03", month: "MAY", venue: "The Warehouse Project", city: "Manchester, UK", flag: "🇬🇧", stage: "Depot · 23:45", status: "HIGHLIGHT" },
  { day: "22", month: "MAR", venue: "DGTL", city: "Amsterdam, NL", flag: "🇳🇱", stage: "Generator · 20:00", status: "HIGHLIGHT" },
];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: .65 } };

function Waveform({ playing = true, compact = false }: { playing?: boolean; compact?: boolean }) {
  return <div className={`flex items-center ${compact ? "h-4 gap-px" : "h-8 gap-0.5"}`} aria-hidden="true">
    {[35,70,45,90,58,100,40,82,52,95,60,76,38,88,50,68].map((h, i) => <span key={i} className={playing ? "wave-bar w-0.5 rounded-full bg-primary" : "w-0.5 rounded-full bg-muted-foreground"} style={{ height: `${h}%`, animationDelay: `${i * -0.07}s` }} />)}
  </div>;
}

function SectionHead({ number, label, title }: { number: string; label: string; title: string }) {
  return <motion.div {...reveal} className="mb-10 grid gap-4 border-t border-border pt-5 md:mb-16 md:grid-cols-[1fr_2fr]">
    <div className="font-mono text-xs text-primary">{number} / {label}</div>
    <h2 className="font-display text-4xl font-bold uppercase leading-[.92] md:text-7xl">{title}</h2>
  </motion.div>;
}

function Cursor() {
  const x = useMotionValue(-40), y = useMotionValue(-40);
  const sx = useSpring(x, { stiffness: 500, damping: 35 }), sy = useSpring(y, { stiffness: 500, damping: 35 });
  useEffect(() => { const move = (e: globalThis.MouseEvent) => { x.set(e.clientX - 10); y.set(e.clientY - 10); }; window.addEventListener("mousemove", move); return () => window.removeEventListener("mousemove", move); }, [x, y]);
  return <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-5 w-5 rounded-full border border-primary mix-blend-difference md:block" />;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const [pastShows, setPastShows] = useState(false);
  const [activeReel, setActiveReel] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [time, setTime] = useState("");
  useEffect(() => { const tick = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date())); tick(); const id = window.setInterval(tick, 30000); return () => window.clearInterval(id); }, []);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const tilt = (e: MouseEvent<HTMLDivElement>) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.transform = `perspective(900px) rotateX(${(e.clientY-r.top-r.height/2)/-30}deg) rotateY(${(e.clientX-r.left-r.width/2)/30}deg) translate3d(0,0,0)`; };
  const jump = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); };
  return <div className="relative min-h-screen bg-background pb-32 text-foreground selection:bg-primary selection:text-primary-foreground">
    <Cursor />
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <nav className="grid h-14 grid-cols-[1fr_auto] items-center rounded-full border border-border bg-background/70 px-5 shadow-2xl backdrop-blur-2xl md:grid-cols-[auto_1fr_auto] md:px-6">
        <button onClick={() => jump("#top")} className="font-display text-sm font-bold tracking-widest">DV <span className="text-primary">// 01</span></button>
        <div className="mx-auto hidden items-center gap-7 md:flex">{["Sounds","Gigs","Story","Press","Contact"].map(n => <button key={n} onClick={() => jump(`#${n.toLowerCase()}`)} className="text-[10px] uppercase text-muted-foreground transition-colors hover:text-primary">{n}</button>)}</div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex"><Waveform playing={playing} compact /></div>
          <Button variant="neon" size="sm" className="hidden rounded-full uppercase md:inline-flex" onClick={() => jump("#contact")}>Book DJ</Button>
          <Button variant="ghost" size="icon" className="rounded-full md:hidden" aria-label="Open menu" onClick={() => setMenu(true)}><Menu /></Button>
        </div>
      </nav>
    </header>
    <AnimatePresence>{menu && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-background/95 p-5 backdrop-blur-2xl md:hidden">
      <div className="flex items-center justify-between"><span className="font-display font-bold">DV <span className="text-primary">// 01</span></span><Button variant="glass" size="icon" className="rounded-full" aria-label="Close menu" onClick={() => setMenu(false)}><X /></Button></div>
      <div className="mt-20 flex flex-col">{["Sounds","Gigs","Story","Press","Contact"].map((n,i) => <button key={n} onClick={() => jump(`#${n.toLowerCase()}`)} className="flex items-center justify-between border-b border-border py-5 text-left font-display text-4xl font-bold uppercase"><span><small className="mr-5 font-mono text-xs text-primary">0{i+1}</small>{n}</span><ArrowDownRight /></button>)}</div>
    </motion.div>}</AnimatePresence>

    <main>
      <section id="top" className="grain relative flex min-h-[100dvh] items-end overflow-hidden px-4 pb-14 pt-24 md:px-8 md:pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_35%),radial-gradient(circle_at_90%_75%,color-mix(in_oklab,var(--infrared)_12%,transparent),transparent_30%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-end gap-4 lg:grid-cols-[.7fr_1.5fr_.7fr]">
          <motion.div initial={{ opacity:0, x:-20 }} animate={{opacity:1,x:0}} transition={{delay:.5}} className="relative z-10 order-2 lg:order-1 lg:pb-10">
            <p className="mb-5 max-w-xs text-xs uppercase leading-6 text-muted-foreground">Berlin-based sonic architect constructing high-velocity moments for dark rooms and mainstages.</p>
            <div className="flex gap-2"><Button variant="neon" size="club" onClick={() => setPlaying(true)}><Play className="fill-current" /> Listen live mix</Button><Button variant="glass" size="icon" className="h-12 w-12 rounded-full" onClick={() => jump("#gigs")}><CalendarDays /></Button></div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <motion.p initial={{opacity:0}} animate={{opacity:1}} className="mb-3 text-center font-mono text-[10px] uppercase text-primary">Sonic architect // Hybrid DJ sets</motion.p>
            <motion.h1 initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.08}}}} className="relative z-10 text-center font-display text-[clamp(4rem,13vw,10.5rem)] font-extrabold uppercase leading-[.72]">
              {"DREW VARDY".split(" ").map(word => <motion.span key={word} variants={{hidden:{opacity:0,y:70},show:{opacity:1,y:0,transition:{duration:.7,ease:[.16,1,.3,1]}}}} className="block">{word}</motion.span>)}
            </motion.h1>
            <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:.35}} onMouseMove={tilt} onMouseLeave={e => e.currentTarget.style.transform=""} className="relative mx-auto -mt-2 aspect-[6/5] max-w-2xl overflow-hidden rounded-[42%_42%_12px_12px] border border-border transition-transform duration-200 will-change-transform">
              <img src={heroImage} width={1536} height={1280} alt="Drew Vardy performing under green and magenta lasers" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </motion.div>
          </div>
          <div className="order-3 flex flex-wrap gap-2 lg:flex-col lg:items-end lg:pb-14">{["128—140 BPM","TECHNO / MELODIC BASS","ADE 2024 PERFORMER"].map((b,i)=><span key={b} className="drift rounded-full border border-border bg-card/70 px-3 py-2 text-[9px] uppercase backdrop-blur-xl" style={{animationDelay:`${i*.6}s`}}>{b}</span>)}</div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border py-3"><div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-sm font-bold uppercase text-muted-foreground">{Array(2).fill("NEW SINGLE — NEON HORIZON — OUT NOW ✦ BERLIN 52.5200° N ✦ WORLDWIDE BOOKINGS OPEN ✦ ").map((x,i)=><span key={i}>{x}</span>)}</div></div>

      <section id="sounds" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <SectionHead number="01" label="DISCOGRAPHY" title="PRESS PLAY. ENTER THE VOID." />
        <div className="grid gap-8 md:grid-cols-3">{releases.map((r,i)=><motion.article key={r.title} {...reveal} transition={{duration:.6,delay:i*.12}} className="group">
          <div className="relative mb-5 aspect-square rounded-sm border border-border bg-card p-2 transition-transform duration-500 group-hover:-translate-y-2">
            <div className="absolute right-[-5%] top-[8%] h-[84%] w-[84%] rounded-full border border-border bg-obsidian-soft transition-transform duration-500 group-hover:translate-x-7" />
            <img src={r.art} loading="lazy" width={1024} height={1024} alt={`${r.title} cover artwork`} className="relative h-full w-full rounded-sm object-cover" />
            <Button variant="neon" size="icon" className="absolute bottom-5 right-5 h-12 w-12 rounded-full" onClick={()=>{setTrack(i);setPlaying(true)}} aria-label={`Play ${r.title}`}><Play className="fill-current" /></Button>
          </div>
          <div className="flex items-start justify-between"><div><h3 className="font-display text-2xl font-bold uppercase">{r.title}</h3><p className="mt-1 text-[10px] uppercase text-muted-foreground">{r.genre} · {r.year}</p></div><ArrowDownRight className="text-primary" /></div>
        </motion.article>)}</div>
        <motion.div {...reveal} className="mt-12 flex flex-wrap gap-2">{["Spotify","Apple Music","Beatport","SoundCloud","YouTube Music"].map(s=><a key={s} href={`https://${s.toLowerCase().replace(" ","")}.com`} target="_blank" rel="noreferrer" className="rounded-full border border-border px-4 py-2 text-[10px] uppercase text-muted-foreground transition-colors hover:border-primary hover:text-primary">{s} ↗</a>)}</motion.div>
      </section>

      <section id="gigs" className="bg-obsidian-soft/50 px-4 py-24 md:px-8 md:py-36"><div className="mx-auto max-w-7xl">
        <SectionHead number="02" label="LIVE TRANSMISSIONS" title="FIND ME IN THE STROBE." />
        <div className="mb-8 inline-flex rounded-full border border-border bg-background p-1">{[false,true].map(v=><button key={String(v)} onClick={()=>setPastShows(v)} className={`rounded-full px-4 py-2 text-[10px] uppercase transition-colors ${pastShows===v?"bg-primary text-primary-foreground":"text-muted-foreground"}`}>{v?"Past highlights":"Upcoming shows"}</button>)}</div>
        <div>{(pastShows?past:upcoming).map((g,i)=><motion.div layout key={g.venue} {...reveal} transition={{duration:.45,delay:i*.08}} className="group grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-3 border-t border-border py-5 last:border-b md:grid-cols-[100px_1.4fr_1fr_1fr_auto] md:gap-6">
          <div><div className="font-display text-4xl font-bold leading-none md:text-6xl">{g.day}</div><div className="text-[9px] text-primary">{g.month} 2026</div></div>
          <div className="min-w-0"><h3 className="truncate font-display text-lg font-bold uppercase md:text-2xl">{g.venue}</h3><p className="text-[10px] text-muted-foreground md:hidden">{g.flag} {g.city}</p></div>
          <div className="hidden text-xs text-muted-foreground md:block">{g.flag} {g.city}</div><div className="hidden text-[10px] uppercase text-muted-foreground md:block">{g.stage}</div>
          <div className="flex flex-col items-end gap-2"><span className={`text-[8px] uppercase ${g.status==="SOLD OUT"?"text-infrared":"text-primary"}`}>{g.status}</span><Button variant="glass" size="icon" className="rounded-full" disabled={g.status==="SOLD OUT"} aria-label="Get tickets"><ArrowRight /></Button></div>
        </motion.div>)}</div>
      </div></section>

      <section id="story" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <SectionHead number="03" label="ORIGIN SIGNAL" title="BUILT IN THE UNDERGROUND." />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <motion.div {...reveal} className="relative"><div className="overflow-hidden rounded-[4px_80px_4px_4px] border border-border shadow-[18px_18px_0_var(--primary)]"><img src={portraitImage} loading="lazy" width={1024} height={1280} alt="Monochrome portrait of Drew Vardy" className="aspect-[4/5] w-full object-cover" /></div><span className="absolute -left-2 top-8 rounded-full bg-primary px-3 py-2 text-[9px] text-primary-foreground">BERLIN / DE</span></motion.div>
          <motion.div {...reveal} className="flex flex-col justify-center"><p className="mb-7 font-display text-2xl font-semibold leading-tight md:text-4xl">From low-ceiling warehouse rooms to festival mainstages, Drew Vardy builds sets around one principle: tension should feel physical.</p><p className="max-w-2xl text-sm leading-7 text-muted-foreground">A producer, selector and live performer shaped by Berlin after-hours, Vardy welds melodic pressure to industrial rhythm. Every show is reconstructed in real time—part precision, part beautiful system failure.</p>
            <div className="my-10 grid grid-cols-3 border-y border-border py-6">{[["150+","SETS PLAYED"],["1.2M+","STREAMS"],["12","COUNTRIES"]].map(x=><div key={x[1]}><strong className="block font-display text-2xl text-primary md:text-4xl">{x[0]}</strong><span className="text-[8px] text-muted-foreground">{x[1]}</span></div>)}</div>
            <div className="flex flex-wrap gap-2">{["ABLETON CERTIFIED","AUDIO ENGINEER","RESIDENT / KONTINUUM","HYBRID LIVE"].map(x=><span key={x} className="rounded-full border border-border px-3 py-2 text-[9px]">{x}</span>)}</div>
          </motion.div>
        </div>
        <motion.blockquote {...reveal} className="mt-20 border-l-2 border-infrared pl-6 font-display text-3xl font-bold uppercase md:ml-[35%] md:text-5xl">“A relentless energy machine.”<footer className="mt-4 font-mono text-[10px] font-normal text-muted-foreground">— ELECTRONIC BEAT MAGAZINE</footer></motion.blockquote>
      </section>

      <section id="press" className="overflow-hidden bg-obsidian-soft/50 py-24 md:py-36"><div className="mx-auto max-w-7xl px-4 md:px-8"><SectionHead number="04" label="REEL VAULT" title="LIVE. UNFILTERED." /></div>
        <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-6 md:px-[max(2rem,calc((100vw-80rem)/2))]">{[
          [heroImage,"BERLIN / 04:17","Warehouse pressure"],[neonHorizon,"AMSTERDAM / 01:42","The drop lands"],[afterimage,"LONDON / 23:58","Closing sequence"],[velocity,"BARCELONA / 02:11","Mainstage transmission"]
        ].map((r,i)=><motion.button {...reveal} key={r[1]} onClick={()=>setActiveReel(activeReel===i?null:i)} className="group relative aspect-[9/16] w-[72vw] max-w-[310px] shrink-0 snap-center overflow-hidden rounded-md border border-border bg-card text-left">
          <img src={r[0]} loading="lazy" width={1024} height={1280} alt={r[2]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
          <div className="absolute inset-0 grid place-items-center">{activeReel===i?<CirclePause className="h-14 w-14 text-primary"/>:<CirclePlay className="h-14 w-14 text-primary"/>}</div>
          <div className="absolute inset-x-4 bottom-4"><Waveform playing={activeReel===i} compact/><p className="mt-2 font-display text-lg font-bold uppercase">{r[2]}</p><span className="text-[9px] text-primary">{r[1]}</span></div>
        </motion.button>)}</div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36"><SectionHead number="05" label="BOOKING CHANNEL" title="LET'S MOVE A ROOM." />
        <div className="grid overflow-hidden rounded-md border border-border bg-card/60 backdrop-blur-xl lg:grid-cols-[1.3fr_.7fr]">
          <motion.form {...reveal} onSubmit={submit} className="grid gap-5 p-5 md:grid-cols-2 md:p-10">
            {["Name","Email","Date"].map(x=><label key={x} className="grid gap-2 text-[9px] uppercase text-muted-foreground">{x}<input required type={x==="Email"?"email":x==="Date"?"date":"text"} className="h-12 border-b border-border bg-transparent text-sm text-foreground outline-none transition-colors focus:border-primary" /></label>)}
            <label className="grid gap-2 text-[9px] uppercase text-muted-foreground">Event type<select className="h-12 border-b border-border bg-background text-sm text-foreground outline-none focus:border-primary"><option>Club Headline</option><option>Festival</option><option>Private Show</option><option>Brand Launch</option></select></label>
            <label className="grid gap-2 text-[9px] uppercase text-muted-foreground">Budget range<select className="h-12 border-b border-border bg-background text-sm text-foreground outline-none focus:border-primary"><option>€5k — €10k</option><option>€10k — €25k</option><option>€25k+</option></select></label>
            <label className="grid gap-2 text-[9px] uppercase text-muted-foreground md:col-span-2">Message<textarea required rows={4} className="resize-none border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-primary" /></label>
            <div className="md:col-span-2"><Button variant="neon" size="club" type="submit" className="w-full md:w-auto"><Send />{sent?"Inquiry received":"Send inquiry"}</Button></div>
          </motion.form>
          <aside className="flex flex-col justify-between border-t border-border bg-primary p-6 text-primary-foreground lg:border-l lg:border-t-0 lg:p-10"><div><Sparkles className="mb-8 h-9 w-9"/><h3 className="font-display text-3xl font-bold uppercase">Direct channel</h3><div className="mt-8 space-y-5 text-xs"><p><span className="block opacity-60">BOOKINGS & MANAGEMENT</span><a href="mailto:mgmt@drewvardy.com">mgmt@drewvardy.com</a></p><p><span className="block opacity-60">PRESS</span><a href="mailto:press@drewvardy.com">press@drewvardy.com</a></p></div></div><div className="mt-12 flex gap-3">{[Instagram,Youtube,Music2,Headphones].map((Icon,i)=><a key={i} href="#social" aria-label="Social channel" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 transition-transform hover:-translate-y-1"><Icon className="h-4 w-4" /></a>)}</div></aside>
        </div>
      </section>
    </main>

    <footer className="border-t border-border px-4 pb-36 pt-8 md:px-8"><div className="mx-auto grid max-w-7xl gap-4 text-[9px] uppercase text-muted-foreground md:grid-cols-[1fr_auto]"><p>© DREW VARDY. ALL RIGHTS RESERVED.<br/>DESIGNED FOR HIGH FREQUENCIES.</p><p className="text-primary">● BERLIN / {time} CET</p></div></footer>

    <div className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 rounded-md border border-border bg-background/90 p-2 shadow-2xl backdrop-blur-2xl">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 md:grid-cols-[auto_1fr_1fr_auto]">
        <button onClick={()=>setPlaying(!playing)} className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground" aria-label={playing?"Pause":"Play"}>{playing?<Pause className="fill-current"/>:<Play className="fill-current"/>}</button>
        <button className="min-w-0 text-left" onClick={()=>setTrack((track+1)%tracks.length)}><p className="truncate font-display text-xs font-bold uppercase md:text-sm">DREW VARDY — {tracks[track]?.title ?? "Neon Horizon"}</p><p className="truncate text-[8px] text-muted-foreground">{tracks[track]?.meta ?? "Original Mix · 06:42"} · TAP TO CHANGE</p></button>
        <div className="hidden items-center gap-3 md:flex"><Waveform playing={playing}/><input aria-label="Track progress" type="range" min="0" max="100" defaultValue="36" className="h-1 w-full accent-[var(--primary)]" /></div>
        <div className="flex items-center gap-1"><Volume2 className="hidden h-4 w-4 text-muted-foreground sm:block"/><a href="https://open.spotify.com" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border" aria-label="Open Spotify"><ArrowDownRight className="h-4 w-4"/></a></div>
      </div>
    </div>
  </div>;
}
import AccentGlow from "../../components/AccentGlow";
import SectionHeader from "./SectionHeader";
import ImageWithCaption from "../../components/ImageWithCaption";
import "../../styles/styles.css";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function About() {
  return (
    <div className="page-root">
      <AccentGlow />
      <div className="flex min-h-screen w-screen bg-[var(--color-bg)] relative">
        {/* Fixed left vertical line - shorter, starts from top */}
        <div className="fixed bottom-0 h-[85%] w-[4px] bg-[#F8C306] z-10 lg:left-[100px] 2xl:left-[500px] lg:block hidden"></div>

        <div className="z-20 fixed top-0 w-full h-[15%] bg-[var(--color-bg)] flex items-center justify-between">
            <div className="text-[20px] md:text-[22px] text-[var(--color-accent)] mt-4 pl-4 md:pl-[40px] lg:pl-[180px] 2xl:pl-[650px]" style={{ fontFamily: 'var(--font-main)' }}>
              -ABOUT
            </div>
            <Link href="/" className="mr-4 md:mr-[80px] lg:mr-[180px] 2xl:mr-[650px] mt-4 hover:opacity-80 transition-opacity flex items-center">
              <IoHome className="w-6 h-6 text-[var(--color-accent)]" />
            </Link>
          </div>
         {/* Scrollable content */}
        <div className="mt-30 xl:mt-20 2xl:mt-40 overflow-y-auto max-w-6xl mx-4 md:mx-[80px] lg:mx-[180px] 2xl:mx-[650px] px-4 md:px-8">
          
          <SectionHeader 
            title="I could write a book.."
            accentText="I won&apos;t, or maybe I will in a few years."
          />
          
          <div className="leading-relaxed text-lg md:text-[20px] lg:text-[22px]" style={{ fontFamily: 'var(--font-main)' }}>
            If I had to describe myself in two words I&apos;d say, 
            <br />
            <br />
            <span className="italic">perpetually lost </span> 
            [for anyone looking to hire me - read this as hard working, thanks]
            <br />
            <br />
            There&apos;s a song that describes this phase of life. It&apos;s Eastside by Benny Blanco. The lyrics go like, <br /><br />
            <span className="italic">
            And then, oh, suddenly we turned twenty-three,
            <br />
            Now we got pressure for taking our life more seriously,
            <br />
            We got our dead end jobs and got bills to pay..
            </span>
            <br />
            <br />
            {/* Audio Player */}
            <div className="my-0">
            <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/7FGq80cy8juXBCD2nrqdWU?utm_source=generator&theme=0" width="100%" height="152"  allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <br />
            [to all the 20 or so year olds, feeling this - you got this (i hope so)]
            <br />
            <br/>
            Sounds dramatic. Let me try starting again. 
            <br />
        
          </div>
        {/* end of I could write a book */}

        {/* start of I&apos;m Elizabeth */}
        <SectionHeader 
        title="I&apos;m Elizabeth!"
        accentText="Currently an engineer, but probably won&apos;t stay one"
        isAccent
        />

        <div className="leading-relaxed text-lg md:text-[20px] lg:text-[21px] pb-10" style={{ fontFamily: 'var(--font-main)' }}>
        So getting to the facts that matter. 
        <br/>
        <br/>
        I currently work as a <span className="text-[var(--color-accent)]">Developer Relations Engineer at SigNoz (YC W21)</span>  (where I write more than I code). A typical work week includes coding for POCs, snippets,
        understanding how a feature works and any different use-cases, followed by blogging (written/ recorded) about them in a way, my dear readers will make sense of it. There&apos;s also distribution involved,
        and I&apos;m currently knee-deep in figuring out how to improve sign-ups from Reddit.
        <br/>
        I previously worked as a <span className="text-[var(--color-accent)]">Product Engineer at Inflection </span>(where I <span className="line-through"> cried</span> coded more than I slept). A typical work week was a mix of devloping features,
        reviewing code, resolving PR comments and a ton of debugging.
        <br/>
        <br/>
        Growing up, I have always dreamt of being an engineer with a flashy laptop, working hard and making money (corporate slave). 10 years later, living the dream yet not fully living it.
        <br/>
        <br/>
        The only constant has been <span className="italic">ambition</span> and <span className="italic">desire</span> to do something big on my own and of my own.
        </div>


        <div id="pitch" className="scroll-mt-20">
          <SectionHeader 
          title="me + your org = 🔥"
          accentText = "Pitching myself. Humbly."
          showLinkIcon={true}
          linkId="pitch"/>

          <div className="leading-relaxed text-lg md:text-[20px] lg:text-[21px] pb-12" style={{ fontFamily: 'var(--font-main)' }}>
          I&apos;m a developer, who codes and builds things. I&apos;m a great communicator, who loves to write and speak. I&apos;ve improved reduced AWS costs by 10% in my previous org and optimised architectures for messaging queues.
          I was a part of a deep tech blog that went viral on Hacker News generating a traffic of 15.34K till date. I learned all about MCP servers and made a POC MCP server for my org in roughly 2 days.
          <br/>
          <br/>
          <span className="italic">Cliché.</span>
          <br/>
          <br/>
          I&apos;ve done all of the above things, but 
          <span className="text-[var(--color-accent)]"> god forbid if I make my pitch analogous to the 
          other million smarter engineers on this planet.</span> Instead here is a more raw, honest and vulnerable pitch.
          <br/>
          <br/>
           I own my tasks from ideation to distribution to monitoring stats.
           I fix issuses before you catch them. You don&apos;t have to look at my work for errs, instead I hope I can look upto you and learn from you. Sometimes, I mess things up, but that happens only
           once in history. I don&apos;t repeat my mistakes (I really try my best). I&apos;ll help you grow your company, one step at a time (0&#8594;1 and 1&#8594;100). Tasks will be completed before the deadline. Always. I hit targets one 
           after the other, as much as my potential lets me.

          <br/>
          <br/>
          Not convinced yet?{" "}
          <Link
            href="/work"
            style={{ textDecoration: "underline" }}
            className="hover:opacity-80 transition"
          >
            Head over here
          </Link>
          , and see all my other ✨
          <span className="italic"> amazing brags </span>
          ✨.
          </div>
        </div>

        <SectionHeader
        title="I want to be..."
        accentText="Does it matter any more?"
        />
        <div className="leading-relaxed text-lg md:text-[20px] lg:text-[21px] pb-10" style={{ fontFamily: 'var(--font-main)' }}>
        It&apos;s funny how we often ask kids who have zero idea about how the world functions, <span className="italic">what they want to be?</span>, but not to functional adults. 
        <br/>
        <br/>
        Ever since I&apos;ve started working in corporate, I&apos;ve wanted to <span className="text-[var(--color-accent)]">use my intellect for actively helping people and solving their problems.</span> As an engineer, am I solving problems? 
        Yes. Am I actually helping people who absolutely could use it? Nope.  Under a façade of solving problems, it was often how can I reduce AWS costs by 30% or how to improve traffic by 10%.
        <br/>
        <br/>
        They were surely interesting, but ...(I don&apos;t know how to complete this sentence). 
        <br/>
        <br/>
        But an actual long-term goal is to be a lawyer (once I get the guts + bank balance) 
        and a have a law-firm that <span className="text-[var(--color-accent)]">takes class-action suits against big-tech giants </span> 
        channeling my inner <Link href="https://howtogetawaywithmurder.fandom.com/wiki/Michaela_Pratt" target="_blank" style={{ textDecoration: "underline" }} className="hover:opacity-80 transition">Michaela Pratt</Link>. 
        <br/>
        <br/>
        <span className="italic">Delusional? </span> Nope. I&apos;d say <span className="italic">ambitious.</span>
        </div>

        {/* start of I want to be */}
        <SectionHeader
        title="On a normal day,"
        accentText="I work. And work a little more, And more."
        />
        <div className="leading-relaxed text-lg md:text-[20px] lg:text-[22px] pb-10" style={{ fontFamily: 'var(--font-main)' }}>
        When I&apos;m not working, I&apos;m either hitting the gym <span className="italic">or</span> watching a show <span className="italic">or </span>
        reading a spicy novel <span className="italic">or</span> playing with my dog <span className="italic">or</span> stress-cleaning my home <span className="italic">or</span> contemplating life.
        <br/>
        <br/>
        My current read: <Link href="https://www.goodreads.com/book/show/211200239-lights-out" target="_blank" style={{ textDecoration: "underline", fontStyle: "italic" }} className="hover:opacity-80 transition" >Lights Out by Navessa Allen </Link>
        <br/>
        My current watch: <Link href="https://www.imdb.com/title/tt4270492/" target="_blank" style={{ textDecoration: "underline", fontStyle: "italic" }} className="hover:opacity-80 transition">Billions</Link>
        <br/>
        <br/>
        I think I&apos;ve shared more than necessary, hence ending this note, with one of my favourite pictures. 
        <br/>
        <br/>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-70%">
            <ImageWithCaption 
              src="/aboutPic.jpg" 
              alt="me" 
              caption="Me with this sweetheart"
              imageClassName="rounded-r-[40px]"
            />
          </div>
          <div className="w-full lg:w-1/2 leading-relaxed text-lg md:text-[20px] lg:text-[22px] lg:pt-20" style={{ fontFamily: 'var(--font-main)' }}>
            <p>
             Seems like I have a flex-col, with some space to fill. So let me introduce you to my Patreon account as a small attempt to 
             monetize my platform.
             I&apos;m planning to run a blog here, but not sure if I&apos;ll be able to keep up. <span className="italic">sigh.</span>
             <br/>
             <br/>
             But as they say,
             <br/>
             <span className="italic text-[22px]">
             You miss <span className="text-[var(--color-accent)] text-[40px] leading-none">100%</span> of the shots you don&apos;t take.
             </span>
             <br/>
             <br/>
             <a 
               href="https://patreon.com/elza1111?utm_medium=portfolio&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex w-full items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[#E6B800] text-black px-6 py-4 rounded-lg transition-colors duration-200 mt-4 group"
             >
               <span className="text-[20px] mt-1">🐶</span>
               <span className="text-[var(--color-bg)] text-[26px] group-hover:underline group-hover:decoration-wavy group-hover:decoration-offset-4"  style ={{ fontFamily: 'var(--font-heading)' }} >Add to my Patreon!</span>
             </a>
            </p>
            <div className="w-full h-[1px] bg-[var(--color-accent)] mt-6"/>
              <p className="text-[22px] mt-16">Okie then, adeiu mate!</p>
       
          </div>
        </div>

        </div>
        
        {/* end of I want to be */}

        



        {/* end of scrollable content */}
        </div>
      
        
        {/* Fixed right vertical line - longer, starts from top */}
        <div className="fixed top-0 h-[70%] w-[4px] bg-[#F8C306] z-10 lg:right-[100px] 2xl:right-[500px] lg:block hidden"></div>
      </div>
    </div>
  );
} 
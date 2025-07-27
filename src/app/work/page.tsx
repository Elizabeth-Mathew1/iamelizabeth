import Link from "next/link";
import AccentGlow from "../../components/AccentGlow";
import "../../styles/styles.css";
import { IoHome } from "react-icons/io5";

export default function Work() {
  return (
    <div className="page-root">
      <AccentGlow />
      <div className="flex min-h-screen w-screen bg-[var(--color-bg)] relative">
        {/* Fixed center timeline */}
        <div className="fixed top-0 bottom-0 left-1/2 w-[4px] bg-[var(--color-accent)] z-30 transform -translate-x-1/2"></div>
        
        {/* Fixed header */}
        <div className="fixed top-0 w-full h-[10%] bg-[var(--color-bg)] flex items-center justify-between z-20">
          <div className="text-[20px] md:text-[22px] text-[var(--color-accent)] mt-4 pl-4 md:pl-[80px] lg:pl-[180px] 2xl:pl-[650px] font-serif" style={{ fontFamily: 'var(--font-main)' }}>
            -WORK
          </div>
          <Link href="/" className="mr-4 md:mr-[80px] lg:mr-[180px] 2xl:mr-[650px] mt-4 hover:opacity-80 transition-opacity flex items-center">
            <IoHome className="w-6 h-6 text-[var(--color-accent)]" />
          </Link>
        </div>
        
        {/* Scrollable content */}
        <div className="mt-20 lg:mt-20 w-full px-4 md:px-10 xl:px-30 flex flex-col">
          {/* Timeline point 0 - Early Experience */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                To be continued!
              </span>
            </div>
          </div>

          {/* Timeline point 1 - Early Experience */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Created <span style={{ color: 'var(--color-accent)' }}>15+</span> blogs and several video tutorials on OpenTelemetry and Observability driving pageviews of <span style={{ color: 'var(--color-accent)' }}>3000+</span> per week.
              </span>
            </div>
          </div>

          {/* Timeline point 2 - Internship */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Learned to create dashboards on MixPanel and Google Analytics. Formulate keywords and create content for SEO. 
                Developed a skill of understanding user behavior from Clarity sessions.
              </span>
            </div>
          </div>

          {/* Timeline point 3 - Learning Period */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Consistent efforts and campaigns lead to driving <span style={{ color: 'var(--color-accent)' }}>40+</span> signups [<span style={{ color: 'var(--color-accent)' }}>20+ ICPs</span>] per month from <span style={{ color: 'var(--color-accent)' }}>Reddit</span>.
              </span>
            </div>
          </div>

          {/* Timeline point 4 - Software Engineer */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Built a <Link href="https://www.reddit.com/r/programming/comments/1lhmg9c/devops_wordle_to_help_you_get_familiar_with/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textDecorationColor: 'var(--color-accent)', textUnderlineOffset: '2px' }}>DevOps Wordle Game</Link>, which went viral on <span style={{ color: 'var(--color-accent)' }}>r/devops</span> with <span style={{ color: 'var(--color-accent)' }}>45+</span> upvotes and <span style={{ color: 'var(--color-accent)' }}>20+</span> comments driving 
                a traffic of <span style={{ color: 'var(--color-accent)' }}>3.5K+</span> pageviews.
              </span>
            </div>
          </div>

          {/* Timeline point 5 - Senior Developer */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end">
              <span className="pr-11 text-[25px] font-bold mb-1 font-serif" style={{ fontFamily: 'var(--font-sub)' }}>
                Went Viral on Hacker News! Yay!
              </span>
              <span className="pr-8 text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                My blog post on <Link href="https://eliz.substack.com/p/observability-real-talk-1" target="_blank" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textDecorationColor: 'var(--color-accent)', textUnderlineOffset: '2px' }}> CI/CD Observability with OpenTelemetry </Link>
                went viral on <span style={{ color: 'var(--color-accent)' }}>Hacker News</span> with <span style={{ color: 'var(--color-accent)' }}>100+</span> upvotes and <span style={{ color: 'var(--color-accent)' }}>50+</span> comments driving 
                a traffic of <span style={{ color: 'var(--color-accent)' }}> 15.7K+</span> pageviews till date.
              </span>
            </div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
          </div>

          {/* Timeline point 6 - Developer Relations Engineer */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Actively maintaing a dedicated developer <span style={{ color: 'var(--color-accent)' }}>Reddit</span> profile named <Link href="https://www.reddit.com/user/elizObserves/" target="_blank" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textDecorationColor: 'var(--color-accent)', textUnderlineOffset: '2px' }}> elizObservers </Link> with over <span style={{ color: 'var(--color-accent)' }}>500+</span> karma points
                <span style={{ color: 'var(--color-accent)' }}> 150+</span> contributions, <span style={{ color: 'var(--color-accent)' }}>20+</span> achievements. Weekly posts getting <span style={{ color: 'var(--color-accent)' }}>30-100</span> upvotes driving <span style={{ color: 'var(--color-accent)' }}>1000+</span> pageviews/ traffic.
              </span>
            </div>
          </div>

          {/* Timeline point 7 - Technical Lead */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Started a newsletter on OpenTelemetry and Observability named
                <Link href="https://newsletter.signoz.io/" target="_blank" style={{ color: 'var(--color-accent)', textDecoration: 'underline', textDecorationColor: 'var(--color-accent)', textUnderlineOffset: '2px' }}> Observability Real Talk </Link>
                with over <span style={{ color: 'var(--color-accent)' }}>15+</span> articles and <span style={{ color: 'var(--color-accent)' }}>100+</span> subscribers.
              </span>
            </div>
          </div>

          {/* Timeline point 8 - Engineering Manager */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Learned in-depth about OpenTelemetry, Observability, and Distributed Tracing. Dived deeper into
                different kinds of instrumentation for different languages.
              </span>
            </div>
          </div>

          {/* Timeline point 9 - Principal Engineer */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center mt-16 mb-16">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6">
              <span className="text-[var(--color-accent)] text-md mb-1 font-serif" style={{ fontFamily: 'var(--font-heading)' }}>
                2027 - present
              </span>
              <span className="text-[#fff] text-2xl lg:text-3xl font-bold leading-tight mb-1" style={{ fontFamily: 'var(--font-sub)' }}>
                Developer Relations Engineer
              </span>
              <span className="text-[var(--color-accent)] text-lg font-serif" style={{ fontFamily: 'var(--font-heading)' }}>
                SigNoz
              </span>
            </div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6"></div>
          </div>

          {/* Timeline point 10 - Frontend Development */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Worked on front-end features from scratch with complete ownership using <span style={{ color: 'var(--color-accent)' }}>React</span>, <span style={{ color: 'var(--color-accent)' }}>Redux</span> and <span style={{ color: 'var(--color-accent)' }}>TypeScript</span>. Built website tracking settings dashboard and timezone-aware campaigns with timezone settings page.
              </span>
            </div>
          </div>

          {/* Timeline point 11 - Data Processing Optimization */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Reduced data processing speed and storage costs for <span style={{ color: 'var(--color-accent)' }}>1TB+</span> data across multiple tenants by migrating from <span style={{ color: 'var(--color-accent)' }}>AWS Athena</span> to <span style={{ color: 'var(--color-accent)' }}>PySpark</span> for <span style={{ color: 'var(--color-accent)' }}>AWS S3</span> data processing.
              </span>
            </div>
          </div>

          {/* Timeline point 12 - AWS Lambda & Feature Flags */}
          <div className="relative flex w-full min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Designed and implemented <span style={{ color: 'var(--color-accent)' }}>AWS Lambda</span> functions for dynamic <span style={{ color: 'var(--color-accent)' }}>feature flag</span> management across multi-tenant systems, enabling scalable and efficient feature control.
              </span>
            </div>
          </div>

          {/* Timeline point 13 - Kafka & gRPC Integration */}
          <div className="relative flex w-full min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Developed <span style={{ color: 'var(--color-accent)' }}>Kafka</span> consumers to process messages and perform <span style={{ color: 'var(--color-accent)' }}>gRPC</span> calls for automated column deletion in <span style={{ color: 'var(--color-accent)' }}>SingleStore</span> tables. Integrated robust error-handling with delayed retry queues and <span style={{ color: 'var(--color-accent)' }}>Dead Letter Queues (DLQs)</span>.
              </span>
            </div>
          </div>

          {/* Timeline point 14 - AWS SQS Migration */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Migrated services from <span style={{ color: 'var(--color-accent)' }}>Celery</span> tasks and <span style={{ color: 'var(--color-accent)' }}>Beat scheduler</span> to <span style={{ color: 'var(--color-accent)' }}>AWS SQS</span>-based system with custom scheduler and consumers, improving job processing efficiency by <span style={{ color: 'var(--color-accent)' }}>30%</span>.
              </span>
            </div>
          </div>

          {/* Timeline point 15 - Code Quality & Ownership */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Developed strong ability to write high-quality, maintainable code, conduct thorough code reviews, and take full ownership of delivering end-to-end features from grooming to deployment.
              </span>
            </div>
          </div>

          {/* Product Engineer Timeline Section */}
          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6"></div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2">
              <span className="text-[#e0e0e0] text-base lg:text-lg font-serif" style={{ fontFamily: 'var(--font-main)' }}>
                Led product development initiatives and technical implementation for Inflection.io&apos;s platform, focusing on scalable solutions and user experience optimization.
              </span>
            </div>
          </div>

          <div className="relative flex w-full min-h-[200px] md:min-h-[150px] items-center mt-16">
            {/* Left: Role Info */}
            <div className="w-1/2 flex flex-col items-end pr-6">
              <span className="text-[var(--color-accent)] text-md mb-1 font-serif" style={{ fontFamily: 'var(--font-heading)' }}>
                2023 - 2024
              </span>
              <span className="text-[#fff] text-2xl lg:text-3xl font-bold leading-tight mb-1" style={{ fontFamily: 'var(--font-sub)' }}>
                Product Engineer
              </span>
              <span className="text-[var(--color-accent)] text-lg font-serif" style={{ fontFamily: 'var(--font-heading)' }}>
                Inflection.io
              </span>
            </div>
            {/* Center: Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full z-30 border-4 border-[var(--color-bg)]"></div>
            </div>
            {/* Right: Achievement/Description */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 pr-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 
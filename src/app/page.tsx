'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { GraduationCap, Twitter, Github, FileText } from 'lucide-react'

export default function Home() {
  const [showPronounce, setShowPronounce] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 py-8 md:py-10">
        <Navigation currentPage="Home" />

        {/* 顶部信息区：更紧凑的外边距 + 统一链接样式 */}
        <div
          className="
            flex flex-col md:flex-row gap-6 md:gap-8 mb-4 md:mb-6
            [&_a]:underline-offset-4
            [&_a]:text-blue-800 [&_a:hover]:text-blue-900 [&_a:visited]:text-blue-700
          "
        >
          {/* Left Column - Personal Info */}
          <div className="flex-1 [&>*:last-child]:mb-2">
            <h1 className="text-4xl md:text-4xl font-semibold tracking-tight mb-3">
              Jiashuo Liu（刘家硕）
            </h1>

            <div className="mb-5 text-[15px] md:text-[16px] leading-7">
              <a href="https://seed.bytedance.com/en/" target="_blank" rel="noopener noreferrer">
                ByteDance Seed Team
              </a>
              <br />
              <a
                href="https://seed.bytedance.com/en/topseed?view_from=homepage_tab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Member of TopSeed Talent Program
              </a>
            </div>

            {/* Contact Info：更小号、更统一 */}
            <div className="mb-4 text-[14px] md:text-[15px] leading-6">
              <p className="break-words">
                <span className="font-medium"><b>Email</b></span>:{' '}
                <span className="font-mono font-normal">
                  liujiashuo77@gmail.com
                </span>
              </p>
              <p>
                <span className="font-medium"><b>Address</b></span>: DingHao (DH-B), Beijing, China
              </p>
            </div>

            {/* Social Media Icons：统一 hover 深蓝 + 焦点环；更紧凑间距 */}
            <div className="flex gap-3 mb-2 items-end">
              <a
                href="https://scholar.google.com/citations?user=b7bpt5MAAAAJ&hl=en&oi=ao"
                title="Google Scholar"
                className="group flex flex-col items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 -m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={48} className="text-slate-700 group-hover:text-blue-900 transition-colors" />
                <span className="text-xs mt-1 text-slate-700 group-hover:text-blue-900 transition-colors">
                  Scholar
                </span>
              </a>
              <a
                href="https://x.com/liujiashuo77"
                title="X (Twitter)"
                className="group flex flex-col items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 -m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={44} className="text-slate-700 group-hover:text-blue-900 transition-colors" />
                <span className="text-xs mt-1 text-slate-700 group-hover:text-blue-900 transition-colors">
                  Twitter
                </span>
              </a>
              <a
                href="https://github.com/LJSthu"
                title="Github"
                className="group flex flex-col items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 -m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={44} className="text-slate-700 group-hover:text-blue-900 transition-colors" />
                <span className="text-xs mt-1 text-slate-700 group-hover:text-blue-900 transition-colors">
                  Github
                </span>
              </a>
              <a
                href="/jiashuo_cv_latest.pdf"
                title="CV"
                className="group flex flex-col items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 -m-1"
              >
                <FileText size={44} className="text-slate-700 group-hover:text-blue-900 transition-colors" />
                <span className="text-xs mt-1 text-slate-700 group-hover:text-blue-900 transition-colors">CV</span>
              </a>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="flex-shrink-0">
            <img
              src="/ljs8.jpg"
              alt="Jiashuo Liu"
              width={235}
              height={235}
              className="object-cover rounded-2xl shadow-lg ring-1 ring-black/5"
            />
          </div>
        </div>

        {/* Bio：统一现代字体、行距更紧；内部链接沿用上面的深蓝规则 */}
        <p
          className="
            text-[15px] md:text-[17px] leading-snug mb-5
            [&_a]:underline-offset-4
            [&_a]:text-blue-800 [&_a:hover]:text-blue-900 [&_a:visited]:text-blue-700
          "
        >
          I work on LLM Eval & Data. <br></br><br></br>

          I was a Research Scientist at ByteDance Seed, as a member of <span className="font-medium">TopSeed</span>{' '}
          Program, working with{' '}
          <a href="https://scholar.google.com/citations?user=OdE3MsQAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">
            Wenhao Huang
          </a>
          . I received my Ph.D. from the Department of Computer Science and Technology at Tsinghua University, advised by Professors{' '}
          <a href="https://pengcui.thumedialab.com/" target="_blank" rel="noopener noreferrer">
            Peng Cui
          </a>{' '}
          and{' '}
          <a href="https://www.sem.tsinghua.edu.cn/en/info/1219/6985.htm" target="_blank" rel="noopener noreferrer">
            Bo Li
          </a>
          . Previously, I was a visiting student researcher at Stanford University, working with Professor{' '}
          <a href="https://web.stanford.edu/~jblanche/" target="_blank" rel="noopener noreferrer">
            Jose Blanchet
          </a>
          ; and at the Cambridge Centre for AI in Medicine, working with Professor{' '}
          <a href="https://www.vanderschaar-lab.com/prof-mihaela-van-der-schaar/" target="_blank" rel="noopener noreferrer">
            Mihaela van der Schaar. 
          </a>
          I obtained my Bachelor's degree from Tsinghua University.
        </p>

        {/* Research */}
        {/* <hr className="mb-4 border-gray-100  mt-6"/> */}
        <h2 className="text-2xl md:text-2xl font-semibold tracking-tight mt-6 md:mt-6 mb-1">
          Research
        </h2>
        <div
          className="
            text-[15px] md:text-[17px] leading-snug mb-5
            text-slate-900
            [&_a]:underline-offset-4
            [&_a]:text-blue-800 [&_a:hover]:text-blue-900 [&_a:visited]:text-blue-700
          "
        >
          I focus on building next-generation LLM evaluation systems and large-scale, data-centric AI. I believe LLM evaluation should be <b>reliable</b>, <b>efficient</b>, and <b>anchored in realistic real-world tasks</b>, and it must rest on a deep understanding of data.
          I contribute to the Seed Evaluation System at ByteDance Seed (part of my insights are demonstrated in <a href="https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/research/Seed-1.8-Modelcard.pdf">Seed1.8 Model Card</a>). <br></br><br></br>
          Specific topics include:
          <ol
            className="
              list-decimal pl-5 md:pl-6 text-[15px] md:text-[16px] text-slate-900
              marker:text-blue-900 marker:font-semibold
              [&>li]:leading-[1.35]                 /* 单个 li 内多行更紧 */
              [&>li:not(:first-child)]:mt-[4px]     /* li 之间更紧 */
              [&>li>p]:m-0 [&>li>p]:leading-[1.35]  /* li 里的 <p> 去 margin，行距同步 */
              [&>li>div]:m-0 [&>li>div]:leading-[1.35]
              [&_a]:underline-offset-4
              [&_a]:text-blue-800 hover:[&_a]:text-blue-900 visited:[&_a]:text-blue-700
            "
          >
            <li><b>Reliable LLM Eval</b>: We design new perturbation algorithms and future prediction tasks with completely no data contamination to reliably assess the true capabilities of Agentic LLMs.
              Together with Prof. <a href="https://ece.princeton.edu/people/mengdi-wang">Mengdi Wang</a>, our <a href="https://futurex-ai.github.io/">FutureX project</a>,described by Elon Musk as the "Best Measure of Intelligence"(<a href="https://x.com/elonmusk/status/1963877113049580023">media</a>), has received over 100 million views on X(Twitter).
              Following this line, we release <a href="https://arxiv.org/pdf/2512.00417v2">CryptoBench</a> for expert-level tasks in cryptocurrency domains. Also, we design <a href="https://arxiv.org/pdf/2512.21010">LLM Swiss Round</a> to give a holistic ranking of leading LLMs.
              
            </li>
            <li><b>Efficient LLM Eval</b>: We design algorithms to efficiently and accurately evaluate LLM's performance.</li>
            <li><b>Realistic LLM Eval</b>: We use realistic, professional and valuable tasks to benchmark LLM's true value in helping with daily works. Together with Prof. <a href="https://hsnamkoong.github.io/publications/">Hongseok Namkoong</a>, our <a href="https://arxiv.org/abs/2509.13160">FinSearchComp</a> has received over 20 million views on X(Twitter), and is recently adopted in MiniMax-M2's report and Kimi-K2-Thinking's report.
            </li>
            <li><b>LLM Calibration</b>: We design <a href="https://arxiv.org/pdf/2512.19920">Behaviorally Calibrated-RL</a> to calibrate LLM's confidence estimation, enabling LLM's to say "I don't know".</li>
          </ol>
        </div>

        <b>Current Academic Collaborators</b>:<br></br> <a href="https://joseblanchet.com/">Jose Blanchet</a> (Stanford MS&E), <a href="https://candes.su.domains/">Emmanuel Candès</a> (Stanford Statistics), <a href="https://hsnamkoong.github.io/publications/">Hongseok Namkoong</a> (Columbia DRO), <a href="https://www.vanderschaar-lab.com/prof-mihaela-van-der-schaar/">Mihaela van der Schaar</a> (Cambridge CCAIM), and <a href="https://ece.princeton.edu/people/mengdi-wang">Mengdi Wang</a> (Princeton ECE). <br></br>
        <b>Current Interns</b>:<br></br> <a href="https://www.zerui-cheng.com/">Zerui Cheng</a> (Princeton University, reliable evaluation), <a href="https://scholar.google.com/citations?user=sjkLXR4AAAAJ&hl=en">Jiayun Wu</a> (CMU, LLM calibration)
      
      <h2 className="text-2xl md:text-2xl font-semibold tracking-tight mt-6 md:mt-8 mb-2">
          Education/Experience
        </h2>
        <div
          className="
            text-[15px] md:text-[17px] leading-snug mb-5
            text-slate-900
            [&_a]:underline-offset-4
            [&_a]:text-blue-800 [&_a:hover]:text-blue-900 [&_a:visited]:text-blue-700
          "
        >
          <ul
            className="
              list-decimal pl-5 md:pl-6 text-[15px] md:text-[16px] text-slate-900
              marker:text-blue-900 marker:font-semibold
              [&>li]:leading-[1.35]                 /* 单个 li 内多行更紧 */
              [&>li:not(:first-child)]:mt-[4px]     /* li 之间更紧 */
              [&>li>p]:m-0 [&>li>p]:leading-[1.35]  /* li 里的 <p> 去 margin，行距同步 */
              [&>li>div]:m-0 [&>li>div]:leading-[1.35]
              [&_a]:underline-offset-4
              [&_a]:text-blue-800 hover:[&_a]:text-blue-900 visited:[&_a]:text-blue-700
            "
          >
            <li> 2020-2025: Ph.D. in Computer Science, Tsinghua University</li>
            <li> 2016-2020: B.Eng in Computer Science, Tsinghua University</li>
            <br></br>
            <li>2024/6-2024/11: Visiting Student Researcher at the University of Cambridge</li>
            <li>2023/10-2024/3: Visiting Student Researcher at Stanford University</li>
          </ul>
        </div>
        
        {/* Footer */}
        <hr className="mb-4 border-gray-100  mt-6"/>
        <p className="text-[13.5px] text-slate-600">
          Template adapted from{' '}
          <a
            href="https://www.cs.princeton.edu/~danqic"
            className="underline underline-offset-4 hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danqi Chen
          </a>
          's.
        </p>
      </div>
    </div>
  )
}

'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Clock, Cpu, Layers, ShieldCheck, MessageSquareText, Webhook, Server, Timer, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { PricingSection } from '@/components/PricingSection';

import { useLanguage } from '@/lib/language-context';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative px-6 py-24 md:py-40 bg-gradient-to-br from-indigo-50 via-white to-slate-50 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="container mx-auto max-w-7xl px-6 md:px-8 flex flex-col items-center text-center relative z-10"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-10 shadow-sm">
          {t('v8.2.1 — Smart Scheduler & Autopilot', 'v8.2.1 — 智能排程与自动驾驶')}
          <span className="ml-2 inline-block h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          {t('Intelligent Production Tracking', '智能生产追踪')} <br className="hidden md:block" />
          <span className="text-indigo-600">{t('Powered by AI', 'AI 驱动')}</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-light">
          {t(
            'Revolutionize your manufacturing workflow. Powered by Rust for security, AI for analysis, and a rich Webhook system for seamless enterprise synchronization.',
            '革新您的制造流程。Rust 驱动核心安全，AI 提供深度分析，丰富的 Webhook 系统实现企业级无缝同步。'
          )}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white min-w-[180px] h-14 text-lg shadow-xl shadow-indigo-100/50 rounded-full transition-transform hover:scale-105" asChild>
            <Link href="/docs/installation">
              {t('Get Started', '立即开始')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[180px] h-14 text-lg border-slate-300 rounded-full hover:bg-slate-50 transition-transform hover:scale-105" asChild>
            <Link href="/docs/api">
              {t('View API Docs', '查看 API 文档')}
            </Link>
          </Button>
        </motion.div>

        {/* Hero Image / Video Container */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 md:mt-24 relative w-full max-w-6xl bg-slate-900 rounded-3xl shadow-3xl border-8 border-slate-900/50 shadow-indigo-500/10 overflow-hidden"
        >
          <video
            src="/demo.mp4"
            className="w-full h-auto"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const { t } = useLanguage();
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('Enterprise-Ready Manufacturing OS', '企业级智能制造操作系统')}
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed">
            {t(
              'Built for the modern shop floor. Secure, scalable, and collaborative.',
              '为现代车间而生。安全、可扩展、协同工作。'
            )}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-amber-500" />}
            title={t('Smart Scheduler (Autopilot)', '智能排程 (自动驾驶)')}
            description={t(
              'Weighted scoring heuristic + AI Engine + Zero-Wait Auto-Flow. Automatically prioritizes orders based on delivery date, aging, and business priority.',
              '加权启发式算法 + AI 引擎 + 零等待自动流转。根据交货日期、老化时间和业务优先级自动优化排程。'
            )}
          />
          <FeatureCard
            icon={<Cpu className="w-8 h-8 text-purple-600" />}
            title={t('AI Intelligence', 'AI 智能')}
            description={t(
              'Leverage LLMs to analyze bottlenecks, auto-generate reports, and parse Excel imports.',
              '利用大语言模型分析瓶颈、自动生成报告、智能解析Excel。'
            )}
          />
          <FeatureCard
            icon={<MessageSquareText className="w-8 h-8 text-pink-600" />}
            title={t('Smart Collaboration', '智能协作')}
            description={t(
              'Context-aware chat for every production step. Solve issues directly where they happen.',
              '工序级的上下文对话，直接在问题发生处解决问题。'
            )}
          />
          <FeatureCard
            icon={<Layers className="w-8 h-8 text-blue-600" />}
            title={t('Kiosk Control Tower', '电子看板')}
            description={t(
              'Secure shop floor displays with auto-scroll and visual priority.',
              '安全的车间显示屏，自动滚动和视觉优先级。'
            )}
          />
          <FeatureCard
            icon={<Timer className="w-8 h-8 text-orange-600" />}
            title={t('Productivity Engine', '生产力引擎')}
            description={t(
              'Track worker efficiency in real-time. Standard time management, supervisor reports, and Zero-Wait Auto-Flow.',
              '实时追踪员工效率。标准工时管理、主管报表及零等待自动流转。'
            )}
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-indigo-600" />}
            title={t('Real-time Tracking', '实时追踪')}
            description={t(
              'Monitor velocity and status instantly. Import orders from Excel.',
              '即时监控进度和状态。从Excel导入订单。'
            )}
          />

          <FeatureCard
            icon={<Webhook className="w-8 h-8 text-rose-600" />}
            title={t('Enterprise Webhooks', '企业级 Webhook')}
            description={t(
              'Instant notifications to 10+ providers including DingTalk, Feishu, WeChat, and Bark. Custom JSON payload support.',
              '即时通知 10+ 个平台，包括钉钉、飞书、企业微信和 Bark。支持自定义 JSON 负载。'
            )}
          />
          <FeatureCard
            icon={<Server className="w-8 h-8 text-cyan-600" />}
            title={t('RESTful API v1', 'RESTful API v1')}
            description={t(
              'Versioned REST endpoints with Bearer token auth. Seamlessly sync production data with ERP/MES systems.',
              '带 Bearer 令牌认证的版本化 REST 端点。与 ERP/MES 系统无缝同步生产数据。'
            )}
          />
          <FeatureCard
            icon={<ShieldCheck className="w-8 h-8 text-emerald-600" />}
            title={t('Rust-Native Security', 'Rust 原生安全')}
            description={t(
              'Cryptographic license verification powered by Rust and WebAssembly. ECDSA P-256 signature validation.',
              '由 Rust 和 WebAssembly 驱动的加密授权验证。采用 ECDSA P-256 签名校验。'
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}

function OpenSourceSection() {
  const { t } = useLanguage();
  return (
    <section id="open-source" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="container mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
          {t('Open Source & Enterprise Ready', '开源 & 企业就绪')}
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t(
            'iProTraX is open source software. Self-host it for free, or contact us for enterprise support and custom integrations.',
            'iProTraX 是开源软件。免费自托管，或联系我们获取企业支持和定制集成。'
          )}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white h-14 px-10 text-lg rounded-full shadow-lg shadow-indigo-100 transition-transform hover:scale-105" asChild>
            <Link href="mailto:contact@iprotrax.work">
              {t('Contact Author', '联系作者')}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-slate-300 rounded-full hover:bg-white transition-transform hover:scale-105" asChild>
            <Link href="/docs">{t('Read the Docs', '阅读文档')}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

function FeatureCard({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={item} className={`h-full ${className || ''}`}>
      <Card className="border shadow-sm border-slate-200/60 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 rounded-xl h-full">
        <CardHeader className="p-8 pb-4">
          <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 transition-colors group-hover:border-indigo-100">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <p className="text-slate-600 leading-relaxed text-base">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />

      {/* New Pricing Section */}
      <PricingSection />

      <OpenSourceSection />

      {/* Customer Chat Widget */}
      <Script
        src="https://chat.whatifthenhow.com/widget.js"
        data-host-id="1"
        data-auto-reg="true"
        data-login-token=""
        data-title=""
        data-logo="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBVRXhpZgAASUkqAAgAAAADAA4BAgALAAAAMgAAABoBBQABAAAAPQAAABsBBQABAAAARQAAAAAAAABoZWxwIGNlbnRlciwBAAABAAAALAEAAAEAAAD/4QWAaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6b2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMuY29tL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9Ijk0NzE2MzM1OCIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL2xlZ2FsL2xpY2Vuc2UtYWdyZWVtZW50P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29n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"
        data-theme-color="#1fe1f9"
        data-close-width="48"
        data-close-height="48"
        data-open-width="380"
        data-open-height="680"
        data-welcome="Let's have a discussion."
        strategy="afterInteractive"
      />
    </div>
  );
}

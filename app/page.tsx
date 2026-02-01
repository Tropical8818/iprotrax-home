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
          {t('v8.2.0 — Smart Scheduler & Autopilot', 'v8.2.0 — 智能排程与自动驾驶')}
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
              'Weighted scoring heuristic + AI Engine. Automatically prioritizes orders based on delivery date, aging, and business priority.',
              '加权启发式算法 + AI 引擎。根据交货日期、老化时间和业务优先级自动优化排程。'
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
        data-logo="https://album.whatifthenhow.com/i/2026/01/20/696f879f72e4d.jpg"
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

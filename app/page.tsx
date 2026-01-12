'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Cpu, Layers, ShieldCheck, MessageSquareText, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import dashboardPreview from '../assets/dashboard-preview.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-40 bg-gradient-to-br from-indigo-50 via-white to-slate-50 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto max-w-7xl px-6 md:px-8 flex flex-col items-center text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-10 shadow-sm">
            v8.0.0 Now Available
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-indigo-600" />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Intelligent Production Tracking <br className="hidden md:block" />
            <span className="text-indigo-600">Powered by AI</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-light">
            Revolutionize your manufacturing workflow. Seamlessly track production lines, analyze efficiency with AI, and manage orders with precision.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white min-w-[180px] h-14 text-lg shadow-xl shadow-indigo-100/50 rounded-full transition-transform hover:scale-105" asChild>
              <Link href="/docs/installation">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[180px] h-14 text-lg border-slate-300 rounded-full hover:bg-slate-50 transition-transform hover:scale-105" asChild>
              <Link href="https://github.com/Tropical8818/iProTraX" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </motion.div>

          {/* Hero Image / Dashboard Preview */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 md:mt-24 relative w-full max-w-6xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden"
          >
            <Image
              src={dashboardPreview}
              alt="iProTraX Dashboard Interface with AI Chat"
              className="w-full h-auto"
              priority
              quality={95}
              placeholder="blur"
            />
            {/* Overlay gradient for better blending if needed */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Enterprise-Ready Manufacturing OS</h2>
            <p className="text-slate-500 text-xl leading-relaxed">
              Built for the modern shop floor. Secure, scalable, and collaborative.
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
              icon={<MessageSquareText className="w-8 h-8 text-pink-600" />}
              title="Smart Collaboration"
              description="Context-aware chat for every production step. Solve issues directly where they happen with smart category tagging."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-purple-600" />}
              title="AI Intelligence"
              description="Leverage LLMs to analyze bottlenecks, auto-generate morning reports, and parse Excel imports intelligently."
            />
            <FeatureCard
              icon={<Layers className="w-8 h-8 text-blue-600" />}
              title="Kiosk Control Tower"
              description="Secure shop floor displays with auto-scroll and visual priority. Keep everyone aligned without maximizing talk time."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-emerald-600" />}
              title="Enterprise Security"
              description="Granular Role-Based Access Control (RBAC), encrypted sessions, and isolated environment support."
            />
            <FeatureCard
              icon={<Server className="w-8 h-8 text-cyan-600" />}
              title="Production Ready"
              description="Docker-native architecture. Deploy effortlessly on-premise, cloud, or edge devices with single-command setup."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-indigo-600" />}
              title="Real-time Tracking"
              description="Monitor velocity and status instantly. Import orders from Excel and track them to completion."
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="pricing" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Open Source & Enterprise Ready</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            iProTraX is open source software. Self-host it for free, or contact us for enterprise support and custom integrations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white h-14 px-10 text-lg rounded-full shadow-lg shadow-indigo-100 transition-transform hover:scale-105" asChild>
              <Link href="mailto:contact@iprotrax.work">
                Contact Author
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-slate-300 rounded-full hover:bg-white transition-transform hover:scale-105" asChild>
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={item} className="h-full">
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

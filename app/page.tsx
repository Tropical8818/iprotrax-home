import Link from 'next/link';
import { ArrowRight, BarChart3, Clock, Cpu, FileSpreadsheet, Layers, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-white to-slate-50 overflow-hidden">
        <div className="container mx-auto flex flex-col items-center text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 mb-8">
            v7.0.0 Now Available
            <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Intelligent Production Tracking <br className="hidden md:block" />
            <span className="text-indigo-600">Powered by AI</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Revolutionize your manufacturing workflow. Seamlessly track production lines, analyze efficiency with AI, and manage orders with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white min-w-[160px] h-12 text-base shadow-lg shadow-indigo-200">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px] h-12 text-base" asChild>
              <Link href="https://github.com/Tropical8818/iProTraX" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Hero Image / Dashboard Preview Placeholder */}
          <div className="mt-16 relative w-full aspect-[16/9] bg-slate-900 rounded-xl shadow-2xl border border-slate-200 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-sm">
              [Dashboard Screenshot Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to manage production</h2>
            <p className="text-slate-500 text-lg">
              Optimized for efficiency, scalability, and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-indigo-600" />}
              title="Real-time Tracking"
              description="Monitor production steps instantly. Identify bottlenecks and delays as they happen."
            />
            <FeatureCard
              icon={<Cpu className="w-10 h-10 text-purple-600" />}
              title="AI Analysis"
              description="Leverage LLMs (OpenAI/Ollama) to analyze templates and automate configuration."
            />
            <FeatureCard
              icon={<FileSpreadsheet className="w-10 h-10 text-green-600" />}
              title="Excel Integration"
              description="Seamlessly import orders from Excel. Smart parsing handles header variations automatically."
            />
            <FeatureCard
              icon={<Layers className="w-10 h-10 text-blue-600" />}
              title="Kiosk Mode"
              description="Simplified interface for workshop terminals. Secure, pin-protected access for operators."
            />
            <FeatureCard
              icon={<BarChart3 className="w-10 h-10 text-orange-600" />}
              title="Performance Metrics"
              description="Visualize daily targets, completion rates, and operator efficiency with intuitive charts."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-10 h-10 text-slate-600" />}
              title="Role-Based Access"
              description="Granular permission control for Admins, Supervisors, and Users."
            />
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="pricing" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Open Source & Enterprise Ready</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            iProTraX is open source software. Self-host it for free, or contact us for enterprise support and custom integrations.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white h-12 px-8">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-sm bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="mb-4 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

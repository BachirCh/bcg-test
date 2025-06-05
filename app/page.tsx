import Layout from "@/components/kokonutui/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import CodeSightLogo from "@/components/codesight-logo"

export default function RepositoryInputPage() {
  return (
    <Layout>
      {/* Beautiful gradient background with animated elements */}
      <div className="relative min-h-full overflow-hidden bg-white">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-full py-12">
          <div className="max-w-lg mx-auto px-6">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-2xl">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <CodeSightLogo size="lg" showText={false} />
                </div>
                <h1 className="text-3xl font-bold text-black mb-2">CodeSight</h1>
                <p className="text-gray-600 text-sm">Analyze GitHub repositories instantly</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="repo-url" className="text-sm font-medium text-gray-700">
                    Repository URL
                  </label>
                  <Input
                    id="repo-url"
                    placeholder="https://github.com/username/repository"
                    className="w-full bg-white/80 backdrop-blur-sm border-gray-300 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 pb-5">Example: github.com/vercel/next.js</p>
                </div>

                <Link href="/dashboard/analysis">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200">
                    Analyze Repository
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
                  <p>Free analysis • No signup required • Privacy focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

import Layout from "@/components/kokonutui/layout"
import RepositoryKPIs from "@/components/repository/kpis"
import CodeQualityOverview from "@/components/repository/code-quality"
import CodeScoreCard from "@/components/repository/code-score"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RepositoryAnalysisPage() {
  return (
    <Layout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">vercel/next.js</h1>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Analysis completed on June 5, 2025</p>
        </div>

        <Link
          href="/"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Analyze another repository
        </Link>
      </div>

      <div className="space-y-6">
        <RepositoryKPIs />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CodeQualityOverview />
          </div>
          <div>
            <CodeScoreCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}

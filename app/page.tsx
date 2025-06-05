import Layout from "@/components/kokonutui/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RepositoryInputPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-12">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-8 border border-gray-200 dark:border-[#1F1F23] shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            CodeSight - GitHub Repository Analysis
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            CodeSight analyzes public GitHub repositories to provide comprehensive insights on code quality,
            contribution patterns, and overall repository health.
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="repo-url" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Repository URL
              </label>
              <Input id="repo-url" placeholder="https://github.com/username/repository" className="w-full" />
              <p className="text-xs text-gray-500 dark:text-gray-400">Example: https://github.com/vercel/next.js</p>
            </div>

            <Link href="/dashboard/analysis">
              <Button className="w-full">
                Analyze Repository
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <div className="text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-[#1F1F23]">
              <p>
                This tool analyzes public GitHub repositories to provide insights on code quality and repository health.
                No data is stored or shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

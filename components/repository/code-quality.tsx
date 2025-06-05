import { AlertTriangle, CheckCircle, XCircle, FileCode, FileText, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CodeQualityOverview() {
  const lintingIssues = [
    { type: "Error", count: 12, icon: XCircle, color: "text-red-500 dark:text-red-400" },
    { type: "Warning", count: 48, icon: AlertTriangle, color: "text-amber-500 dark:text-amber-400" },
    { type: "Fixed", count: 156, icon: CheckCircle, color: "text-green-500 dark:text-green-400" },
  ]

  const codeSmells = [
    { name: "Duplicated Code", value: 8, max: 100 },
    { name: "Complex Methods", value: 15, max: 100 },
    { name: "Long Files", value: 12, max: 100 },
    { name: "Deeply Nested Code", value: 6, max: 100 },
  ]

  const testCoverage = [
    { name: "Components", value: 87 },
    { name: "Utilities", value: 92 },
    { name: "API Routes", value: 76 },
    { name: "Hooks", value: 81 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Code Quality Overview</CardTitle>
        <CardDescription>Analysis of code quality metrics and potential issues</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="linting">
          <TabsList className="mb-4">
            <TabsTrigger value="linting">Linting</TabsTrigger>
            <TabsTrigger value="complexity">Complexity</TabsTrigger>
            <TabsTrigger value="coverage">Test Coverage</TabsTrigger>
          </TabsList>

          <TabsContent value="linting">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {lintingIssues.map((issue, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-[#1F1F23] rounded-lg">
                  <issue.icon className={`h-8 w-8 mr-3 ${issue.color}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{issue.type}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{issue.count}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileCode className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Most Common Issues</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Unused variables</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">23 occurrences</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Missing return types</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">18 occurrences</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Inconsistent naming</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">14 occurrences</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Deprecated API usage</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">5 occurrences</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="complexity">
            <div className="space-y-6">
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Code Smells & Complexity</span>
              </div>

              <div className="space-y-4">
                {codeSmells.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value} instances</span>
                    </div>
                    <Progress value={(item.value / item.max) * 100} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-amber-800 dark:text-amber-300">
                      Complexity Hotspot Detected
                    </h4>
                    <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                      The file{" "}
                      <code className="bg-amber-100 dark:bg-amber-900/30 px-1 py-0.5 rounded">
                        src/utils/data-processor.ts
                      </code>{" "}
                      has a cyclomatic complexity of 24, which exceeds the recommended threshold of 15.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="coverage">
            <div className="space-y-6">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Test Coverage by Module</span>
              </div>

              <div className="space-y-4">
                {testCoverage.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}%</span>
                    </div>
                    <Progress
                      value={item.value}
                      className="h-2"
                      indicatorClassName={
                        item.value >= 90 ? "bg-green-500" : item.value >= 75 ? "bg-amber-500" : "bg-red-500"
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Overall Coverage: 84%</h4>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                      Test coverage has improved by 6% since the last analysis. Core utilities and components have
                      excellent coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

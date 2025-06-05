import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Info } from "lucide-react"

export default function CodeScoreCard() {
  const score = 82
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-amber-500"
    return "text-red-500"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-100"
    if (score >= 60) return "bg-amber-100"
    return "bg-red-100"
  }

  const getScoreBorderColor = (score: number) => {
    if (score >= 80) return "border-green-200"
    if (score >= 60) return "border-amber-200"
    return "border-red-200"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-gray-600" />
          Code Score
        </CardTitle>
        <CardDescription>Overall quality assessment</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-6">
          {/* Circular progress background */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>

          {/* Circular progress indicator */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${score * 2.89}, 289`}
              strokeLinecap="round"
              className={getScoreColor(score)}
              transform="rotate(-90 50 50)"
            />
          </svg>

          {/* Score display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}</span>
            <span className="text-sm text-gray-500">out of 100</span>
          </div>
        </div>

        <div className={`p-4 rounded-lg border ${getScoreBgColor(score)} ${getScoreBorderColor(score)} w-full`}>
          <h4 className={`text-sm font-medium mb-1 ${getScoreColor(score)}`}>
            {score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Improvement"}
          </h4>
          <p className="text-xs text-gray-600">
            {score >= 80
              ? "This codebase follows best practices with minimal issues."
              : score >= 60
                ? "This codebase is generally well-maintained but has some areas for improvement."
                : "This codebase has significant issues that should be addressed."}
          </p>
        </div>

        <div className="mt-6 space-y-3 w-full">
          <h4 className="text-sm font-medium text-gray-700">Score Breakdown</h4>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Code Structure</span>
            <span className="text-xs font-medium text-gray-900">86/100</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Documentation</span>
            <span className="text-xs font-medium text-gray-900">78/100</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Test Coverage</span>
            <span className="text-xs font-medium text-gray-900">84/100</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Code Complexity</span>
            <span className="text-xs font-medium text-gray-900">79/100</span>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-2 text-xs text-gray-500 w-full">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <p>This score is calculated based on static analysis, test coverage, and adherence to coding standards.</p>
        </div>
      </CardContent>
    </Card>
  )
}

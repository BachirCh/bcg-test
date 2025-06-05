import { Calendar, Code, GitBranch, GitPullRequest, Users, AlertCircle } from "lucide-react"

export default function RepositoryKPIs() {
  const kpis = [
    {
      title: "Total Commits",
      value: "4,328",
      icon: GitBranch,
      change: "+124 this month",
      changeType: "positive",
    },
    {
      title: "Contributors",
      value: "156",
      icon: Users,
      change: "+8 this month",
      changeType: "positive",
    },
    {
      title: "Issues",
      value: "243 open",
      secondaryValue: "1,892 closed",
      icon: AlertCircle,
      change: "12 closed this week",
      changeType: "positive",
    },
    {
      title: "Pull Requests",
      value: "38 open",
      secondaryValue: "2,156 merged",
      icon: GitPullRequest,
      change: "15 merged this week",
      changeType: "positive",
    },
    {
      title: "Last Commit",
      value: "2 hours ago",
      icon: Calendar,
      change: "Active development",
      changeType: "neutral",
    },
    {
      title: "Languages",
      value: "TypeScript 68%",
      secondaryValue: "JavaScript 22%",
      icon: Code,
      change: "10% other languages",
      changeType: "neutral",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">{kpi.value}</h3>
              {kpi.secondaryValue && <p className="text-sm font-medium text-gray-700">{kpi.secondaryValue}</p>}
              <p
                className={`text-xs mt-1 ${
                  kpi.changeType === "positive"
                    ? "text-green-600"
                    : kpi.changeType === "negative"
                      ? "text-red-600"
                      : "text-gray-500"
                }`}
              >
                {kpi.change}
              </p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <kpi.icon className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

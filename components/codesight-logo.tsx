import { Code2 } from "lucide-react"

interface CodeSightLogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export default function CodeSightLogo({ className = "", showText = true, size = "md" }: CodeSightLogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {/* Background circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>

        {/* Icon container */}
        <div
          className={`relative ${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center`}
        >
          <Code2 className="h-1/2 w-1/2 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {showText && (
        <span
          className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${textSizeClasses[size]}`}
        >
          CodeSight
        </span>
      )}
    </div>
  )
}

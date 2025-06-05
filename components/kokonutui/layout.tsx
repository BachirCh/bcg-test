import type { ReactNode } from "react"
import TopNav from "./top-nav"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="h-16 border-b border-gray-200 bg-white">
        <TopNav />
      </header>
      <main className="flex-1 overflow-auto bg-white">{children}</main>
    </div>
  )
}

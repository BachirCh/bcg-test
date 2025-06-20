import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Bell } from "lucide-react"
import Profile01 from "./profile-01"
import Link from "next/link"
import CodeSightLogo from "../codesight-logo"

export default function TopNav() {
  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white border-b border-gray-200 h-full">
      <Link href="/" className="flex items-center">
        <CodeSightLogo size="sm" />
      </Link>

      <div className="flex items-center gap-2 sm:gap-4">
        <button type="button" className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Image
              src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
              alt="User avatar"
              width={28}
              height={28}
              className="rounded-full ring-2 ring-gray-200 sm:w-8 sm:h-8 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
          >
            <Profile01 avatar="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

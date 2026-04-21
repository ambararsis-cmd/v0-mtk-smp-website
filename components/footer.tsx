import Link from "next/link"
import { User, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h4 className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold md:justify-start">
              <User className="h-4 w-4" />
              Kontak
            </h4>
            <p className="flex items-center justify-center gap-2 text-sm opacity-80 md:justify-start">
              <Mail className="h-4 w-4" />
              sitinurambar.2022@mhs.unisda.ac.id
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100">
                  Materi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100">
                  Video
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Studiolist</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100">
                  Video
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-center">
          <p className="text-xs opacity-70">
            © 2024 MTK SMP/MTS. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
            π
          </div>
          <span className="text-lg font-bold text-foreground">MTK SMP/MTS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="#" className="text-sm font-semibold text-primary hover:text-primary/80">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Daftar Isi
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Bantuan
              </Link>
            </li>
            <li>
              <button className="text-foreground hover:text-primary" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-card">
          <ul className="flex flex-col px-4 py-4 gap-4">
            <li>
              <Link href="#" className="block text-sm font-semibold text-primary">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Daftar Isi
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Bantuan
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

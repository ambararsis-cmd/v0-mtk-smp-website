"use client"

import Link from "next/link"
import { Search, Menu, X, Home, Users, List, HelpCircle } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary text-lg sm:text-xl font-bold text-primary-foreground">
            π
          </div>
          <span className="text-base sm:text-lg font-bold text-foreground">MTK SMP/MTS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-sm font-semibold text-primary hover:text-primary/80">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/tentang-kami" className="text-sm text-muted-foreground hover:text-primary">
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
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-foreground active:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation - Slide down animation */}
      <div 
        className={`md:hidden border-t border-border bg-card overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3">
          <ul className="flex flex-col gap-1">
            <li>
              <Link 
                href="/" 
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-primary active:bg-primary/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                Beranda
              </Link>
            </li>
            <li>
              <Link 
                href="/tentang-kami" 
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-muted-foreground active:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="h-5 w-5" />
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-muted-foreground active:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <List className="h-5 w-5" />
                Daftar Isi
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-muted-foreground active:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HelpCircle className="h-5 w-5" />
                Bantuan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

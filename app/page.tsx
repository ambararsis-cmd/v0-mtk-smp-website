import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MainMenu } from "@/components/main-menu"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MainMenu />
        <Features />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

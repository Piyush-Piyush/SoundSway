import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Radio, Headphones, Music } from "lucide-react"
import { Appbar } from "./components/Appbar"
import { Redirect } from "./components/Redirect"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-teal-900">
      <Appbar />
      <Redirect />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                Sync Your Stream with Your Audience
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Empower your fans to shape your music stream in real-time. Create unforgettable live experiences with StreamSync.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-teal-600 text-white hover:bg-teal-500 shadow-lg shadow-teal-500/30">
                Start Streaming
              </Button>
              <Button
                variant="outline"
                className="text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-gray-900"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            Why Choose StreamSync?
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 text-center p-6 bg-blue-950 bg-opacity-50 rounded-lg shadow-lg transition-transform hover:scale-105 border border-teal-800">
              <Users className="h-12 w-12 text-teal-300" />
              <h3 className="text-xl font-bold text-blue-300">
                Interactive Audience
              </h3>
              <p className="text-blue-100">Let your fans influence your playlist in real-time.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center p-6 bg-blue-950 bg-opacity-50 rounded-lg shadow-lg transition-transform hover:scale-105 border border-teal-800">
              <Radio className="h-12 w-12 text-teal-300" />
              <h3 className="text-xl font-bold text-blue-300">
                Seamless Live Streaming
              </h3>
              <p className="text-blue-100">Broadcast your music with studio-quality sound.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center p-6 bg-blue-950 bg-opacity-50 rounded-lg shadow-lg transition-transform hover:scale-105 border border-teal-800">
              <Headphones className="h-12 w-12 text-teal-300" />
              <h3 className="text-xl font-bold text-blue-300">
                Immersive Audio Experience
              </h3>
              <p className="text-blue-100">Enjoy crystal clear, high-fidelity sound.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                Ready to Revolutionize Your Streams?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                Join StreamSync today and create music experiences that resonate with your audience.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-blue-950 border-teal-800 text-blue-100 placeholder-blue-400"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-teal-600 text-white hover:bg-teal-500 shadow-lg shadow-teal-500/30"
                >
                  Get Started
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-teal-800">
        <div className="flex items-center space-x-2">
          <Music className="h-6 w-6 text-teal-300" />
          <p className="text-sm text-blue-300">
            © 2024 StreamSync. All rights reserved.
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm text-blue-300 hover:text-teal-300 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-blue-300 hover:text-teal-300 transition-colors"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm text-blue-300 hover:text-teal-300 transition-colors"
            href="#"
          >
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}
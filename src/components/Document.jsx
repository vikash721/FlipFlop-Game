"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { Search, Moon, Sun, Menu, X, ChevronRight } from "lucide-react"

// Create a simple theme context
const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      localStorage.setItem("theme", "light")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext)

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Welcome to our documentation. This guide will help you get started with our product and show you how to use its features effectively.",
  },
  {
    id: "installation",
    title: "Installation",
    content: "To install our product, run the following command in your terminal: `npm install @acme/product`",
  },
  {
    id: "usage",
    title: "Usage",
    content:
      "Import the components you need and start using them in your application. Check out the examples below to see how to use our product.",
  },
  {
    id: "api",
    title: "API Reference",
    content:
      "Our API provides a set of methods to interact with our product programmatically. You can use these methods to customize the behavior of our product.",
  },
  {
    id: "faq",
    title: "FAQ",
    content:
      "Find answers to frequently asked questions about our product. If you can't find the answer to your question, feel free to contact our support team.",
  },
]

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => document.getElementById(section.id))

      const currentSection = sectionElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(id)
    setIsMobileMenuOpen(false)
  }

  const filteredSections = sections.filter((section) => section.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
          <div className="container mx-auto px-4 flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <a href="#" className="mr-6 flex items-center space-x-2">
                <span className="font-bold text-xl">Docs</span>
              </a>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900/80 dark:hover:text-gray-100/80 text-gray-900/60 dark:text-gray-100/60"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900/80 dark:hover:text-gray-100/80 text-gray-900/60 dark:text-gray-100/60"
                >
                  Components
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900/80 dark:hover:text-gray-100/80 text-gray-900/60 dark:text-gray-100/60"
                >
                  Examples
                </a>
              </nav>
            </div>

            <button
              className="md:hidden mr-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </button>

            <div className="flex items-center md:hidden">
              <a href="#" className="flex items-center space-x-2">
                <span className="font-bold">Docs</span>
              </a>
            </div>

            
          </div>
        </header>

        <div className="flex flex-1">
          {/* Mobile Sidebar */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden">
              <div className="fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-xs bg-white dark:bg-gray-900 shadow-lg">
                <div className="flex h-14 items-center px-4 border-b border-gray-200 dark:border-gray-800">
                  <button
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </button>
                  <span className="ml-3 font-bold">Navigation</span>
                </div>
                <div className="h-[calc(100vh-3.5rem)] overflow-y-auto pb-10">
                  <div className="p-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <input
                        type="search"
                        placeholder="Search documentation..."
                        className="w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-8 pr-3 text-sm"
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <nav className="grid gap-1">
                      {filteredSections.map((section) => (
                        <button
                          key={section.id}
                          className={`flex items-center justify-start w-full px-3 py-2 text-sm font-medium rounded-md ${
                            activeSection === section.id
                              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          }`}
                          onClick={() => scrollToSection(section.id)}
                        >
                          {section.title}
                          {activeSection === section.id && <ChevronRight className="ml-auto h-4 w-4" />}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden">
            <div className="h-full py-6 pl-8 pr-6 overflow-y-auto">
              <div className="relative mb-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-8 pr-3 text-sm"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <nav className="grid gap-1 pb-10">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    className={`flex items-center justify-start w-full px-3 py-2 text-sm font-medium rounded-md ${
                      activeSection === section.id
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                    {activeSection === section.id && <ChevronRight className="ml-auto h-4 w-4" />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-10">
            <div className="container mx-auto max-w-4xl px-4">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`mb-16 scroll-m-20 ${activeSection === section.id ? "opacity-100" : "opacity-90"}`}
                >
                  <h2 className="text-3xl font-bold tracking-tight mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">
                    {section.title}
                  </h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="leading-7 text-gray-700 dark:text-gray-300 mb-6">{section.content}</p>
                    <div className="my-6 w-full overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                      <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 px-4">
                        <div className="flex h-8 items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <pre className="p-4 text-sm text-gray-800 dark:text-gray-200">
                        <code>// Example code for {section.title}</code>
                      </pre>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-0">
        <div className="container mx-auto px-4 flex items-center justify-center h-14">
  <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400">
    Made with ❤️ by Vikash.
  </p>
</div>

        </footer>
      </div>
    </ThemeProvider>
  )
}


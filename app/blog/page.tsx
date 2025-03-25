import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Jak správně nastavit životní pojištění",
    excerpt:
      "Průvodce nastavením životního pojištění, které skutečně ochrání vás i vaše blízké v případě neočekávaných událostí.",
    date: "15. 3. 2024",
    image: "/avatar_fullHD.png?height=300&width=600&text=Životní+pojištění",
    href: "/blog/jak-spravne-nastavit-zivotni-pojisteni",
  },
  {
    id: 2,
    title: "Investice vs. spoření: Co je pro vás lepší?",
    excerpt:
      "Porovnání výhod a nevýhod různých investičních a spořicích produktů a jak vybrat ten nejvhodnější pro vaše finanční cíle.",
    date: "28. 2. 2024",
    image: "/avatar_fullHD.png?height=300&width=600&text=Investice+vs+spoření",
    href: "/blog/investice-vs-sporeni",
  },
  {
    id: 3,
    title: "Pojištění majetku: Na co si dát pozor",
    excerpt: "Nejčastější chyby při sjednávání pojištění domácnosti a nemovitosti a jak se jim vyhnout.",
    date: "10. 2. 2024",
    image: "/avatar_fullHD.png?height=300&width=600&text=Pojištění+majetku",
    href: "/blog/pojisteni-majetku-na-co-si-dat-pozor",
  },
  {
    id: 4,
    title: "Finanční plánování pro mladé rodiny",
    excerpt:
      "Praktické tipy, jak efektivně plánovat rodinné finance, vytvářet rezervy a zajistit budoucnost vašich dětí.",
    date: "25. 1. 2024",
    image: "/avatar_fullHD.png?height=300&width=600&text=Finanční+plánování",
    href: "/blog/financni-planovani-pro-mlade-rodiny",
  },
]

export default function BlogPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={post.href} className="block h-full">
            <article className="bg-[#1a1a2e]/30 rounded-lg overflow-hidden hover:bg-[#1a1a2e]/50 transition-colors h-full flex flex-col">
              <div className="aspect-video relative">
                <Image src={post.image || "/avatar_fullHD.png"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}


import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    title: "Školení Generali",
    description: "Odborné školení pro poradce Generali České pojišťovny",
    image: "/avatar_fullHD.png?height=400&width=600&text=Školení+Generali",
  },
  {
    id: 2,
    title: "Setkání s klienty",
    description: "Pravidelné konzultace a poradenství pro klienty",
    image: "/avatar_fullHD.png?height=400&width=600&text=Setkání+s+klienty",
  },
  {
    id: 3,
    title: "Finanční konference",
    description: "Účast na odborné konferenci o finančních produktech",
    image: "/avatar_fullHD.png?height=400&width=600&text=Finanční+konference",
  },
  {
    id: 4,
    title: "Certifikace ČNB",
    description: "Získání odborné certifikace pro distribuci pojištění",
    image: "/avatar_fullHD.png?height=400&width=600&text=Certifikace+ČNB",
  },
  {
    id: 5,
    title: "Teambuilding Generali",
    description: "Společná akce s kolegy z Generali České pojišťovny",
    image: "/avatar_fullHD.png?height=400&width=600&text=Teambuilding",
  },
  {
    id: 6,
    title: "Kancelář",
    description: "Prostory pro konzultace a jednání s klienty",
    image: "/avatar_fullHD.png?height=400&width=600&text=Kancelář",
  },
]

export default function GalleryPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Galerie</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-[#1a1a2e]/30 rounded-lg overflow-hidden group">
            <div className="aspect-video relative">
              <Image
                src={item.image || "/avatar_fullHD.png"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


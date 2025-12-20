import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop", title: "Food Distribution", category: "Food" },
    { id: 2, url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop", title: "Community Support", category: "Community" },
    { id: 3, url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop", title: "Education Program", category: "Education" },
    { id: 4, url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop", title: "Medical Camp", category: "Healthcare" },
    { id: 5, url: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&h=600&fit=crop", title: "Women Empowerment", category: "Empowerment" },
    { id: 6, url: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=600&fit=crop", title: "Winter Relief", category: "Relief" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Photo Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Moments That Matter
            </h1>
            <p className="text-xl opacity-90">
              See our work in action through these powerful images
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <Badge className="mb-2">{image.category}</Badge>
                      <h3 className="text-lg font-bold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, MessageCircle } from 'lucide-react';

const News = () => {
  const posts = [
    {
      id: 1,
      title: "We Raised ₹15 Lakhs in January!",
      date: "Feb 5, 2024",
      author: "Admin",
      category: "Milestone",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      excerpt: "Thanks to your incredible support, we exceeded our January fundraising goal and helped 500+ families...",
      comments: 12
    },
    {
      id: 2,
      title: "New Healthcare Camp in Rural Maharashtra",
      date: "Jan 28, 2024",
      author: "Dr. Sharma",
      category: "Announcement",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      excerpt: "We're launching a new healthcare initiative to serve 10 villages in rural Maharashtra...",
      comments: 8
    },
    {
      id: 3,
      title: "Success Story: Priya's Journey from Poverty to College",
      date: "Jan 15, 2024",
      author: "Content Team",
      category: "Impact Story",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      excerpt: "Meet Priya, a beneficiary of our education program who is now the first in her family to attend college...",
      comments: 24
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Latest Updates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Stories
            </h1>
            <p className="text-xl opacity-90">
              Stay updated with our latest programs, impact stories, and announcements
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 hover:text-rose-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-rose-600">
                      Read More →
                    </Button>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
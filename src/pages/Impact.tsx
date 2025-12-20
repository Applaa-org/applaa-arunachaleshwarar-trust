import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, TrendingUp, Award } from 'lucide-react';

const Impact = () => {
  const stories = [
    {
      title: "From Hunger to Hope: Priya's Story",
      location: "Bangalore Rural",
      date: "Dec 2023",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      excerpt: "When COVID hit, we didn't know where our next meal would come from. Hope Foundation's food distribution program saved our family..."
    },
    {
      title: "Education Changed Everything: Rahul's Journey",
      location: "Mumbai",
      date: "Nov 2023",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      excerpt: "Thanks to the Back to School program, I received books and uniform. Now I'm the first in my family to go to college..."
    },
    {
      title: "A Second Chance at Life: Medical Camp Success",
      location: "Delhi",
      date: "Oct 2023",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      excerpt: "The free medical camp detected my diabetes early. I received treatment and medicine. Today, I'm healthy and working again..."
    <dyad-problem-report summary="13 problems">
<problem file="src/App.tsx" line="21" column="20" code="2307">Cannot find module './pages/Impact' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="22" column="23" code="2307">Cannot find module './pages/Volunteer' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="23" column="18" code="2307">Cannot find module './pages/News' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="24" column="21" code="2307">Cannot find module './pages/Contact' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="25" column="21" code="2307">Cannot find module './pages/Gallery' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="28" column="28" code="2307">Cannot find module './pages/dashboard/DonorDashboard' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="29" column="32" code="2307">Cannot find module './pages/dashboard/VolunteerDashboard' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="32" column="28" code="2307">Cannot find module './pages/admin/AdminDashboard' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="33" column="28" code="2307">Cannot find module './pages/admin/AdminDonations' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="34" column="28" code="2307">Cannot find module './pages/admin/AdminCampaigns' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="35" column="32" code="2307">Cannot find module './pages/admin/AdminBeneficiaries' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="36" column="29" code="2307">Cannot find module './pages/admin/AdminCompliance' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="37" column="26" code="2307">Cannot find module './pages/admin/AdminReports' or its corresponding type declarations.</problem>
</dyad-problem-report>I'll create all the missing page files to fix these TypeScript errors:

<applaa-write path="src/pages/Impact.tsx" description="Complete Impact stories page">
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, TrendingUp, Award, MapPin, Calendar } from 'lucide-react';

const Impact = () => {
  const stories = [
    {
      id: 1,
      title: "From Hunger to Hope: Priya's Story",
      location: "Bangalore Rural",
      date: "Dec 2023",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      excerpt: "When COVID hit, we didn't know where our next meal would come from. Hope Foundation's food distribution program saved our family...",
      category: "Food Security"
    },
    {
      id: 2,
      title: "Education Changed Everything: Rahul's Journey",
      location: "Mumbai",
      date: "Nov 2023",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      excerpt: "Thanks to the Back to School program, I received books and uniform. Now I'm the first in my family to go to college...",
      category: "Education"
    },
    {
      id: 3,
      title: "A Second Chance at Life: Medical Camp Success",
      location: "Delhi",
      date: "Oct 2023",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      excerpt: "The free medical camp detected my diabetes early. I received treatment and medicine. Today, I'm healthy and working again...",
      category: "Healthcare"
    }
  ];

  const stats = [
    { icon: Users, label: 'Lives Touched', value: '10,234', color: 'text-blue-600' },
    { icon: Heart, label: 'Families Supported', value: '2,456', color: 'text-rose-600' },
    { icon: TrendingUp, label: 'Villages Reached', value: '125', color: 'text-green-600' },
    { icon: Award, label: 'Success Rate', value: '95%', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Our Impact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Stories, Real Change
            </h1>
            <p className="text-xl opacity-90">
              Every donation creates ripples of positive change. See the lives we've touched together.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${stat.color.replace('text-', 'from-')} to-purple-100 mb-3`}>
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 border-rose-200 mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Transforming Lives
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read inspiring stories from the people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white">{story.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {story.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {story.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {story.date}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {story.excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Full Story
                  </Button>
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

export default Impact;
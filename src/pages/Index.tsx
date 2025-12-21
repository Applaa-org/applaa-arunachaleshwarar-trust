import { Link } from '@tanstack/react-router';
import { ArrowRight, Users, Heart, TrendingUp, Award, Mountain } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { programs } from '@/data/programs';
import { testimonials } from '@/data/testimonials';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const featuredPrograms = programs.filter(p => p.status === 'ongoing').slice(0, 3);
  const stats = [
    { icon: Users, label: 'People Helped', value: '10,000+', color: 'text-orange-600' },
    { icon: Heart, label: 'Programs Running', value: '25+', color: 'text-red-600' },
    { icon: TrendingUp, label: 'Funds Raised', value: '₹50L+', color: 'text-green-600' },
    { icon: Award, label: 'Years of Service', value: '15+', color: 'text-amber-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200">
                திருவண்ணாமலை • Blessed by Arunachaleshwarar
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
                  Serving Humanity
                </span>
                <br />
                With Divine Grace
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                In the sacred land of Thiruvannamalai, we serve with devotion. Join us in our mission to provide food, education, healthcare, and hope through the divine blessings of Lord Arunachaleshwarar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/donate">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl w-full sm:w-auto">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Button>
                </a>
                <a href="/programs">
                  <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 w-full sm:w-auto">
                    View Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* South Indian Hindu Temple Gopuram - Dravidian Architecture */}
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop" 
                  alt="Thiruvannamalai Arunachaleshwarar Temple Gopuram - South Indian Temple"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-semibold">Arunachaleshwarar Temple</p>
                  <p className="text-sm opacity-90">திருவண்ணாமலை - Sacred abode of Lord Shiva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${stat.color.replace('text-', 'from-')} to-orange-100 mb-3`}>
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

      {/* Featured Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200 mb-4">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Active Programs
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're currently running multiple programs to support communities in need. See how your contributions are making a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow group border-orange-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white">Ongoing</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {program.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-orange-600">
                        ₹{program.fundsRaised.toLocaleString()} / ₹{program.fundsGoal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                        style={{ width: `${(program.fundsRaised / program.fundsGoal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      <Users className="inline w-4 h-4 mr-1" />
                      {program.beneficiaries} people helped
                    </span>
                    <a href={`/programs/${program.slug}`}>
                      <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a href="/programs">
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Why Support Us?
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to transparency, efficiency, and making every rupee count.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🕉️',
                title: 'Divine Blessings',
                description: 'Operating under the divine grace of Lord Arunachaleshwarar at the sacred Thiruvannamalai.'
              },
              {
                icon: '💯',
                title: '100% Transparency',
                description: 'Every donation is tracked and reported. You can see exactly where your money goes and the impact it creates.'
              },
              {
                icon: '🎯',
                title: 'Direct Impact',
                description: 'We work directly with communities, ensuring your contributions reach those who need it most.'
              },
              {
                icon: '✅',
                title: 'Proven Results',
                description: 'Over 15 years of service with documented success stories and measurable outcomes in every program.'
              },
              {
                icon: '🤝',
                title: 'Community Driven',
                description: 'Local volunteers and community leaders guide our programs, ensuring cultural sensitivity.'
              },
              {
                icon: '🌟',
                title: 'Award Winning',
                description: 'Recognized for excellence in nonprofit management and community impact initiatives.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-orange-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your contribution, no matter the size, creates ripples of positive change. Join thousands who are changing lives with the blessings of Arunachaleshwarar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl w-full sm:w-auto">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
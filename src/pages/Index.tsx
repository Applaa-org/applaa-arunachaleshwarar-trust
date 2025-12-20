import { Link } from '@tanstack/react-router';
import { ArrowRight, Users, Heart, TrendingUp, Award } from 'lucide-react';
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
    { icon: Users, label: 'People Helped', value: '10,000+', color: 'text-blue-600' },
    { icon: Heart, label: 'Programs Running', value: '25+', color: 'text-rose-600' },
    { icon: TrendingUp, label: 'Funds Raised', value: '$500K+', color: 'text-green-600' },
    { icon: Award, label: 'Years of Service', value: '15+', color: 'text-purple-600' }
  ];

  const upcomingPrograms = programs.filter(p => p.status === 'upcoming').slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-purple-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 border-rose-200">
                Making a Difference Since 2009
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Together We Can
                </span>
                <br />
                Change Lives Forever
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join us in our mission to provide food, education, healthcare, and hope to those who need it most. 
                Every contribution creates lasting impact in communities around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/donate">
                  <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-xl w-full sm:w-auto">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Button>
                </a>
                <a href="/programs">
                  <Button size="lg" variant="outline" className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 w-full sm:w-auto">
                    View Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop" 
                  alt="Helping communities"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-semibold">Empowering Communities</p>
                  <p className="text-sm opacity-90">Through compassion and action</p>
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

      {/* Featured Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200 mb-4">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Active Programs
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're currently running multiple programs to support communities in need. See how your contributions are making a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-rose-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {program.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-rose-600">
                        ${program.fundsRaised.toLocaleString()} / ${program.fundsGoal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-rose-500 to-pink-600 h-2 rounded-full"
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
                      <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700">
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
              <Button size="lg" variant="outline" className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Programs Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-200 mb-4">
              Coming Soon
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                Upcoming Initiatives
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help us prepare for these important programs. Your early support ensures we're ready to make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative h-full min-h-[200px]">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="bg-yellow-100 text-yellow-700 mb-3">
                      {new Date(program.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-gray-600">
                        Goal: <span className="font-semibold text-gray-900">${program.fundsGoal.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Target: <span className="font-semibold text-gray-900">{program.beneficiaries} people</span>
                      </div>
                    </div>
                    <a href="/donate">
                      <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-rose-600 hover:from-purple-600 hover:to-rose-700 text-white">
                        Support This Program
                      </Button>
                    </a>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Why Support Us?
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to transparency, efficiency, and making every dollar count.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '💯',
                title: '100% Transparency',
                description: 'Every donation is tracked and reported. You can see exactly where your money goes and the impact it creates.'
              },
              {
                icon: '🎯',
                title: 'Direct Impact',
                description: 'We work directly with communities, ensuring your contributions reach those who need it most without middlemen.'
              },
              {
                icon: '✅',
                title: 'Proven Results',
                description: 'Over 15 years of experience with documented success stories and measurable outcomes in every program.'
              },
              {
                icon: '🤝',
                title: 'Community Driven',
                description: 'Local volunteers and community leaders guide our programs, ensuring cultural sensitivity and sustainability.'
              },
              {
                icon: '📊',
                title: 'Regular Updates',
                description: 'Monthly impact reports, photos, and stories from the field so you stay connected to your contribution.'
              },
              {
                icon: '🌟',
                title: 'Award Winning',
                description: 'Recognized nationally for excellence in nonprofit management and community impact initiatives.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 border-rose-200 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Stories of Hope
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your contribution, no matter the size, creates ripples of positive change. Join thousands of donors who are changing lives today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 shadow-xl w-full sm:w-auto">
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
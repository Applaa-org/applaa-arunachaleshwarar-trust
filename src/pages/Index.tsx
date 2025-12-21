import { ArrowRight, Users, Heart, TrendingUp, Award, Shield, Target } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { programs } from '@/data/programs';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const featuredPrograms = programs.filter(p => p.status === 'ongoing').slice(0, 3);
  
  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '10,234', color: 'text-orange-600', gradient: 'from-orange-500 to-red-500' },
    { icon: Heart, label: 'Active Programs', value: '12', color: 'text-red-600', gradient: 'from-red-500 to-pink-500' },
    { icon: TrendingUp, label: 'Funds Raised', value: '₹1.2Cr', color: 'text-green-600', gradient: 'from-green-500 to-emerald-500' },
    { icon: Award, label: 'Years of Service', value: '15+', color: 'text-amber-600', gradient: 'from-amber-500 to-yellow-500' }
  ];

  const features = [
    {
      icon: '🕉️',
      title: 'Divine Blessings',
      description: 'Operating under the divine grace of Lord Arunachaleshwarar in sacred Thiruvannamalai.'
    },
    {
      icon: '💯',
      title: '100% Transparency',
      description: 'Every donation tracked and reported. Complete financial disclosure with audited reports.'
    },
    {
      icon: '🎯',
      title: 'Direct Impact',
      description: 'Work directly with communities. 83% of funds go straight to program implementation.'
    },
    {
      icon: '✅',
      title: 'Proven Results',
      description: '15 years of documented success stories with measurable outcomes in every program.'
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description: 'Local volunteers and leaders guide our programs ensuring cultural sensitivity.'
    },
    {
      icon: '🌟',
      title: 'Award Winning',
      description: 'Recognized for excellence in nonprofit management and community impact.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
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
              <p className="text-lg text-gray-700 leading-relaxed">
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
                    View Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">80G Tax Benefits</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">100% Secure</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Arunachaleshwarar Temple Gopuram - Thiruvannamalai */}
                <img 
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop" 
                  alt="Arunachaleshwarar Temple Gopuram - திருவண்ணாமலை அருணாசலேஸ்வரர் கோவில்"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-bold mb-1">அருணாசலேஸ்வரர் கோவில்</p>
                  <p className="text-sm opacity-90">Arunachaleshwarar Temple • திருவண்ணாமலை</p>
                  <p className="text-xs opacity-80 mt-1">One of the Pancha Bhoota Sthalams - Sacred Fire Temple</p>
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border-2 border-orange-100">
                <div className="text-3xl font-bold text-orange-600">₹1.2Cr+</div>
                <div className="text-xs text-gray-600">Total Impact Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-lg border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
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
              Currently running {programs.filter(p => p.status === 'ongoing').length} active programs supporting communities in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredPrograms.map((program) => {
              const progressPercent = (program.fundsRaised / program.fundsGoal) * 100;
              return (
                <Card key={program.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-orange-100">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                        Active
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 font-medium">Progress</span>
                        <span className="font-bold text-orange-600">
                          {progressPercent.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                          style={{ width: `${Math.min(progressPercent, 100)}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹{(program.fundsRaised / 1000).toFixed(0)}K raised</span>
                        <span>₹{(program.fundsGoal / 1000).toFixed(0)}K goal</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Users className="w-4 h-4 mr-1 text-orange-600" />
                        {program.beneficiaries_reached} helped
                      </span>
                      <a href={`/programs/${program.slug}`}>
                        <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                          Learn More <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <a href="/programs">
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                View All {programs.length} Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Why Support Us?
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Commitment to transparency, efficiency, and making every rupee count
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {features.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-300 group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">80G Certified</h3>
                <p className="text-sm text-gray-600">Tax exemption benefits on donations</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">12A Registered</h3>
                <p className="text-sm text-gray-600">Recognized charitable trust</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">FCRA Approved</h3>
                <p className="text-sm text-gray-600">Accept international donations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Your contribution creates ripples of positive change. Join thousands who are transforming lives with the blessings of Arunachaleshwarar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-2xl w-full sm:w-auto text-lg px-8 py-6">
                <Heart className="mr-2 h-6 w-6" />
                Donate Now
              </Button>
            </a>
            <a href="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-6">
                Become a Volunteer
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
          </div>
          <p className="text-sm mt-8 opacity-80">
            <Shield className="inline w-4 h-4 mr-1" />
            Secure payments • Tax receipts issued instantly • 100% transparent
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
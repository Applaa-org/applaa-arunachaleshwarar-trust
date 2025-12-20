import { useParams } from '@tanstack/react-router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { programs, getStatusColor, getStatusText } from '@/data/programs';
import { Calendar, MapPin, Users, TrendingUp, Share2, Heart } from 'lucide-react';

const ProgramDetail = () => {
  const { slug } = useParams({ from: '/programs/$slug' });
  const program = programs.find(p => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-8">The program you're looking for doesn't exist.</p>
          <a href="/programs">
            <Button>View All Programs</Button>
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const progressPercent = (program.fundsRaised / program.fundsGoal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-r from-purple-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 mb-4">
              <Badge className={getStatusColor(program.status)}>
                {getStatusText(program.status)}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                {program.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {program.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {program.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(program.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                {program.beneficiaries.toLocaleString()} people
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Description */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">About This Program</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {program.fullDescription}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>

              {/* Impact */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
                  <div className="space-y-3">
                    {program.impact.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {program.gallery.map((image, index) => (
                      <img 
                        key={index}
                        src={image}
                        alt={`${program.title} - ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  {program.status !== 'completed' ? (
                    <>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Raised</span>
                          <span className="text-2xl font-bold text-rose-600">
                            ₹{program.fundsRaised.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          of ₹{program.fundsGoal.toLocaleString()} goal
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-rose-500 to-pink-600 h-3 rounded-full"
                            style={{ width: `${Math.min(progressPercent, 100)}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          {progressPercent.toFixed(0)}% funded
                        </p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="text-3xl font-bold text-gray-900">
                            {((program.fundsGoal - program.fundsRaised) / 1000).toFixed(0)}K
                          </div>
                          <div className="text-sm text-gray-600">Still needed</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gray-900">
                            {program.beneficiaries.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">People to be helped</div>
                        </div>
                      </div>

                      <a href="/donate">
                        <Button size="lg" className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white mb-3">
                          <Heart className="w-5 h-5 mr-2" />
                          Donate Now
                        </Button>
                      </a>

                      <Button size="lg" variant="outline" className="w-full">
                        <Share2 className="w-5 h-5 mr-2" />
                        Share Campaign
                      </Button>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">✓</span>
                      </div>
                      <h3 className="text-xl font-bold text-green-700 mb-2">
                        Campaign Completed!
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Goal exceeded: ₹{program.fundsRaised.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        Thank you to all {program.beneficiaries} donors who made this possible!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
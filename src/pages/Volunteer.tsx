import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Users } from 'lucide-react';

const Volunteer = () => {
  const opportunities = [
    {
      id: 1,
      title: "Field Volunteer (On-ground)",
      location: "Mumbai",
      time: "4-6 hours/month",
      description: "Help distribute food, conduct surveys, and engage with beneficiaries",
      icon: "🤝"
    },
    {
      id: 2,
      title: "Content Writer",
      location: "Remote",
      time: "2-3 hours/week",
      description: "Write impact stories, blog posts, and social media content",
      icon: "✍️"
    },
    {
      id: 3,
      title: "Graphic Designer",
      location: "Remote",
      time: "Flexible",
      description: "Create campaign posters, social media graphics, and reports",
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Make a Difference with Your Time
            </h1>
            <p className="text-xl opacity-90">
              Join our community of passionate volunteers and help create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect way to contribute based on your skills and availability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {opportunities.map((opp) => (
              <Card key={opp.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{opp.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{opp.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {opp.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {opp.time}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{opp.description}</p>
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Volunteer Application
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 48 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+91 " />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" placeholder="Your city" />
                  </div>
                  <div>
                    <Label htmlFor="skills">Skills & Interests</Label>
                    <Textarea id="skills" placeholder="Tell us about your skills and what you're interested in..." rows={4} />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea id="availability" placeholder="When are you available to volunteer?" rows={3} />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
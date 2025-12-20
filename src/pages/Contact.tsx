import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl opacity-90">
              Have questions? We're here to help and answer any questions you might have
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-rose-600" />
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-sm text-gray-600">
                  123 Charity Street<br />
                  Hope City, HC 12345
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-sm text-gray-600">
                  +1 (555) 123-4567
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-gray-600">
                  info@hopefoundation.org
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="text-sm text-gray-600">
                  Mon-Sat: 10 AM - 6 PM
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Your message..." rows={6} />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
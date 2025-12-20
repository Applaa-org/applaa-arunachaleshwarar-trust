import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Shield, Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const trustees = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Founder & Chairman",
      image: "https://i.pravatar.cc/150?img=33",
      bio: "25+ years in social sector. Former IAS officer. PhD in Development Economics.",
      linkedin: "#"
    },
    {
      name: "Priya Mehta",
      role: "Trustee & Secretary",
      image: "https://i.pravatar.cc/150?img=45",
      bio: "CA, CFA. 15 years experience in nonprofit financial management.",
      linkedin: "#"
    },
    {
      name: "Prof. Anand Kumar",
      role: "Trustee",
      image: "https://i.pravatar.cc/150?img=56",
      bio: "Education specialist. Former principal of Delhi Public School.",
      linkedin: "#"
    }
  ];

  const certifications = [
    { name: "80G Registration", number: "DIT(E)/MC/80G/2022/12345", validity: "Valid till 2028" },
    { name: "12A Registration", number: "DIT(E)/12A/2009/6789", validity: "Permanent" },
    { name: "FCRA Registration", number: "231651234", validity: "Valid till 2026" },
    { name: "CSR-1 Registration", number: "CSR00012345", validity: "Active" },
    { name: "PAN", number: "AAATT1234B", validity: "-" },
    { name: "TAN", number: "DELT12345F", validity: "-" }
  ];

  const policies = [
    { name: "Code of Conduct", size: "250 KB" },
    { name: "Conflict of Interest Policy", size: "180 KB" },
    { name: "Whistleblower Policy", size: "200 KB" },
    { name: "Child Protection Policy", size: "320 KB" },
    { name: "Financial Management Policy", size: "400 KB" },
    { name: "Volunteer Policy", size: "280 KB" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              About Our Trust
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building a Better Tomorrow, Together
            </h1>
            <p className="text-xl opacity-90">
              A legally registered charitable trust committed to transparency, accountability, and measurable impact since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-rose-100 text-rose-700 mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From One Meal to 500,000 Lives
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                It started in 2009 when our founder, Dr. Rajesh Sharma, witnessed children going to bed hungry in his neighborhood. What began as distributing 50 meals a day has grown into a movement that has touched over 10,000 lives across 125 villages.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, Hope Foundation operates with complete transparency, legal compliance, and a steadfast commitment to ensuring every rupee creates maximum impact. We believe in radical transparency and measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-rose-600 mr-2" />
                  <span className="font-semibold">Fully Compliant</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-semibold">Award Winning</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">10,000+ Lives</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                alt="Founder with beneficiaries"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-rose-600">15+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-rose-200">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-rose-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To eliminate hunger, provide quality education, and ensure healthcare access for underprivileged communities through sustainable, community-driven programs with complete transparency.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-200">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where every child has access to nutritious food, quality education, and basic healthcare - where poverty is not a barrier to dignity and opportunity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Registration & Compliance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
              Legal Compliance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fully Registered & Compliant
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We operate with complete legal compliance under Indian trust laws and maintain all necessary registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                    <Badge variant="outline" className="text-xs">Verified</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Reg No:</span> {cert.number}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Status:</span> {cert.validity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              All certifications are verified and can be validated with respective authorities
            </p>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Board of Trustees
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our board comprises experienced professionals who serve without any salary or compensation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trustees.map((trustee, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <img 
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-rose-100"
                  />
                  <h3 className="font-bold text-xl mb-1">{trustee.name}</h3>
                  <p className="text-rose-600 font-semibold mb-3">{trustee.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{trustee.bio}</p>
                  <Button variant="outline" size="sm">
                    View LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-center text-green-800">
              <Shield className="inline w-5 h-5 mr-2" />
              <strong>Transparency Note:</strong> No trustee receives any salary, compensation, or perks. All serve on a voluntary basis.
            </p>
          </div>
        </div>
      </section>

      {/* Governance & Policies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
              Governance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Policies & Guidelines
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive policies governing our operations, ethics, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {policies.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{policy.name}</h3>
                      <p className="text-sm text-gray-500">PDF • {policy.size}</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Annual Reports & Audits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Audited financial statements prepared by Certified Chartered Accountants
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {['2023-24', '2022-23', '2021-22', '2020-21', '2019-20'].map((year, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">Annual Report FY {year}</h3>
                      <p className="text-sm text-gray-600">
                        Audited by: M/s Sharma & Associates, Chartered Accountants
                      </p>
                    </div>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of a transparent, accountable organization that's making real change
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Donate Now
              </Button>
            </a>
            <a href="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Become a Volunteer
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
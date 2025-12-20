import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, PieChart, TrendingUp, Shield } from 'lucide-react';

const Transparency = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Financial Transparency
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Radical Transparency in Action
            </h1>
            <p className="text-xl opacity-90">
              We believe in complete openness. Every rupee is accounted for and publicly disclosed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">FY 2023-24 Financial Summary</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Total Income</h3>
                  <div className="text-4xl font-bold mb-4">₹1,25,40,000</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Individual Donations:</span>
                      <span className="font-semibold">₹85,00,000 (68%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CSR Funding:</span>
                      <span className="font-semibold">₹30,00,000 (24%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FCRA Receipts:</span>
                      <span className="font-semibold">₹10,40,000 (8%)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">Total Expenditure</h3>
                  <div className="text-4xl font-bold mb-4">₹1,18,20,000</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Program Expenses:</span>
                      <span className="font-semibold">₹98,00,000 (83%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Admin & Overhead:</span>
                      <span className="font-semibold">₹12,00,000 (10%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fundraising Costs:</span>
                      <span className="font-semibold">₹8,20,000 (7%)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Surplus (Carried Forward):</span>
                  <span className="text-2xl font-bold text-blue-600">₹7,20,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <PieChart className="w-12 h-12 mx-auto mb-4 text-rose-600" />
                <h3 className="font-bold text-xl mb-2">83%</h3>
                <p className="text-gray-600">Goes to Programs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold text-xl mb-2">10,000+</h3>
                <p className="text-gray-600">Lives Impacted</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-xl mb-2">95/100</h3>
                <p className="text-gray-600">Transparency Score</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Audited Financial Statements</h2>
            <div className="space-y-4">
              {['2023-24', '2022-23', '2021-22', '2020-21', '2019-20'].map((year) => (
                <Card key={year}>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transparency;
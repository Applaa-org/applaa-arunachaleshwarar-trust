import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Download, TrendingUp, Users, Calendar, FileText } from 'lucide-react';

const DonorDashboard = () => {
  const donations = [
    { id: 1, date: "Jan 15, 2024", amount: 2500, campaign: "Monthly Food Distribution", status: "success" },
    { id: 2, date: "Dec 20, 2023", amount: 1000, campaign: "Back to School", status: "success" },
    { id: 3, date: "Nov 10, 2023", amount: 5000, campaign: "General Fund", status: "success" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Donor!</h1>
          <p className="text-gray-600">Track your donations and see the impact you're making</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <Heart className="w-8 h-8 text-rose-600 mb-2" />
              <div className="text-2xl font-bold">₹12,500</div>
              <div className="text-sm text-gray-600">Total Donated</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-gray-600">Donations Made</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm text-gray-600">Lives Impacted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Download className="w-8 h-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-gray-600">80G Certificates</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Donations</h2>
            <div className="space-y-4">
              {donations.map((donation) => (
                <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-semibold">{donation.campaign}</div>
                      <div className="text-sm text-gray-600">{donation.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold text-rose-600">₹{donation.amount.toLocaleString()}</div>
                    <Badge className="bg-green-100 text-green-800">Success</Badge>
                    <Button size="sm" variant="outline">
                      <FileText className="w-4 h-4 mr-1" />
                      80G Receipt
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default DonorDashboard;
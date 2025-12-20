import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Users, TrendingUp, Activity } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <DollarSign className="w-8 h-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold">₹1.25Cr</div>
              <div className="text-sm text-gray-600">Total Funds (FY 23-24)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-sm text-gray-600">Active Donors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-gray-600">Active Campaigns</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Activity className="w-8 h-8 text-rose-600 mb-2" />
              <div className="text-2xl font-bold">10,234</div>
              <div className="text-sm text-gray-600">Beneficiaries</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="/admin/donations" className="p-4 border rounded-lg hover:bg-gray-50">
                View Donations
              </a>
              <a href="/admin/campaigns" className="p-4 border rounded-lg hover:bg-gray-50">
                Manage Campaigns
              </a>
              <a href="/admin/reports" className="p-4 border rounded-lg hover:bg-gray-50">
                Generate Reports
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
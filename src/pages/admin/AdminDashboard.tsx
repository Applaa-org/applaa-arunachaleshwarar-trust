import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Users, TrendingUp, Activity, Shield, BarChart } from 'lucide-react';

const AdminDashboard = () => {
  const quickActions = [
    { title: 'Manage Programs', href: '/admin/programs', icon: Activity, color: 'bg-blue-500' },
    { title: 'View Donations', href: '/admin/donations', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Manage Campaigns', href: '/admin/campaigns', icon: TrendingUp, color: 'bg-purple-500' },
    { title: 'Beneficiaries', href: '/admin/beneficiaries', icon: Users, color: 'bg-orange-500' },
    { title: 'Compliance', href: '/admin/compliance', icon: Shield, color: 'bg-red-500' },
    { title: 'Reports', href: '/admin/reports', icon: BarChart, color: 'bg-indigo-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your trust operations.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
                <span className="text-xs text-gray-500">FY 23-24</span>
              </div>
              <div className="text-2xl font-bold">₹1.25Cr</div>
              <div className="text-sm text-gray-600">Total Funds</div>
              <div className="mt-2 text-xs text-green-600">+12% from last year</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-blue-600" />
                <span className="text-xs text-gray-500">Active</span>
              </div>
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-sm text-gray-600">Active Donors</div>
              <div className="mt-2 text-xs text-blue-600">+8% this month</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <span className="text-xs text-gray-500">Running</span>
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-gray-600">Active Campaigns</div>
              <div className="mt-2 text-xs text-purple-600">3 ending soon</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-rose-600" />
                <span className="text-xs text-gray-500">Served</span>
              </div>
              <div className="text-2xl font-bold">10,234</div>
              <div className="text-sm text-gray-600">Beneficiaries</div>
              <div className="mt-2 text-xs text-rose-600">+234 this month</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <a 
                    key={index}
                    href={action.href}
                    className="flex items-center p-4 border rounded-lg hover:shadow-lg transition-all hover:border-orange-200 group"
                  >
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-orange-600 transition-colors">
                        {action.title}
                      </div>
                      <div className="text-xs text-gray-500">Manage and view</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Recent Donations</h2>
              <div className="space-y-4">
                {[
                  { donor: 'Anonymous Donor', amount: 5000, time: '2 hours ago' },
                  { donor: 'Rajesh Kumar', amount: 2500, time: '5 hours ago' },
                  { donor: 'Priya Sharma', amount: 1000, time: '1 day ago' },
                  { donor: 'Mohammed Ali', amount: 10000, time: '2 days ago' }
                ].map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div>
                      <div className="font-semibold">{donation.donor}</div>
                      <div className="text-xs text-gray-500">{donation.time}</div>
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      ₹{donation.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <a href="/admin/donations">
                <Button variant="outline" className="w-full mt-4">
                  View All Donations
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Program Performance</h2>
              <div className="space-y-4">
                {[
                  { name: 'Food Distribution', progress: 85, amount: 45000, goal: 60000 },
                  { name: 'Back to School', progress: 100, amount: 125000, goal: 120000 },
                  { name: 'Medical Camp', progress: 51, amount: 28000, goal: 55000 },
                  { name: 'Winter Relief', progress: 100, amount: 35000, goal: 35000 }
                ].map((program, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{program.name}</span>
                      <span className="text-gray-600">
                        ₹{(program.amount / 1000).toFixed(0)}K / ₹{(program.goal / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                        style={{ width: `${Math.min(program.progress, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/admin/programs">
                <Button variant="outline" className="w-full mt-4">
                  Manage Programs
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Alerts & Notifications */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Important Alerts</h2>
            <div className="space-y-3">
              <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                <div className="flex-1">
                  <div className="font-semibold text-yellow-800">80G Certificate Renewal Due</div>
                  <div className="text-sm text-yellow-700">Your 80G certificate expires in 45 days. Please initiate renewal process.</div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div className="flex-1">
                  <div className="font-semibold text-blue-800">3 Programs Ending Soon</div>
                  <div className="text-sm text-blue-700">Medical Camp and 2 other programs are ending this month. Review progress.</div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <div className="flex-1">
                  <div className="font-semibold text-green-800">Monthly Target Achieved</div>
                  <div className="text-sm text-green-700">Congratulations! You've reached your monthly fundraising target of ₹5L.</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
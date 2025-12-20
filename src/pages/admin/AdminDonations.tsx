import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdminDonations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Donation Management</h1>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Donations</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <div className="font-semibold">Donor #{i}</div>
                    <div className="text-sm text-gray-600">Jan {i}, 2024</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-bold">₹{i * 1000}</span>
                    <Badge className="bg-green-100 text-green-800">Success</Badge>
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

export default AdminDonations;
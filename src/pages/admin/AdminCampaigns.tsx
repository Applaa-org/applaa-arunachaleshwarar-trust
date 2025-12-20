import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdminCampaigns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Campaign Management</h1>
          <Button>Create New Campaign</Button>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Active Campaigns</h2>
            <p className="text-gray-600">Campaign management interface</p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminCampaigns;
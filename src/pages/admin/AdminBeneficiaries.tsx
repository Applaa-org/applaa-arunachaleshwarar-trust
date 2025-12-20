import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

const AdminBeneficiaries = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Beneficiary Management</h1>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Registered Beneficiaries</h2>
            <p className="text-gray-600">Beneficiary database and tracking</p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminBeneficiaries;
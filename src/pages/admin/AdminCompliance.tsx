import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileText, CheckCircle } from 'lucide-react';

const AdminCompliance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Compliance & Legal</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto text-green-600 mb-3" />
              <div className="font-bold">80G Registration</div>
              <div className="text-sm text-green-600">Valid till 2028</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 mx-auto text-blue-600 mb-3" />
              <div className="font-bold">12A Registration</div>
              <div className="text-sm text-blue-600">Permanent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto text-purple-600 mb-3" />
              <div className="font-bold">FCRA Active</div>
              <div className="text-sm text-purple-600">Valid till 2026</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminCompliance;
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, BarChart } from 'lucide-react';

const AdminReports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Reports & Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <FileText className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Financial Reports</h3>
              <p className="text-sm text-gray-600 mb-4">Generate detailed financial statements</p>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BarChart className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Impact Reports</h3>
              <p className="text-sm text-gray-600 mb-4">Beneficiary and program impact data</p>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminReports;
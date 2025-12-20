import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, Calendar, Award } from 'lucide-react';

const VolunteerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Volunteer Dashboard</h1>
          <p className="text-gray-600">Track your volunteer activities and impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-gray-600">Hours Volunteered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm text-gray-600">Tasks Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-gray-600">Events Attended</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-yellow-600 mb-2" />
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm text-gray-600">Certificates Earned</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Activities</h2>
            <p className="text-gray-600">No upcoming activities scheduled</p>
            <Button className="mt-4">Browse Opportunities</Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default VolunteerDashboard;
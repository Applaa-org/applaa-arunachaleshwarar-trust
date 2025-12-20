import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { programs, categories, getStatusColor, getStatusText } from '@/data/programs';
import { Search, Users, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || program.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Our Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Creating Lasting Impact
            </h1>
            <p className="text-xl opacity-90">
              Explore our active campaigns and see the difference your support makes
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.icon} {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            {categories.map(cat => (
              <Badge 
                key={cat.id}
                className={`cursor-pointer ${selectedCategory === cat.id ? cat.color + ' text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
              >
                {cat.icon} {cat.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredPrograms.length}</span> programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const progressPercent = (program.fundsRaised / program.fundsGoal) * 100;
              const categoryInfo = categories.find(c => c.id === program.category);

              return (
                <Card key={program.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getStatusColor(program.status)}>
                        {getStatusText(program.status)}
                      </Badge>
                      {categoryInfo && (
                        <Badge className={`${categoryInfo.color} text-white`}>
                          {categoryInfo.icon} {categoryInfo.name}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {program.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-rose-600" />
                        {program.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                        {new Date(program.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                        {program.beneficiaries.toLocaleString()} people helped
                      </div>
                    </div>

                    {program.status !== 'completed' && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600 font-medium">
                            <TrendingUp className="inline w-4 h-4 mr-1" />
                            Progress
                          </span>
                          <span className="font-bold text-rose-600">
                            ₹{program.fundsRaised.toLocaleString()} / ₹{program.fundsGoal.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(progressPercent, 100)}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {progressPercent.toFixed(0)}% funded
                        </p>```typescript
                      </div>
                    )}

                    {program.status === 'completed' && (
                      <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800 font-semibold">
                          ✓ Goal Achieved: ₹{program.fundsRaised.toLocaleString()}
                        </p>
                        <p className="text-xs text-green-700 mt-1">
                          Impact created for {program.beneficiaries.toLocaleString()} beneficiaries
                        </p>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <a href={`/programs/${program.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </a>
                      {program.status !== 'completed' && (
                        <a href="/donate" className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                            Donate Now
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No programs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search term
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">
                {programs.filter(p => p.status === 'ongoing').length}
              </div>
              <div className="text-gray-600">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {programs.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                {programs.filter(p => p.status === 'upcoming').length}
              </div>
              <div className="text-gray-600">Upcoming</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {programs.reduce((sum, p) => sum + p.beneficiaries, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose a program that resonates with you and start making a difference today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 w-full sm:w-auto">
                Donate to Any Program
              </Button>
            </a>
            <a href="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Volunteer With Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
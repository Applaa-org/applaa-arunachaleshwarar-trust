import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { programs, categories, getStatusColor, getStatusText } from '@/data/programs';
import { Plus, Edit, Trash2, Eye, Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import type { Program, ProgramCategory, ProgramStatus } from '@/data/programs';

const AdminPrograms = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    fullDescription: '',
    category: 'education' as ProgramCategory,
    status: 'draft' as ProgramStatus,
    location: '',
    date: '',
    fundsGoal: 0,
    beneficiaries: 0,
    image: ''
  });

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || program.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || program.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleCreateNew = () => {
    setEditingProgram(null);
    setFormData({
      title: '',
      slug: '',
      description: '',
      fullDescription: '',
      category: 'education',
      status: 'draft',
      location: '',
      date: '',
      fundsGoal: 0,
      beneficiaries: 0,
      image: ''
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (program: Program) => {
    setEditingProgram(program);
    setFormData({
      title: program.title,
      slug: program.slug,
      description: program.description,
      fullDescription: program.fullDescription || '',
      category: program.category,
      status: program.status,
      location: program.location || '',
      date: program.date,
      fundsGoal: program.fundsGoal,
      beneficiaries: program.beneficiaries_target || 0,
      image: program.image
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would make an API call
    console.log('Submitting program:', formData);
    setIsDialogOpen(false);
    // Show success toast
  };

  const handleDelete = (programId: number) => {
    if (confirm('Are you sure you want to delete this program?')) {
      // In a real application, this would make an API call
      console.log('Deleting program:', programId);
      // Show success toast
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from title
    if (field === 'title') {
      const slug = value.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Program Management</h1>
            <p className="text-gray-600">Create, edit, and manage all charity programs</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                onClick={handleCreateNew}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New Program
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProgram ? 'Edit Program' : 'Create New Program'}
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Basic Information</h3>
                  
                  <div>
                    <Label htmlFor="title">Program Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., Monthly Food Distribution Drive"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug">URL Slug *</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => handleInputChange('slug', e.target.value)}
                      placeholder="monthly-food-distribution"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Auto-generated from title. Will be used in URL: /programs/{formData.slug}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={(value) => handleInputChange('category', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(cat => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.icon} {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="status">Status *</Label>
                      <Select 
                        value={formData.status} 
                        onValueChange={(value) => handleInputChange('status', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="upcoming">Upcoming</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="paused">Paused</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Short Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Brief summary (1-2 sentences)"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="fullDescription">Full Description</Label>
                    <Textarea
                      id="fullDescription"
                      value={formData.fullDescription}
                      onChange={(e) => handleInputChange('fullDescription', e.target.value)}
                      placeholder="Detailed description of the program, its goals, and implementation..."
                      rows={6}
                    />
                  </div>
                </div>

                {/* Location & Date */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Location & Schedule</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="e.g., Multiple locations across the city"
                      />
                    </div>

                    <div>
                      <Label htmlFor="date">Start Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Goals & Targets */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Goals & Targets</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fundsGoal">Funding Goal (₹) *</Label>
                      <Input
                        id="fundsGoal"
                        type="number"
                        value={formData.fundsGoal}
                        onChange={(e) => handleInputChange('fundsGoal', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 60000"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="beneficiaries">Target Beneficiaries</Label>
                      <Input
                        id="beneficiaries"
                        type="number"
                        value={formData.beneficiaries}
                        onChange={(e) => handleInputChange('beneficiaries', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 500"
                      />
                    </div>
                  </div>
                </div>

                {/* Media */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Media</h3>
                  
                  <div>
                    <Label htmlFor="image">Featured Image URL *</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => handleInputChange('image', e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      required
                    />
                    {formData.image && (
                      <div className="mt-2">
                        <img 
                          src={formData.image} 
                          alt="Preview" 
                          className="w-full h-48 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end space-x-4 pt-4 border-t">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  >
                    {editingProgram ? 'Update Program' : 'Create Program'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Programs</p>
                  <p className="text-3xl font-bold">{programs.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Programs</p>
                  <p className="text-3xl font-bold text-green-600">
                    {programs.filter(p => p.status === 'ongoing').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Raised</p>
                  <p className="text-3xl font-bold text-orange-600">
                    ₹{(programs.reduce((sum, p) => sum + p.fundsRaised, 0) / 100000).toFixed(1)}L
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Beneficiaries</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {programs.reduce((sum, p) => sum + p.beneficiaries_reached, 0).toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="search">Search Programs</Label>
                <Input
                  id="search"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="filterCategory">Filter by Category</Label>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue />
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
              </div>

              <div>
                <Label htmlFor="filterStatus">Filter by Status</Label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Programs Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Programs ({filteredPrograms.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="pb-3 font-semibold">Program</th>
                    <th className="pb-3 font-semibold">Category</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold">Progress</th>
                    <th className="pb-3 font-semibold">Beneficiaries</th>
                    <th className="pb-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPrograms.map((program) => {
                    const progressPercent = (program.fundsRaised / program.fundsGoal) * 100;
                    const categoryInfo = categories.find(c => c.id === program.category);

                    return (
                      <tr key={program.id} className="border-b hover:bg-gray-50">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={program.image} 
                              alt={program.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <div className="font-semibold">{program.title}</div>
                              <div className="text-sm text-gray-600 flex items-center mt-1">
                                <MapPin className="w-3 h-3 mr-1" />
                                {program.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          {categoryInfo && (
                            <Badge className={`${categoryInfo.color} text-white`}>
                              {categoryInfo.icon} {categoryInfo.name}
                            </Badge>
                          )}
                        </td>
                        <td className="py-4">
                          <Badge className={getStatusColor(program.status)}>
                            {getStatusText(program.status)}
                          </Badge>
                        </td>
                        <td className="py-4">
                          <div className="w-32">
                            <div className="flex justify-between text-xs mb-1">
                              <span>{progressPercent.toFixed(0)}%</span>
                              <span>₹{(program.fundsRaised / 1000).toFixed(0)}K</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                                style={{ width: `${Math.min(progressPercent, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center text-sm">
                            <Users className="w-4 h-4 mr-1 text-gray-400" />
                            {program.beneficiaries_reached}
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-end space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => window.open(`/programs/${program.slug}`, '_blank')}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEdit(program)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleDelete(program.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredPrograms.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No programs found matching your filters</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm('');
                      setFilterCategory('all');
                      setFilterStatus('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPrograms;
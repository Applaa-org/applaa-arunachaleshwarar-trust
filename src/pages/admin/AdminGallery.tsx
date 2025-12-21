import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Image as ImageIcon, 
  Trash2, 
  Edit, 
  Star, 
  Download,
  Plus,
  Check,
  X
} from 'lucide-react';
import { toast } from 'sonner';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
  uploadedDate: string;
  isFeatured: boolean;
  usedIn: string[];
}

const AdminGallery = () => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');

  // Mock gallery data - In production, this would come from your database
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    {
      id: 1,
      url: '/arunachaleshwarar-temple.jpeg',
      title: 'Arunachaleshwarar Temple Gopuram',
      description: 'Main temple tower - திருவண்ணாமலை',
      category: 'temple',
      uploadedDate: '2024-01-15',
      isFeatured: true,
      usedIn: ['Homepage Hero']
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop',
      title: 'Food Distribution',
      description: 'Monthly food drive',
      category: 'programs',
      uploadedDate: '2024-01-10',
      isFeatured: false,
      usedIn: ['Food Program']
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
      title: 'Education Program',
      description: 'Back to school initiative',
      category: 'programs',
      uploadedDate: '2024-01-08',
      isFeatured: false,
      usedIn: ['Education Program']
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Images', icon: '🖼️' },
    { id: 'temple', name: 'Temple', icon: '🕉️' },
    { id: 'programs', name: 'Programs', icon: '🤝' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'people', name: 'People', icon: '👥' },
    { id: 'banners', name: 'Banners', icon: '🎨' }
  ];

  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    category: 'temple',
    file: null as File | null
  });

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = selectedCategory === 'all' || img.category === selectedCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         img.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }

      setUploadForm(prev => ({ ...prev, file }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();

    if (!uploadForm.file) {
      toast.error('Please select an image file');
      return;
    }

    // In production, this would upload to your server/cloud storage
    // For now, we'll simulate it with a preview URL
    const newImage: GalleryImage = {
      id: Date.now(),
      url: previewUrl,
      title: uploadForm.title,
      description: uploadForm.description,
      category: uploadForm.category,
      uploadedDate: new Date().toISOString().split('T')[0],
      isFeatured: false,
      usedIn: []
    };

    setGalleryImages(prev => [newImage, ...prev]);
    
    toast.success('Image uploaded successfully!');
    
    // Reset form
    setUploadForm({
      title: '',
      description: '',
      category: 'temple',
      file: null
    });
    setPreviewUrl('');
    setIsUploadDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setGalleryImages(prev => prev.filter(img => img.id !== id));
      toast.success('Image deleted successfully');
    }
  };

  const toggleFeatured = (id: number) => {
    setGalleryImages(prev => prev.map(img => 
      img.id === id ? { ...img, isFeatured: !img.isFeatured } : img
    ));
    toast.success('Image featured status updated');
  };

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('Image URL copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Image Gallery Manager</h1>
            <p className="text-gray-600">Upload and manage images for your website</p>
          </div>
          
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                <Upload className="w-4 h-4 mr-2" />
                Upload New Image
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Upload New Image</DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleUpload} className="space-y-6">
                {/* File Upload */}
                <div>
                  <Label htmlFor="file">Select Image *</Label>
                  <div className="mt-2">
                    <Input
                      id="file"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="cursor-pointer"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Supported: JPG, PNG, JPEG, WebP (Max 5MB)
                    </p>
                  </div>
                </div>

                {/* Preview */}
                {previewUrl && (
                  <div>
                    <Label>Preview</Label>
                    <div className="mt-2 relative">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
                      />
                    </div>
                  </div>
                )}

                {/* Title */}
                <div>
                  <Label htmlFor="title">Image Title *</Label>
                  <Input
                    id="title"
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Temple Festival 2024"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={uploadForm.description}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of the image..."
                    rows={3}
                  />
                </div>

                {/* Category */}
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    {categories.filter(c => c.id !== 'all').map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end space-x-4 pt-4 border-t">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      setIsUploadDialogOpen(false);
                      setPreviewUrl('');
                      setUploadForm({
                        title: '',
                        description: '',
                        category: 'temple',
                        file: null
                      });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Images</p>
                  <p className="text-3xl font-bold">{galleryImages.length}</p>
                </div>
                <ImageIcon className="w-12 h-12 text-blue-600 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Featured</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {galleryImages.filter(img => img.isFeatured).length}
                  </p>
                </div>
                <Star className="w-12 h-12 text-orange-600 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Categories</p>
                  <p className="text-3xl font-bold text-green-600">
                    {categories.length - 1}
                  </p>
                </div>
                <ImageIcon className="w-12 h-12 text-green-600 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Use</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {galleryImages.filter(img => img.usedIn.length > 0).length}
                  </p>
                </div>
                <Check className="w-12 h-12 text-purple-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="search">Search Images</Label>
                <Input
                  id="search"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <Label>Filter by Category</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map(cat => (
                    <Badge
                      key={cat.id}
                      className={`cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.icon} {cat.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image Grid */}
        <Card>
          <CardHeader>
            <CardTitle>
              Gallery Images ({filteredImages.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {filteredImages.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No images found</p>
                <Button onClick={() => setIsUploadDialogOpen(true)}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload First Image
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <div key={image.id} className="group relative">
                    <Card className="overflow-hidden hover:shadow-xl transition-all">
                      <div className="relative h-48">
                        <img 
                          src={image.url} 
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        {image.isFeatured && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-yellow-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => copyImageUrl(image.url)}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => toggleFeatured(image.id)}
                          >
                            <Star className={`w-4 h-4 ${image.isFeatured ? 'fill-yellow-500' : ''}`} />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(image.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                          {image.title}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {image.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {categories.find(c => c.id === image.category)?.icon} {image.category}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {image.uploadedDate}
                          </span>
                        </div>
                        {image.usedIn.length > 0 && (
                          <div className="mt-2 pt-2 border-t">
                            <p className="text-xs text-gray-500">Used in:</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {image.usedIn.map((location, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {location}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
              How to Use Images
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>✅ <strong>Upload:</strong> Click "Upload New Image" button</p>
              <p>✅ <strong>Feature:</strong> Click the star icon to make an image featured</p>
              <p>✅ <strong>Copy URL:</strong> Click download icon to copy image URL to clipboard</p>
              <p>✅ <strong>Delete:</strong> Click trash icon to remove an image</p>
              <p>✅ <strong>Use in Pages:</strong> Copy the URL and paste it in your page editor</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminGallery;
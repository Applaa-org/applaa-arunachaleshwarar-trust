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
  Star, 
  Download,
  Check
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
  const [previewUrl, setPreviewUrl] = useState('');

  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    {
      id: 1,
      url: '/arunachaleshwarar-temple.jpeg',
      title: 'Arunachaleshwarar Temple Gopuram',
      description: 'Main temple tower',
      category: 'temple',
      uploadedDate: '2024-01-15',
      isFeatured: true,
      usedIn: ['Homepage Hero']
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Images', icon: '🖼️' },
    { id: 'temple', name: 'Temple', icon: '🕉️' },
    { id: 'programs', name: 'Programs', icon: '🤝' },
    { id: 'events', name: 'Events', icon: '🎉' }
  ];

  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    category: 'temple',
    file: null as File | null
  });

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = selectedCategory === 'all' || img.category === selectedCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      setUploadForm(prev => ({ ...prev, file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadForm.file) {
      toast.error('Please select an image file');
      return;
    }
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
    toast.success('Image uploaded!');
    setUploadForm({ title: '', description: '', category: 'temple', file: null });
    setPreviewUrl('');
    setIsUploadDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this image?')) {
      setGalleryImages(prev => prev.filter(img => img.id !== id));
      toast.success('Deleted');
    }
  };

  const toggleFeatured = (id: number) => {
    setGalleryImages(prev => prev.map(img => 
      img.id === id ? { ...img, isFeatured: !img.isFeatured } : img
    ));
  };

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Image Gallery</h1>
            <p className="text-gray-600">Upload and manage images</p>
          </div>
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600">
                <Upload className="w-4 h-4 mr-2" />Upload
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Upload Image</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <Label>Select Image</Label>
                  <Input type="file" accept="image/*" onChange={handleFileSelect} required />
                </div>
                {previewUrl && <img src={previewUrl} alt="Preview" className="w-full h-48 object-cover rounded" />}
                <div>
                  <Label>Title</Label>
                  <Input value={uploadForm.title} onChange={(e) => setUploadForm(p => ({...p, title: e.target.value}))} required />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea value={uploadForm.description} onChange={(e) => setUploadForm(p => ({...p, description: e.target.value}))} />
                </div>
                <div>
                  <Label>Category</Label>
                  <select value={uploadForm.category} onChange={(e) => setUploadForm(p => ({...p, category: e.target.value}))} className="w-full px-3 py-2 border rounded">
                    {categories.filter(c => c.id !== 'all').map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsUploadDialogOpen(false)}>Cancel</Button>
                  <Button type="submit">Upload</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card><CardContent className="p-4"><div className="text-2xl font-bold">{galleryImages.length}</div><div className="text-sm text-gray-600">Total Images</div></CardContent></Card>
          <Card><CardContent className="p-4"><div className="text-2xl font-bold text-orange-600">{galleryImages.filter(i => i.isFeatured).length}</div><div className="text-sm text-gray-600">Featured</div></CardContent></Card>
          <Card><CardContent className="p-4"><div className="text-2xl font-bold text-green-600">{categories.length - 1}</div><div className="text-sm text-gray-600">Categories</div></CardContent></Card>
          <Card><CardContent className="p-4"><div className="text-2xl font-bold text-purple-600">{galleryImages.filter(i => i.usedIn.length > 0).length}</div><div className="text-sm text-gray-600">In Use</div></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <div className="flex gap-2">
                {categories.map(c => (
                  <Badge key={c.id} className={selectedCategory === c.id ? 'bg-orange-500' : 'bg-gray-200'} onClick={() => setSelectedCategory(c.id)}>
                    {c.icon} {c.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Images ({filteredImages.length})</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              {filteredImages.map(img => (
                <Card key={img.id} className="group">
                  <div className="relative h-48">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    {img.isFeatured && <Badge className="absolute top-2 right-2 bg-yellow-500"><Star className="w-3 h-3" /></Badge>}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary" onClick={() => copyImageUrl(img.url)}><Download className="w-4 h-4" /></Button>
                      <Button size="sm" variant="secondary" onClick={() => toggleFeatured(img.id)}><Star className="w-4 h-4" /></Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(img.id)}><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm">{img.title}</h3>
                    <p className="text-xs text-gray-600">{img.description}</p>
                    <Badge variant="outline" className="text-xs mt-2">{img.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AdminGallery;
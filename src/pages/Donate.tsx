import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { programs } from '@/data/programs';
import { Heart, Shield, CheckCircle, CreditCard } from 'lucide-react';

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [campaign, setCampaign] = useState('general');

  const suggestedAmounts = ['500', '1000', '2500', '5000'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Make a Donation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Generosity Changes Lives
            </h1>
            <p className="text-xl opacity-90">
              Every contribution makes a real difference. 100% of your donation goes directly to our programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {/* Donation Type */}
                  <div className="mb-8">
                    <Label className="text-lg font-semibold mb-4 block">Donation Type</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setDonationType('one-time')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          donationType === 'one-time'
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-lg font-semibold">One-Time</div>
                        <div className="text-sm text-gray-600">Single donation</div>
                      </button>
                      <button
                        onClick={() => setDonationType('recurring')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          donationType === 'recurring'
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-lg font-semibold">Monthly</div>
                        <div className="text-sm text-gray-600">Recurring donation</div>
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <Label className="text-lg font-semibold mb-4 block">Select Amount</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {suggestedAmounts.map((amt) => (
                        <button
                          key={amt}
                          onClick={() => {
                            setAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            amount === amt && !customAmount
                              ? 'border-rose-500 bg-rose-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-2xl font-bold">₹{amt}</div>
                        </button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="custom-amount" className="mb-2 block">Custom Amount</Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount('');
                        }}
                        className="text-lg"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      ₹{customAmount || amount} provides meals for {Math.floor((parseInt(customAmount || amount) || 0) / 100)} children for a week
                    </p>
                  </div>

                  {/* Campaign Selection */}
                  <div className="mb-8">
                    <Label htmlFor="campaign" className="text-lg font-semibold mb-4 block">
                      Donate To
                    </Label>
                    <Select value={campaign} onValueChange={setCampaign}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Fund - Trust decides best use</SelectItem>
                        {programs.filter(p => p.status === 'ongoing' || p.status === 'upcoming').map(program => (
                          <SelectItem key={program.id} value={program.slug}>
                            {program.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Donor Information */}
                  <div className="mb-8">
                    <Label className="text-lg font-semibold mb-4 block">Your Information</Label>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="+91 " />
                      </div>
                      <div>
                        <Label htmlFor="pan">PAN Number (for 80G receipt)</Label>
                        <Input id="pan" placeholder="ABCDE1234F" maxLength={10} />
                        <p className="text-xs text-gray-500 mt-1">
                          Required for donations above ₹2,000 or if you want 80G tax certificate
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="indian" />
                      <label htmlFor="indian" className="text-sm">
                        I am an Indian citizen/resident
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <label htmlFor="anonymous" className="text-sm">
                        I want to donate anonymously (no public display)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="updates" defaultChecked />
                      <label htmlFor="updates" className="text-sm">
                        Send me updates about impact
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm">
                        I agree to <a href="#" className="text-rose-600 hover:underline">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button size="lg" className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate ₹{customAmount || amount} Securely
                  </Button>

                  <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-600">
                    <Shield className="w-5 h-5" />
                    <span>Secured by Razorpay | 256-bit SSL Encryption</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* 80G Certificate Info */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">80G Tax Benefits</h3>
                      <p className="text-sm text-gray-600">
                        Your donation qualifies for 50% tax exemption under Section 80G
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>✓ Auto-generated certificate within 2 hours</p>
                    <p>✓ Download anytime from donor dashboard</p>
                    <p>✓ Valid for Income Tax filing</p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Payment Methods</h3>
                  <div className="space-y-2">
                    <div className="flex items-center p-3 border rounded-lg">
                      <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="text-sm">UPI</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg">
                      <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="text-sm">Credit/Debit Cards</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg">
                      <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="text-sm">Net Banking</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg">
                      <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="text-sm">Wallets</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Why Donate?</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>💯 100% of your donation goes to programs</p>
                    <p>📊 Complete transparency in fund usage</p>
                    <p>✅ 15+ years of proven impact</p>
                    <p>🏆 Award-winning organization</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
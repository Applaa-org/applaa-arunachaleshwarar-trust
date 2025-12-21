// ============================================
// DATABASE TYPES - TypeScript Interfaces
// Auto-generated from PostgreSQL schema
// ============================================

export type UserRole = 'donor' | 'volunteer' | 'admin' | 'beneficiary' | 'trustee';

export type ProgramCategory = 
  | 'education' 
  | 'food' 
  | 'healthcare' 
  | 'shelter' 
  | 'emergency' 
  | 'women_empowerment' 
  | 'child_welfare';

export type ProgramStatus = 
  | 'draft' 
  | 'ongoing' 
  | 'completed' 
  | 'upcoming' 
  | 'paused' 
  | 'cancelled';

export type DonationType = 'one-time' | 'monthly' | 'quarterly' | 'yearly';

export type PaymentMethod = 
  | 'upi' 
  | 'card' 
  | 'net_banking' 
  | 'wallet' 
  | 'cheque' 
  | 'bank_transfer' 
  | 'cash';

export type PaymentStatus = 
  | 'pending' 
  | 'processing' 
  | 'success' 
  | 'failed' 
  | 'refunded' 
  | 'cancelled';

export type DonationPurpose = 'general' | 'program' | 'zakat' | 'corpus' | 'emergency';

export type BeneficiaryCategory = 
  | 'below_poverty_line' 
  | 'low_income' 
  | 'middle_income' 
  | 'special_needs' 
  | 'emergency';

export type VerificationStatus = 'pending' | 'verified' | 'rejected' | 'needs_review';

export type ExpenseCategory = 
  | 'program_direct' 
  | 'admin' 
  | 'fundraising' 
  | 'salaries' 
  | 'rent' 
  | 'utilities' 
  | 'travel' 
  | 'marketing' 
  | 'supplies' 
  | 'other';

export type DocumentType = 
  | '80g_certificate' 
  | '12a_certificate' 
  | 'fcra_certificate' 
  | 'csr1' 
  | 'pan_card' 
  | 'tan_card' 
  | 'trust_deed' 
  | 'registration' 
  | 'audit_report' 
  | 'annual_return' 
  | 'policy' 
  | 'other';

export type EmailStatus = 
  | 'queued' 
  | 'sent' 
  | 'delivered' 
  | 'opened' 
  | 'clicked' 
  | 'bounced' 
  | 'failed';

// ============================================
// CORE INTERFACES
// ============================================

export interface User {
  id: string;
  email: string;
  phone?: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  role: UserRole;
  pan_number?: string;
  aadhar_number?: string;
  date_of_birth?: Date;
  gender?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  profile_image_url?: string;
  is_anonymous: boolean;
  email_verified: boolean;
  phone_verified: boolean;
  is_active: boolean;
  last_login_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  full_description?: string;
  category: ProgramCategory;
  status: ProgramStatus;
  location?: string;
  location_coordinates?: { x: number; y: number };
  start_date?: Date;
  end_date?: Date;
  funds_goal: number;
  funds_raised: number;
  beneficiaries_target?: number;
  beneficiaries_reached: number;
  featured_image_url?: string;
  created_by?: string;
  approved_by?: string;
  is_featured: boolean;
  is_tax_exempt: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ProgramGallery {
  id: string;
  program_id: string;
  image_url: string;
  caption?: string;
  display_order: number;
  uploaded_by?: string;
  created_at: Date;
}

export interface ProgramImpact {
  id: string;
  program_id: string;
  impact_description: string;
  metric_name?: string;
  metric_value?: string;
  display_order: number;
  created_at: Date;
}

export interface Donation {
  id: string;
  donation_number: string;
  donor_id?: string;
  program_id?: string;
  amount: number;
  currency: string;
  donation_type: DonationType;
  payment_method?: PaymentMethod;
  payment_status: PaymentStatus;
  payment_gateway?: string;
  transaction_id?: string;
  payment_gateway_response?: Record<string, any>;
  is_anonymous: boolean;
  donor_name?: string;
  donor_email?: string;
  donor_phone?: string;
  donor_pan?: string;
  donor_address?: string;
  purpose?: DonationPurpose;
  is_recurring: boolean;
  recurring_parent_id?: string;
  next_payment_date?: Date;
  tax_receipt_number?: string;
  tax_receipt_issued_at?: Date;
  tax_receipt_url?: string;
  notes?: string;
  internal_notes?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at: Date;
  updated_at: Date;
}

export interface TaxReceipt {
  id: string;
  receipt_number: string;
  financial_year: string;
  donation_id?: string;
  donor_id?: string;
  donor_name: string;
  donor_pan: string;
  donor_address: string;
  total_amount: number;
  eligible_amount: number;
  tax_exemption_percentage: number;
  receipt_pdf_url?: string;
  issued_at: Date;
  issued_by?: string;
  created_at: Date;
}

export interface Beneficiary {
  id: string;
  beneficiary_number: string;
  user_id?: string;
  full_name: string;
  date_of_birth?: Date;
  gender?: string;
  phone?: string;
  email?: string;
  aadhar_number_encrypted?: string;
  family_size?: number;
  monthly_income?: number;
  category?: BeneficiaryCategory;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  location_coordinates?: { x: number; y: number };
  photo_url?: string;
  verification_status?: VerificationStatus;
  verified_by?: string;
  verified_at?: Date;
  verification_documents?: Record<string, any>;
  notes?: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ProgramBeneficiary {
  id: string;
  program_id: string;
  beneficiary_id: string;
  enrollment_date: Date;
  status: 'enrolled' | 'active' | 'completed' | 'withdrawn' | 'suspended';
  benefits_received?: string;
  satisfaction_rating?: number;
  feedback?: string;
  created_at: Date;
}

export interface VolunteerProfile {
  id: string;
  user_id: string;
  volunteer_id: string;
  occupation?: string;
  organization?: string;
  skills?: string[];
  interests?: string[];
  availability?: 'weekdays' | 'weekends' | 'flexible' | 'remote_only';
  hours_per_month?: number;
  languages_spoken?: string[];
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  background_check_status?: 'pending' | 'cleared' | 'rejected';
  background_check_date?: Date;
  total_hours_volunteered: number;
  total_events_attended: number;
  rating: number;
  bio?: string;
  motivation?: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface VolunteerActivity {
  id: string;
  volunteer_id: string;
  program_id?: string;
  activity_type: 'field_work' | 'office_work' | 'event' | 'training' | 'awareness' | 'fundraising';
  activity_date: Date;
  hours_worked: number;
  description?: string;
  location?: string;
  supervisor_id?: string;
  feedback?: string;
  rating?: number;
  certificate_issued: boolean;
  certificate_url?: string;
  created_at: Date;
}

export interface Expense {
  id: string;
  expense_number: string;
  program_id?: string;
  category: ExpenseCategory;
  sub_category?: string;
  amount: number;
  currency: string;
  expense_date: Date;
  vendor_name?: string;
  vendor_contact?: string;
  description: string;
  payment_method?: string;
  invoice_number?: string;
  invoice_url?: string;
  receipt_url?: string;
  approved_by?: string;
  approved_at?: Date;
  paid_by?: string;
  paid_at?: Date;
  status: 'pending' | 'approved' | 'paid' | 'rejected';
  notes?: string;
  created_by?: string;
  created_at: Date;
  updated_at: Date;
}

export interface BudgetAllocation {
  id: string;
  financial_year: string;
  program_id?: string;
  category: string;
  allocated_amount: number;
  spent_amount: number;
  notes?: string;
  created_by?: string;
  created_at: Date;
  updated_at: Date;
}

export interface ComplianceDocument {
  id: string;
  document_type: DocumentType;
  document_name: string;
  registration_number?: string;
  issue_date?: Date;
  expiry_date?: Date;
  issuing_authority?: string;
  document_url: string;
  status?: 'active' | 'expired' | 'renewed' | 'cancelled';
  notes?: string;
  uploaded_by?: string;
  created_at: Date;
  updated_at: Date;
}

export interface AuditLog {
  id: string;
  user_id?: string;
  action: string;
  entity_type: string;
  entity_id?: string;
  old_values?: Record<string, any>;
  new_values?: Record<string, any>;
  ip_address?: string;
  user_agent?: string;
  created_at: Date;
}

export interface EmailTemplate {
  id: string;
  template_name: string;
  subject: string;
  body_html: string;
  body_text?: string;
  variables?: Record<string, any>;
  category?: 'donation_receipt' | 'welcome' | 'thank_you' | 'newsletter' | 'program_update' | 'reminder' | 'alert';
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface EmailLog {
  id: string;
  recipient_email: string;
  recipient_user_id?: string;
  template_id?: string;
  subject: string;
  status: EmailStatus;
  email_service_provider?: string;
  external_message_id?: string;
  error_message?: string;
  sent_at?: Date;
  delivered_at?: Date;
  opened_at?: Date;
  created_at: Date;
}

export interface SMSLog {
  id: string;
  recipient_phone: string;
  recipient_user_id?: string;
  message: string;
  status: 'queued' | 'sent' | 'delivered' | 'failed';
  sms_service_provider?: string;
  external_message_id?: string;
  error_message?: string;
  sent_at?: Date;
  delivered_at?: Date;
  created_at: Date;
}

export interface Newsletter {
  id: string;
  title: string;
  subject: string;
  content_html: string;
  content_text?: string;
  status: 'draft' | 'scheduled' | 'sending' | 'sent';
  scheduled_for?: Date;
  sent_at?: Date;
  total_recipients: number;
  total_sent: number;
  total_opened: number;
  total_clicked: number;
  created_by?: string;
  created_at: Date;
}

export interface Testimonial {
  id: string;
  user_id?: string;
  program_id?: string;
  name: string;
  role?: string;
  content: string;
  rating?: number;
  image_url?: string;
  video_url?: string;
  is_featured: boolean;
  is_approved: boolean;
  approved_by?: string;
  approved_at?: Date;
  created_at: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  category?: 'news' | 'story' | 'announcement' | 'milestone' | 'impact';
  status: 'draft' | 'published' | 'archived';
  author_id?: string;
  published_at?: Date;
  views_count: number;
  comments_count: number;
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  created_at: Date;
  updated_at: Date;
}

export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  thumbnail_url?: string;
  category?: string;
  program_id?: string;
  tags?: string[];
  photographer_name?: string;
  captured_date?: Date;
  uploaded_by?: string;
  is_featured: boolean;
  display_order: number;
  created_at: Date;
}

export interface GeneratedReport {
  id: string;
  report_type: 'financial' | 'program' | 'donor' | 'beneficiary' | 'compliance' | 'annual' | 'custom';
  report_name: string;
  financial_year?: string;
  start_date?: Date;
  end_date?: Date;
  parameters?: Record<string, any>;
  file_url?: string;
  file_format?: 'pdf' | 'excel' | 'csv';
  generated_by?: string;
  generated_at: Date;
  created_at: Date;
}

export interface SystemSetting {
  id: string;
  setting_key: string;
  setting_value?: string;
  setting_type: 'string' | 'number' | 'boolean' | 'json';
  category?: string;
  description?: string;
  is_public: boolean;
  updated_by?: string;
  updated_at: Date;
}

// ============================================
// VIEW INTERFACES
// ============================================

export interface DonationSummary {
  month: Date;
  total_donations: number;
  total_amount: number;
  average_amount: number;
  unique_donors: number;
  recurring_donors: number;
}

export interface ProgramStatistics {
  id: string;
  title: string;
  status: ProgramStatus;
  funds_goal: number;
  funds_raised: number;
  funding_percentage: number;
  beneficiaries_target?: number;
  beneficiaries_reached: number;
  total_donations: number;
  unique_donors: number;
  enrolled_beneficiaries: number;
}

export interface ActiveVolunteer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  volunteer_id: string;
  total_hours_volunteered: number;
  total_events_attended: number;
  rating: number;
  activities_this_year: number;
  hours_this_year: number;
}

// ============================================
// REQUEST/RESPONSE INTERFACES
// ============================================

export interface CreateDonationRequest {
  donor_id?: string;
  program_id?: string;
  amount: number;
  donation_type: DonationType;
  payment_method: PaymentMethod;
  is_anonymous?: boolean;
  donor_name?: string;
  donor_email?: string;
  donor_phone?: string;
  donor_pan?: string;
  donor_address?: string;
  purpose?: DonationPurpose;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export interface CreateProgramRequest {
  title: string;
  slug: string;
  description: string;
  full_description?: string;
  category: ProgramCategory;
  location?: string;
  start_date?: Date;
  end_date?: Date;
  funds_goal: number;
  beneficiaries_target?: number;
  featured_image_url?: string;
  is_featured?: boolean;
}

export interface UpdateProgramRequest {
  title?: string;
  description?: string;
  full_description?: string;
  status?: ProgramStatus;
  location?: string;
  end_date?: Date;
  funds_goal?: number;
  beneficiaries_target?: number;
  featured_image_url?: string;
  is_featured?: boolean;
}

export interface RegisterVolunteerRequest {
  user_id: string;
  occupation?: string;
  organization?: string;
  skills?: string[];
  interests?: string[];
  availability?: 'weekdays' | 'weekends' | 'flexible' | 'remote_only';
  hours_per_month?: number;
  languages_spoken?: string[];
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  bio?: string;
  motivation?: string;
}

export interface CreateExpenseRequest {
  program_id?: string;
  category: ExpenseCategory;
  sub_category?: string;
  amount: number;
  expense_date: Date;
  vendor_name?: string;
  vendor_contact?: string;
  description: string;
  payment_method?: string;
  invoice_number?: string;
  notes?: string;
}

// ============================================
// DASHBOARD STATISTICS INTERFACES
// ============================================

export interface DashboardStats {
  total_donations: number;
  total_amount: number;
  total_donors: number;
  active_programs: number;
  total_beneficiaries: number;
  active_volunteers: number;
  monthly_growth: number;
  funds_utilization_percentage: number;
}

export interface DonorDashboardStats {
  total_donated: number;
  donation_count: number;
  lives_impacted: number;
  tax_receipts_available: number;
  recurring_donations: number;
  programs_supported: number;
}

export interface VolunteerDashboardStats {
  total_hours: number;
  activities_completed: number;
  events_attended: number;
  certificates_earned: number;
  rating: number;
  upcoming_activities: number;
}

// ============================================
// FILTER & PAGINATION INTERFACES
// ============================================

export interface PaginationParams {
  page: number;
  limit: number;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
    has_next: boolean;
    has_previous: boolean;
  };
}

export interface DonationFilters extends PaginationParams {
  donor_id?: string;
  program_id?: string;
  payment_status?: PaymentStatus;
  donation_type?: DonationType;
  start_date?: Date;
  end_date?: Date;
  min_amount?: number;
  max_amount?: number;
}

export interface ProgramFilters extends PaginationParams {
  category?: ProgramCategory;
  status?: ProgramStatus;
  is_featured?: boolean;
  search?: string;
}

export interface BeneficiaryFilters extends PaginationParams {
  verification_status?: VerificationStatus;
  category?: BeneficiaryCategory;
  city?: string;
  state?: string;
  program_id?: string;
}

// ============================================
// API RESPONSE INTERFACES
// ============================================

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errors?: Record<string, string[]>;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  error: string;
  errors?: Record<string, string[]>;
  status_code: number;
}
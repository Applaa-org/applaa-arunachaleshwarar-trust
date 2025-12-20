-- ============================================
-- HOPE FOUNDATION - DATABASE SCHEMA
-- PostgreSQL Database Schema
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- CORE TABLES
-- ============================================

-- Users Table (Donors, Volunteers, Admins, Beneficiaries)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('donor', 'volunteer', 'admin', 'beneficiary', 'trustee')),
    pan_number VARCHAR(10), -- For tax receipts (Indian donors)
    aadhar_number VARCHAR(12), -- Encrypted, for beneficiary verification
    date_of_birth DATE,
    gender VARCHAR(20),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100) DEFAULT 'India',
    postal_code VARCHAR(20),
    profile_image_url TEXT,
    is_anonymous BOOLEAN DEFAULT FALSE,
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Programs/Campaigns Table
CREATE TABLE programs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    full_description TEXT,
    category VARCHAR(50) NOT NULL CHECK (category IN ('education', 'food', 'healthcare', 'shelter', 'emergency', 'women_empowerment', 'child_welfare')),
    status VARCHAR(50) NOT NULL CHECK (status IN ('draft', 'ongoing', 'completed', 'upcoming', 'paused', 'cancelled')),
    location VARCHAR(255),
    location_coordinates POINT, -- Latitude, Longitude
    start_date DATE,
    end_date DATE,
    funds_goal DECIMAL(15, 2) NOT NULL,
    funds_raised DECIMAL(15, 2) DEFAULT 0,
    beneficiaries_target INTEGER,
    beneficiaries_reached INTEGER DEFAULT 0,
    featured_image_url TEXT,
    created_by UUID REFERENCES users(id),
    approved_by UUID REFERENCES users(id),
    is_featured BOOLEAN DEFAULT FALSE,
    is_tax_exempt BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Program Gallery Images
CREATE TABLE program_gallery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    uploaded_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Program Impact Metrics
CREATE TABLE program_impacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    impact_description TEXT NOT NULL,
    metric_name VARCHAR(100),
    metric_value VARCHAR(100),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- DONATION MANAGEMENT
-- ============================================

-- Donations Table
CREATE TABLE donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donation_number VARCHAR(50) UNIQUE NOT NULL, -- DYD-2024-00001
    donor_id UUID REFERENCES users(id),
    program_id UUID REFERENCES programs(id),
    amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    donation_type VARCHAR(50) NOT NULL CHECK (donation_type IN ('one-time', 'monthly', 'quarterly', 'yearly')),
    payment_method VARCHAR(50) CHECK (payment_method IN ('upi', 'card', 'net_banking', 'wallet', 'cheque', 'bank_transfer', 'cash')),
    payment_status VARCHAR(50) NOT NULL CHECK (payment_status IN ('pending', 'processing', 'success', 'failed', 'refunded', 'cancelled')),
    payment_gateway VARCHAR(50), -- razorpay, stripe, etc
    transaction_id VARCHAR(255),
    payment_gateway_response JSONB,
    is_anonymous BOOLEAN DEFAULT FALSE,
    donor_name VARCHAR(255), -- If anonymous or guest donation
    donor_email VARCHAR(255),
    donor_phone VARCHAR(20),
    donor_pan VARCHAR(10), -- For 80G certificate
    donor_address TEXT,
    purpose VARCHAR(50) CHECK (purpose IN ('general', 'program', 'zakat', 'corpus', 'emergency')),
    is_recurring BOOLEAN DEFAULT FALSE,
    recurring_parent_id UUID REFERENCES donations(id), -- For tracking recurring donations
    next_payment_date DATE,
    tax_receipt_number VARCHAR(50), -- 80G certificate number
    tax_receipt_issued_at TIMESTAMP WITH TIME ZONE,
    tax_receipt_url TEXT,
    notes TEXT,
    internal_notes TEXT, -- Admin only notes
    utm_source VARCHAR(100), -- Marketing tracking
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Donation Receipts (80G Certificates)
CREATE TABLE tax_receipts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    receipt_number VARCHAR(50) UNIQUE NOT NULL,
    financial_year VARCHAR(10) NOT NULL, -- 2023-24
    donation_id UUID REFERENCES donations(id),
    donor_id UUID REFERENCES users(id),
    donor_name VARCHAR(255) NOT NULL,
    donor_pan VARCHAR(10) NOT NULL,
    donor_address TEXT NOT NULL,
    total_amount DECIMAL(15, 2) NOT NULL,
    eligible_amount DECIMAL(15, 2) NOT NULL, -- 50% or 100% based on 80G type
    tax_exemption_percentage INTEGER DEFAULT 50,
    receipt_pdf_url TEXT,
    issued_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    issued_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- BENEFICIARY MANAGEMENT
-- ============================================

-- Beneficiaries Table
CREATE TABLE beneficiaries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    beneficiary_number VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id), -- If beneficiary has account
    full_name VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(255),
    aadhar_number_encrypted TEXT, -- Encrypted
    family_size INTEGER,
    monthly_income DECIMAL(10, 2),
    category VARCHAR(50) CHECK (category IN ('below_poverty_line', 'low_income', 'middle_income', 'special_needs', 'emergency')),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    location_coordinates POINT,
    photo_url TEXT,
    verification_status VARCHAR(50) CHECK (verification_status IN ('pending', 'verified', 'rejected', 'needs_review')),
    verified_by UUID REFERENCES users(id),
    verified_at TIMESTAMP WITH TIME ZONE,
    verification_documents JSONB, -- Array of document URLs
    notes TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Program Beneficiaries (Many-to-Many relationship)
CREATE TABLE program_beneficiaries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    beneficiary_id UUID REFERENCES beneficiaries(id) ON DELETE CASCADE,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(50) CHECK (status IN ('enrolled', 'active', 'completed', 'withdrawn', 'suspended')),
    benefits_received TEXT,
    satisfaction_rating INTEGER CHECK (satisfaction_rating BETWEEN 1 AND 5),
    feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(program_id, beneficiary_id)
);

-- ============================================
-- VOLUNTEER MANAGEMENT
-- ============================================

-- Volunteer Profiles
CREATE TABLE volunteer_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    volunteer_id VARCHAR(50) UNIQUE NOT NULL,
    occupation VARCHAR(100),
    organization VARCHAR(255),
    skills TEXT[], -- Array of skills
    interests TEXT[], -- Array of interests
    availability VARCHAR(50) CHECK (availability IN ('weekdays', 'weekends', 'flexible', 'remote_only')),
    hours_per_month INTEGER,
    languages_spoken TEXT[],
    emergency_contact_name VARCHAR(255),
    emergency_contact_phone VARCHAR(20),
    background_check_status VARCHAR(50) CHECK (background_check_status IN ('pending', 'cleared', 'rejected')),
    background_check_date DATE,
    total_hours_volunteered INTEGER DEFAULT 0,
    total_events_attended INTEGER DEFAULT 0,
    rating DECIMAL(3, 2) DEFAULT 0,
    bio TEXT,
    motivation TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Volunteer Activities
CREATE TABLE volunteer_activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    volunteer_id UUID REFERENCES volunteer_profiles(id),
    program_id UUID REFERENCES programs(id),
    activity_type VARCHAR(50) CHECK (activity_type IN ('field_work', 'office_work', 'event', 'training', 'awareness', 'fundraising')),
    activity_date DATE NOT NULL,
    hours_worked DECIMAL(5, 2) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    supervisor_id UUID REFERENCES users(id),
    feedback TEXT,
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    certificate_issued BOOLEAN DEFAULT FALSE,
    certificate_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- FINANCIAL MANAGEMENT
-- ============================================

-- Expenses Table
CREATE TABLE expenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    expense_number VARCHAR(50) UNIQUE NOT NULL,
    program_id UUID REFERENCES programs(id),
    category VARCHAR(50) NOT NULL CHECK (category IN ('program_direct', 'admin', 'fundraising', 'salaries', 'rent', 'utilities', 'travel', 'marketing', 'supplies', 'other')),
    sub_category VARCHAR(100),
    amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    expense_date DATE NOT NULL,
    vendor_name VARCHAR(255),
    vendor_contact VARCHAR(255),
    description TEXT NOT NULL,
    payment_method VARCHAR(50),
    invoice_number VARCHAR(100),
    invoice_url TEXT,
    receipt_url TEXT,
    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    paid_by UUID REFERENCES users(id),
    paid_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(50) CHECK (status IN ('pending', 'approved', 'paid', 'rejected')),
    notes TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Budget Allocations
CREATE TABLE budget_allocations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    financial_year VARCHAR(10) NOT NULL,
    program_id UUID REFERENCES programs(id),
    category VARCHAR(50) NOT NULL,
    allocated_amount DECIMAL(15, 2) NOT NULL,
    spent_amount DECIMAL(15, 2) DEFAULT 0,
    notes TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- COMPLIANCE & LEGAL
-- ============================================

-- Compliance Documents
CREATE TABLE compliance_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_type VARCHAR(50) NOT NULL CHECK (document_type IN ('80g_certificate', '12a_certificate', 'fcra_certificate', 'csr1', 'pan_card', 'tan_card', 'trust_deed', 'registration', 'audit_report', 'annual_return', 'policy', 'other')),
    document_name VARCHAR(255) NOT NULL,
    registration_number VARCHAR(100),
    issue_date DATE,
    expiry_date DATE,
    issuing_authority VARCHAR(255),
    document_url TEXT NOT NULL,
    status VARCHAR(50) CHECK (status IN ('active', 'expired', 'renewed', 'cancelled')),
    notes TEXT,
    uploaded_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Audit Trail
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL, -- 'CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'APPROVE', etc
    entity_type VARCHAR(50) NOT NULL, -- 'donation', 'program', 'user', etc
    entity_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- COMMUNICATION & ENGAGEMENT
-- ============================================

-- Email Templates
CREATE TABLE email_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    template_name VARCHAR(100) UNIQUE NOT NULL,
    subject VARCHAR(255) NOT NULL,
    body_html TEXT NOT NULL,
    body_text TEXT,
    variables JSONB, -- Available variables for template
    category VARCHAR(50) CHECK (category IN ('donation_receipt', 'welcome', 'thank_you', 'newsletter', 'program_update', 'reminder', 'alert')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sent Emails Log
CREATE TABLE email_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    recipient_email VARCHAR(255) NOT NULL,
    recipient_user_id UUID REFERENCES users(id),
    template_id UUID REFERENCES email_templates(id),
    subject VARCHAR(255) NOT NULL,
    status VARCHAR(50) CHECK (status IN ('queued', 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'failed')),
    email_service_provider VARCHAR(50), -- SendGrid, SES, etc
    external_message_id VARCHAR(255),
    error_message TEXT,
    sent_at TIMESTAMP WITH TIME ZONE,
    delivered_at TIMESTAMP WITH TIME ZONE,
    opened_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- SMS Logs
CREATE TABLE sms_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    recipient_phone VARCHAR(20) NOT NULL,
    recipient_user_id UUID REFERENCES users(id),
    message TEXT NOT NULL,
    status VARCHAR(50) CHECK (status IN ('queued', 'sent', 'delivered', 'failed')),
    sms_service_provider VARCHAR(50), -- Twilio, MSG91, etc
    external_message_id VARCHAR(255),
    error_message TEXT,
    sent_at TIMESTAMP WITH TIME ZONE,
    delivered_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Newsletters
CREATE TABLE newsletters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    content_html TEXT NOT NULL,
    content_text TEXT,
    status VARCHAR(50) CHECK (status IN ('draft', 'scheduled', 'sending', 'sent')),
    scheduled_for TIMESTAMP WITH TIME ZONE,
    sent_at TIMESTAMP WITH TIME ZONE,
    total_recipients INTEGER DEFAULT 0,
    total_sent INTEGER DEFAULT 0,
    total_opened INTEGER DEFAULT 0,
    total_clicked INTEGER DEFAULT 0,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    program_id UUID REFERENCES programs(id),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100), -- 'Donor', 'Beneficiary', 'Volunteer'
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    image_url TEXT,
    video_url TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    is_approved BOOLEAN DEFAULT FALSE,
    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- CONTENT MANAGEMENT
-- ============================================

-- Blog Posts / News
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image_url TEXT,
    category VARCHAR(50) CHECK (category IN ('news', 'story', 'announcement', 'milestone', 'impact')),
    status VARCHAR(50) CHECK (status IN ('draft', 'published', 'archived')),
    author_id UUID REFERENCES users(id),
    published_at TIMESTAMP WITH TIME ZONE,
    views_count INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    tags TEXT[],
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Gallery
CREATE TABLE gallery_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    thumbnail_url TEXT,
    category VARCHAR(50),
    program_id UUID REFERENCES programs(id),
    tags TEXT[],
    photographer_name VARCHAR(255),
    captured_date DATE,
    uploaded_by UUID REFERENCES users(id),
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- REPORTS & ANALYTICS
-- ============================================

-- Generated Reports
CREATE TABLE generated_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    report_type VARCHAR(50) NOT NULL CHECK (report_type IN ('financial', 'program', 'donor', 'beneficiary', 'compliance', 'annual', 'custom')),
    report_name VARCHAR(255) NOT NULL,
    financial_year VARCHAR(10),
    start_date DATE,
    end_date DATE,
    parameters JSONB,
    file_url TEXT,
    file_format VARCHAR(10) CHECK (file_format IN ('pdf', 'excel', 'csv')),
    generated_by UUID REFERENCES users(id),
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- SYSTEM CONFIGURATION
-- ============================================

-- Settings
CREATE TABLE system_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type VARCHAR(50) CHECK (setting_type IN ('string', 'number', 'boolean', 'json')),
    category VARCHAR(50),
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    updated_by UUID REFERENCES users(id),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

-- Users indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_created_at ON users(created_at DESC);

-- Programs indexes
CREATE INDEX idx_programs_status ON programs(status);
CREATE INDEX idx_programs_category ON programs(category);
CREATE INDEX idx_programs_slug ON programs(slug);
CREATE INDEX idx_programs_is_featured ON programs(is_featured);
CREATE INDEX idx_programs_dates ON programs(start_date, end_date);

-- Donations indexes
CREATE INDEX idx_donations_donor_id ON donations(donor_id);
CREATE INDEX idx_donations_program_id ON donations(program_id);
CREATE INDEX idx_donations_status ON donations(payment_status);
CREATE INDEX idx_donations_date ON donations(created_at DESC);
CREATE INDEX idx_donations_number ON donations(donation_number);
CREATE INDEX idx_donations_type ON donations(donation_type);

-- Beneficiaries indexes
CREATE INDEX idx_beneficiaries_status ON beneficiaries(verification_status);
CREATE INDEX idx_beneficiaries_category ON beneficiaries(category);
CREATE INDEX idx_beneficiaries_city ON beneficiaries(city);

-- Expenses indexes
CREATE INDEX idx_expenses_program_id ON expenses(program_id);
CREATE INDEX idx_expenses_category ON expenses(category);
CREATE INDEX idx_expenses_date ON expenses(expense_date DESC);
CREATE INDEX idx_expenses_status ON expenses(status);

-- Audit logs indexes
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at DESC);

-- Email logs indexes
CREATE INDEX idx_email_logs_recipient ON email_logs(recipient_email);
CREATE INDEX idx_email_logs_status ON email_logs(status);
CREATE INDEX idx_email_logs_created_at ON email_logs(created_at DESC);

-- ============================================
-- VIEWS FOR COMMON QUERIES
-- ============================================

-- Donation Summary View
CREATE VIEW donation_summary AS
SELECT 
    DATE_TRUNC('month', created_at) as month,
    COUNT(*) as total_donations,
    SUM(amount) as total_amount,
    AVG(amount) as average_amount,
    COUNT(DISTINCT donor_id) as unique_donors,
    COUNT(CASE WHEN donation_type = 'monthly' THEN 1 END) as recurring_donors
FROM donations
WHERE payment_status = 'success'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- Program Statistics View
CREATE VIEW program_statistics AS
SELECT 
    p.id,
    p.title,
    p.status,
    p.funds_goal,
    p.funds_raised,
    ROUND((p.funds_raised / NULLIF(p.funds_goal, 0) * 100)::numeric, 2) as funding_percentage,
    p.beneficiaries_target,
    p.beneficiaries_reached,
    COUNT(DISTINCT d.id) as total_donations,
    COUNT(DISTINCT d.donor_id) as unique_donors,
    COUNT(DISTINCT pb.beneficiary_id) as enrolled_beneficiaries
FROM programs p
LEFT JOIN donations d ON p.id = d.program_id AND d.payment_status = 'success'
LEFT JOIN program_beneficiaries pb ON p.id = pb.program_id
GROUP BY p.id;

-- Active Volunteers View
CREATE VIEW active_volunteers AS
SELECT 
    u.id,
    u.first_name,
    u.last_name,
    u.email,
    u.phone,
    vp.volunteer_id,
    vp.total_hours_volunteered,
    vp.total_events_attended,
    vp.rating,
    COUNT(va.id) as activities_this_year,
    SUM(va.hours_worked) as hours_this_year
FROM users u
JOIN volunteer_profiles vp ON u.id = vp.user_id
LEFT JOIN volunteer_activities va ON vp.id = va.volunteer_id 
    AND EXTRACT(YEAR FROM va.activity_date) = EXTRACT(YEAR FROM CURRENT_DATE)
WHERE u.is_active = TRUE AND vp.is_active = TRUE
GROUP BY u.id, vp.id;

-- ============================================
-- TRIGGERS
-- ============================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables with updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_donations_updated_at BEFORE UPDATE ON donations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_beneficiaries_updated_at BEFORE UPDATE ON beneficiaries
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_expenses_updated_at BEFORE UPDATE ON expenses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Auto-update program funds_raised when donation is successful
CREATE OR REPLACE FUNCTION update_program_funds()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.payment_status = 'success' AND NEW.program_id IS NOT NULL THEN
        IF TG_OP = 'INSERT' THEN
            UPDATE programs 
            SET funds_raised = funds_raised + NEW.amount 
            WHERE id = NEW.program_id;
        ELSIF TG_OP = 'UPDATE' AND OLD.payment_status != 'success' THEN
            UPDATE programs 
            SET funds_raised = funds_raised + NEW.amount 
            WHERE id = NEW.program_id;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_program_funds_trigger
AFTER INSERT OR UPDATE ON donations
FOR EACH ROW EXECUTE FUNCTION update_program_funds();

-- ============================================
-- SEED DATA (Initial Configuration)
-- ============================================

-- Insert default admin user (password: Admin@123 - hashed)
INSERT INTO users (email, password_hash, first_name, last_name, role, is_active, email_verified)
VALUES ('admin@hopefoundation.org', crypt('Admin@123', gen_salt('bf')), 'System', 'Administrator', 'admin', TRUE, TRUE);

-- Insert system settings
INSERT INTO system_settings (setting_key, setting_value, setting_type, category, description, is_public) VALUES
('organization_name', 'Hope Foundation', 'string', 'general', 'Organization name', TRUE),
('organization_email', 'info@hopefoundation.org', 'string', 'general', 'Primary contact email', TRUE),
('organization_phone', '+1 (555) 123-4567', 'string', 'general', 'Primary contact phone', TRUE),
('80g_registration_number', 'DIT(E)/MC/80G/2022/12345', 'string', 'compliance', '80G registration number', TRUE),
('12a_registration_number', 'DIT(E)/12A/2009/6789', 'string', 'compliance', '12A registration number', TRUE),
('fcra_registration_number', '231651234', 'string', 'compliance', 'FCRA registration number', TRUE),
('pan_number', 'AAATT1234B', 'string', 'compliance', 'Organization PAN', TRUE),
('tan_number', 'DELT12345F', 'string', 'compliance', 'Organization TAN', TRUE),
('current_financial_year', '2023-24', 'string', 'financial', 'Current financial year', FALSE),
('tax_exemption_percentage', '50', 'number', 'financial', 'Default 80G exemption percentage', FALSE),
('minimum_donation_amount', '100', 'number', 'donation', 'Minimum donation amount in INR', TRUE),
('enable_recurring_donations', 'true', 'boolean', 'donation', 'Enable recurring donations feature', TRUE),
('payment_gateway', 'razorpay', 'string', 'payment', 'Primary payment gateway', FALSE),
('enable_email_notifications', 'true', 'boolean', 'notifications', 'Enable email notifications', FALSE),
('enable_sms_notifications', 'true', 'boolean', 'notifications', 'Enable SMS notifications', FALSE);

-- ============================================
-- SECURITY & PERMISSIONS
-- ============================================

-- Row Level Security (RLS) example
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own donations
CREATE POLICY donations_select_policy ON donations
    FOR SELECT
    USING (auth.uid() = donor_id OR auth.role() = 'admin');

-- Policy: Only admins can insert donations
CREATE POLICY donations_insert_policy ON donations
    FOR INSERT
    WITH CHECK (auth.role() IN ('admin', 'staff'));

-- ============================================
-- COMMENTS FOR DOCUMENTATION
-- ============================================

COMMENT ON TABLE users IS 'Central user table for all user types';
COMMENT ON TABLE programs IS 'Charity programs and campaigns';
COMMENT ON TABLE donations IS 'All donation transactions with payment details';
COMMENT ON TABLE beneficiaries IS 'People receiving benefits from programs';
COMMENT ON TABLE expenses IS 'Organizational expenses for transparency';
COMMENT ON TABLE tax_receipts IS '80G tax exemption certificates';
COMMENT ON TABLE audit_logs IS 'Complete audit trail for compliance';

-- End of schema
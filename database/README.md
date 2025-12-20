# Hope Foundation - Database Documentation

## Overview

This database schema is designed for a comprehensive charity trust management system with the following features:

- ✅ User management (Donors, Volunteers, Admins, Beneficiaries)
- ✅ Program/Campaign management
- ✅ Donation tracking with payment gateway integration
- ✅ Beneficiary management and tracking
- ✅ Volunteer management and activity tracking
- ✅ Financial management (Expenses, Budget allocations)
- ✅ Compliance and legal document management
- ✅ 80G tax receipt generation
- ✅ Email/SMS communication logs
- ✅ Audit trail for all critical operations
- ✅ Reports and analytics

## Database Setup

### Prerequisites

- PostgreSQL 14+ or Supabase account
- Database admin access

### Installation Steps

#### Option 1: Using PostgreSQL

```bash
# Create database
createdb hope_foundation

# Run schema
psql -d hope_foundation -f schema.sql
```

#### Option 2: Using Supabase

1. Create a new project on [Supabase](https://supabase.com)
2. Go to SQL Editor
3. Copy contents of `schema.sql`
4. Execute the SQL

### Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/hope_foundation
DATABASE_POOL_SIZE=20
```

## Schema Overview

### Core Tables

#### Users Table
- Stores all user types (donors, volunteers, admins, beneficiaries, trustees)
- Includes authentication and profile information
- Supports PAN/Aadhar for Indian compliance

#### Programs Table
- Campaign/program management
- Tracks funding goals and progress
- Supports multiple categories (education, food, healthcare, etc.)
- Includes location-based tracking

#### Donations Table
- Complete donation transaction history
- Payment gateway integration support
- 80G tax receipt tracking
- Recurring donation support
- UTM tracking for marketing attribution

#### Beneficiaries Table
- People receiving benefits
- Verification workflow
- Privacy-compliant (encrypted sensitive data)
- Geographic tracking

#### Expenses Table
- Transparent expense tracking
- Approval workflow
- Category-wise classification
- Document attachment support

### Supporting Tables

- **volunteer_profiles**: Extended volunteer information
- **volunteer_activities**: Hour tracking and certificates
- **tax_receipts**: 80G certificate generation
- **compliance_documents**: Legal document management
- **audit_logs**: Complete audit trail
- **email_logs/sms_logs**: Communication tracking

## Key Features

### 1. Financial Compliance

The schema supports complete financial compliance required for Indian charitable trusts:

- 80G tax exemption certificates
- 12A registration tracking
- FCRA compliance for foreign donations
- Complete audit trail
- Transparent expense tracking

### 2. Data Security

- Password hashing with bcrypt
- Encrypted sensitive data (Aadhar numbers)
- Row-level security policies
- Audit logging for all critical operations

### 3. Scalability

- Proper indexing for performance
- Materialized views for complex queries
- Partitioning support for large tables
- Connection pooling compatible

### 4. Integration Ready

- Payment gateway integration (Razorpay, Stripe)
- Email service integration (SendGrid, AWS SES)
- SMS service integration (Twilio, MSG91)
- Storage integration for documents/images

## Common Queries

### Get Donation Summary by Month

```sql
SELECT * FROM donation_summary
WHERE month >= DATE_TRUNC('year', CURRENT_DATE)
ORDER BY month DESC;
```

### Get Program Statistics

```sql
SELECT * FROM program_statistics
WHERE status = 'ongoing'
ORDER BY funding_percentage DESC;
```

### Get Active Volunteers

```sql
SELECT * FROM active_volunteers
WHERE hours_this_year > 0
ORDER BY hours_this_year DESC
LIMIT 10;
```

### Generate 80G Receipt

```sql
INSERT INTO tax_receipts (
  receipt_number,
  financial_year,
  donation_id,
  donor_id,
  donor_name,
  donor_pan,
  donor_address,
  total_amount,
  eligible_amount,
  tax_exemption_percentage,
  issued_by
) VALUES (
  '80G-2024-00001',
  '2023-24',
  'donation_uuid',
  'donor_uuid',
  'John Doe',
  'ABCDE1234F',
  '123 Street, City',
  10000,
  5000,
  50,
  'admin_uuid'
);
```

## Maintenance

### Regular Tasks

1. **Backup Database** (Daily)
   ```bash
   pg_dump hope_foundation > backup_$(date +%Y%m%d).sql
   ```

2. **Vacuum and Analyze** (Weekly)
   ```sql
   VACUUM ANALYZE;
   ```

3. **Archive Old Logs** (Monthly)
   ```sql
   DELETE FROM audit_logs WHERE created_at < NOW() - INTERVAL '1 year';
   DELETE FROM email_logs WHERE created_at < NOW() - INTERVAL '1 year';
   ```

4. **Update Statistics** (Weekly)
   ```sql
   ANALYZE;
   ```

### Performance Monitoring

```sql
-- Check slow queries
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- Check table sizes
SELECT
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

## Security Best Practices

1. **Never store plain passwords** - Always use password_hash with bcrypt
2. **Encrypt sensitive data** - Aadhar, bank details, etc.
3. **Use Row Level Security** - Restrict data access at database level
4. **Regular backups** - Automate daily backups
5. **Audit critical operations** - Use audit_logs table
6. **Limit database access** - Use connection pooling and read replicas

## Migrations

When making schema changes:

1. Create a new migration file: `migrations/YYYYMMDD_description.sql`
2. Test on development database first
3. Document the changes
4. Apply during low-traffic period
5. Keep rollback script ready

## Support

For database-related issues:
- Check logs: `tail -f /var/log/postgresql/postgresql.log`
- Check connections: `SELECT * FROM pg_stat_activity;`
- Check locks: `SELECT * FROM pg_locks;`

## License

Internal use only - Hope Foundation
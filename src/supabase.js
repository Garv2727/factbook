
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://szduhpoxyksgscpzfqby.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6ZHVocG94eWtzZ3NjcHpmcWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3OTkxNTUsImV4cCI6MjAwMjM3NTE1NX0.90GlLNsoIOZ37hjbMubMIhvPJSXruJBuYW7Dkw0iZPg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vpstrwdjvsrlzgsippqw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwc3Ryd2RqdnNybHpnc2lwcHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjI4MzMsImV4cCI6MjA2NTEzODgzM30.4CqlHBifuS7YP0HngceKsReZ5rJPgeyXg5XsYBBkkuw';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

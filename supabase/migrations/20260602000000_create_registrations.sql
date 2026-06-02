-- Create registrations table for public camp signups
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  sessions TEXT NOT NULL,
  experience TEXT NOT NULL,
  background TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS (Row Level Security) for database security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow public insertion (anyone can fill out the form to register)
CREATE POLICY "Allow public insert to registrations" 
ON public.registrations FOR INSERT 
WITH CHECK (true);

-- No select policy is created, meaning only the system administrator (Service Role) 
-- can view the registered users, keeping all student contact info 100% private.

-- SQL Schema for Zertte Case Championship registrations

-- 1. Create the registrations table
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  team_name TEXT NOT NULL,
  captain_name TEXT NOT NULL,
  email TEXT NOT NULL,
  contact TEXT NOT NULL,
  university TEXT,
  team_size TEXT,
  comment TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy that allows anyone (anonymous public users) to insert registrations
CREATE POLICY "Allow public insert" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Note: Because RLS is enabled and no SELECT, UPDATE, or DELETE policies are defined,
-- all read, update, and delete operations by anonymous/public users will be denied.

-- Orders table
-- Profiles of authenticated users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  full_name text,
  phone text
);

-- Orders table (optionally linked to user)
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  order_number text not null unique,
  product_type text not null,
  dimensions text not null,
  from_location text not null,
  to_location text not null,
  user_id uuid references auth.users(id)
);

-- Enable RLS
alter table public.orders enable row level security;
alter table public.profiles enable row level security;

-- Public insert/select policies (adjust if you need auth)
-- Orders policies
-- Allow anonymous inserts (public site form)
do $$ begin
  drop policy if exists "insert orders anon" on public.orders;
  create policy "insert orders anon" on public.orders for insert to anon with check (user_id is null);
exception when undefined_object then null; end $$;

-- Allow authenticated users to insert their own orders
do $$ begin
  drop policy if exists "insert orders auth" on public.orders;
  create policy "insert orders auth" on public.orders for insert to authenticated with check (user_id = auth.uid());
exception when undefined_object then null; end $$;

-- Allow authenticated users to select only their orders
do $$ begin
  drop policy if exists "select orders auth" on public.orders;
  create policy "select orders auth" on public.orders for select to authenticated using (user_id = auth.uid());
exception when undefined_object then null; end $$;

-- Profiles policies
do $$ begin
  drop policy if exists "select own profile" on public.profiles;
  create policy "select own profile" on public.profiles for select to authenticated using (id = auth.uid());
exception when undefined_object then null; end $$;

do $$ begin
  drop policy if exists "update own profile" on public.profiles;
  create policy "update own profile" on public.profiles for update to authenticated using (id = auth.uid());
exception when undefined_object then null; end $$;

do $$ begin
  drop policy if exists "insert own profile" on public.profiles;
  create policy "insert own profile" on public.profiles for insert to authenticated with check (id = auth.uid());
exception when undefined_object then null; end $$;

-- Optional: create profile on user signup via trigger
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();



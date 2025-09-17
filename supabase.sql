-- Orders table
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  order_number text not null unique,
  product_type text not null,
  dimensions text not null,
  from_location text not null,
  to_location text not null
);

-- Enable RLS
alter table public.orders enable row level security;

-- Public insert/select policies (adjust if you need auth)
do $$ begin
  create policy "insert orders anon" on public.orders for insert to anon with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "select orders anon" on public.orders for select to anon using (true);
exception when duplicate_object then null; end $$;



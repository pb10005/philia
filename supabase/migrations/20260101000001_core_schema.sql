create table public.oshi (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  category text not null check (category in ('idol','anime','vtuber','sports','actor','musician','other')),
  started_at date not null,
  cover_image_url text,
  tags text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.memory_logs (
  id uuid primary key default gen_random_uuid(),
  oshi_id uuid not null references public.oshi(id) on delete cascade,
  happened_at timestamptz not null,
  emotion_tags text[] not null default '{}',
  intensity smallint not null check (intensity between 1 and 10),
  body text not null,
  media_urls text[] not null default '{}',
  embedding vector(1536),
  created_at timestamptz not null default now()
);

create table public.collection_items (
  id uuid primary key default gen_random_uuid(),
  oshi_id uuid not null references public.oshi(id) on delete cascade,
  type text not null check (type in ('goods','concert','streaming','vote','magazine','other')),
  title text not null,
  acquired_at date not null,
  price_jpy integer,
  image_url text,
  is_grail boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger oshi_updated_at
  before update on public.oshi
  for each row execute function public.handle_updated_at();

alter table public.oshi enable row level security;
alter table public.memory_logs enable row level security;
alter table public.collection_items enable row level security;

create policy "oshi: owner full access"
  on public.oshi for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "memory_logs: owner full access"
  on public.memory_logs for all
  using (
    exists (
      select 1 from public.oshi
      where id = memory_logs.oshi_id and user_id = auth.uid()
    )
  );

create policy "collection_items: owner full access"
  on public.collection_items for all
  using (
    exists (
      select 1 from public.oshi
      where id = collection_items.oshi_id and user_id = auth.uid()
    )
  );

create index on public.oshi(user_id);
create index on public.memory_logs(oshi_id, happened_at desc);
create index on public.collection_items(oshi_id, acquired_at desc);

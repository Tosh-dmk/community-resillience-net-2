import { PageShell } from "./PageShell";

export function CardSkeleton() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="h-6 w-2/3 rounded-md bg-muted/60 animate-pulse" />
      <div className="mt-4 space-y-2.5">
        <div className="h-4 w-full rounded-md bg-muted/40 animate-pulse" />
        <div className="h-4 w-5/6 rounded-md bg-muted/40 animate-pulse" />
        <div className="h-4 w-4/5 rounded-md bg-muted/40 animate-pulse" />
      </div>
      <div className="mt-6 flex gap-2">
        <div className="h-9 w-24 rounded-full bg-muted/50 animate-pulse" />
        <div className="h-9 w-24 rounded-full bg-muted/30 animate-pulse" />
      </div>
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div className="max-w-2xl space-y-3">
      <div className="h-10 w-3/4 rounded-lg bg-muted/70 animate-pulse" />
      <div className="h-5 w-5/6 rounded-md bg-muted/40 animate-pulse" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-12">
        {/* Welcome Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="h-9 w-60 rounded-md bg-muted/70 animate-pulse" />
            <div className="h-5 w-80 rounded-md bg-muted/40 animate-pulse" />
          </div>
          <div className="h-10 w-36 rounded-full bg-muted/60 animate-pulse" />
        </div>

        {/* Status Card & Overview Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-3xl border border-border bg-card p-8 shadow-sm space-y-4">
            <div className="h-6 w-40 rounded-md bg-muted/60 animate-pulse" />
            <div className="h-4 w-full rounded-md bg-muted/40 animate-pulse" />
            <div className="mt-6 space-y-3">
              <div className="h-4 w-1/3 rounded-md bg-muted/50 animate-pulse" />
              <div className="h-2.5 w-full rounded-full bg-muted/30 animate-pulse" />
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm space-y-4">
            <div className="h-6 w-32 rounded-md bg-muted/60 animate-pulse" />
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 w-16 rounded bg-muted/40 animate-pulse" />
                <div className="h-4 w-10 rounded bg-muted/50 animate-pulse" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-24 rounded bg-muted/40 animate-pulse" />
                <div className="h-4 w-10 rounded bg-muted/50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Aid List */}
        <div className="space-y-6">
          <div className="h-7 w-48 rounded-md bg-muted/60 animate-pulse" />
          <div className="grid gap-6 md:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function MapSkeleton() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-8">
        <PageHeaderSkeleton />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* List Sidebar */}
          <div className="space-y-4 lg:col-span-1">
            <div className="h-10 w-full rounded-xl bg-muted/50 animate-pulse" />
            <div className="space-y-3 h-[500px] overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-border p-4 space-y-2.5">
                  <div className="h-5 w-2/3 rounded bg-muted/60 animate-pulse" />
                  <div className="h-4 w-1/2 rounded bg-muted/40 animate-pulse" />
                  <div className="h-3.5 w-full rounded bg-muted/30 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Map Frame Placeholder */}
          <div className="lg:col-span-2 h-[550px] rounded-3xl bg-muted/20 border border-border animate-pulse flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="size-8 rounded-full border-4 border-muted-foreground/30 border-t-muted-foreground animate-spin" />
              <span className="text-sm text-muted-foreground">Loading Map Components...</span>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function CommunitySkeleton() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-8">
        <PageHeaderSkeleton />

        {/* Support Groups Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export function OrganizationsSkeleton() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-8">
        <PageHeaderSkeleton />

        {/* Search & Filter Row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="h-10 w-full sm:max-w-xs rounded-xl bg-muted/50 animate-pulse" />
          <div className="flex gap-2 overflow-hidden py-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-9 w-20 rounded-full bg-muted/40 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export function FundingSkeleton() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-8">
        <PageHeaderSkeleton />

        {/* Crowdfunding campaigns grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4"
            >
              <div className="h-5 w-3/4 rounded bg-muted/60 animate-pulse" />
              <div className="h-4 w-1/3 rounded bg-muted/40 animate-pulse" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-4 w-16 rounded bg-muted/40 animate-pulse" />
                  <div className="h-4 w-12 rounded bg-muted/50 animate-pulse" />
                </div>
                <div className="h-2 w-full rounded-full bg-muted/30 animate-pulse" />
              </div>
              <div className="h-10 w-full rounded-full bg-muted/50 animate-pulse mt-4" />
            </div>
          ))}
        </div>

        {/* Section title */}
        <div className="h-7 w-52 rounded bg-muted/60 animate-pulse pt-4" />

        {/* Aid funds grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export function ResourcesSkeleton() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-8">
        <PageHeaderSkeleton />

        {/* Tabs Row */}
        <div className="flex border-b border-border gap-6">
          <div className="h-8 w-24 border-b-2 border-muted/70 animate-pulse" />
          <div className="h-8 w-32 bg-transparent animate-pulse" />
        </div>

        {/* Resources Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Guides */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-6 w-40 rounded bg-muted/60 animate-pulse" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 p-4 border border-border rounded-2xl">
                  <div className="size-10 rounded-xl bg-muted/50 animate-pulse shrink-0" />
                  <div className="space-y-2 w-full">
                    <div className="h-5 w-1/3 rounded bg-muted/60 animate-pulse" />
                    <div className="h-4 w-full rounded bg-muted/40 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Updates */}
          <div className="space-y-6">
            <div className="h-6 w-36 rounded bg-muted/60 animate-pulse" />
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-2xl border border-border p-5 space-y-3">
                  <div className="h-4 w-1/4 rounded bg-muted/40 animate-pulse" />
                  <div className="h-5 w-5/6 rounded bg-muted/60 animate-pulse" />
                  <div className="h-3.5 w-full rounded bg-muted/30 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function PlayerSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-muted animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              <div className="h-3 w-32 bg-muted animate-pulse rounded" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
            <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-muted animate-pulse rounded" />
            <div className="h-3 w-4/5 bg-muted animate-pulse rounded" />
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-16 bg-muted animate-pulse rounded" />
            <div className="h-8 w-24 bg-muted animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function TeamSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="h-5 w-32 bg-muted animate-pulse rounded" />
            <div className="h-5 w-5 bg-muted animate-pulse rounded" />
          </div>
          <div className="h-3 w-40 bg-muted animate-pulse rounded" />
          <div className="flex gap-2">
            <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
            <div className="h-5 w-32 bg-muted animate-pulse rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-muted animate-pulse rounded" />
            <div className="flex gap-1">
              <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
              <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-muted animate-pulse rounded" />
            <div className="h-3 w-4/5 bg-muted animate-pulse rounded" />
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-16 bg-muted animate-pulse rounded" />
            <div className="h-8 w-24 bg-muted animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}


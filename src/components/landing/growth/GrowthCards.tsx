import { cn } from "@/lib/utils";
function DeltaChip({ children }: { children: string }) {
  return (
    <span className="rounded-3xl bg-electric-lime-400 px-2 py-0.5 text-label-xs leading-5 whitespace-nowrap text-shuttle-gray-950">
      {children}
    </span>
  );
}

function BlueCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("absolute flex flex-col gap-2 rounded-2xl bg-persian-blue-800 p-4 text-white", className)}>{children}</div>;
}

function CardHeader({ title, period }: { title: string; period: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-label-m">{title}</p>
      <p className="text-[10px] leading-[1.2] text-shuttle-gray-100">{period}</p>
    </div>
  );
}

type RevenueCardProps = {
  amount: string;
  delta: string;
  progress: number;
  className?: string;
};

export function TotalRevenueCard({ amount, delta, progress, className }: RevenueCardProps) {
  return (
    <BlueCard className={cn("w-58", className)}>
      <CardHeader title="Total Revenue" period="July 1-28" />
      <div className="flex w-50 items-center justify-between">
        <p className="font-heading text-heading-s">{amount}</p>
        <DeltaChip>{delta}</DeltaChip>
      </div>
      <div
        role="progressbar"
        aria-label="Revenue goal"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-50 overflow-hidden rounded-3xl bg-white"
      >
        <div className="h-full rounded-3xl bg-electric-lime-400" style={{ width: `${progress}%` }} />
      </div>
    </BlueCard>
  );
}

export function YearToDateCard({
  amount,
  delta,
  className,
}: Omit<RevenueCardProps, "progress">) {
  return (
    <BlueCard className={cn("items-start", className)}>
      <CardHeader title="Year to Date" period="2023" />
      <p className="font-heading text-heading-s">{amount}</p>
      <DeltaChip>{delta}</DeltaChip>
    </BlueCard>
  );
}


export function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>
  );
}

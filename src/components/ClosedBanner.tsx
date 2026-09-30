interface ClosedBannerProps {
  nextOpen?: string;
}

export function ClosedBanner({ nextOpen }: ClosedBannerProps) {
  return (
    <div
      className="no-print border-b border-amber-200 bg-amber-50 px-5 py-4 text-center"
      role="status"
    >
      <p className="font-medium text-amber-900">
        We&apos;re closed today
        {nextOpen && (
          <span className="font-normal text-amber-800">
            {" "}
            · See you {nextOpen}
          </span>
        )}
      </p>
    </div>
  );
}

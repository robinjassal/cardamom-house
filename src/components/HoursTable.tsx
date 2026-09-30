import { capitalize } from "@/lib/utils";

interface HoursTableProps {
  hours: Record<string, string>;
  today: string;
}

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export function HoursTable({ hours, today }: HoursTableProps) {
  return (
    <section aria-labelledby="hours-heading">
      <h2
        id="hours-heading"
        className="mb-4 font-display text-2xl font-bold text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Opening Hours
      </h2>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-stone-100">
        <table className="w-full text-sm">
          <tbody>
            {DAYS.map((day) => {
              const isToday = day === today;
              const isClosed = hours[day] === "Closed";

              return (
                <tr
                  key={day}
                  className={`border-b border-stone-50 last:border-0 ${
                    isToday ? "bg-brand-light" : ""
                  }`}
                >
                  <td
                    className={`px-4 py-3 font-medium ${
                      isToday ? "text-brand-dark" : "text-ink"
                    }`}
                  >
                    {capitalize(day)}
                    {isToday && (
                      <span className="ml-2 text-xs font-normal text-brand">
                        Today
                      </span>
                    )}
                  </td>
                  <td
                    className={`px-4 py-3 text-right ${
                      isClosed
                        ? "text-stone-400"
                        : isToday
                          ? "font-medium text-brand-dark"
                          : "text-muted"
                    }`}
                  >
                    {hours[day]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

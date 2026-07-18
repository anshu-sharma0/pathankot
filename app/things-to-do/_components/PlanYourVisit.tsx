import React from 'react';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';

export interface OperatingHour {
  place: string;
  hours: string;
  fee: string;
}

export interface PlanYourVisitProps {
  operatingHours: OperatingHour[];
  title?: string;
  description?: string;
}

export default function PlanYourVisit({
  operatingHours,
  title = "Plan Your Visit",
  description = "Operating hours and ticket prices for major attractions in Pathankot. Timings may vary seasonally; confirm locally before visiting."
}: PlanYourVisitProps) {
  return (
    <section className="bg-slate-900 text-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[60%] h-full bg-linear-to-l from-indigo-600/20 to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-400">{description}</p>
        </div>

        <Table headers={["Attraction", "Visiting Hours", "Entry Fee"]}>
          {operatingHours.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium text-white">{row.place}</TableCell>
              <TableCell className="text-slate-400">{row.hours}</TableCell>
              <TableCell className="text-slate-400">
                <Badge variant="emerald">{row.fee}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    </section>
  );
}

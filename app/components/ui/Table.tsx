import React from 'react';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}

export function Table({ headers, children, className = '' }: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-700/50">
            {headers.map((h, idx) => (
              <th key={idx} className="py-4 px-4 font-semibold text-slate-300">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/50">
          {children}
        </tbody>
      </table>
    </div>
  );
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

export function TableRow({ children, className = '' }: TableRowProps) {
  return (
    <tr className={`hover:bg-slate-800/30 transition-colors ${className}`}>
      {children}
    </tr>
  );
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export function TableCell({ children, className = '' }: TableCellProps) {
  return (
    <td className={`py-4 px-4 ${className}`}>
      {children}
    </td>
  );
}

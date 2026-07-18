import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Card } from "./ui/Card";

export type Color = "amber" | "blue" | "emerald" | "rose" | "violet" | "slate" | "teal" | "purple";

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    badge?: string;
    color?: Color;
    href?: string;
    buttonText?: string;
    tags?: string[];
}

const colorMap: Record<Color, string> = {
    amber: "border-amber-200 bg-amber-50 text-amber-600",
    blue: "border-blue-200 bg-blue-50 text-blue-600",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-600",
    rose: "border-rose-200 bg-rose-50 text-rose-600",
    violet: "border-violet-200 bg-violet-50 text-violet-600",
    slate: "border-slate-200 bg-slate-50 text-slate-600",
    teal: "border-teal-200 bg-teal-50 text-teal-600",
    purple: "border-purple-200 bg-purple-50 text-purple-600",
};

const badgeColorMap: Record<Color, string> = {
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
    emerald: "bg-emerald-100 text-emerald-700",
    rose: "bg-rose-100 text-rose-700",
    violet: "bg-violet-100 text-violet-700",
    slate: "bg-slate-100 text-slate-700",
    teal: "bg-teal-100 text-teal-700",
    purple: "bg-purple-100 text-purple-700",
};

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    badge,
    color = "amber",
    href = "#",
    buttonText = "Read More",
    tags,
}: FeatureCardProps) {
    return (
        <Card className="group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div
                        className={`flex h-12 w-12 mt-1 shrink-0 items-center justify-center rounded-2xl border ${colorMap[color]}`}
                    >
                        <Icon className="h-6 w-6" />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-amber-600">
                            {title}
                        </h3>

                        {badge && (
                            <span
                                className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeColorMap[color]}`}
                            >
                                {badge}
                            </span>
                        )}
                    </div>
                </div>

            </div>

            <div className="mt-6 flex-1">
                <p className="text-sm leading-relaxed text-slate-500">
                    {description}
                </p>
            </div>

            {tags && tags.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200 hover:bg-slate-100 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {href && href !== "#" ? (
                <Link
                    href={href}
                    className={`mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5 text-${color}-600`}
                >
                    {buttonText}
                    <ArrowRight className="h-4 w-4" />
                </Link>
            ) : null}
        </Card>
    );
}

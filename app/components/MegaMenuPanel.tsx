import Link from "next/link";

interface NavItem {
    label: string;
    href: string;
    icon: React.ElementType;
    description: string;
}

interface NavGroup {
    id: string;
    label: string;
    items: NavItem[];
}

export default function MegaMenuPanel({
    group,
    onClose,
}: {
    group: NavGroup;
    onClose: () => void;
}) {
    return (
        <div className="absolute top-full  left-1/2 -translate-x-1/2 mt-3.5 w-[560px] rounded-3xl border border-white/60 bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.10)] ring-1 ring-slate-900/5 overflow-hidden z-50 transition-all duration-100 ease-out"
        >
            <div className="grid grid-cols-2 gap-2 p-4">
                {group.items.map(({ label, href, icon: Icon, description }) => (
                    <Link
                        key={label}
                        href={href}
                        onClick={onClose}
                        className="group flex items-start gap-3.5 rounded-2xl px-2 py-3 transition-all duration-150 hover:bg-slate-50 active:scale-[0.98]" >
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-50 to-amber-100/50 text-amber-600 border border-amber-200/30 transition-transform duration-150 group-hover:scale-105">
                            <Icon className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-[14px] font-bold leading-tight text-slate-800 transition-colors duration-150 group-hover:text-amber-700">
                                {label}
                            </p>

                            <p className="mt-1 text-[13px] leading-snug font-medium text-slate-500">
                                {description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* <div className="flex items-center justify-between border-t border-slate-200/60 bg-gradient-to-r from-slate-50 to-slate-100/50 px-5 py-4">
                <span className="text-[13px] font-semibold text-slate-500">
                    Pathankot City Portal
                </span>

                <span className="flex items-center gap-1.5 text-[13px] font-bold text-amber-600">
                    <MapPin className="h-4 w-4" />
                    Punjab, India
                </span>
            </div> */}
        </div>
    );
}
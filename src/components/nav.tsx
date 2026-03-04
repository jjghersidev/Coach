import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Training', '/training'],
  ['Strength', '/strength'],
  ['Nutrition', '/nutrition'],
  ['Dashboard', '/dashboard'],
  ['Coach Chat', '/coach'],
  ['Settings', '/settings']
];

export function Nav() {
  return (
    <nav className="sticky bottom-0 mt-8 grid grid-cols-4 gap-2 rounded-xl border border-slate-800 bg-slate-900 p-2 text-xs md:grid-cols-7">
      {links.map(([label, href]) => (
        <Link key={href} href={href} className="rounded p-2 text-center hover:bg-slate-800">
          {label}
        </Link>
      ))}
    </nav>
  );
}

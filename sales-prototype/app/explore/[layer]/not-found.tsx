import Link from "next/link";

export default function LayerNotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <h1 className="text-lg font-bold text-slate-900">Layer not found</h1>
      <p className="mt-2 text-sm text-slate-600">Use als, ems, or ims in the URL.</p>
      <Link
        href="/explore"
        className="mt-6 inline-block text-sm font-semibold text-brand-600 hover:underline"
      >
        Open product map
      </Link>
    </div>
  );
}

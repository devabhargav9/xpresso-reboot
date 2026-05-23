import { notFound } from "next/navigation";
import { DEMOS, getDemo } from "@/lib/demos";
import { DemoStub } from "@/components/DemoStub";

export function generateStaticParams() {
  return DEMOS.map((d) => {
    const [layer, slug] = d.slug.split("/");
    return { layer, slug };
  });
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ layer: string; slug: string }>;
}) {
  const { layer, slug } = await params;
  const demo = getDemo(`${layer}/${slug}`);
  if (!demo) {
    notFound();
  }
  return <DemoStub demo={demo} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ layer: string; slug: string }>;
}) {
  const { layer, slug } = await params;
  const demo = getDemo(`${layer}/${slug}`);
  if (!demo) return { title: "Demo not found · Xpresso" };
  return {
    title: `${demo.title} · ${demo.layer} demo · Xpresso`,
    description: demo.wow,
  };
}

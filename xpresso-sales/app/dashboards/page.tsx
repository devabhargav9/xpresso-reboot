import { Container } from "@/components/Container";
import { DashboardSwitcher } from "@/components/dashboards/DashboardSwitcher";

export default function DashboardsPage() {
  return (
    <Container size="xl">
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Stakeholder dashboards
          </span>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What each stakeholder sees in Xpresso.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Six stakeholder lenses, one product. Pick a role on the left to load the dashboard mockup — every dashboard is pitch-ready with realistic mock data.
          </p>
        </div>

        <div className="mt-10">
          <DashboardSwitcher />
        </div>
      </div>
    </Container>
  );
}

export const metadata = {
  title: "Stakeholder dashboards · Xpresso",
  description:
    "What each of the eight institutional stakeholders sees in Xpresso — clickable dashboard mockups.",
};

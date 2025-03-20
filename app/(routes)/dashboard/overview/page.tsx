import { ReportItem } from "./components/ReportItem";
import { WelcomeUser } from "./components/WelcomeUser";

export default function OverviewPage() {
  return (
    <div>
      <WelcomeUser userName="Vitalik Burban" />
      <div className="flex flex-row gap-4 mt-4">
        <ReportItem title="Sleeping" report="8 hours" />
        <ReportItem title="Sleeping" report="8 hours" />
        <ReportItem title="Sleeping" report="8 hours" />
        <ReportItem title="Sleeping" report="8 hours" />
      </div>
    </div>
  );
}

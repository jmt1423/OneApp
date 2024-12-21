import DashboardTable from "./components/table";

export default function AnalytricsHomeDash() {
  return (
    <div className="grid pl-24 grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="font-bold text-lg">Your Dashboards</h1>
        <DashboardTable />
      </div>
      <h1 className="font-bold text-lg">Your Datasets</h1>
    </div>
  );
}

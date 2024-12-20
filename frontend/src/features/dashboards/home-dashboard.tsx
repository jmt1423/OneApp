import { DynamicChartCard } from "../../components/charts/chart-card";
import { InfoCard } from "../../components/cards/info-card";
import { EventCard } from "../../components/cards/event-card";

const chartData = [
  { month: "January", value: 1202 },
  { month: "February", value: 2402 },
  { month: "March", value: 4400 },
  { month: "April", value: 3200 },
  { month: "May", value: 5200 },
  { month: "June", value: 4200 },
  { month: "July", value: 6200 },
  { month: "August", value: 5200 },
  { month: "September", value: 7200 },
  { month: "October", value: 6200 },
  { month: "November", value: 8200 },
  { month: "December", value: 7200 },
];
const chartData2 = [
  { month: "January", value: 120 },
  { month: "February", value: 80 },
  { month: "March", value: 70 },
  { month: "April", value: 65 },
  { month: "May", value: 99 },
  { month: "June", value: 43 },
  { month: "July", value: 40 },
  { month: "August", value: 35 },
  { month: "September", value: 20 },
  { month: "October", value: 15 },
  { month: "November", value: 33 },
  { month: "December", value: 45 },
];
const chartData3 = [
  { month: "January", value: 120000 },
  { month: "February", value: 80000 },
  { month: "March", value: 70000 },
  { month: "April", value: 65000 },
  { month: "May", value: 99000 },
  { month: "June", value: 43000 },
  { month: "July", value: 40000 },
  { month: "August", value: 35000 },
  { month: "September", value: 55000 },
  { month: "October", value: 75000 },
  { month: "November", value: 130000 },
  { month: "December", value: 230000 },
];
const savedDashboards = [
  { title: "db-1", note: "This is a description of db-1" },
  { title: "db-2", note: "This is a description of db-2" },
  { title: "db-3", note: "This is a description of db-3" },
  { title: "db-4", note: "This is a description of db-4" },
  { title: "db-5", note: "This is a description of db-5" },
  { title: "db-6", note: "This is a description of db-6" },
  { title: "db-7", note: "This is a description of db-7" },
  { title: "db-8", note: "This is a description of db-8" },
  { title: "db-9", note: "This is a description of db-9" },
  { title: "db-10", note: "This is a description of db-10" },
];

export default function HomeDashBoard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-rows-[auto]">
        <DynamicChartCard
          title="Customers"
          value="4,201"
          change="5.9%"
          color="primary"
          icon="solar:spedometer-max-linear"
          xaxis="month"
          chartData={chartData}
        />
        <DynamicChartCard
          title="Leads"
          value="120"
          change="-5.9%"
          color="secondary"
          icon="solar:users-line"
          xaxis="month"
          chartData={chartData2}
        />
        <DynamicChartCard
          title="Total Revenue"
          value="$220,000"
          change="9.3%"
          color="warning"
          icon="solar:users-line"
          xaxis="month"
          chartData={chartData3}
        />
        <InfoCard
          title="Data Dashboards"
          buttonText="View All"
          cardData={savedDashboards}
        />{" "}
        <InfoCard title="Databases" buttonText="Manage Databases" />
        <InfoCard title="Tasks" buttonText="View All" />
      </div>
      <div className="text-sm my-2 flex flex-wrap justify-start">
        Calendar Events
      </div>
      <div className="flex flex-wrap justify-start gap-4 py-4">
        <EventCard title="Meeting with John" location="323 S Raeigh Road" />
        <EventCard title="Meeting with John" location="323 S Raeigh Road" />
        <EventCard title="Meeting with John" location="323 S Raeigh Road" />
        <EventCard title="Meeting with John" location="323 S Raeigh Road" />
        <EventCard title="Meeting with John" location="323 S Raeigh Road" />
        <EventCard title="Meeting with John" location="323 S Raeigh Road" />
        <EventCard title="Meeting with John" location="323 S Raeigh Road" />
      </div>
    </div>
  );
}

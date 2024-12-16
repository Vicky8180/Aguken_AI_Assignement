import { Tabs, Tab } from "@shadcn/ui";

export default function TimePeriodTabs() {
  return (
    <Tabs>
      <Tab label="Daily">Daily Data</Tab>
      <Tab label="Weekly">Weekly Data</Tab>
      <Tab label="Monthly">Monthly Data</Tab>
    </Tabs>
  );
}

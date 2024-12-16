import { Dropdown } from "@shadcn/ui";

export default function SortDropdown() {
  return (
    <Dropdown label="Sort By">
      <Dropdown.Item>Activity</Dropdown.Item>
      <Dropdown.Item>Region</Dropdown.Item>
    </Dropdown>
  );
}

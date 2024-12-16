import { ToastProvider, Toast } from "@shadcn/ui";

export default function Dashboard() {
  return (
    <ToastProvider>
      <button onClick={() => Toast.notify("Data refreshed successfully!")}>
        Refresh Data
      </button>
    </ToastProvider>
  );
}

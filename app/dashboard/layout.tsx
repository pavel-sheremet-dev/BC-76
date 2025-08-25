import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <aside>
        <ul>
          <li>
            <Link href="/dashboard/projects">Projects</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;

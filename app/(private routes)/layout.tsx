import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Header from "@/components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div
        style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 8 }}
      >
        <aside style={{ padding: 8 }}>Sidebar</aside>
        <AuthProvider>
          <div>{children}</div>
        </AuthProvider>
      </div>
    </div>
  );
};

export default Layout;

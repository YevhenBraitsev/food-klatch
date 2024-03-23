import dynamic from 'next/dynamic';

const DynamicSidebar = dynamic(() => import('@/app/ui/dashboard/nav/sidenav'), {
  loading: () => <p> Loading</p>,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <DynamicSidebar />
      </div>
      <div className="flex flex-grow flex-col p-6 md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

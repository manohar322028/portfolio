export default function RootLayout({
  right,
  left,
}: {
  right: React.ReactNode;
  left: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] mx-auto md:shadow-2xl md:shadow-gray-900">
      <div className="col-span-1 md:col-span-1">{left}</div>
      <div className="col-span-1 md:col-span-2 md:overflow-y-scroll">
        {right}
      </div>
    </div>
  );
}

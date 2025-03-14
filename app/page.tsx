import MainContainer from "@/components/mainContainer/MainContainer";
import SidebarUser from "@/components/SidebarUser";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-32">
        <div className="col-span-1 xl:col-span-4">
          <SidebarUser />
        </div>

        <div className="col-span-1 xl:col-span-8">
          <MainContainer />
        </div>
      </div>
    </>
  );
}

import MainContainer from "@/components/mainContainer/MainContainer";
import ScrollToTop from "@/components/ScrollToTop";
import SidebarUser from "@/components/SidebarUser";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-12">
        <div className="col-span-1 xl:col-span-4">
          <SidebarUser />
        </div>

        <div className="col-span-1 xl:col-span-8 px-0 xl:px-8">
          <MainContainer />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

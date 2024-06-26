"use client";
import React from "react";
import PageContent from "./page-content";
import AppSidebar from "@/app/components/common/sidebar";
// import PageHeader from "./page-header";

function PageLayout({ tab }: { tab: string }) {
  // const [activeTab, setActiveTab] = useState(tab);
  // console.log(tab);
  // const { replace } = useRouter();

  return (
    <div className="flex flex-row">
      <AppSidebar tab={tab} />

      <div>
        {/* <PageHeader tab={tab} /> */}
        <PageContent tab={tab} />
      </div>
    </div>
  );
}

export default PageLayout;

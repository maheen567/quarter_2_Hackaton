import AboutFooter from "./AboutFooter";
import HelpFooter from "./HelpFooter";
import NewsLetterFooter from "./NewsLetterFooter";
import RecentPostFooter from "./RecentPostFooter";
import SocialIconsFooter from "./SocialIconsFooter";
import UsefulLinkFooter from "./UsefulLinkFooter";


export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white mt-[120px]">
      <div className="container mx-auto px-4 py-16">
        <NewsLetterFooter />
        <div className="border-t border-customYellow my-8"></div>
        <div className="flex justify-between items-center mt-[56px]">
          <AboutFooter />
          <UsefulLinkFooter />
          <HelpFooter />
          <RecentPostFooter />
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-8 flex ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <SocialIconsFooter />
        </div>
      </div>
    </footer>
  )
}
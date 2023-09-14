import React from "react";
import { twMerge } from "tailwind-merge";

import TextArea from "@components/UI/TextArea";
import ProfileImageUpload from "@components/ProfileImageUpload";

// images
import PersonWallPaper from "@assets/personWallPaper.webp";
import TagsInput from "@components/UI/TagsInput";
import TextInput from "../UI/TextInput";
import { name, description, websites, socialMedia } from "@/store";
import UrlsInput from "../UI/UrlsInput";
import { SocialMediaData, WebsitesData } from "@/data";

import { useTranslation } from "react-i18next";

export interface FreelancerInfoProps {
  className?: string;
}
const FreelancerInfo: React.FC<FreelancerInfoProps> = ({
  className = "",
}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={twMerge("", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div className="container py-4 md:py-8 overflow-auto h-screen">
          <h1 className="text-3xl mb-4">Personal info</h1>
          <ProfileImageUpload />
          <TextInput
            label="First name"
            name="first_name"
            placeholder="First name"
            refValue={name}
            className="mt-2"
          />
          <TextArea
            label="Description your self"
            name="description"
            placeholder="Description"
            refValue={description}
            className="mt-2"
          />
          <br />
          <h3 className="font-bold">Websites</h3>
          <UrlsInput items={WebsitesData} onUpdate={websites.set}/>
          <br />
          <button onClick={() => changeLanguage("de")} className="btn bg-secondary">
            {t("suche")}
          </button>
          <br />
          <button onClick={() => changeLanguage("en")} className="btn bg-secondary">
            {t("suche")}
          </button>
          <br />
          <h3 className="font-bold">Social media</h3>
          <UrlsInput items={SocialMediaData} onUpdate={socialMedia.set} />
          <br />
          <TagsInput name="user-tags" label="Payment methods" placeholder="Add payment to accept" className="my-2" />
        </div>
        {/* Right side image */}
        <img
          src={PersonWallPaper}
          alt="person"
          className=" h-screen w-full object-cover md:block hidden"
        />
      </div>
    </div>
  );
};

export default FreelancerInfo;

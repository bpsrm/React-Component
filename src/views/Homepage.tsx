import { useEffect, useState } from "react";

//router
import { Link } from "react-router-dom";

//assets
import reactIcon from "@/assets/react.svg";
import typescriptIcon from "@/assets/typescript.svg";

//types
import { Profile } from "@/@types/global.types";

//components
import Loader from "@/components/private/Loader";

export default function RootMain() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const header = import.meta.env.AUTHORIZATION;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users/bpsrm", {
          headers: { Authorization: header },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [header]);

  return (
    <div className="containers bg-white py-10 md:h-svh xl:h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-5">
          <img src={reactIcon} alt="" className="w-[25%] md:w-[10%]" />{" "}
          <span className="text-[32px]">+</span>
          <img src={typescriptIcon} alt="" className="w-[25%] md:w-[10%]" />
        </div>
        <h1 className="font-bold text-center leading-relaxed py-5">Boost Your Web Application Development <br /> with My React Components</h1>
        <p className="sub-title text-center pb-3">Resource for React components in TypeScript language with tailwind CSS style.</p>

        <div className="card-main pad-main bg-white p-5 shadow-lg hover:shadow-xl hover:transition-all hover:ease-in-out hover:delay-200">
          <h5 className="font-semibold text-blue-da">
            <i className="fa-brands fa-github"></i> Profile
          </h5>
          {loading
            ? <div className="flex flex-col justify-center items-center h-[250px]">
              <Loader loading={loading} />
            </div>
            : profile
              ? <Link to="https://github.com/bpsrm" target="_blank" className="m-3 flex flex-col items-center bg-navy-dr-main p-5 rounded-[10px]">
                <img src={profile.avatar_url} width={150} height={150} alt="" className="rounded-[50%]" />

                <p className="title text-blue-da">{profile.name}</p>
                <span className="text-black pb-2">@{profile.login}</span>
                <span className="small-text text-gray-main"><i className="fa-solid fa-location-dot pr-3"></i>{profile.location}</span>
                <p className="text-black text-start md:text-center md:w-[70%] py-5">{profile.bio}</p>
                <div className="flex flex-wrap gap-5 w-full xl:flex-nowrap">
                  <div className="w-full xl:w-4/12">
                    <p className="profile-box w-full">Public Repos: {profile.public_repos}</p>
                  </div>
                  <div className="flex flex-col md:flex-row w-full xl:w-8/12 gap-5">
                    <p className="profile-box sm:w-full md:w-[50%] xl:w-4/6">Following: {profile.following}</p>
                    <p className="profile-box sm:w-full md:w-[50%] xl:w-4/6">Followers: {profile.followers}</p>
                  </div>
                </div>
              </Link>
              : <div>Error loading profile</div>}
        </div>
        <p className="text-blue-main font-bold">Design & Develop by BANXDEV</p>
      </div>
    </div>
  );
}

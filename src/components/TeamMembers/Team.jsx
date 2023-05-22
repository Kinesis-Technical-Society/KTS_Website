import TeamCard from "./Team_card";
import "./Team.css";
import { RiTeamFill, RiStackshareLine } from "react-icons/ri";
import TeamTag from "../../assets/Team_Tag.svg";
import Footer from "../Footer/Footer";

// importing images
import gaurav from "../../assets/gaurav.png";
import kalash from "../../assets/kalash.jpg";
import apoorva from "../../assets/apoorva.jpg";
import prayrit from "../../assets/prayrit.jpg";
import manav from "../../assets/manav.png";
import sparsh from "../../assets/sparsh.jpeg";
import srijan from "../../assets/srijan.png";
import shivendu from "../../assets/shivendu.jpg";
import yash from "../../assets/yash.jpg";
import shiva from "../../assets/shiva.jpg";
import archit from "../../assets/archit.jpg";
import shubhangi from "../../assets/shubhangi.jpg";
import paras from "../../assets/paras.jpg";
import suraj from "../../assets/suraj.jpg";

const Team_Member = () => {
  const cards = [
    {
      id: 1,
      title: "Gaurav Tripathi",
      image: gaurav,
      text: "Founding Member",
      git: "#",
      linkdin: "https://www.linkedin.com/in/gaurav-tripathi-5b9a7b1ba/",
      insta: "https://www.instagram.com/g_r_v_24/",
    },
    {
      id: 2,
      title: "Kalash Sharma",
      image: kalash,
      text: "Founding Member",
      git: "https://github.com/k99sharma",
      linkdin: "https://www.linkedin.com/in/kalashsharma99/",
      insta: "https://www.instagram.com/sharmakalash99/",
    },
    {
      id: 3,
      title: "Apoorva Tandon",
      image: apoorva,
      text: "Founding Member",
      git: "https://www.tandonapoorva.com/",
      linkdin: "https://www.linkedin.com/in/apoorva-tandon/",
      insta: "https://www.instagram.com/apoorvvatandon/",
    },
    {
      id: 4,
      title: "Manav Verma",
      image: manav,
      text: "Founding Member",
      git: "#",
      linkdin: "https://www.linkedin.com/in/manav-verma-263761201/",
      insta: "https://www.instagram.com/manavv_verma/",
    },
    {
      id: 5,
      title: "Prayrit Srivastava",
      image: prayrit,
      text: "Founding Member",
      git: "https://prayrit-srivastava.github.io/",
      linkdin: "https://www.linkedin.com/in/prayrit-srivastava-b520111a3/",
      insta: "https://www.instagram.com/___itzzprayrit/",
    },
    {
      id: 6,
      title: "Sparsh Verma",
      image: sparsh,
      text: "Web Lead",
      git: "https://github.com/sparshrex",
      linkdin: "https://www.linkedin.com/in/sparshverma094/",
      insta: "https://www.instagram.com/sparshrex/",
    },
    {
      id: 7,
      title: "Srijan Shahi",
      image: srijan,
      text: "Programming Lead",
      git: "#",
      linkdin: "https://www.linkedin.com/in/srijan-shahi-6b1594271/",
      insta: "https://www.instagram.com/srijan_shahi23/",
    },
    {
      id: 8,
      title: "Shivendu Mishra",
      image: shivendu,
      text: "Android Lead",
      git: "https://github.com/shivenducs1136",
      linkdin: "https://www.linkedin.com/in/bitwisor/",
      insta: "https://www.instagram.com/shiv.endu/",
    },
    {
      id: 9,
      title: "Yash Srivastava",
      image: yash,
      text: "ML Lead",
      git: "https://github.com/Srivastava0109Yash",
      linkdin: "https://www.linkedin.com/in/yash-srivastava-b27025213/",
      insta: "#",
    },
    {
      id: 10,
      title: "Shiva Agrahari",
      image: shiva,
      text: "Public Relation Lead",
      git: "https://github.com/shivaAg04",
      linkdin: "https://www.linkedin.com/in/shivaag04/",
      insta: "https://www.instagram.com/s.h.i.v.a_04/",
    },
    {
      id: 11,
      title: "Archit Srivastava",
      image: archit,
      text: "Event Management Lead",
      git: "https://github.com/archit1203",
      linkdin: "https://www.linkedin.com/in/archit1203/",
      insta: "https://www.instagram.com/archit.1203/",
    },
    {
      id: 12,
      title: "Shubhangi Rai",
      image: shubhangi,
      text: "Graphic Designing Lead",
      git: "https://github.com/shubhangirai281",
      linkdin: "https://www.linkedin.com/in/shubhangi-rai/",
      insta: "https://www.instagram.com/shubhangi_raii/",
    },
    {
      id: 13,
      title: "Paras Tiwari",
      image: paras,
      text: "Competitive Programming Lead",
      git: "#",
      linkdin: "https://www.linkedin.com/in/paras-tiwari-3a78a9212/",
      insta: "https://www.instagram.com/_paras_._tiwari_/",
    },
    {
      id: 14,
      title: "Suraj Gupta",
      image: suraj,
      text: "Opportunity Searching Lead",
      git: "#",
      linkdin: "https://www.linkedin.com/in/suraj-gupta-030b04210/",
      insta: "https://www.instagram.com/i.m.suraj.gupta/",
    },
  ];

  return (
    <>
      <div className="Team_container ">
        <div className="Team_head">
          <div className="Team_Item_1 Team_Item">
            <img src={TeamTag} alt="" />
          </div>
          <div className="Team_Item_1 Team_Item">
            <h3 className="Team_Title">The Team.</h3>
            <p style={{ width: "343px" }} className="Team_Descript_1">
              Together, we push boundaries, challenge norms, and create
              solutions that shape the future.
            </p>
            <p>
              <span className="Team_Descript">
                <RiTeamFill></RiTeamFill> Get To Know
              </span>
              <span className="Team_Descript">
                <RiStackshareLine></RiStackshareLine>Join The Team
              </span>
            </p>
          </div>
        </div>

        <div className="Team_row">
          {cards.map(({ title, image, text, git, linkdin, insta, id }) => (
            <div className="Team_col" key={id}>
              <TeamCard
                imageSource={image}
                title={title}
                text={text}
                url1={git}
                url2={linkdin}
                url3={insta}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-[-1rem] mb-[-1rem]">
        <Footer />
      </div>
    </>
  );
};
export default Team_Member;

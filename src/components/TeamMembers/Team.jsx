import React from "react";
import TeamCard from "./Team_card";
import "./Team.css";
import { RiTeamFill,RiStackshareLine } from "react-icons/ri";
import TeamTag from "../../assets/Team_Tag.svg";
import image1 from "../../assets/profile image.jpeg";
import Footer from "../Foooter/Footer";




const Team_Member = () => {
    const cards = [
        {
            id: 1,
            title: "Sparsh Verma",
            image: image1,
            text: "Web Lead",
            git: "https://github.com/sparshrex",
            linkdin: "https://www.linkedin.com/in/sparsh-verma-043862205/",
            insta: ""

        },
        {
            id: 2,
            title: "Sparsh Verma",
            image: image1,
            text: "Web Lead",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 3,
            title: "Sparsh Verma",
            image: image1,
            text: "Web Lead",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 4,
            title: "Sparsh Verma",
            image: image1,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },

        {
            id: 5,
            title: "Sparsh Verma",
            image: image1,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 6,
            title: "Sparsh Verma",
            image: image1,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

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
                    <h3 className="Team_Title">The Team</h3>
                    <p style={{width:"343px"}} className="Team_Descript_1">Together, we push boundaries, challenge norms, and create solutions that shape the future.</p>
                    <p><span className="Team_Descript"><RiTeamFill></RiTeamFill> Get To Know</span>
                    <span className="Team_Descript"><RiStackshareLine></RiStackshareLine>Join The Team</span>
                    </p>
                </div>


            </div>

            <div className="Team_row">
                {cards.map(({ title, image, text, git, linkdin, insta, id }) => (
                    <div className="Team_col" key={id}>
                        <TeamCard imageSource={image} title={title} text={text} url1={git} url2={linkdin} url3={insta} />
                    </div>
                ))}

            </div>

        </div>
        <div className="ml-[-1rem] mb-[-1rem]">

            <Footer/>
        </div>
        </>
        );
}
export default Team_Member;
import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import Youtbe from "../../assets/Youtube.png";
import instagram from "../../assets/Instagram.png";
import logo from "../../assets/kts footer.png";
function Footer() {
  return (
    <div>
      <div className=" flex flex-col sm:flex-row flex-wrap  sm:flex sm:h-[300px] w-[100%] bg-yellow-400 gap-4 ">
        <div className=" flex flex-1  justify-center items-center ">
          <div>
            <p className=" font-Heebo font-extrabold text-2xl">Contact us</p>
            <p className=" leading-7 font-Heebo  font-semibold">KIET GROUP OF INSTITUTIONS</p>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div>
            <img src={logo} alt="" />
            <div className="ml-2 leading-7  font-Heebo font-semibold">Collaborate</div>
          </div>
        </div>
        <div className=" flex flex-1 justify-center items-center">
          <div>
            <div  className="sm:mx-2 flex">
              <img src={linkedin} alt="" />
              <span className="ml-2 leading-7 font-Heebo font-medium">Linkedin</span>
            </div>
            <div  className="sm:mx-2 flex my-2">
              <img src={Youtbe} alt="" />
              <span className="ml-2 leading-7  font-Heebo font-medium"  > Youtube</span>
            </div>
            <div  className="sm:mx-2 flex" >
              <img src={github} alt="" /> 
              <span className="ml-2 leading-7  font-Heebo font-medium">github</span>
            </div>
            <div  className="sm:mx-2 flex my-2">
              <img src={instagram} alt="" />
              <span className=" ml-2 leading-7  font-Heebo font-medium"> Instagram</span>
            </div>

          </div>
        </div>

      </div>
        <div className=" flex bg-black h-[2.5rem] mt-[0rem] justify-center ">
          <p className="font-Heebo font-medium text-slate-50"> All right are Reversed by @KTS Society</p>
        </div>
    </div>
  );
}

export default Footer;

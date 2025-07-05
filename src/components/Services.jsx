import Icon from "@mdi/react";
import { mdiConsole } from "@mdi/js";
import { mdiCellphone } from "@mdi/js";
import { mdiWebCheck } from "@mdi/js";

const Services = () => {
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center " id="services">
      <div className="w-[90%] h-[90%] p-5 flex flex-col">
        <h1 className="text-white font-bold text-lg">
          * <span className="text-[#64ffda]">Services</span>
        </h1>
        <p className="text-white font-bold text-2xl my-3">Here's how I can help your business grow</p>
        <div className="w-full h-[80%] flex flex-col justify-center items-center md:flex-row gap-5 mt-4">
          <div className="services">
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="icon-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#004d40" />
                  <stop offset="25%" stopColor="#64ffda" />
                  <stop offset="50%" stopColor="#b2fff9" />
                  <stop offset="75%" stopColor="#64ffda" />

                  <stop offset="100%" stopColor="#00796b" />
                </linearGradient>
              </defs>
            </svg>
            <Icon path={mdiConsole} size={2} color="url(#icon-gradient)" />
            <h1 className="service-h1">Web Development</h1>
            <p className="service-p">
              I build enganging, high-perfomance websites that capture your
              brand's essence and drive meaningful user interactions.
            </p>
          </div>
          <div className="services">
            <Icon path={mdiCellphone} size={2} color="url(#icon-gradient)" />
            <h1 className="service-h1">Mobile Development</h1>
            <p className="service-p">
              I create seamles, native apps using React native for Android
              deveopment
            </p>
          </div>
          <div className="services">
            <Icon path={mdiWebCheck} size={2} color="url(#icon-gradient)" />
            <h1 className="service-h1">SEO optimization</h1>
            <p className="service-p">
              I optimize your website to rank higher on search engines,
              increasing visibility and driving organic traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

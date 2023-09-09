import NewsData from "../../../../Constant/Json/news.json";

import "./SixthSection.scss";

const SixthSection = () => {
  return (
    <div className="SixthSection">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {NewsData.map((item) => (
              <div key={item.id} className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img
                    className=" lg:h-64 md:h-42 w-full object-cover object-center"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SixthSection;

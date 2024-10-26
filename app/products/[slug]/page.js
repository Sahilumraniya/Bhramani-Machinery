
import Contect from "@/app/components/Contect";
import products from "@/app/data/machines";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const { props } = await getProduct(params);
  
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image 
              src={props.data.images} 
              alt="machine" 
              width={450} 
              className="rounded-lg shadow-lg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Bhramani Machinery
              </h2>
              <h1 className="text-gray-900 font-bold text-3xl title-font mb-4">
                {props.data.name}
              </h1>
              <div className="flex mb-4 items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 border-l-2 border-gray-200 space-x-2">
                  <a className="text-gray-500 hover:text-indigo-500">
                    {/* SVG icons */}
                  </a>
                  <a className="text-gray-500 hover:text-indigo-500">
                    {/* SVG icons */}
                  </a>
                  <a className="text-gray-500 hover:text-indigo-500">
                    {/* SVG icons */}
                  </a>
                </span>
              </div>
              <div className="my-5">
                {props.data.description.map((p, i) => (
                  <p className="leading-relaxed text-black font-semibold" key={i}>
                    {i + 1}) {p}
                  </p>
                ))}
              </div>
              <div className="flex">
                <Link href={"#contact"}>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Contact Us
                  </button>
                </Link>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {/* Heart Icon */}
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="contact">
        <Contect />
      </div>
    </div>
  );
};

async function getProduct(params) {
  const slug = params.slug;
  const data = products.find(product => product.slug === slug);
  return {
    props: { data },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default page;

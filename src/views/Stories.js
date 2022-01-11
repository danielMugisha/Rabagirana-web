import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-4">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Stories of impact
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid max-w-2xl mx-auto">
                          <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                              <div className="w-px h-10 opacity-0 sm:h-full" />
                              <div>
                                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                  1
                                </div>
                              </div>
                              <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                              <div className="sm:mr-5">
                                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                  <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <p className="text-xl font-semibold sm:text-base">
                                  FROM FIREWOOD TO GAS
                                </p>
                                {/* <p className="text-sm text-gray-700">
                                  The month was July, the day was a Saturday,
                                  and the time was half-past midday. A joyous
                                  Keza Angelique, a single mother of three, is
                                  humming to a hymn from the radio as she warms
                                  ‘isombe’ (cassava leaves) for lunch, using her
                                  newly purchased gas cooker. With a green
                                  colorful ‘kitenge’ (wrapper) around her waist
                                  and a bandana of the same color covering her
                                  head, she turns to us and asks, “do you want
                                  to know the secret ingredient to my tasty
                                  isombe?” “Love!” my colleague immediately
                                  yelled. “No. Love doesn’t make my isombe
                                  sweet. What’s wrong with you?” She replied
                                  playfully, making us all burst into laughter.
                                  After she was done warming the isombe, she got
                                  ready to prepare ‘ugali’ (sorghum flour). She
                                  sprinkled the flour into the boiling water
                                  while briskly stirring it with a cooking stick
                                  to make it thicker. In a very short time, the
                                  ugali was ready and it was time to eat. As we
                                  sat by the dining table to devour the tasty
                                  meal that lay helplessly before us, Keza
                                  signaled that she wanted to say something. My
                                  colleague and I immediately had one of those
                                  telepathic communications, questioning Keza’s
                                  poor timing. “One doesn’t give speeches before
                                  the meal…speeches usually take place after the
                                  meal!" he seemed to say. "Her house, her rules
                                  I guess," I signaled back. So, we sat quietly
                                  and listened to her
                                </p> */}
                                <p
                                  className="text-md pt-6"
                                  style={{ fontWeight: "italic" }}
                                >
                                  Thank you, Rabagirana Ministries for the gas
                                  cooker. Cooking over the traditional
                                  three-stone open fire was a health hazard to
                                  me. It used to make me cough a lot and the
                                  smoke would hurt my eyes too... giving me
                                  teary eyes with a running nose. But this gas
                                  produces no smoke and since I started using
                                  it, I do not cough anymore.
                                </p>
                                <a
                                  href="/stories"
                                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150 mt-2"
                                >
                                  View Whole story{" "}
                                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                              <div className="w-px h-10 bg-gray-300 sm:h-full" />
                              <div>
                                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                  2
                                </div>
                              </div>
                              <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                              <div className="sm:mr-5">
                                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                  <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <p className="text-xl font-semibold sm:text-base mt-24">
                                  THAT DAY AFTER A LONG TIME WE HAD FISH FOR
                                  SUPPER…
                                </p>
                                <p className="text-md text-gray-700 pt-6">
                                  Emmanuel made his first dozen of shopping bags
                                  around mid-May. With the lockdown partly
                                  lifted, he managed to take them to the market,
                                  and in less than a few hours, they were all
                                  gone. “I honestly couldn’t believe it.” He
                                  remarked. “That day, after a long time we had
                                  fish for supper!” said a very jolly Emmanuel.
                                  He now makes up to 200 shopping bags per day.
                                  “In an average day, I now earn up to 20,000
                                  francs (25$).
                                </p>
                                <a
                                  href="/stories"
                                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                                >
                                  View Whole story{" "}
                                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex flex-col items-center mr-6">
                              <div className="w-px h-10 bg-gray-300 sm:h-full" />
                              <div>
                                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                                  3
                                </div>
                              </div>
                              <div className="w-px h-full opacity-0" />
                            </div>
                            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                              <div className="sm:mr-5">
                                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                  <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <p className="text-xl font-semibold sm:text-base mt-24">
                                  THE HEALING SALON…
                                </p>
                                <p className="text-md text-gray-700 pt-6">
                                  After her completion of the course, Claudine
                                  didn't take long before she landed her first
                                  job. She now works at Magic Salon, which is
                                  also known by the locals as the "healing
                                  salon." The nickname "healing salon" came from
                                  the fact that people actually felt better
                                  after spending time in that salon and Claudine
                                  was the party behind that.
                                </p>
                                <a
                                  href="/stories"
                                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                                >
                                  View Whole story{" "}
                                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

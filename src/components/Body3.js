import { useCallback } from "react";
import FrameComponent6 from "./FrameComponent6";

const Body3 = () => {
  const onListitemLinkClick = useCallback(() => {
    window.open("https://www.summerschools.com/provider/oxford-summer-courses");
  }, []);
  const onListitemLink1Click = useCallback(() => {
    window.open(
      "https://www.summerschools.com/provider/oxford-scholastica-academy"
    );
  }, []);
  const onListitemLink2Click = useCallback(() => {
    window.open("https://www.summerschools.com/provider/reach-cambridge");
  }, []);
  return (
    <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[15px] pb-[69.7px] box-border max-w-full text-left text-22xl-6 text-gray-300 font-domine mq800:pb-[29px] mq800:box-border mq1150:pb-[45px] mq1150:box-border">
      <div className="w-[1296px] flex flex-col items-start justify-start gap-[30px] max-w-full mq800:gap-[15px]">
        <div className="w-[717.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[14.8px] max-w-full shrink-0">
          <div className="self-stretch relative leading-[56.2px] mq800:text-14xl mq800:leading-[45px] mq450:text-6xl mq450:leading-[34px]">
            Discover your next winter school
          </div>
          <div className="w-[676px] flex flex-col items-start justify-start gap-[3.8px] max-w-full text-mid-6 text-darkslategray-100 font-open-sans">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <div className="flex-1 relative leading-[32.56px] inline-block shrink-0 [debug_commit:1de1738] max-w-full">
                Enroll in top-tier courses taught by esteemed professors,
                delving into the expansive field of Information Systems
                Security. Choose from an extensive selection of subjects and
                summer programs. Connect with peers, forge new friendships, and
                expand your worldview along the way.
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[8.2px] pb-[9.4px] pr-[25.2px] pl-[26px] bg-sandybrown rounded-31xl flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738] whitespace-nowrap hover:bg-sienna">
              <a
                className="relative text-base leading-[26px] font-open-sans text-white text-left [text-decoration:none]"
                href="https://www.summerschools.com/all-providers"
                target="_blank"
              >
                View all providers
              </a>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full shrink-0 text-base text-darkslategray-200 font-open-sans">
          <div
            className="flex-1 rounded-xl bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-0 pb-[53.2px] box-border gap-[27.8px] min-w-[309px] max-w-full cursor-pointer text-5xl font-domine mq800:pb-[35px] mq800:box-border"
            onClick={onListitemLinkClick}
          >
            <img
              className="self-stretch h-[170px] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/63e4e6850904bc5a5531fa6e-oxfordsummercoursestptwhitepngp500webp@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[19.4px] max-w-full">
                <FrameComponent6
                  heading3OxfordSummerCours="Oxford Winter Courses"
                  oxfordSummerCourseHref="https://www.summerschools.com/provider/oxford-summer-courses"
                  oxfordSummerCoursesWasEst="Oxford Summer Courses was established in"
                  byTwoOxfordUniversityAlum="2010 by two Oxford University alumni, Harry"
                  hortynAndRobertPhippsOffe="Hortyn and Robert Phipps. Offering a diverse"
                  rangeOfOver40SubjectsTail="range of over 40 subjects tailored for ages 9 t…"
                />
                <div className="flex flex-col items-start justify-start gap-[10.6px] text-base font-open-sans">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                      loading="lazy"
                      alt=""
                      src="/65773993eef5066a88e97e21-carbon-locationsvg.svg"
                    />
                    <div className="flex flex-row items-start justify-start gap-[4.1px]">
                      <div className="relative leading-[30px] font-semibold inline-block min-w-[73px]">
                        Founded:
                      </div>
                      <div className="relative leading-[30px] text-gray-100 inline-block min-w-[37px]">
                        2010
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                      loading="lazy"
                      alt=""
                      src="/6577399348d4dd3c9872f5e9-healthicons-moneybagoutlinesvg.svg"
                    />
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <div className="relative leading-[30px] font-semibold inline-block min-w-[82px]">
                        Fees from:
                      </div>
                      <div className="relative leading-[29.6px] text-gray-100 inline-block min-w-[46.1px] whitespace-nowrap">
                        £5395
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.3px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-[5.7px] pl-0">
                      <img
                        className="w-[30px] h-[30px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/65773993ef1b21003a47d750-fluentmdl2-remindertimesvg.svg"
                      />
                    </div>
                    <div className="relative leading-[30px] font-semibold">
                      Typical duration:
                    </div>
                    <div className="relative leading-[29.6px] text-gray-100 inline-block min-w-[60.1px]">
                      2 weeks
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                      loading="lazy"
                      alt=""
                      src="/65c34c7ce9e48164ef411b58-guidance-calendarsvg.svg"
                    />
                    <div className="flex flex-row items-start justify-start gap-[4.6px]">
                      <div className="relative leading-[29.6px] font-semibold inline-block min-w-[49.1px]">
                        Dates:
                      </div>
                      <div className="relative leading-[30px] text-gray-100 inline-block min-w-[99px]">
                        June - August
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.7px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-[5.3px] pl-0">
                      <img
                        className="w-[30px] h-[30px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/65fc67b7841b931fdc17d5a1-octicon-peoplesvg.svg"
                      />
                    </div>
                    <div className="relative leading-[29.6px] font-semibold">
                      Students Per Class:
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[10px]">
                      4
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                      alt=""
                      src="/65c2467a12bac2bc6b54f859-arcticons-birthdayadaptersvg.svg"
                    />
                    <div className="flex flex-row items-start justify-start gap-[4.7px]">
                      <div className="relative leading-[29.6px] font-semibold inline-block min-w-[85.3px]">
                        Age Range:
                      </div>
                      <div className="relative leading-[29.6px] text-gray-100 inline-block min-w-[33px]">
                        9-24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-xl bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-0 pb-[53.2px] box-border gap-[27.8px] min-w-[309px] max-w-full cursor-pointer mq800:pb-[35px] mq800:box-border"
            onClick={onListitemLink1Click}
          >
            <img
              className="self-stretch h-[170px] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/63d24effa40a9b3df7788a7d-oxfordscholasticalogop500png@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[19.4px] max-w-full">
                <FrameComponent6
                  heading3OxfordSummerCours="Oxford Scholastica Academy"
                  oxfordSummerCourseHref="https://www.summerschools.com/provider/oxford-scholastica-academy"
                  oxfordSummerCoursesWasEst="Founded in 2013 by former Oxford students,"
                  byTwoOxfordUniversityAlum="Oxford Scholastica offers academic courses"
                  hortynAndRobertPhippsOffe="designed to give students an insight into"
                  rangeOfOver40SubjectsTail="Oxford undergraduate life."
                  propWidth="unset"
                  propDisplay="inline-block"
                />
                <div className="flex flex-col items-start justify-start gap-[10.6px]">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                      alt=""
                      src="/65773993eef5066a88e97e21-carbon-locationsvg.svg"
                    />
                    <div className="flex flex-row items-start justify-start gap-[4.1px]">
                      <div className="relative leading-[30px] font-semibold inline-block min-w-[73px]">
                        Founded:
                      </div>
                      <div className="relative leading-[30px] text-gray-100 inline-block min-w-[37px]">
                        2013
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                      alt=""
                      src="/6577399348d4dd3c9872f5e9-healthicons-moneybagoutlinesvg.svg"
                    />
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <div className="relative leading-[30px] font-semibold inline-block min-w-[82px]">
                        Fees from:
                      </div>
                      <div className="relative leading-[29.6px] text-gray-100 inline-block min-w-[46.1px] whitespace-nowrap">
                        £4795
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.3px]">
                    <img className="flex flex-col items-start justify-start py-0 pr-[5.7px] pl-0" />
                    <div className="relative leading-[30px] font-semibold">
                      Typical duration:
                    </div>
                    <div className="relative leading-[29.6px] text-gray-100 inline-block min-w-[60.1px]">
                      2 weeks
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.6px]">
                    <img className="flex flex-col items-start justify-start py-0 pr-[5.4px] pl-0" />
                    <div className="relative leading-[29.6px] font-semibold inline-block min-w-[49.1px]">
                      Dates:
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[92px]">
                      July - August
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.7px]">
                    <img className="flex flex-col items-start justify-start py-0 pr-[5.3px] pl-0" />
                    <div className="relative leading-[29.6px] font-semibold">
                      Students Per Class:
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[19px]">
                      15
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.6px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-[5.4px] pl-0">
                      <img
                        className="w-[30px] h-[30px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/65c2467a12bac2bc6b54f859-arcticons-birthdayadaptersvg.svg"
                      />
                    </div>
                    <div className="relative leading-[29.6px] font-semibold inline-block min-w-[85.3px]">
                      Age Range:
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[51px]">
                      12 - 18
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-xl bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-0 pb-[53.2px] box-border gap-[27.8px] min-w-[309px] max-w-full cursor-pointer mq800:pb-[35px] mq800:box-border"
            onClick={onListitemLink2Click}
          >
            <img
              className="self-stretch h-[170px] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/63d379788fe16b0a742a2ba6-reachcambridgewhitep500png@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[19.4px] max-w-full">
                <FrameComponent6
                  heading3OxfordSummerCours="Reach Cambridge"
                  oxfordSummerCourseHref="https://www.summerschools.com/provider/reach-cambridge"
                  oxfordSummerCoursesWasEst="School BIO: Reach Cambridge, has been"
                  byTwoOxfordUniversityAlum="running summer schools and study programs"
                  hortynAndRobertPhippsOffe="in the historic city of Cambridge for 20 years."
                  rangeOfOver40SubjectsTail="Their staff includes academic experts from…"
                  propWidth="unset"
                  propDisplay="unset"
                />
                <div className="flex flex-col items-start justify-start gap-[10.6px]">
                  <div className="flex flex-row items-start justify-start gap-[4.1px]">
                    <img className="flex flex-col items-start justify-start py-0 pr-[5.9px] pl-0" />
                    <div className="relative leading-[30px] font-semibold inline-block min-w-[73px]">
                      Founded:
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[37px]">
                      2005
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <img className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0" />
                    <div className="relative leading-[30px] font-semibold inline-block min-w-[82px]">
                      Fees from:
                    </div>
                    <div className="relative leading-[29.6px] text-gray-100 inline-block min-w-[46.1px] whitespace-nowrap">
                      £4845
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.3px] mq450:flex-wrap">
                    <img className="flex flex-col items-start justify-start py-0 pr-[5.7px] pl-0" />
                    <div className="relative leading-[30px] font-semibold">
                      Typical duration:
                    </div>
                    <div className="relative leading-[29.6px] text-gray-100 inline-block min-w-[111.2px]">
                      2, 4 or 6 weeks
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.6px]">
                    <img className="flex flex-col items-start justify-start py-0 pr-[5.4px] pl-0" />
                    <div className="relative leading-[29.6px] font-semibold inline-block min-w-[49.1px]">
                      Dates:
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[92px]">
                      July - August
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.7px]">
                    <div className="flex flex-row items-start justify-start gap-[10px]">
                      <img
                        className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                        alt=""
                        src="/65fc67b7841b931fdc17d5a1-octicon-peoplesvg.svg"
                      />
                      <div className="relative leading-[29.6px] font-semibold">
                        Students Per Class:
                      </div>
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[72px]">
                      Unknown
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4.7px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-[5.3px] pl-0">
                      <img
                        className="w-[30px] h-[30px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/65c2467a12bac2bc6b54f859-arcticons-birthdayadaptersvg.svg"
                      />
                    </div>
                    <div className="relative leading-[29.6px] font-semibold inline-block min-w-[85.3px]">
                      Age Range:
                    </div>
                    <div className="relative leading-[30px] text-gray-100 inline-block min-w-[51px]">
                      14 - 18
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body3;

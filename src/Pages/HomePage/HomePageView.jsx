import {
  HomePageHeaderContainer,
  NewCard,
  ArticleCard,
  RecoomededPokerSection,
} from "../../Components";
import StepsCard from "../../Components/StepsCard/StepsCard";
import {
  banner,
  banner2,
  form,
  notification,
  pokerBack,
  pokerLifeCycle,
  pokerLogo,
  rightArrow,
  signup,
} from "../../assests";

import "./styles.scss";

const HomePageView = () => {
  return (
    <div className=" homepage-wrapper bg-whitesmoke w-full h-fit flex flex-col text-[36px]  font-biz-udpgothic ">
      <HomePageHeaderContainer />

      <div className="banner-section w-full">
        <img className="h-[513px]  object-cover" alt="" src={banner} />
      </div>

      <section className="second-body mt-10 px-[90px] w-full ">
        <RecoomededPokerSection />
        <div className="poker-information w-full py-[30px] justify-start gap-[35px] flex flex-col items-start  ">
          <h1 className="m-0  leading-[40px] font-bold font-inherit inline-block h-10  text-inherit">
            <span>PokerBacks</span>
            <span className="text-14xl text-gray-600">
              のレーキバックシステムとは？
            </span>
          </h1>
          <p className="m-0  text-[18px] tracking-[0.13em] leading-[36px] text-gray-400 inline-block h-[70px] ">
            <span className="block">{`WPTGrobalでポーカーをプレイすると、プレイする度に「レーキ」と呼ばれる手数料が引かれていきます。`}</span>
            <span className="block">
              PokerBacksに登録すると、そのかかったレーキの40%をプレイヤー様に還元することができます！
            </span>
          </p>
        </div>
        <div className="poker-life-cylce-image my-10 flex flex-col items-center">
          <img
            className=" h-[448px] object-cover"
            alt=""
            src={pokerLifeCycle}
          />
        </div>
        <div className="poker-back-steps my-20  flex w-full">
          <h1 className="m-0  text-inherit leading-[40px] font-bold font-inherit inline-block w-3/4 ">
            PokerBacksのご利用は簡単3Step
          </h1>
          <div className="rounded-lg w-1/4 [background:linear-gradient(270deg,_rgba(104,_0,_235,_0.55)_4.93%,_rgba(75,_123,_249,_0))]  h-9" />
        </div>
        <div className="w-full steps-cards flex  items-center  gap-[27px] text-center text-[15.83px] text-black">
          <StepsCard
            img={signup}
            text1="メールアドレスを入力し、PokerBacksに登録。"
            btnName="PokerBacksに登録"
            number={1}
            isArrow={true}
          />
          <div className="flex flex-row items-center ml-10 justify-start">
            <img className=" h-[39.14px]" alt="" src={rightArrow} />
            <img className="" alt="" src={rightArrow} />
          </div>
          <StepsCard
            btnName="ダウンロード"
            img={notification}
            text1="ポーカーバックス経由でポーカーアプリをダウンロード"
            text3="UIDをPokerBacksに紐づける"
            number={2}
            isArrow={true}
          />
          <div className="flex flex-row items-center ml-10 justify-start">
            <img className=" h-[39.14px]" alt="" src={rightArrow} />
            <img className="" alt="" src={rightArrow} />
          </div>
          <StepsCard
            img={pokerBack}
            btnName="お得にポーカーをプレイしよう！"
            text1="ポーカーバックス経由でポーカーアプリをダウンロード"
            number={3}
            isArrow={false}
          />
        </div>
        <div className=" my-20 w-full form rounded-[10px]  [background:linear-gradient(94.15deg,_#242c53,_#aa70ff)] h-[452px] flex  px-[84px] box-border items-center justify-start gap-[141px] text-8xl text-white">
          <div className="w-3/5">
            <h1 className="m-0  text-inherit leading-[153%] uppercase font-bold font-inherit">
              <p className="m-0">今すぐ登録して</p>
              <p className="m-0">レーキキャッシュバックを受けよう！！</p>
            </h1>
            <div className="form flex justify-start mt-10">
              <div className="flex flex-col items-start justify-start mr-20 gap-[21px]">
                <input
                  className="font-outfit text-[11.46px] bg-[transparent] rounded-[5.29px] box-border overflow-hidden flex flex-row py-3.5 px-[9px] items-center justify-start border-[2px] border-solid border-mediumblue-100"
                  type="text"
                  placeholder="e-mail address"
                />
                <input
                  className="font-outfit text-[11.46px] bg-[transparent] rounded-[5.29px] box-border overflow-hidden flex flex-row py-[13px] px-[9px] items-center justify-start border-[2px] border-solid border-mediumblue-100"
                  type="text"
                  placeholder="password"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[57px]">
                <button className="cursor-pointer text-[14.99px] [border:none] py-[19px] px-[27px] bg-mediumslateblue-200 rounded-[7.05px] overflow-hidden flex flex-row items-center justify-center hover:bg-blueviolet">
                  今すぐ簡単登録
                </button>
                <div className="flex flex-row items-center justify-center text-[10.58px]  gap-[11px]">
                  <input
                    className="cursor-pointer  rounded-[2.65px] bg-gainsboro-200  h-[13.23px]"
                    type="checkbox"
                  />
                  利用規約に同意します
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <img
              className=" rounded-[4.41px]  h-[345.67px] object-cover"
              alt=""
              src={form}
            />
          </div>
        </div>
      </section>

      <section className="bannner2">
        <div className="self-stretch  z-[1]">
          <img className="object-cover" alt="" src={banner2} />
        </div>
        <div className="cards flex justify-around my-10 px-20">
          <div className="new-card-wrapper w-1/2 px-10">
            <NewCard />
          </div>
          <div className="article-card-wrapper w-1/2 px-10">
            <ArticleCard />
          </div>
        </div>
      </section>

      <footer className="">
        <div className=" bg-black flex flex-col items-center justify-start py-[100px]">
          <div className="flex flex-col items-center justify-start gap-[59px]">
            <div className="text-white text-[27px] ">
              今すぐPokerBacksのキャッシュバックに参加する/
            </div>
            <button className="cursor-pointer text-white text-[14px]  [border:none] py-5 px-[30px] bg-mediumslateblue-200 rounded-lg overflow-hidden flex flex-row items-center justify-center">
              登録はこちらから
            </button>
          </div>
          <div className="flex w-full items-center gap-[56px] mt-10 text-left text-base py-6 px-[200px] text-lightgray">
            <img
              height={61}
              width={179}
              className=" w-1/4 object-cover"
              alt="logo"
              src={pokerLogo}
            />

            <div className="flex justify-between w-3/4">
              <div className="flex flex-col">
                <div className="">■ 企業情報</div>
                <div className="flex flex-col mt-9">
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="">■ 企業情報</div>
                <div className="flex flex-col mt-9">
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="">■ 企業情報</div>
                <div className="flex flex-col mt-9">
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                  <span className="my-1">よくある質問</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageView;

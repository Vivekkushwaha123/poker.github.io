import {
  HomePageHeaderContainer,
  NewCard,
  ArticleCard,
  RecoomededPokerSection,
  HomePageFooterContainer,
  HomePageFormContainer,
  Button,
} from "../../Components";
import StepsCard from "../../Components/StepsCard/StepsCard";
import {
  banner,
  banner2,
  form,
  notification,
  pokerBack,
  pokerLifeCycle,
  rightArrow,
  signup,
} from "../../assests";

import "./styles.scss";

const HomePageView = () => {
  return (
    <div className=" homepage-wrapper bg-whitesmoke w-full flex flex-col text-[36px]  font-biz-udpgothic ">
      <HomePageHeaderContainer />

      <div className="banner-section flex w-full">
        <div className="w-1/2"></div>
        <div className="w-1/2 banner-data flex flex-col justify-center items-end">
          <div className="text text-[55px] w-3/4 mb-4 text-white">
            <p className="mb-2">自動で最高レーキ</p>
            <p>バックを受けよう！</p>
          </div>
          <div className="btn-div px-5 py-2 justify-around bg-slate-400 flex rounded-l-3xl w-3/4">
            <button className="rounded-3xl w-2/3 px-3 text-white text-[15px] bg-royalblue-300 text-2xl">メールアドレスで登録する</button>
            <button className="w-1/4 text-gray-100 text-smi bg-[transparent] flex flex-row items-center justify-center border-[2px] border-solid border-gray-100 rounded-81xl py-[9px] px-[20px] ">ログイン</button>
          </div>
        </div>
      </div>

      <section className="second-body mt-10 px-[90px]  w-full ">
        <RecoomededPokerSection />
        <div className="poker-information w-full h-auto py-[30px] justify-start gap-[35px] flex flex-col items-start  ">
          <h1 className="m-0  leading-[40px] font-bold font-inherit inline-block text-inherit">
            <span className="text-royalblue-300">PokerBacks</span>
            <span className="text-14xl text-gray-600">
              のレーキバックシステムとは？
            </span>
          </h1>
          <p className="m-0  text-[18px] tracking-[0.13em] leading-[36px] text-gray-400 inline-block h-auto ">
            <span className="block">{`WPTGrobalでポーカーをプレイすると、プレイする度に「レーキ」と呼ばれる手数料が引かれていきます。`}</span>
            <span className=" ">
              PokerBacksに登録すると、そのかかったレーキの40%をプレイヤー様に還元することができます！
            </span>
          </p>
        </div>
        <div className="poker-life-cylce-image mt-0 flex flex-col items-center">
          <img className="h-auto" alt="" src={pokerLifeCycle} />
        </div>

        <div className="poker-back-steps my-20  flex w-full">
          <h1 className="m-0 poker-text  leading-[40px] font-bold font-inherit inline-block w-3/4 ">
            PokerBacksのご利用は簡単3Step
          </h1>
          <div className=" purple-line rounded-lg w-1/4 [background:linear-gradient(270deg,_rgba(104,_0,_235,_0.55)_4.93%,_rgba(75,_123,_249,_0))]  h-9" />
        </div>
        <div className="w-full steps-cards flex  items-center  gap-[27px] text-center text-[15.83px] text-black">
          <StepsCard
            img={signup}
            text1="メールアドレスを入力し、PokerBacksに登録。"
            btnName="PokerBacksに登録"
            number={1}
            isArrow={true}
          />
          <div className="purple-right-arrow flex flex-row items-center ml-10 justify-start">
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
          <div className="purple-right-arrow flex flex-row items-center ml-10 justify-start">
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

        <HomePageFormContainer />
      </section>
      <div className="hidden mobile-form p-5 mt-10 [background:linear-gradient(94.15deg,_#242c53,_#aa70ff)] h-auto">
        <h1 className="m-0 text-white text-inherit leading-[153%] uppercase font-bold font-inherit">
          <p className="m-0">今すぐ登録して</p>
          <p className="m-0">レーキキャッシュバックを受けよう！！</p>
        </h1>
        <div className=" mt-10 flex justify-center items-center">
          <img
            className="rounded-[4.41px] w-full object-cover"
            alt=""
            src={form}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center ">
          <input
            className=" mt-7 w-full text-[11.46px] bg-[transparent] rounded-[5.29px]   py-3.5 px-[9px] border-[2px] border-solid border-mediumblue-100"
            type="text"
            placeholder="e-mail address"
          />
          <input
            className=" mt-7 w-full text-[11.46px] bg-[transparent] rounded-[5.29px]   py-[13px] px-[9px] border-[2px] border-solid border-mediumblue-100"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="flex mt-7  flex-col items-center justify-center w-full">
          <button className=" w-3/5 text-[14.99px] text-white [border:none] mb-7 py-[19px] px-[27px] bg-mediumslateblue-200 rounded-[7.05px]   items-center justify-center hover:bg-blueviolet">
            今すぐ簡単登録
          </button>
          <div className="flex flex-row items-center justify-center text-[10.58px] text-white  gap-[11px]">
            <input
              className="cursor-pointer  rounded-[2.65px] bg-gainsboro-200  h-[13.23px]"
              type="checkbox"
            />
            利用規約に同意します
          </div>
        </div>
      </div>

      <section className="body-2">
        <div className="flex mt-10 justify-center items-center flex-col banner-2">
          <h1 className="text-white mb-3">仮想通貨ウォレットのご利用方法！</h1>
          <Button
            btnName="仮想通貨ウォレットについて"
            btnClassName="w-[180px] mt-3"
          />
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

      <HomePageFooterContainer />
    </div>
  );
};

export default HomePageView;

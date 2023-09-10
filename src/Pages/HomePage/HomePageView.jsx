import {
  HomePageHeaderContainer,
  NewCard,
  FormCard,
  ArticleCard,
  RecoomededPokerSection,
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
  pokerLogo,
  rightArrow,
  signup,
} from "../../assests";

const HomePageView = () => {
  return (
    <div className="relative bg-whitesmoke box-border w-full h-fit overflow-hidden flex flex-col items-start justify-center text-left text-[36px] text-royalblue-300 font-biz-udpgothic border-[1px] border-solid border-black">
      <HomePageHeaderContainer />
      <img
        className="self-stretch relative max-w-full  overflow-hidden h-[513px] shrink-0 object-cover z-[1]"
        alt=""
        src={banner}
      />
      <RecoomededPokerSection />
      <div className="self-stretch h-[3328px] flex flex-col items-center justify-start relative gap-[139px] z-[3]">
        <div className="self-stretch flex flex-col items-center justify-start relative gap-[86px] z-[0]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[103px] z-[0]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[41px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col py-[30px] px-[188px] items-start justify-center gap-[35px]">
                    <h1 className="m-0 relative leading-[40px] font-bold font-inherit inline-block w-[782px] h-10 shrink-0 [-webkit-text-stroke:0.1px_#000] text-inherit">
                      <span>PokerBacks</span>
                      <span className="text-14xl text-gray-600">
                        のレーキバックシステムとは？
                      </span>
                    </h1>
                    <p className="m-0 relative text-[18px] tracking-[0.13em] leading-[36px] text-gray-400 inline-block w-[1060px] h-[70px] shrink-0">
                      <span className="block">{`WPTGrobalでポーカーをプレイすると、プレイする度に「レーキ」と呼ばれる手数料が引かれていきます。`}</span>
                      <span className="block">
                        PokerBacksに登録すると、そのかかったレーキの40%をプレイヤー様に還元することができます！
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[72px] text-14xl text-gray-500">
                    <img
                      className="relative w-[1064px] h-[448px] object-cover"
                      alt=""
                      src={pokerLifeCycle}
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="w-[1071px] flex flex-row items-center justify-start">
                        <h1 className="m-0 relative text-inherit leading-[40px] font-bold font-inherit inline-block w-[617px] shrink-0">
                          PokerBacksのご利用は簡単3Step
                        </h1>
                        <div className="relative rounded-lg [background:linear-gradient(270deg,_rgba(104,_0,_235,_0.55)_4.93%,_rgba(75,_123,_249,_0))] w-[454px] h-9" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[27px] text-center text-[15.83px] text-black">
                <StepsCard
                  img={signup}
                  text1="メールアドレスを入力し、PokerBacksに登録。"
                  btnName="PokerBacksに登録"
                  number={1}
                  isArrow={true}
                />
                <StepsCard
                  btnName="ダウンロード"
                  img={notification}
                  text1="ポーカーバックス経由でポーカーアプリをダウンロード"
                  text3="UIDをPokerBacksに紐づける"
                  number={2}
                  isArrow={true}
                />
                <StepsCard
                  img={pokerBack}
                  btnName="お得にポーカーをプレイしよう！"
                  text1="ポーカーバックス経由でポーカーアプリをダウンロード"
                  number={3}
                  isArrow={false}
                />
              </div>
            </div>
            <div className="rounded-[10px] [background:linear-gradient(94.15deg,_#242c53,_#aa70ff)] h-[452px] flex flex-row py-0 px-[84px] box-border items-center justify-start gap-[141px] text-8xl text-white">
              <div className="flex flex-col items-start justify-center gap-[37px]">
                <h1 className="m-0 relative text-inherit leading-[153%] uppercase font-bold font-inherit inline-block w-[459px]">
                  <p className="m-0">今すぐ登録して</p>
                  <p className="m-0">レーキキャッシュバックを受けよう！！</p>
                </h1>
                <div className="flex flex-row items-center justify-center gap-[57px]">
                  <div className="flex flex-col items-start justify-start gap-[21px]">
                    <input
                      className="font-outfit text-[11.46px] bg-[transparent] rounded-[5.29px] box-border w-[243px] overflow-hidden flex flex-row py-3.5 px-[9px] items-center justify-start border-[2px] border-solid border-mediumblue-100"
                      type="text"
                      placeholder="e-mail address"
                    />
                    <input
                      className="font-outfit text-[11.46px] bg-[transparent] rounded-[5.29px] box-border w-[243px] overflow-hidden flex flex-row py-[13px] px-[9px] items-center justify-start border-[2px] border-solid border-mediumblue-100"
                      type="text"
                      placeholder="password"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end gap-[28px]">
                    <button className="cursor-pointer [border:none] py-[19px] px-[27px] bg-mediumslateblue-200 rounded-[7.05px] overflow-hidden flex flex-row items-center justify-center hover:bg-blueviolet">
                      <div className="relative text-[14.99px] font-biz-udpgothic text-white text-left">
                        今すぐ簡単登録
                      </div>
                    </button>
                    <div className="flex flex-row items-center justify-center gap-[11px]">
                      <input
                        className="cursor-pointer relative rounded-[2.65px] bg-gainsboro-200 w-[13.23px] h-[13.23px]"
                        type="checkbox"
                      />
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[10.58px] font-biz-udpgothic text-white text-left inline-block">
                        利用規約に同意します
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[283.95px] h-[363.31px]">
                <img
                  className="absolute top-[-8.68px] left-[8.82px] rounded-[4.41px] w-[266.31px] h-[345.67px] object-cover"
                  alt=""
                  src={form}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative h-[182px] z-[1]">
            <img
              className="absolute  h-[182px] object-cover"
              alt=""
              src={banner2}
            />
          </div>
          <button className="cursor-pointer [border:none] py-[17px] px-[66px] bg-mediumslateblue-100 my-0 mx-[!important] absolute top-[calc(50%_+_937.69px)] left-[calc(50%_-_179px)] rounded-8xs w-[357px] h-[50px] flex flex-row box-border items-center justify-start gap-[20px] z-[2]">
            <div className="relative text-base leading-[16px] font-biz-udpgothic text-white text-center inline-block w-[195px] h-4 shrink-0">{`仮想通貨ウォレットについて `}</div>
            <img
              className="relative w-3 h-3 overflow-hidden shrink-0"
              alt=""
              src="/image.svg"
            />
          </button>
          <div className="absolute my-0 mx-[!important] top-[1905.12px] left-[calc(50%_-_198px)] text-[24px] tracking-[0.09em] leading-[32px] text-white text-center z-[3]">
            仮想通貨ウォレットのご利用方法！
          </div>
        </div>
        <div className="w-[1051px] h-[376px] flex flex-row items-center justify-end gap-[45px] z-[1]">
          <NewCard />
          <ArticleCard />
        </div>
        <div className="absolute my-0 mx-[!important] top-[2159.62px] left-[calc(50%_-_321px)] w-[642px] h-[39px] z-[2] text-[19.6px] text-black">
          <div className="absolute top-[9px] left-[529px] tracking-[-0.13em]">
            ポーカーコラム
          </div>
          <div className="absolute top-[0px] left-[0px] text-[19.39px] leading-[38.78px] text-darkslategray-200 text-center">
            News
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start relative gap-[10px] z-[3] text-center text-8xl text-snow">
          <div className="self-stretch relative h-[735px] z-[0]">
            <div className="absolute w-full right-[0px] bottom-[0.23px] left-[0px] bg-black h-[826px]" />
          </div>
          <div className="my-0 mx-[!important] absolute bottom-[239.23px] left-[calc(50%_-_473px)] flex flex-col items-center justify-start gap-[94px] z-[1]">
            <div className="flex flex-col items-center justify-start gap-[59px]">
              <div className="relative">
                今すぐPokerBacksのキャッシュバックに参加する/
              </div>
              <button className="cursor-pointer [border:none] py-5 px-[30px] bg-mediumslateblue-200 rounded-lg overflow-hidden flex flex-row items-center justify-center">
                <b className="relative text-[14px] font-biz-udpgothic text-snow text-center">
                  登録はこちらから
                </b>
              </button>
            </div>
            <div className="flex flex-row items-center justify-start gap-[56px] text-left text-base text-lightgray">
              <img
                className="relative w-[179px] h-[61px] object-cover"
                alt=""
                src={pokerLogo}
              />
              <div className="flex flex-row items-start justify-center gap-[108px]">
                <ul className="m-0 self-stretch flex flex-col items-start justify-start gap-[41px]">
                  <div className="relative">■ 企業情報</div>
                  <div className="flex-1 flex flex-row items-start justify-start text-smi">
                    <div className="self-stretch relative whitespace-pre-wrap inline-block w-36 shrink-0">
                      <p className="m-0">・ 私たちについて</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">・ プライバシーポリシー</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0"></p>
                      <p className="m-0">・ お知らせ</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0"></p>
                      <p className="m-0">・ リスク開示</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">・ 採用情報</p>
                    </div>
                  </div>
                </ul>
                <ul className="m-0 h-[116px] flex flex-col items-start justify-center gap-[41px]">
                  <div className="relative">■ サービス</div>
                  <div className="flex-1 w-32 flex flex-row p-2.5 box-border items-center justify-center text-smi">
                    <div className="relative whitespace-pre-wrap inline-block w-[108px] shrink-0">
                      <p className="m-0">・ KKPOKER</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">・ WPT Grobal</p>
                    </div>
                  </div>
                </ul>
                <ul className="m-0 h-[194px] flex flex-col items-start justify-start gap-[41px]">
                  <div className="relative">■ 企業情報</div>
                  <div className="flex-1 w-[125px] flex flex-col p-2.5 box-border items-center justify-center text-smi">
                    <div className="relative whitespace-pre-wrap">
                      <p className="m-0">・ よくある質問</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0"></p>
                      <p className="m-0">・ 登録方法</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">・ 出金方法</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">・ アフィリエイト</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0"></p>
                      <p className="m-0">・ お問い合わせ</p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[205px] right-[0px] flex flex-col items-start justify-center gap-[35px] z-[4] text-[52px] text-white font-inter">
        <div className="relative tracking-[0.2px] leading-[113.5%] uppercase inline-block w-[510px] h-[113px] shrink-0">
          自動で最高レーキバックを受けよう！
        </div>
        <div className="rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-gray-400 w-[510px] flex flex-col py-2.5 pr-[61px] pl-2.5 box-border items-end justify-center">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <Button
              btnName="メールアドレスで登録する"
              btnClassName="py-[5px] bg-royalblue-200 w-[255px] rounded-81xl"
            />
            <Button
              btnName="ログイン"
              btnClassName="py-[5px] bg-[transparent] text-gray-100 text-gray-100 rounded-81xl border border-[2px] border-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;

import { DataViewTableContainer } from "../../Components";
import "./styles.scss";

const AffiliateView = () => {
  return (
    <div className="affiliate-wrapper w-11/12">
      <div className="affliate-title flex items-center justify-center p-4">
        アフィリエイト
      </div>
      <div className="affiliate-table">
        <table>
          <tbody>
            <tr>
              <td>WPTアフィリエイトリンク</td>
              <td>https://www.pokerbacks.com/afi?code=12345</td>
              <td>リンクをコピー</td>
            </tr>
            <tr>
              <td>現在の集客人数</td>
              <td>10人</td>
            </tr>
            <tr>
              <td>累計アフィリエイト報酬額</td>
              <td>$33,900</td>
            </tr>
          </tbody>
        </table>
      </div>
      <DataViewTableContainer/>
    </div>
  );
};

export default AffiliateView;

import { css, Global } from "@emotion/core";
import React from "react";
import { useIntl } from "react-intl";
import { Header } from "../components";
import brandJump from "../images/brand/mascot-jump1.png";
import { FC } from "../interfaces";
import { useTitle } from "../hooks";

/** 首页的属性接口 */
interface IndexProps {}
/**
 * 首页
 */
const Index: FC<IndexProps> = () => {
  const { formatMessage } = useIntl(); // i18n
  useTitle({ suffix: formatMessage({ id: "site.slogan" }) }); // 设置标题

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        .Index__Title {
          flex: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          .Index__MsgContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80%;
            max-width: 1000px;
          }
          .Index__MascotBox {
            width: 34%;
            img {
              max-height: 300px;
            }
          }
          .Index__MsgBox {
            width: 60%;
            padding: 0 16px;

            h2 {
              text-align: center;
              font-size: 32px;
              font-weight: bolder;
              line-height: 2em;
              margin: 0;
            }

            p.lead {
              text-align: center;
              font-size: 18px;
              line-height: 2em;
              margin: 10px 0;
              margin-top: -6px;
            }

            .msgBox {
              border-radius: 10px;
              box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);
              max-height: 300px;
              text-align: center;
              overflow: auto;
            }
          }
        }
        .Index__Footer {
          height: 50px;
          text-align: center;
          a {
            font-size: 16px;
          }
        }
      `}
    >
      <Global
        styles={css`
          #root {
            width: 100%;
            height: 100%;
          }
        `}
      />
      <Header></Header>
      <div className="Index__Title">
        <div className="Index__MsgContainer">
          <div className="Index__MascotBox"><img src={brandJump} alt="Mascot" /></div>
          <div className="Index__MsgBox">
            <h2>{ formatMessage({ id: "site.name" }) }</h2>
            <p className="lead">{formatMessage({ id: "site.slogan" })}</p>
            <div className="msgBox">
              <p className="red">请注意，这个版本是删档测试版本。数据保存到2022年11月底！</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Index__Footer">{/* 备案号 */}</div>
    </div>
  );
};
export default Index;

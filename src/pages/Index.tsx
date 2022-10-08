import { css, Global } from "@emotion/core";
import React from "react";
import { useIntl } from "react-intl";
import { Header } from "../components";
import brandJump from "../images/brand/mascot-jump1.png";
import { FC } from "../interfaces";
import { useTitle } from "../hooks";
import { Icon } from '../components';

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
              color: #7F7A7A;
            }

            p.lead {
              text-align: center;
              font-size: 18px;
              line-height: 2em;
              margin: 10px 0;
              margin-top: -6px;
            }

            .links {
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 16px;

              li {
                color: #7F7A7A;
                cursor: pointer;
              }
              li:hover {
                text-decoration: underline;
              }
            }

            .msgBox {
              border-radius: 10px;
              box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);
              max-height: 300px;
              overflow: auto;
              padding: 10px;

              p {
                line-height: 1.5em;
                margin: 0;
                text-indent: 2em;
              }

              .red {
                color: red;
                font-weight: bolder;
              }

              code {
                font-size: 0.8em;
                color: orange;
                font-weight: bold;
                padding: 2px 5px;
                border: 1px solid orange;
                border-radius: 3px;
                white-space: nowrap;
              }

              p.red {
                text-align: center;
                text-indent: 0;
              }
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
              <p className="red"><Icon icon={["fas", "exclamation-triangle"]} /> 请注意，这个版本是删档测试版本。数据保存到2022年11月底！<Icon icon={["fas", "exclamation-triangle"]} /></p>
              <p>此版本使用中有出现问题，或者有建议想交流的，可以添加此项目 <Icon icon={["fab", "qq"]} /> 反馈专群 <code>451050931</code> 咨询。在萌翻的反馈群里也可以询问，但截图时请包含域名或者注明是自己搭建的“漫画译注器协作版”项目。</p>
              <p>此项目的前后端均在<Icon icon={["fab", "github"]} /> Github 上开源，目前由于还没测试完成，使用的是 <code><Icon icon={["fas", "code-branch"]} /> dev</code> 分支更新。后期有稳定版本后会转到 <code><Icon icon={["fas", "code-branch"]} /> master</code> 分支上。由于整理代码时候调整了部分接口的参数，“漫画译注器协作版”的前后端分支只能互相搭配使用。<span className="red">不可搭配“萌翻”开源的原版前后端，会出现表单提交报错的情况！</span></p>
              <p>后端项目：<a href="https://github.com/scanlation/moetran-backend"><code><Icon icon={["fab", "github"]} /> scanlation/moetran-backend</code></a></p>
              <p>前端项目：<a href="https://github.com/scanlation/moetran-frontend"><code><Icon icon={["fab", "github"]} /> scanlation/moetran-frontend</code></a></p>
            </div>
            <ul className="links">
              <li>使用/搭建帮助</li>
              <li>相关项目链接</li>
              <li>关于我们</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Index__Footer">{/* 备案号 */}</div>
    </div>
  );
};
export default Index;

import { css, Global } from '@emotion/core';
import React, { useRef } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useTitle } from '../hooks';
import { Header, Icon } from '../components';
import mascot from '../images/brand/mascot-jump1.png';
import classNames from 'classnames';
import { AppState } from '../store';
import { FC } from '../interfaces';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { formatMessage } = useIntl(); // i18n
  useTitle({ prefix: formatMessage({ id: 'site.link.title' }) }); // 设置标题
  const platform = useSelector((state: AppState) => state.site.platform)
  const isMobile = platform === 'mobile';

  return (
    <>
      <Global
        styles={css`
          #root {
            height: 100%;
          }
        `}
      />
      <div
        css={css`
          min-height: 100%;
          display: flex;
          flex-direction: column;
          padding-top: 70px;
          box-sizing: border-box;

          .Header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #fff;
          }
        `}>
          <Header></Header>
          <div className={classNames([{ mobile: isMobile }])}
            css={css`
              flex: 1 0 auto;
              width: 100%;
              background: url(${mascot}) fixed no-repeat right bottom;
              background-size: 25%;
              display: flex;
              justify-content: center;
              align-items: center;
              .articleBox {
                width: 100%;
                max-width: 800px;

                .lead {
                  padding: 20px;
                  background-color: #eee;
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

                blockquote {
                  padding: 20px;
                  background-color: #eee;
                  border-left: 3px solid #ccc;

                  p {
                    margin: 0;
                  }

                  p + p {
                    margin-top: .5em;
                  }
                }

                article + article {
                  margin-top: 16px;
                }
              }
              &.mobile {
                /* height: auto; */
              }
            `}>
              <div className="articleBox">
                <h1>相关项目链接</h1>
                <article className="lead">
                  <p>
                    以下是与本项目存在关联的几个开源项目地址，请访问下载：
                  </p>
                </article>
                <article>
                  <ol>
                    <li><a href="https://noodlefighter.com/label_plus/" target="_blank" rel="noopener noreferrer">LabelPlus</a> 本项目最开始的原型。可离线使用，适合小型项目使用。</li>
                    <li><a href="https://github.com/LabelPlus/PS-Script" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fab", "github"]} /> Photoshop Script</code></a> 给嵌字人员使用的Photoshop自动化插件，可以自动将翻译稿关联的图片导入Photoshop，并自动将标注的翻译内容生成对应的文本图层。</li>
                    <li><a href="https://github.com/kozzzx/moeflow-frontend" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fab", "github"]} /> kozzzx/moeflow-frontend</code></a> 萌翻[MoeFlow.com] 原版前端项目，最新版本可支持连接本地存储版后端。</li>
                    <li><a href="https://github.com/kozzzx/moeflow-backend" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fab", "github"]} /> kozzzx/moeflow-backend</code></a> 萌翻[MoeFlow.com] 原版后端项目，依赖阿里云存储，配置较为复杂。</li>
                    <li><a href="https://www.moeflow.com" target="_blank" rel="noopener">萌翻[MoeFlow]</a> 原网站地址，将于2023年1月1日停止新用户注册和新项目创建。</li>
                  </ol>
                </article>
              </div>
            </div>
        </div>
    </>
  )
}

export default About

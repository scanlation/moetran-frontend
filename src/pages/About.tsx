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
  useTitle({ prefix: formatMessage({ id: 'site.about.title' }) }); // 设置标题
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
                <h1>关于本项目</h1>
                <article className="lead">
                  <p>
                    本项目是基于 <a href="https://www.moeflow.com" target="_blank" rel="noopener">萌翻[MoeFlow]</a> 网站开源的网站源码改造而成的。
                    此版本前后端项目由 Project.Scanlation.Info 团队，基于开源共享的原则提供给有漫画翻译协作需要的网友自行搭建。
                  </p>
                  <p>如果您在使用过程中发现问题，或者有更好的方案希望我们参考。欢迎通过以下渠道联系我们团队讨论：</p>
                  <p>此项目的技术支持QQ群： <a href="https://jq.qq.com/?_wv=1027&k=b1BQuXvy" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fas", "users"]} /> 451050931</code></a></p>
                  <p>电子邮件信箱：<a href="mailto:scanlation.info@gmail.com?subject=[MoeTran Project]" target="_blank"><code><Icon icon={["fas", "envelope"]} /> scanlation.info@gmail.com</code></a></p>
                  <p>
                    您也可以直接在下方提供的GitHub项目链接中提出你的Issue(问题)。欢迎Fork(复刻)我们的仓库进行开发，并将你认为有意义的修改通过Pull Request(合并请求)的方式提交给我们。
                    如果你的修改优化符合本项目的发展方向，我们会尽快将你的分支合并进本项目中。
                  </p>
                </article>
                <article>
                  <h2>开源共享</h2>
                  <p>本项目使用MIT协议在GitHub上开放源码，您可以在符合此协议授权的情况下自由使用以下仓库提供的项目源码自行搭建项目。</p>
                  <p>本项目目前由React前端项目、本地存储版后端项目、S3兼容存储版后端项目（开发中）三个开源项目组成，本项目的后端代码改造后与 萌翻[MoeFlow.com] 开源的版本<strong className="red">不兼容</strong>，所以请不要混用。前端的部分功能调整已经合并到萌翻的主分支，可以直接使用萌翻前端项目的最新版本连接本项目的后端正常使用。但后续版本的新功能就无法提交到萌翻前端分支上，故推荐使用本项目的前端分支。</p>
                  <p>React前端项目：<a href="https://github.com/scanlation/moetran-frontend" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fab", "github"]} /> scanlation/moetran-frontend</code></a></p>
                  <blockquote>
                    <p>
                      您正在访问的这个页面就是React前端项目的演示，为了方便搭建我们将 萌翻[MoeFlow.com] 的前端配置优化到只有“接口地址”一项。
                      你完全可以使用网站托管程序简单配置一下就能自动生成了。
                    </p>
                  </blockquote>
                  <p>本地存储版后端项目：<a href="https://github.com/scanlation/moetran-local-backend"><code><Icon icon={["fab", "github"]} /> scanlation/moetran-local-backend</code></a></p>
                  <blockquote>
                    <p>
                      将 萌翻[MoeFlow.com] 原本的文件上传阿里云OSS存储方案调整为文件本地存储的简化版本，目前还在Alpha测试中。
                      数据库和前端可兼容 萌翻[MoeFlow.com] 原版的最新版本。
                    </p>
                    <p>本地存储版前后端搭建教程，请参考 <a href="https://blog.moetran.com" target="_blank" rel="noopener"><Icon icon={["fas", "newspaper"]} /> 本项目博客</a> 的相关文章。</p>
                  </blockquote>
                  <p>萌翻[MoeFlow.com] 原版前端项目：<a href="https://github.com/kozzzx/moeflow-frontend" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fab", "github"]} /> kozzzx/moeflow-frontend</code></a>（新版本可以混用）</p>
                  <p>萌翻[MoeFlow.com] 原版后端项目：<a href="https://github.com/kozzzx/moeflow-backend" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fab", "github"]} /> kozzzx/moeflow-backend</code></a>（<strong className="red">不推荐混用</strong>）</p>
                </article>
                <article>
                  <h2>关于漫画译注器</h2>
                  <p>漫画译注器的原型是 <a href="https://noodlefighter.com/label_plus/" target="_blank" rel="noopener noreferrer"><code>LabelPlus</code></a> 这个.Net项目。在图片上标号目的是方便翻译人员描述翻译语句的准确位置，嵌字人员可以在不熟悉日文的情况下准确定位到需修改的位置。后来为了方便嵌字使用这份特殊格式的翻译稿，就有了附加的 <a href="https://github.com/LabelPlus/PS-Script" target="_blank" rel="noopener noreferrer"><code><Icon icon={["fab", "github"]} /> Photoshop Script</code></a> 导入脚本。</p>
                  <p>在线协作版本的萌翻[MoeFlow.com] 网站，则是 <code>LabelPlus</code> 这个项目的拓展，最初的目标是从修图到嵌字发布全流程的管理。但随着后期进驻的译制组增多，管理团队没找到高效审核违规图片的方法，也没有太多的时间每个图片都查看过去。所以他们决定关闭这个项目，并且开放相关源码方便汉化组自行搭建。</p>
                  <p>漫画译注器[MoeTran.com] 这个分支就是因萌翻的开源而拓展出来的方案。我们将维护一套译制组可以自行搭建的本地存储版，和一套S3兼容存储的版本。</p>
                  <p>目前正在使用的测试版本，是本地存储版的演示。后续会更新其他更符合汉化组需要的功能，比如批量开通账号、内部文件分享、任务进度管理等。敬请期待！</p>
                  <p>而S3兼容存储版开发完成后，我们将搭建一个长期稳定的线上版本。之前使用萌翻的朋友可以直接在这个平台注册账号，继续创建新的翻译项目。由于新搭建的网站不在国内，所以不用担心违禁内容审核。唯一需要注意的是本站上传的图片仅供标注翻译使用，项目完成后将会清理。不要将本站用于图片外链、公开浏览等其他用途。</p>
                </article>
              </div>
            </div>
        </div>
    </>
  )
}

export default About

/*
 * author: guoyili
 * email:  guoyili209@gmail.com
 * date:   2020-03-02 19:54
*/
<template>
  <div>
    <section class="site-hero" style="background-image:url(assets/bg.jpg);" id="section-home">
      <div class="container">
        <div class="row intro-text align-items-center justify-content-center">
          <div class="col-md-10 text-center">
            <h1
              v-waypoint="{active: true, callback: onWaypoint, options: intersectionOptions}"
              class="site-heading site-animate"
              ref="siteanimate"
            >Hello!我是郭一力</h1>
            <p class="lead mb-4 site-subheading site-animate">- Web应用/游戏开发工程师 -</p>
            <p>
              <a href="#section-about" class="smoothscroll btn btn-primary px-4 py-3">更 多</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section" id="section-about">
      <div class="container">
        <div class="mb-5 align-items-center">
          <div class="section-heading text-center">
            <h2>
              <strong>关于我</strong>
            </h2>
          </div>
          <div class="text-center">
            <!-- <div class="col-md-6 col-lg-6 col-xl-6"> -->
            <p class="lead">Web前端/Html游戏/Flash游戏开发工程师</p>
            <p class="mb-5">
              1、两年Html游戏开发经验，5年flash游戏开发经验；
              <br />2、熟悉html/js/css等相关web前端和游戏开发技术；
              <br />3、全程参与过千万级大型项目开发，以及多个中小型项目开发；
              <br />4、能胜任项目管理、客户端高级开发等职位。
              <br />
            </p>
            <!-- </div> -->
            <p>
              个人博客：
              <a href="http://www.ylyz2019.top" target="_blank">我的博客</a>
              <br />个人在线简历：
              <a
                href="http://www.ylyz2019.top/#curriculumvitae"
                target="_blank"
              >我的简历</a>
              <br />个人Html游戏Demo：
              <a
                href="http://www.ylyz2019.top/game/realase/"
                target="_blank"
              >基于WebGL的3D角色2D场景游戏演示</a>
              <br />
              <a href="http://www.ylyz2019.top/game/release2/web/" target="_blank">基于WebGL的3D游戏演示</a>
              <br />线上游戏展示:
              <a href="http://www.4399.com/flash/207239.htm" target="_blank">幻想大乱斗</a>、
              <a href="http://qqapp.qq.com/app/28238.html" target="_blank">梦之队</a>
            </p>
          </div>
        </div>

        <div class="row pt-5">
          <div class="col-md-3 mb-3">
            <div class="section-heading">
              <h2 class="text-center">
                My
                <strong>Skill</strong>
              </h2>
            </div>
          </div>
          <div class="col-md-9">
            <div class="skill">
              <h3>Vue.js</h3>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 90%;"
                  aria-valuenow="90"
                  aria-valuemin="100"
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div class="skill">
              <h3>Html/CSS/JS</h3>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width:90%"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div class="skill">
              <h3>TypeScript/Laya/WebGL</h3>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 90%;"
                  aria-valuenow="90"
                  aria-valuemin="100"
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div class="skill">
              <h3>AS/Flash/Unity</h3>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 90%;"
                  aria-valuenow="90"
                  aria-valuemin="100"
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section bg-light" id="section-experience">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12">
            <div class="section-heading text-center">
              <h2>
                <strong>工作</strong>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="block-47 mb-5">
              <blockquote class="block-47-quote d-flex flex-column">
                <div class="block-47-image">
                  <img src="assets/dkm.png" alt="Image placeholder" class="img-fluid" />
                </div>
                <a href="https://www.dkmol.com/" target="_blank">成都哆可梦网络科技有限公司</a>
                <span class="block-47-quote-author">H5游戏开发工程师</span>
                <p>
                  2018/7-2020/2
                  <br />主要负责基于Laya引擎的H5游戏开发，参与了《幻想大乱斗》、《圣域战神》两个H5游戏项目的开发。
                </p>
                <p>
                  <span id="w5" class="site-link modalOpen" @click="showMsgBoxTwo('哆可梦',w5)">
                    了解更多
                    <i class="icon-chevron-right"></i>
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="block-47 mb-5">
              <blockquote class="block-47-quote d-flex flex-column">
                <div class="block-47-image">
                  <img src="assets/hlglogo.png" alt="Image placeholder" class="img-fluid" />
                </div>
                <a href="https://www.dkmol.com/" target="_blank">成都火龙果科技有限公司</a>
                <span class="block-47-quote-author">H5游戏开发工程师</span>
                <p>
                  2018/4-2018/7
                  <br />主要负责基于html/css/js的H5游戏开发，参与了《魔王の始め方》H5游戏项目的开发。
                </p>
                <p>
                  <span id="w5" class="site-link modalOpen" @click="showMsgBoxTwo('火龙果',w4)">
                    了解更多
                    <i class="icon-chevron-right"></i>
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="block-47 mb-5">
              <blockquote class="block-47-quote d-flex flex-column">
                <div class="block-47-image">
                  <img src="assets/qfwl2.jpg" alt="Image placeholder" class="img-fluid" />
                </div>
                <span>
                  <a
                    href="https://baike.baidu.com/item/360%E6%B8%B8%E6%88%8F%E8%89%BA%E6%9C%AF"
                    target="_blank"
                  >深圳岂凡网络科技有限公司</a>（已被360收购创立360游戏艺术）
                </span>
                <span class="block-47-quote-author">引擎/页游开发工程师</span>
                <p>
                  2016/3-2018/3
                  <br />主要负责基于Flash AS3的网页游戏开发，参与了《拳皇98终极之战Web》游戏项目的开发。
                </p>
                <p>
                  <span id="w5" class="site-link modalOpen" @click="showMsgBoxTwo('岂凡网络',w3)">
                    了解更多
                    <i class="icon-chevron-right"></i>
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="block-47 mb-5">
              <blockquote class="block-47-quote d-flex flex-column">
                <div class="block-47-image">
                  <img src="assets/ftx.png" alt="Image placeholder" class="img-fluid" />
                </div>
                <a href="http://www.ftxsports.com/" target="_blank">深圳范特西科技有限公司</a>
                <span class="block-47-quote-author">页游开发工程师</span>
                <p>
                  2015/3-2016/2
                  <br />主要负责基于Flash AS3的网页游戏开发，参与了《梦之队》游戏的维护工作，以及《足坛教父》游戏的开发。
                </p>
                <p>
                  <span id="w5" class="site-link modalOpen" @click="showMsgBoxTwo('范特西',w2)">
                    了解更多
                    <i class="icon-chevron-right"></i>
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="block-47 mb-5">
              <blockquote class="block-47-quote d-flex flex-column">
                <div class="block-47-image">
                  <img src="assets/zqb.png" alt="Image placeholder" class="img-fluid" />
                </div>
                <a href="https://www.zqgame.com/" target="_blank">深圳中青宝互动网络股份有限公司</a>
                <span class="block-47-quote-author">页游开发工程师</span>
                <p>
                  2013/9-2015/2
                  <br />主要负责基于Flash AS3的网页游戏开发，参与了《合金大作战》游戏项目的开发。
                </p>
                <p>
                  <span id="w5" class="site-link modalOpen" @click="showMsgBoxTwo('中青宝',w1)">
                    了解更多
                    <i class="icon-chevron-right"></i>
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="block-47 mb-5">
              <blockquote class="block-47-quote d-flex flex-column">
                <div class="block-47-image">
                  <img src="assets/skjy.jpg" alt="Image placeholder" class="img-fluid" />
                </div>
                <span>
                  <a
                    href="https://baike.baidu.com/item/%E9%97%AA%E5%AE%A2%E6%95%99%E8%82%B2"
                    target="_blank"
                  >成都闪克信息技术有限公司</a>（已倒闭）
                </span>
                <span class="block-47-quote-author">Flash培训教师</span>
                <p>
                  2013/3-2013/8
                  <br />主要负责基于Flash AS3初级技术的培训工作。
                </p>
                <p>
                  <span id="w5" class="site-link modalOpen" @click="showMsgBoxTwo('闪克教育',w_1)">
                    了解更多
                    <i class="icon-chevron-right"></i>
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="block-47 mb-5">
              <blockquote class="block-47-quote d-flex flex-column">
                <div class="block-47-image">
                  <img src="assets/gmhd.jpg" alt="Image placeholder" class="img-fluid" />
                </div>
                <span>
                  <a href="http://www.publicis-china.com/" target="_blank">北京古美互动科技有限公司成都分公司</a>（已被阳狮集团收购）
                </span>
                <span class="block-47-quote-author">Web前端开发（实习）</span>
                <p>
                  2010/12-2011/4
                  <br />主要参加了web前端开发的实习工作
                </p>
                <p>
                  <span id="w5" class="site-link modalOpen" @click="showMsgBoxTwo('古美互动',w_2)">
                    了解更多
                    <i class="icon-chevron-right"></i>
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="site-section border-top pb-0" id="section-project">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="section-heading text-center">
              <h2>
                <strong>项目</strong>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
              <img class="img-fluid" src="assets/hxdld.jpg" />
              <h3 class="mb-4">幻想大乱斗H5</h3>
              <p>
                幻想大乱斗是一款魔幻冒险回合制游戏。欧式魔幻历险故事剧情，结合精致二次元风格。玩法与梦幻西游类似。
                <br />游戏地址:
                <a href="http://www.4399.com/flash/207239.htm" target="_blank">4399</a>，
                <a
                  href="http://open1493.open.7724.com/hxdld/game?flag=open1493"
                  target="_blank"
                >7724</a>，
                <a href="http://h5.fante.com/?rel=81_1599_25067" target="_blank">凡特游戏</a>
              </p>
              <p class="text-center">
                <span
                  id="p5"
                  class="site-link modalOpen"
                  data-toggle="modal"
                  data-target="#modalCV"
                  data-mycv="my project"
                  data-title="《幻想大乱斗H5》"
                  @click="showMsgBoxTwo('《幻想大乱斗H5》',p5)"
                >
                  了解更多
                  <i class="icon-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
              <img class="img-fluid" src="assets/syzs.jpg" />
              <h3 class="mb-4">圣域战神H5</h3>
              <p>传奇题材ARPG游戏，战士、法师、道士合击闯关的传奇游戏，玩法与市场主流合击类型传奇一样。</p>
              <p>
                <span
                  id="p4"
                  class="site-link modalOpen"
                  data-toggle="modal"
                  data-target="#modalCV"
                  data-mycv="my project"
                  data-title="《圣域战神H5》"
                  @click="showMsgBoxTwo('《圣域战神H5》',p4)"
                >
                  了解更多
                  <i class="icon-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
              <img class="img-fluid" src="assets/mwsf.jpg" />
              <h3 class="mb-4">魔王の始め方H5</h3>
              <p>日本魔幻题材的成人卡牌游戏，玩家通过不断完成任务并招募不同的女性英雄，提升战斗力最后击败魔王的故事。</p>
              <p>
                <span
                  id="p-2"
                  class="site-link modalOpen"
                  data-toggle="modal"
                  data-target="#modalCV"
                  data-mycv="my project"
                  data-title="《魔王の始め方H5》"
                  @click="showMsgBoxTwo('《魔王の始め方H5》',p3)"
                >
                  了解更多
                  <i class="icon-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
              <img class="img-fluid" src="assets/qhweb.jpg" />
              <h3 class="mb-4">拳皇98终极之战Web</h3>
              <p>《拳皇98终极之战》是一款正版SNK授权的动作格斗网页游戏。游戏人物基本还原了经典街机版拳皇98特色,打击感超强！不再是传统网游天梯的纯数值比拼，操作成长也能让您战胜对手！游戏玩法为自创，借鉴了PVP格斗类竞技+ARPG养成类游戏。</p>
              <p>
                <span
                  id="p3"
                  class="site-link modalOpen"
                  data-toggle="modal"
                  data-target="#modalCV"
                  data-mycv="my project"
                  data-title="《拳皇98终极之战Web》"
                  @click="showMsgBoxTwo('《拳皇98终极之战Web》',p2)"
                >
                  了解更多
                  <i class="icon-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
              <img class="img-fluid" src="assets/ztjf.jpg" />
              <h3 class="mb-4">足坛教父</h3>
              <p>《足坛教父》旨在为玩家打造一个更加真实，更加好玩的多人互动平台，现实模拟让玩家成为从一位菜鸟“经理人”，成长为一个可以带领自己俱乐部登上梦想巅峰的足球教父。玩法和市场上主流模拟经营类似。</p>
              <p>
                <span
                  id="p2"
                  class="site-link modalOpen"
                  data-toggle="modal"
                  data-target="#modalCV"
                  data-mycv="my project"
                  data-title="《足坛教父》"
                  @click="showMsgBoxTwo('《足坛教父》',p1)"
                >
                  了解更多
                  <i class="icon-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
              <img class="img-fluid" src="assets/mzd.png" />
              <h3 class="mb-4">梦之队</h3>
              <p>一款采用美国NBA真实数据的体育模拟经营及实时策略竞技类网页游戏。</p>
              <p>
                游戏地址:
                <a href="http://qqapp.qq.com/app/28238.html" target="_blank">腾讯应用中心</a>
              </p>
              <p>
                <span
                  id="p-1"
                  class="site-link modalOpen"
                  data-toggle="modal"
                  data-target="#modalCV"
                  data-mycv="my project"
                  data-title="《梦之队》"
                  @click="showMsgBoxTwo('《梦之队》',p_1)"
                >
                  了解更多
                  <i class="icon-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div class="site-service-item site-animate" data-animate-effect="fadeIn">
              <img class="img-fluid" src="assets/hjdzz.jpg" />
              <h3 class="mb-4">合金大作战</h3>
              <p>一款正版合金弹头授权游戏，游戏将原版角色英雄化，赋予不同职业和属性，由玩家自主搭配不同阵型组合，进行横版闯关的动作游戏。玩法为ARPG类型。</p>
              <p>
                <span id="p1" class="site-link modalOpen" @click="showMsgBoxTwo('《合金大作战》',p_2)">
                  了解更多
                  <i class="icon-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="site-section bg-light" id="section-education">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
            <div class="section-heading text-center">
              <h2>
                <strong>教育</strong>
              </h2>
            </div>
          </div>
          <div class="col-md-12">
            <!-- <h2 class="mb-5">Education</h2> -->
            <div class="resume-item mb-4 d-flex flex-column">
              <div class="block-47">
                <div class="block-47-image">
                  <a href="#">
                    <img src="assets/cdxg2.jpg" alt="Image placeholder" class="img-fluid" />
                  </a>
                </div>
              </div>
              <span class="date">
                <span class="icon-calendar"></span>2011-2013
              </span>
              <h3>信息管理与信息系统 本科</h3>
              <p>主要学习了信息技术与管理学相关的课程，如编程课java、C语言、C#等，信息技术理论课操作系统、计算机组成原理等，以及管理科学相关课程如管理学、信息系统工程、运筹学等；</p>
              <p>
                在校期间大三、大四学年分别获得过校级三等、二等奖学金；
                <br />课余生活中以校园网为基础，和同学一起搭建了自己专业的局域网学生论坛；
              </p>
              <p>
                <span class="school">成都信息工程大学</span>
              </p>
            </div>
            <div class="resume-item mb-4">
              <div class="block-47">
                <div class="block-47-image">
                  <a href="#">
                    <img src="assets/yxxy.jpg" alt="Image placeholder" class="img-fluid" />
                  </a>
                </div>
              </div>
              <span class="date">
                <span class="icon-calendar"></span> 2008-2011
              </span>
              <h3>经济信息管理 专科</h3>
              <p>主要学习了信息技术与市场经济相关的课程，如编程课javascript、vb、java等，市场经济相关课程如市场经济、管理信息系统、会计学等；</p>
              <p>
                大一学年获得1次校级三等奖学金，大二、大三学年获得2次校级二等奖学金；
                <br />课余生活中，积极参与学生计算机协会社团活动，和同学一起创建了web/flash兴趣小组，培养了一定的web前端技术兴趣；
              </p>
              <span class="school">成都信息工程大学银杏酒店管理学院</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="site-section" id="section-contact">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
            <div class="section-heading text-center">
              <h2>
                <strong>联系</strong>
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-lg-12 mb-4">
            <div class="blog-entry">
              <!-- <a href="#"><img src="images/post_1.jpg" alt="Image placeholder" class="img-fluid"></a> -->
              <div class="blog-entry-text">
                <!-- <h3><a href="#">Creative Product Designer From Facebook</a></h3> -->
                <p class="mb-4">电话: 199 8310 9469</p>
                <p class="mb-4">地址: 四川 成都市</p>
                <p class="mb-4">
                  邮箱:
                  <a href="mailto:guoyili209@gmail.com">guoyili209@gmail.com</a>
                </p>
                <p class="mb-4">
                  网址:
                  <a href="http://www.ylyz2019.top" target="_blank">www.ylyz2019.top</a>
                </p>
                <p class="mb-4">
                  简历下载:
                  <a id="downloadCV" href="assets/mycv.pdf" target="_blank" download = "郭一力的简历.pdf">download</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <b-modal class="modal fade" id="modalCV" tabindex="-1" scrollable dialog-class>
        <template v-slot:modal-title>
          <div ref="cvtitle">222</div>
        </template>
        <pre>123</pre>
      </b-modal>
    </section>
  </div>
</template>

<script>
export default {
  name: "CurriculumVitae",
  //   data(){
  //       return {mycvjs}
  //   },
  data() {
    return {
      w5: (
        <pre>
          {"  "}
          18年7月入职后，担任H5游戏开发工程师一职，主要参与了《幻想大乱斗》、《圣域战神》两个H5游戏的开发；
        </pre>
      ),
      w4: (
        <pre>
          {"  "}
          18年4月入职后，担任H5游戏开发工程师一职，主要参与了《魔王の始め方》H5游戏的开发；
        </pre>
      ),
      w3: (
        <pre>
          {"  "}
          16年3月入职到18年3月离职，主要参与了《拳皇98终极之战Web》的全程开发，我是第3个进入项目的程序，属于核心开发人员;
        </pre>
      ),
      w2: (
        <pre>
          {"  "}
          15年3月入职后，在《梦之队》运营项目中主要负责客户端日常维护和开发工作；
          {"\n" + "  "}
          15年6月调《足坛教父》项目担任客户端开发一职，主要负责客户端部分游戏功能开发。
        </pre>
      ),
      w1: (
        <pre>
          入行第一家游戏公司。
          {"\n" + "  "}
          13年9月入职后，在《合金大作战》项目中担任页游客户端开发一职，主要根据主程安排负责相应游戏功能开发；
          {"\n" + "  "}
          14年11月调证券交易所项目组，参与了几个证券知识相关web小游戏开发。
        </pre>
      ),
      w_1: (
        <pre>
          {"  "}
          公司是一家专注Flash平台相关技术的教育培训公司，我主要负责Flash
          AS3的初级教学工作。；
        </pre>
      ),
      w_2: (
        <pre>
          {"  "}
          公司是一家营销策划类的广告公司，主要帮其他企业设计宣传网站，我在这家公司实习了近4个月，了解了商业公司web前端的实战开发流程。
        </pre>
      ),
      p5: (
        <pre>
          项目描述： {"\n"}
          1、游戏类型和玩法模仿网易手游《大话西游》，属于回合制游戏;{"\n"}
          2、游戏已上线，目前处于运营阶段； 3、项目人员，6 位前端，4 位后端，6
          位策划。{"\n"}
          目前已上线多个主流H5平台，包括4399、7724、凡特游戏、微信小游戏平台等，以及九游、37、应用宝等多个平台手机app微端；
          {"\n"}
          项目职责：{"\n"}
          我于2018年12月进入项目组，后续负责部分玩法系统开发，比如跨服争霸PVP、宠物抓取等开发;
        </pre>
      ),
      p4: (
        <pre>
          项目描述：{"\n"}
          1、游戏属于传奇类型的H5 游戏；{"\n"}
          2、项目人员5 位前端，4 位后端，4位策划，美术约5人，合击18人左右；
          {"\n"}
          3、18年11月底上线后，数据不理想，以及版权、项目组内部问题等原因，公司决定不推广。
          {"\n"}
          此项目属于哆可梦首个自研H5项目，周期相对较长，研发人员换了2批，踩过很多坑，为公司后续H5项目积累了一些经验。
          {"\n"}
          项目职责：{"\n"}
          我于2018年7月进入项目组，后续负责部分功能开发，比如激情泡点PVP、签到奖励等开发；
        </pre>
      ),
      p3: (
        <pre>
          项目描述：{"\n"}
          1、游戏为日本DMM公司PC端H5游戏，我们负责将其移植到手机上。{"\n"}
          2、人员我方前端2人，其余人员均为为日本公司提供，我们主要通过github进行协同开发。
          {"\n"}
          3、游戏目前处于上线运营状态，需要翻墙用日本vpn才能登陆DMM平台。
          {"\n"}
          项目职责：{"\n"}
          我于2018年4月进入项目组，后续主要负责利用html/css/js将游戏适配到手机上。
        </pre>
      ),
      p2: (
        <pre>
          项目描述：{"\n"}
          1、游戏拥有日本SNK正版授权，是一款格斗竞技类游戏。
          {"\n"}
          2、人员构成为前端9人，后端8人,引擎5人，策划约20人，美术约40人，合计80人左右。{"\n"}
          3、游戏曾先后上线腾讯、7k7k、4399、西游网等国内多个平台，以及游族海外平台GTArcade，目前游戏已下架。{"\n"}
          {"\n"}
          项目职责：{"\n"}
          我于2016年3月进入项目组，是第三名进入项目组的程序，属于核心开发成员;{"\n"}
          1、在引擎开发期间，主要负责引擎AI 部分底层设计与开发，以及AI 编辑器的全部功能和剧情编辑器的部分功能开发；{"\n"}
          2、在demo 开发期间，主要负责基础战斗AI 的开发；
          {"\n"}
          3、在游戏立项后，主要负责战斗、关卡中的AI；
          {"\n"}
          4、在游戏开发后期，主要负责AI 维护，以及部分战斗功能，和其他PVE 系统、商业系统等开发。
        </pre>
      ),
      p1: (
        <pre>
          项目描述：{"\n"}
          1、游戏拥有西班牙足球甲级联赛正版授权，是一款模拟经营类游戏，玩家扮演一名足球经理，经营自己的球队。
          {"\n"}
          2、游戏框架采用公司另一个已盈利游戏《胜利足球》的框架;{"\n"}
          3、人员构成为前端3人，后端3人，策划4人，美术5人，合计15人左右。{"\n"}
          4、游戏上线公司自有平台后，数据不理想，以及后期项目内部问题，导致游戏没有推广。
          {"\n"}
          项目职责：{"\n"}
          我于2015年7月进入项目组，后续主要负责：{"\n"}
          1、在开发初期，我主要负责熟悉和使用框架；{"\n"}
          2、为框架引入了可视化UI编辑器，大大简化和提高了游戏的UI开发效率;
          {"\n"}
          3、扩展开发后，我主要负责多个游戏系统开发，比如俱乐部比赛、球员培养、寻宝等若干系统。
          {"\n"}
        </pre>
      ),
      p_1: (
        <pre>
          项目描述：{"\n"}
          1、游戏拥有美国NBA联赛正版授权，是一款模拟经营类竞技游戏。{"\n"}
          2、人员构成为前端3人，后端2人，策划2人，美术1人，合计8人左右。{"\n"}
          3、游戏处于上线运营状态，15年3至6月的月均流水近300万。{"\n"}
          项目职责：{"\n"}
          我于2015年3月进入项目组，后续主要负责客户端的日常维护和运营活动更新。
          {"\n"}
        </pre>
      ),
      p_2: (
        <pre>
          项目描述：{"\n"}
          1、项目拥有合金弹头正版IP，是一款横版推搭游戏。{"\n"}
          2、人员构成为前端4人，后端4人，策划6人，美术8人，合计22人左右。
          {"\n"}
          3、游戏首次后，数据均不理想，后续，公司决定不推广。{"\n"}
          项目职责：{"\n"}
          我于2013年9月进入项目组，后续主要负责页游常用系统功能开发，如角色培养、签到、寻宝等系统。
          {"\n"}
        </pre>
      ),
      intersectionOptions: {
        root: document.querySelector("#app"), //用作视口的元素，用于检查目标的可见性。必须是目标的祖先。如果未指定，则默认为浏览器视口null
        rootMargin: "0px",
        threshold: 0.33 //范围为 0-1: 阈值为1.0意味着当100％的目标在root选项指定的元素中可见时，将调用回调
      }
    };
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      //   console.log("Modal is about to be shown", bvEvent, modalId);
      console.log(this.$refs);
    });
  },
  methods: {
    showMsgBoxTwo(title, content) {
      console.log(this.$bvModal);
      this.$bvModal
        .msgBoxOk(content, {
          title: title + "工作情况",
          //   size: "sm",
          //   buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true
        })
        .then(value => {})
        .catch(err => {
          // An error occurred
        });
    },
    onWaypoint({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log("waypoint going in!"); //激活-出现了
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log("waypoint going out!");
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log("waypoint going top!");
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log("waypoint going bottom!");
      }
    }
  },
  downloadCV() {
    var a = document.createElement("a");
    a.download = "郭一力的简历.pdf";
    a.href = "assets/mycv.pdf";
    a.target = "_blank";
    a.click();
  }
};
</script>

<style scoped>
@import "~assets/css/mycv.css";

.waypoint {
  height: 500px;
  background: #420983;
}
.waypoint p {
  background: #42b983;
  margin: 3px;
}
.scrollcv {
  overflow: scroll;
}
</style>

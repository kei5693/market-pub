<template>
  <div id="wrapper">
    <header>
      <div class="innerWrap">
        <h1 class="logo"><a href="/"><img src="@/assets/images/img_logo.png" alt="사단법인 한국교과서협회" /></a></h1>
        <div ref="navMenu" @mouseout="moveOutEvent(index)">
          <ul>
            <li v-for="(item, index) in menuList" :key="index">
              <router-link
                :to="item.link_to"
                @mouseover="moveEvent(index)"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <span ref="moving"></span>
        </div>
        <a
          href="/#partnerShip"
          class="partnerShip"
          @mouseenter="marqueeStart()"
          @mouseleave="MarqueeStop()"
        >
          <span ref="marqueeEl">제휴 문의하기</span>
          <span>제휴 문의하기</span>
        </a>
      </div>
    </header>

    <section id="container">
      <router-view/>
    </section>

    <footer>
      <div class="innerWrap">
        <div class="footerMenu">
          <div class="leftMenu">
            <div class="logo"><img src="@/assets/images/img_logo2.png" alt="사단법인 한국교과서협회" /></div>
            <ul class="info">
              <li>대표 : 이대영</li>
              <li>본사 : <address>(10881)경기도 파주시 문발로 439-1(신촌동 734-1) 사단법인 한국교과서협회</address></li>
              <li>사업자등록번호 : 109-82-04954</li>
              <li>통신판매업신고 : 제2014-경기파주-5056호</li>
              <li>물류 : (10949)경기도 파주시 조리읍 당재봉로 29-28(오산리 398-5)</li>
            </ul>
          </div>

          <div class="rightMenu">
            <div class="link">
              <a href="https://www.ktbook.com/user/privacy/privacy_2021.do)" target="_blank">한국교과서협회</a>
              <a href="#">개인정보처리방침</a>
              <a href="/">마켓플레이스소개</a>
            </div>

            <dl class="inquire">
              <dt>교과서 구입문의</dt>
              <dd><span>031-956-8581~4</span>(직원연결 0번)</dd>
              <dd class="time"><span>상담가능시간</span>평일 09:00 ~ 17:30</dd>
            </dl>

            <dl class="inquire interval">
              <dt>제휴문의</dt>
              <dd><span>031-956-8581</span></dd>
              <dd class="fax"><span>031-956-8509</span></dd>
              <dd class="email"><a href="mailto:ktbookasdc@ktbook.com">ktbookasdc@ktbook.com</a></dd>
            </dl>
          </div>
        </div>

        <p class="copy">© 2024 사단법인 한국교과서협회 All Rights Reserved.</p>
      </div>
    </footer>

    <div class="partnerShipWrap">
      <button type="button" @click="popupToggle"><span>제휴문의</span></button>
      <div v-if="partnerShipPopup">
        <strong>제휴문의</strong>
        <ul>
          <li><span>팩스</span><strong>031-956-8509</strong></li>
          <li><span>이메일</span><a href="mailto:ktbookasdc@ktbook.com">ktbookasdc@ktbook.com</a></li>
          <li><span>연락처</span><strong>031-956-8581</strong></li>
        </ul>
        <button type="button" class="btnClose" @click="popupToggle"><span>닫기</span></button>
      </div>
    </div>

    <button type="button" class="btnTop" @click="scrollToTop"><span>TOP</span></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { name: "소개", link_to: "/" },
        { name: "공지사항", link_to: "/noticeView" },
        { name: "자주 묻는 질문", link_to: "/faq" },
        { name: "상품소개", link_to: "/product" },
      ],
      marqueeIntervalId: null,
      partnerShipPopup: false
    };
  },
  mounted(){
    window.addEventListener('scroll', this.detectScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    detectScroll(){
      const target = document.querySelector('#wrapper');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollTop > 50 ? target.classList.add('folding') : target.classList.remove('folding');
    },
    moveEvent(idx){
      const menuList = this.$refs.navMenu;
      let ul = menuList.querySelectorAll(':scope > ul > li');
      let currentPos = ul[idx].offsetLeft + (ul[idx].clientWidth/2) + 'px';
      const moving = this.$refs.moving;

      menuList.classList.add('active');
      moving.style.left = currentPos
    },
    moveOutEvent(){
      const menuList = this.$refs.navMenu;
      menuList.classList.remove('active');
    },
    marqueeStart() {
      const firstElement = this.$refs.marqueeEl;
      const speed = 0.3;
      firstElement.style.transition = 'margin-left 0s';

      let i = 0;
      this.marqueeIntervalId = setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.offsetWidth) {
          i = 0;
        }
        i = i + speed;
      }, 0);
    },
    MarqueeStop() {
      if (this.marqueeIntervalId !== null) {
        clearInterval(this.marqueeIntervalId);
        this.marqueeIntervalId = null;

        const firstElement = this.$refs.marqueeEl;
        firstElement.style.transition = 'margin-left 0.3s';
        firstElement.style.marginLeft = 0;
      }
    },
    popupToggle(){
      this.partnerShipPopup = !this.partnerShipPopup;
    },
  }
};
</script>
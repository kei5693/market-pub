<template>
  <div class="faqWrap">
    <div class="searchTitleWrap">
      <h2>자주 묻는 질문</h2>
      <p>자주 묻는 질문에 대한 답변을 확인할 수 있어요</p>

      <div class="searchInpWrap">
        <input
          type="text"
          placeholder="궁금한 점을 검색해 보세요"
          @focus="inpFocusEvent"
          @blur="inpFocusEvent"
        />
        <button type="button">검색하기</button>
      </div>
    </div>

    <div class="faqListWrap">
      <div class="innerWrap">
        <ul class="category">
          <li v-for="(category, index) in categoryData" :key="index">
            <button type="button"
              @click="categoryEvent(index)"
              :class="{active: category.isActive}"
            >
              {{ category.title }}
            </button>
          </li>
        </ul>

        <div class="nodataWrap">
          <strong>검색 결과가 없어요</strong>
          <p>단어의 철자나 띄어쓰기가 정확한지 확인 후 다시 검색해 보세요</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      categoryData: [
        {isActive: true, title: '전체'},
        {isActive: false, title: '서비스'},
        {isActive: false, title: '요금'},
        {isActive: false, title: '기타'},
      ],
      faqData: [
        {
          isActive: false,
          bottomHeight: '0px',
          q: '상품은 구독해서 사용하는 것인가요?',
          a: '디지털 교과서에 필요한 여러 상품을 AIDT 플랫폼을 통해 쉽고 간편하게 이용을 할 수 있습니다.<br> AIDT 공동플랫폼은 여러 에듀테크 업체와 계약하여 다양한 서비스를 제공합니다.<br> “상품소개“ 메뉴에서 다양한 상품을 확인하고 어떤 상품을 사용할지 고민해 보세요.<br> 자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
        {
          isActive: false,
          bottomHeight: '0px',
          q: '품을 AIDT에서 사용하게 되면 이점이 무엇이 있나요?',
          a: 'AIDT 공동플랫폼은 여러 에듀테크 업체와 계약하여 다양한 서비스를 제공합니다.<br> “상품소개“ 메뉴에서 다양한 상품을 확인하고 어떤 상품을 사용할지 고민해 보세요.<br> 자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
        {
          isActive: false,
          bottomHeight: '0px',
          q: 'AI 디지털 교과서는 무엇인가요?',
          a: '“상품소개“ 메뉴에서 다양한 상품을 확인하고 어떤 상품을 사용할지 고민해 보세요.<br> 자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
        {
          isActive: false,
          bottomHeight: '0px',
          q: '상품은 구독해서 사용하는 것인가요?',
          a: '자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
        {
          isActive: false,
          bottomHeight: '0px',
          q: '상품은 구독해서 사용하는 것인가요?',
          a: '디지털 교과서에 필요한 여러 상품을 AIDT 플랫폼을 통해 쉽고 간편하게 이용을 할 수 있습니다.<br> AIDT 공동플랫폼은 여러 에듀테크 업체와 계약하여 다양한 서비스를 제공합니다.<br> “상품소개“ 메뉴에서 다양한 상품을 확인하고 어떤 상품을 사용할지 고민해 보세요.<br> 자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
        {
          isActive: false,
          bottomHeight: '0px',
          q: '품을 AIDT에서 사용하게 되면 이점이 무엇이 있나요?',
          a: 'AIDT 공동플랫폼은 여러 에듀테크 업체와 계약하여 다양한 서비스를 제공합니다.<br> “상품소개“ 메뉴에서 다양한 상품을 확인하고 어떤 상품을 사용할지 고민해 보세요.<br> 자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
        {
          isActive: false,
          bottomHeight: '0px',
          q: 'AI 디지털 교과서는 무엇인가요?',
          a: '“상품소개“ 메뉴에서 다양한 상품을 확인하고 어떤 상품을 사용할지 고민해 보세요.<br> 자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
        {
          isActive: false,
          bottomHeight: '0px',
          q: '상품은 구독해서 사용하는 것인가요?',
          a: '자세한 사항은 이메일(aidthelp@example.com)으로 연락해 주시면 확인 후 알려드립니다.'
        },
      ],
    };
  },
  methods: {
    categoryEvent(idx) {
      this.categoryData.forEach((e, index) => {
        index === idx ? e.isActive = true : e.isActive = false
      })
    },
    toggleEvent(e, idx){
      e.preventDefault();

      let parent = e.currentTarget.closest('li');
      let bottom = parent.querySelector('div');
      let bottomHeight = bottom.querySelector(':scope > p').clientHeight + 'px';

      this.faqData.forEach((faq, index) => {
        if (index === idx) {
          faq.isActive = !faq.isActive;
          faq.bottomHeight = faq.isActive ? bottomHeight : '0px';
        } else {
          faq.isActive = false;
          faq.bottomHeight = '0px';
        }
      });
    },
    inpFocusEvent(e) {
      let parent = e.target.closest('.searchInpWrap');
      parent.classList.toggle('active');
    }
  }
}
</script>

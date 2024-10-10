<template>
  <div class="productWrap">
    <div class="productListWrap innerWrap">
      <div class="searchTitleWrap">
        <h2>상품 소개</h2>
        <p>AI 디지털교과서 공동 플랫폼과 함께하는 다양한 상품을 이용할 수 있어요</p>

        <div class="searchInpWrap">
          <input
            type="text"
            placeholder="상품을 검색해 보세요"
            @focus="inpFocusEvent"
            @blur="inpFocusEvent"
          />
          <button type="button">검색하기</button>
        </div>
      </div>

      <div class="productList">
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
  methods: {
    inpFocusEvent(e) {
      let parent = e.target.closest('.searchInpWrap');
      parent.classList.toggle('active');
    }
  }
}
</script>

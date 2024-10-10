<template>
  <div class="noticeWrap">
    <div class="searchTitleWrap">
      <h2>공지사항</h2>
      <p>새로운 공지사항을 확인할 수 있어요</p>

      <div class="searchInpWrap">
        <input
          type="text"
          placeholder="검색어를 입력해 주세요 "
          @focus="inpFocusEvent"
          @blur="inpFocusEvent"
        />
        <button type="button">검색하기</button>
      </div>
    </div>

    <div class="noticeListWrap">
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

    };
  },
  methods: {
    inpFocusEvent(e) {
      let parent = e.target.closest('.searchInpWrap');
      parent.classList.toggle('active');
    }
  }
}
</script>
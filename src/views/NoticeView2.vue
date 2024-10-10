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
        <div class="nodataWrap type2">
          <strong>등록된 공지사항이 없어요</strong>
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

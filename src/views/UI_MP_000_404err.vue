<template>
  <div class="pageNotFound">
    <div class="inner">
      <div class="title">
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.<br> 페이지 주소가 정확한지 다시 한번 확인해 주세요.</p>
      </div>
      <div class="linkWrap">
        <router-link class="link" to="/">이전페이지</router-link>
        <router-link class="link color" to="/">홈으로 이동</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

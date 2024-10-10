<template>
  <!-- active: popup show,
    팝업이 1개 이상일 경우 class 숫자가 늘어나야함
    2번째 팝업 : popupCount2
    3번째 팝업 : popupCount3
  -->
  <div class="popupWrap popupCount2"
    :class="{active: popupStatus}"
  >
    <div class="popupHeader">
      <h2>팝업 제목 홈페이지</h2>
    </div>

    <div class="popupBody">
      <div class="inner">
        <p>홈페이지 방문 고객님께 안내 드립니다. 보다 안정적인 서비스 제공을 위해 시스템 점검이 진행됩니다.
          해당 기간 동안 일부 서비스 이용이 일시적으로 중단되는 점 양해 부탁드립니다.
        </p>
        <p>홈페이지 방문 고객님께 안내 드립니다.
          보다 안정적인 서비스 제공을 위해 시스템 점검이 진행됩니다.
          해당 기간 동안 일부 서비스 이용이 일시적으로 중단되는 점 양해 부탁드립니다.
        </p>
        <p>홈페이지 방문 고객님께 안내 드립니다. 보다 안정적인 서비스 제공을 위해 시스템 점검이 진행됩니다.
          해당 기간 동안 일부 서비스 이용이 일시적으로 중단되는 점 양해 부탁드립니다.
        </p>

        <img src="@/assets/images/dummy/img_popup.png" alt="" />
      </div>
    </div>

    <div class="popupFooter">
      <button type="button">오늘 하루 그만보기</button>
      <button type="button" class="color" @click="closeEvent($event)">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupStatus: true
    }
  },
  methods: {
    closeEvent(e){
      console.log(e.target.closest('.popupWrap'));
      this.popupStatus = false
    }
  },
}
</script>
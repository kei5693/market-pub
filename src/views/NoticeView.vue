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
        <table>
          <caption>공지사항 리스트</caption>
          <colgroup>
            <col style="width: 80px;">
            <col >
            <col style="width: 100px;">
            <col style="width: 140px;">
          </colgroup>
          <tbody>
            <tr
              v-for="(noticeList, index) in noticeListData"
              :key="index"
              :class="{active: noticeList.id == '공지'}"
            >
              <td>{{ noticeList.id }}</td>
              <td>
                <a href="UI_MP_005">
                  <em>{{ noticeList.title }}</em>
                  <span class="icoFile" v-show="noticeList.file">첨부파일</span>
                  <span class="icoNew" v-show="noticeList.isNew">신규등록</span>
                </a>
              </td>
              <td>{{ noticeList.count }}</td>
              <td>{{ noticeList.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Popup />
    <Popup2 />
  </div>
</template>

<script>
import Popup from '../components/Popup.vue'
import Popup2 from '../components/Popup2.vue'

export default {
  name: 'HomeView',
  components: {
    Popup,
    Popup2
  },
  data(){
    return {
      noticeListData: [
        {
          id: '공지',
          title: 'AIDT 공동플랫폼 사용 안내 공지',
          file: true,
          isNew: true,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: '공지',
          title: 'AIDT 공동플랫폼 사용 안내 공지AIDT 공동플랫폼 사용 안내 공지AIDT 공동플랫폼 사용 안내',
          file: false,
          isNew: false,
          count: '1,200',
          date: '2024.01.01'
        },
        {
          id: 426,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: true,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 425,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: true,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 424,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 423,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: true,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 422,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 421,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 420,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 419,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 418,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 417,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 416,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 415,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 414,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 413,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 412,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
        {
          id: 411,
          title: '2024년 1월 시스템 점검에 따른 일정 공지',
          file: false,
          isNew: false,
          count: '397',
          date: '2024.01.01'
        },
      ],
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

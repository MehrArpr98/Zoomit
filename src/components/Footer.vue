<template>
  <footer class="Footer_FooterWrapper pb-0">
    <div class="Footer_FooterContainer py-6 px-4 pb-0 relative md:px-12">
      <div class="Footer_FooterContainer_row1 flex flex-wrap justify-between">
        <div class="col_1 shrink-0 grow-0 basis-1/2">
          <div class="flex flex-wrap">
            <div class="col_1-1 shrink-0 grow-0 basis-1/3">
              <div class="flex flex-wrap inline-flex mb-6 content-center h-4">
                <div class="Footer_RedBar"></div>
              </div>
              <ul class="list-none p-0">
                <li class="relative flex items-start gap-2 my-2">
                  <div class="max-w-full grow basis-0">
                    <a href="https://www.zoomit.ir/archive" rel="nofollow" class="Footer_Link"
                      ><span>مرور تمامی مطالب</span></a
                    >
                  </div>
                </li>
                <li class="relative flex items-start gap-2 my-2">
                  <div class="max-w-full grow basis-0">
                    <a href="https://www.zoomit.ir/advertisement" rel="nofollow" class="Footer_Link"
                      ><span>تبلیغات در زومیت</span></a
                    >
                  </div>
                </li>
                <li class="relative flex items-start gap-2 my-2">
                  <div class="max-w-full grow basis-0">
                    <a href="https://www.zoomit.ir/contact-us" rel="nofollow" class="Footer_Link"
                      ><span>تماس با ما</span></a
                    >
                  </div>
                </li>
                <li class="relative flex items-start gap-2 my-2">
                  <div class="max-w-full grow basis-0">
                    <a href="https://www.zoomit.ir/about-us" rel="nofollow" class="Footer_Link"
                      ><span> درباره ما</span></a
                    >
                  </div>
                </li>
              </ul>
            </div>
            <div class="col_1-2 max-w-full grow basis-0">
              <span class="inline-block mb-6">حامیان زومیت</span>
              <ul class="list-none p-0">
                <li class="relative flex items-start gap-2 my-2">
                  <div class="max-w-full grow basis-0">
                    <a href="https://parspack.com/" target="_blank" rel="follow"
                      ><span> پارس پک </span></a
                    >
                    <span>| میزبانی و پشتیبانی</span>
                  </div>
                </li>
                <li class="relative flex items-start gap-2 my-2">
                  <div class="max-w-full grow basis-0">
                    <span>وب رخ | حس خوب پیکسل‌ها</span>
                  </div>
                </li>
                <li class="relative flex items-start gap-2 my-2">
                  <div class="max-w-full grow basis-0">
                    <span>TheForge | هسته قدرتمند زومیت</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col_2 shrink-0 grow-0 basis-1/2">
          <p class="m-0 mb-8">خانواده ما</p>
          <div class="flex flex-wrap justify-between">
            <a target="_blank" rel="nofollow" href="https://zoomit.ir" class="pt-1">
              <img
                v-if="themeStore.theme === 'light'"
                src="../assets/svgs/zoomit-light.svg"
                alt="zoomit-light-img"
              />
              <img v-else src="../assets/svgs/zoomit-dark.svg" alt="zoomit-dark-img" />
            </a>

            <a target="_blank" rel="nofollow" href="https://zoomg.ir">
              <img
                v-if="themeStore.theme === 'light'"
                src="../assets/svgs/zoomg-light.svg"
                alt="zoomg-light-img"
              />
              <img v-else src="../assets/svgs/zoomg-dark.svg" alt="zoomg-dark-img" />
            </a>

            <a
              target="_blank"
              rel="nofollow"
              href="https://www.kojaro.com/?utm_source=zoomit&amp;utm_medium=footer&amp;utm_campaign=footerlink"
            >
              <img
                v-if="themeStore.theme === 'light'"
                src="../assets/svgs/kojaro-light.svg"
                alt="kojaro-light-img"
              />
              <img v-else src="../assets/svgs/kojaro-dark.svg" alt="kojaro-dark-img" />
            </a>

            <a target="_blank" rel="nofollow" href="https://pedal.ir">
              <img
                v-if="themeStore.theme === 'light'"
                src="../assets/svgs/pedal-light.svg"
                alt="pedal-light-img"
              />
              <img v-else src="../assets/svgs/pedal-dark.svg" alt="pedal-dark-img" />
            </a>
          </div>
        </div>
      </div>
      <div class="Footer_FooterContainer_row2 mt-16">
        <div class="flex flex-col-reverse flex-nowrap justify-between gap-4 md:flex-row">
          <div>
            <span>© 1402 - 1389</span>
            <span>کپی بخش یا کل هر کدام از مطالب زومیت تنها با کسب مجوز مکتوب امکان پذیر است</span>
          </div>
          <div class="flex flex-wrap justify-between items-center">
            <div class="flex flex-wrap gap-5">
              <a
                href="https://www.zoomit.ir/feed/"
                rel="nofollow"
                target="_blank"
                class="Footer_Link"
              >
                <img src="../assets/svgs/bluetooth.svg" alt="bluetooth-img" />
              </a>
              <a
                href="https://fa.wikipedia.org/wiki/%D8%B2%D9%88%D9%85%DB%8C%D8%AA"
                rel="nofollow"
                target="_blank"
              >
                <img src="../assets/svgs/wikipedia.svg" alt="wikipedia-img" />
              </a>
              <a href="https://www.linkedin.com/company/zoomit" rel="nofollow" target="_blank">
                <img src="../assets/svgs/linkedin.svg" alt="linkedin-img" />
              </a>
              <a href="https://www.instagram.com/thezoomit/" rel="nofollow" target="_blank">
                <img src="../assets/svgs/instagram.svg" alt="instagram-img" />
              </a>
              <a href="https://www.aparat.com/zoomit" rel="nofollow" target="_blank">
                <img src="../assets/svgs/aparat.svg" alt="aparat-img" />
              </a>
              <a href="https://www.youtube.com/c/ZoomitTV" rel="nofollow" target="_blank">
                <img src="../assets/svgs/youtube.svg" alt="youtube-img" />
              </a>
              <a href="https://t.me/thezoomit/" rel="nofollow" target="_blank">
                <img src="../assets/svgs/telegram.svg" alt="telegram-img" />
              </a>
              <a href="https://twitter.com/thezoomit/" rel="nofollow" target="_blank">
                <img src="../assets/svgs/twitter.svg" alt="twitter-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Footer_BottomLine mt-3 md:mt-8"></div>
  </footer>
</template>
<script setup>
import useThemeStore from '../stores/theme'

const themeStore = useThemeStore()
</script>

<style>
.Footer_FooterWrapper {
  background: var(--background-2);
  padding-bottom: 0rem;
}
.Footer_FooterContainer_row1 .col_1,
.Footer_FooterContainer_row1 .col_2 {
  max-width: 50%;
}
.Footer_FooterContainer_row1 .col_1-1 {
  max-width: 33.3333%;
}
.Footer_RedBar {
  width: 50px;
  height: 4px;
  border-radius: 25px;
  background-color: var(--primary-1);
}
.Footer_FooterContainer span,
.Footer_FooterContainer p {
  font-size: 14px;
  color: var(--grey-1);
  font-family: 'Vazir-Thin';
}
.Footer_Link span {
  color: var(--text);
}
.Footer_FooterContainer_row2 span {
  font-size: 13px;
  line-height: 2;
}
.Footer_FooterContainer_row2 span:nth-child(1) {
  font-family: 'Vazir-FD';
}
.Footer_BottomLine {
  height: 10px;
  background-color: var(--black-3);
}
.z-text {
  fill: var(--z-text);
}

@media (min-width: 576px) {
  .Footer_FooterContainer {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  body[data-theme='light'] .Footer_FooterWrapper {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iNTAlIiBjeT0iNTAlIiBmeD0iNTAlIiBmeT0iNTAlIiByPSI3OS4yOTclIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0uNDYwOTUgLjY4NzcgLS40MzY2MyAtLjcyNiAuOTQ5IC41MikiIGlkPSJhIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VFRSIgb2Zmc2V0PSIwJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjlGOUY5IiBvZmZzZXQ9IjEwMCUiLz4KICAgICAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGggZD0iTTEwOTkgMTMzIDk3NC4wNzUgMjk2Ljk2IDkwNi42MjcgMzg0SDgyMGwxMTcuNDY2LTE1NC45OEwxMDEwLjIzIDEzM0gxMDk5em0yMjUtNjktMTE4LjMwOCAxNTQuOTgtNzMuMjg4IDk2LjAySDEwNDNsMTI1LjgyLTE2My45NkwxMjM2Ljc1MiA2NEgxMzI0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgyMCAtNjQpIiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
  }
  body[data-theme='dark'] .Footer_FooterWrapper {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAzIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iYSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxOTE5MjMiIHN0b3Atb3BhY2l0eT0iLjUiIG9mZnNldD0iMCUiLz4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE5MTkyMyIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGggZD0iTTEwOTkgMTMzIDk3NC4wNzUgMjk2Ljk2IDkwNi42MjcgMzg0SDgyMGwxMTcuNDY2LTE1NC45OEwxMDEwLjIzIDEzM0gxMDk5em0yMjUtNjktMTE4LjMwOCAxNTQuOTgtNzMuMjg4IDk2LjAySDEwNDNsMTI1LjgyLTE2My45NkwxMjM2Ljc1MiA2NEgxMzI0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgyMSAtNjQpIiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
  }
  .Footer_FooterWrapper {
    background-repeat: no-repeat !important;
    background-position: center center !important;
    padding: 120px 48px 0px;
  }

  .Footer_FooterWrapper::before {
    content: '';
    position: absolute;
    width: calc(100% - 96px);
    margin-top: -120px;
    height: 1px;
    background-color: var(--black-5);
  }
  .Footer_FooterContainer {
    max-width: 100%;
    padding: initial;
  }
}
</style>

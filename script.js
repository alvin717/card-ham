/**
 * ==========================================================================
 * 삼성생명 속초금융지점 함용순 팀장 모바일 명함 스크립트 (script.js)
 * 
 * - 주요 기능:
 *   1. 명함 이미지 터치 시 즉시 전화 연결 (010-7707-4988)
 *   2. 주소록 저장 (vCard 파일 다운로드)
 *   3. 지점 사무실 주소 원터치 복사
 *   4. 팩스(FAX) 번호 원터치 복사
 *   5. 카카오톡 및 모바일 명함 링크 공유하기
 *   6. URL 파라미터(?call=1) 감지 시 자동 통화 다이얼 연결
 * ==========================================================================
 */

// 함용순 팀장님 기본 연락처 정보 상수
const CONTACT_INFO = {
  name: "함용순 팀장",
  company: "삼성생명 속초금융지점",
  title: "팀장",
  phone: "010-7707-4988",
  cleanPhone: "01077074988",
  fax: "033-638-8594",
  centerPhone: "1588-3114",
  email: "eunho2546@naver.com",
  address: "강원도 속초시 동해대로4236(교동) 아남프라자 11층"
};

// DOM이 완전히 로드된 후 초기화 실행
document.addEventListener("DOMContentLoaded", () => {
  initTouchCall();
  initContactSave();
  initCopyAddress();
  initCopyFax();
  initShareFeatures();
  checkAutoCallParam();
});

/**
 * 1. [핵심 기능] 명함 이미지 터치 시 즉시 전화 연결
 */
function initTouchCall() {
  const cardTouchArea = document.getElementById("cardTouchArea");
  if (!cardTouchArea) return;

  // 터치 시 알림 토스트를 띄우고 기본 a[href="tel:..."]로 즉시 통화 연결
  cardTouchArea.addEventListener("click", () => {
    showToast("📞 함용순 팀장에게 전화를 연결합니다...");
  });
}

/**
 * 2. URL 파라미터 확인 후 자동 전화 걸기 (?call=1 or ?auto=true)
 * 카카오톡 카드 등에서 바로 통화 목적으로 링크를 걸었을 때 작동
 */
function checkAutoCallParam() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("call") === "1" || urlParams.get("auto") === "true") {
    showToast("📞 잠시 후 전화 통화 화면이 열립니다...");
    setTimeout(() => {
      window.location.href = `tel:${CONTACT_INFO.cleanPhone}`;
    }, 400);
  }
}

/**
 * 3. 스마트폰 주소록 저장 기능 (vCard .vcf 파일 안내)
 */
function initContactSave() {
  const btnSaveContact = document.getElementById("btnSaveContact");
  if (!btnSaveContact) return;

  btnSaveContact.addEventListener("click", () => {
    showToast("👤 연락처 파일이 다운로드됩니다. [열기] 후 [저장]을 눌러주세요!");
  });
}

/**
 * 4. 지점 사무실 주소 원터치 복사 기능
 */
function initCopyAddress() {
  const btnCopyAddress = document.getElementById("btnCopyAddress");
  if (!btnCopyAddress) return;

  btnCopyAddress.addEventListener("click", () => {
    copyToClipboard(CONTACT_INFO.address, "📍 주소가 복사되었습니다! (내비게이션 또는 지도에 붙여넣기)");
  });
}

/**
 * 5. 팩스(FAX) 번호 원터치 복사 기능
 */
function initCopyFax() {
  const btnCopyFax = document.getElementById("btnCopyFax");
  if (!btnCopyFax) return;

  btnCopyFax.addEventListener("click", () => {
    copyToClipboard(CONTACT_INFO.fax, "📠 팩스 번호(033-638-8594)가 복사되었습니다!");
  });
}

/**
 * 6. 명함 공유하기 (카카오톡 및 모바일 명함 주소 복사)
 */
function initShareFeatures() {
  const btnShareKakao = document.getElementById("btnShareKakao");
  const btnShareLink = document.getElementById("btnShareLink");

  // 현재 브라우저의 웹 주소 기준 (GitHub Pages 웹 주소)
  const defaultShareUrl = "https://alvin717.github.io/card-ham/";
  const baseUrl = (window.location.protocol === "http:" || window.location.protocol === "https:") && !window.location.hostname.includes("localhost") && !window.location.hostname.includes("127.0.0.1")
    ? window.location.href.split("?")[0]
    : defaultShareUrl;
  const callShareUrl = baseUrl.includes("?") ? `${baseUrl}&call=1` : `${baseUrl}?call=1`;

  const shareTitle = `[삼성금융네트웍스] 함용순 팀장 공식 모바일 명함`;
  const shareText = `삼성생명·화재·카드 속초금융지점 함용순 팀장 공식 모바일 명함입니다.\n(터치 시 010-7707-4988 로 즉시 통화 연결)\n📍 위치: ${CONTACT_INFO.address}`;

  // 카카오톡 및 모바일 기본 공유 창 열기
  if (btnShareKakao) {
    btnShareKakao.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: shareTitle,
            text: shareText,
            url: callShareUrl
          });
        } catch (err) {
          // 사용자가 공유 창을 닫은 경우 조용히 무시
        }
      } else {
        // PC 브라우저 등 navigator.share 미지원 시 클립보드에 복사
        copyToClipboard(callShareUrl, "💬 명함 주소가 복사되었습니다! 카카오톡에 붙여넣어 전송하세요.");
      }
    });
  }

  // 링크 주소 복사 버튼
  if (btnShareLink) {
    btnShareLink.addEventListener("click", () => {
      copyToClipboard(callShareUrl, "🔗 전화 바로연결 모바일 명함 주소가 복사되었습니다!");
    });
  }
}

/**
 * 클립보드 복사 헬퍼 함수 (모든 기기 및 구형 브라우저 완벽 대응)
 */
async function copyToClipboard(text, successMsg) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
    showToast(successMsg);
  } catch (err) {
    showToast("복사에 실패했습니다. 번호나 주소를 직접 확인해주세요.");
  }
}

/**
 * 상단 토스트 알림 표시 함수
 */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toastPopup");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

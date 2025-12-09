// js/app.js
document.addEventListener('DOMContentLoaded', function () {
  // 필터 버튼들(전체 / 스트랩 / 손목 / 팔꿈치 / 허리 / 무릎)
  const chips = document.querySelectorAll('.chip');
  // 각 상품 카드들
  const products = document.querySelectorAll('.product');

  // 각 필터 버튼에 클릭 이벤트 달기
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      const filterValue = chip.getAttribute('data-filter');

      // 눌린 버튼만 active 처리
      chips.forEach(function (c) {
        const isActive = c === chip;
        c.classList.toggle('active', isActive);
        c.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      // 카드 필터링 로직
      products.forEach(function (product) {
        const category = product.getAttribute('data-category');

        // 전체 또는 해당 카테고리면 보이게, 아니면 숨기기
        if (filterValue === 'all' || category === filterValue) {
          product.classList.remove('hidden');
        } else {
          product.classList.add('hidden');
        }
      });
    });
  });
});

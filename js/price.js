function CheckChoice() {
    var checkboxes = document.querySelectorAll('.cb'); // 클래스명이 "cb"인 모든 체크박스 요소를 가져옴
    var totalValue = 0; // 결과 값을 저장할 변수를 초기화
  
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        // 체크된 체크박스의 value 값을 더함
        totalValue += parseFloat(checkbox.value) || 0;
      }
    });
  
    // 계산된 결과를 ID가 "total"인 입력 필드의 값으로 설정
    document.getElementById("total").value = totalValue;
  }
  
  // 체크박스의 변경을 감지하여 calculateTotal 함수를 호출하도록 설정
  var checkboxes = document.querySelectorAll('.cb');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', calculateTotal);
  });
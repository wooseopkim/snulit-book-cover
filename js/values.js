const values = {
  title: '청년문학',
  subtitle: '제21호',
  credits: '총문학연구회',
  'rear_footer': `
  <div>
    <h3>청년문학</h3>
    <h3>제21호 • 2022 가을</h3>
  </div>
  <p>서울대학교 총문학연구회는 언제나 신입회원을 모집하고 있습니다. 학생회관 301호를 찾아주세요.</p>
  `.replace(/^\s+/g, ''),
}

function vertical(text) {
  return text.split('').join('<br>')
}

const values = {
  title: '청년문학 제20호',
  subtitle: '2020',
  credits: '총문학연구회',
  'rear_header': '서울대학교 총문학연구' + vertical('회는 회원의 창작물을 모아 회지를 발간합니다.'),
  'rear_footer': vertical('학기와 방학 중에 합평과 세미나 등 다양한') + ' 활동을 진행하고 있습니다.',
}

function vertical(text) {
  return text.split('').join('<br>')
}

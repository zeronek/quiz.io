const popularContents = [
    {
      id: '6076bb2640df72357a3ec7aa',
      title: '코 성형 가장 많이 참고하는 연예인',
      img: 'https://t1.daumcdn.net/liveboard/newsade/f5dc097bc40a4fad85928772ee914800.JPG',
      cp: '뉴스에이드',
      url: 'https://1boon.kakao.com/newsade/beauty_',
    },
    {
      id: '607501a78dee770a410dfa94',
      title: "피부에 이 증상 겪었던 사람들은 백신 접종 '주의'",
      img: 'https://t1.daumcdn.net/liveboard/dailylife/21dde46cd1044374aeaf50346f048723.JPG',
      cp: '데일리',
      url: 'https://1boon.kakao.com/dailylife/210416_6',
    },
    {
      id: '6078d0b48dee770a410e15bb',
      title: '"연예인 중 TOP5" 국민 트레이너도 감탄한 완벽한 반전 근육맨',
      img: 'https://t1.daumcdn.net/liveboard/mylovekbs/dea02dc87a8e4f91985d3d49019f6ac4.JPG',
      cp: 'MyLoveKBS',
      url: 'https://1boon.kakao.com/mylovekbs/Bossear_perfect_man',
    },
    {
      id: '607ad853daec2820eb7372e1',
      title: '안젤리나 졸리, 화창한 봄날 블랙룩으로 막내딸과 쇼핑 나들이!',
      img: 'https://t1.daumcdn.net/liveboard/fashionn/15f6141454f44ecfb32d52b759d11fef.JPG',
      cp: '패션엔 ',
      url: 'https://1boon.kakao.com/fashionn/607ad853daec2820eb7372e1',
    },
    {
      id: '607ae9dddaec2820eb7372f2',
      title: "'44사이즈' 오윤아, 잘록한 허리의 비현실 드레스룩! '시선강탈'",
      img: 'https://t1.daumcdn.net/liveboard/fashionn/3ffce2b7b9714caa9d6703f37e0ebc08.JPG',
      cp: '패션엔 ',
      url: 'https://1boon.kakao.com/fashionn/607ae9dddaec2820eb7372f2',
    },
    {
      id: '60532f2b842243415612f56c',
      title: '샤워 할 때 하면 안되는 샤워습관',
      img: 'https://t1.daumcdn.net/liveboard/shortoon/ad6ee62347714fc9849a2fd6da84b9c4.jpeg',
      cp: '마루코믹스',
      url: 'https://1boon.kakao.com/shortoon/seoul100',
    },
    {
      id: '605b2663da64ea3b146d4f85',
      title: '굽은 등, 어깨 교정하기! (1편)',
      img: 'https://t1.daumcdn.net/liveboard/TheBeneFIT/9b6cefb7833d41e09d21960816042d5b.jpeg',
      cp: '더베네핏',
      url: 'https://1boon.kakao.com/TheBeneFIT/605b2663da64ea3b146d4f85',
    },
    {
      id: '6079365240df72357a3ed8ea',
      title: "“나 이러다 재벌 되는 거 아냐?” 기자의 '코인 시장' 체험기",
      img: 'https://t1.daumcdn.net/liveboard/goodjob/758c6b598d184e58b2cdca9c58eefbd5.JPG',
      cp: '잡화점',
      url: 'https://1boon.kakao.com/goodjob/6079365240df72357a3ed8ea',
    },
    {
      id: '60768904daec2820eb735898',
      title: '반백살 박수홍이 살면서 했던 가장 심한 욕은?',
      img: 'https://t1.daumcdn.net/liveboard/mbcevery1/32430da47b934ec4b82029eb16fa5f4e.jpeg',
      cp: '에브리원해',
      url: 'https://1boon.kakao.com/mbcevery1/60768904daec2820eb735898',
    },
    {
      id: '6078e76f40df72357a3ed38c',
      title: '한지민이 번호 달라고 했는데 거절한 타로마스터',
      img: 'https://t1.daumcdn.net/liveboard/sbsnoriter/fe204ea710b84244a04fa618022141b5.JPG',
      cp: '스브스노리터',
      url: 'https://1boon.kakao.com/sbsnoriter/6078e76f40df72357a3ed38c',
    },
    {
      id: '607b731b40df72357a3edea5',
      title: '스스로 예쁘다고 생각하는 여자들의 공통점',
      img: 'https://t1.daumcdn.net/liveboard/micshowtime/c9daaaf61f11455ea5f50a69f6cab872.JPG',
      cp: '지식을 말하다',
      url: 'https://1boon.kakao.com/micshowtime/012',
    },
    {
      id: '6075019ddaec2820eb734b74',
      title: '살 뺄 때 먹는 샐러드에 꼭 넣는 재료',
      img: 'https://t1.daumcdn.net/liveboard/dailylife/f185237bbf9c49da99a8ca5daf98a524.jpg',
      cp: '데일리',
      url: 'https://1boon.kakao.com/dailylife/210416_5',
    },
    {
      id: '607a614a8dee770a410e210d',
      title: '11살 연상 아내가 지켜준 유태오의 ‘소년미 모음’',
      img: 'https://t1.daumcdn.net/liveboard/BoiledMovie/f60e3f18efbe4f87aeebbf16e5d7e879.png',
      cp: '삶은영화',
      url: 'https://1boon.kakao.com/BoiledMovie/607a614a8dee770a410e210d',
    },
    {
      id: '607ae93e40df72357a3ede6d',
      title: "마마무 화사, 파격 속옷 시스루룩! '힙한 섹시미'",
      img: 'https://t1.daumcdn.net/liveboard/fashionn/26fe51e8da1745e6a580434c4e5656ee.JPG',
      cp: '패션엔 ',
      url: 'https://1boon.kakao.com/fashionn/607ae93e40df72357a3ede6d',
    },
    {
      id: '60795390daec2820eb737023',
      title: '운이 풀리지 않을 때 운이 트이는 습관',
      img: 'https://t1.daumcdn.net/liveboard/readingjiaxi/a5d1370961864af8ba6d09f7ca4cb5ae.JPG',
      cp: '책읽찌라',
      url: 'https://1boon.kakao.com/readingjiaxi/0418',
    },
    {
      id: '607ae16ddaec2820eb7372e4',
      title: "'홈런 실종' KIA 딱총 부대.. 불펜만 개고생",
      img: 'https://t1.daumcdn.net/liveboard/KBR/770421ea9ad346cfae9412c5d70f2ebf.PNG',
      cp: '케이비알',
      url: 'https://1boon.kakao.com/KBR/20210418kiatgchw',
    },
    {
      id: '607b7c9e40df72357a3edeb1',
      title: '김광현, 시즌 첫 등판 3이닝 3실점. 타석에서는 첫 출루.',
      img: 'https://t1.daumcdn.net/liveboard/yaguchingu/64863cc6f41d4caf83df7b38ddd7ab30.jpg',
      cp: '야구친구',
      url: 'https://1boon.kakao.com/yaguchingu/yachin2021041801',
    },
    {
      id: '6076aed9daec2820eb735b9e',
      title: '남들은 모르는 내 어린 시절은?',
      img: 'https://t1.daumcdn.net/liveboard/SA2DA/950c35c4585948448fb864e54dbffff4.JPG',
      cp: '사이다',
      url: 'https://1boon.kakao.com/SA2DA/6076aed9daec2820eb735b9e',
    },
    {
      id: '607803d340df72357a3ed0e3',
      title: "'평생 로망이었는데...' 전원주택 실거주자가 말하는 가장 큰 단점",
      img: 'https://t1.daumcdn.net/liveboard/ziptoss/aefe67ec803f4d7d899850b7cc8d7cdb.jpg',
      cp: '머니랜드',
      url: 'https://1boon.kakao.com/ziptoss/607803d340df72357a3ed0e3',
    },
    {
      id: '6077eba08dee770a410e1273',
      title: "대기업 아니면 못한다는 컵라면, 성공 가져온 뜻밖의 '팩' 하나",
      img: 'https://t1.daumcdn.net/liveboard/thevivid/98fe1579203047368aa169d492854dcc.jpg',
      cp: '더 비비드',
      url: 'https://1boon.kakao.com/thevivid/6077eba08dee770a410e1273',
    },
    {
      id: '6079a80040df72357a3edcae',
      title: 'EXID 하니가 아닌 배우 안희연 출연작 모음.zip',
      img: 'https://t1.daumcdn.net/liveboard/cineplay/c9dd1d80d57e45d088e7977b4c63614e.jpg',
      cp: '씨네플레이',
      url: 'https://1boon.kakao.com/cineplay/6079a80040df72357a3edcae',
    },
    {
      id: '60779349daec2820eb735e28',
      title: '산책을 하다 일부러 리드줄을 떨어뜨렸을 때 리트리버의 반응..!',
      img: 'https://t1.daumcdn.net/liveboard/koreadognews/1a85317b19474427a49f30b38b478922.PNG',
      cp: 'koreadognews',
      url: 'https://1boon.kakao.com/koreadognews/60779349daec2820eb735e28',
    },
    {
      id: '60778f5b40df72357a3ec953',
      title: '헐리웃 배우도 아꼈던, 이제 못보게 된 26년 LG 폰 돌아보기',
      img: 'https://t1.daumcdn.net/liveboard/thevivid/38fa44faa8694b1897fc76ab8b7378f3.jpg',
      cp: '더 비비드',
      url: 'https://1boon.kakao.com/thevivid/60778f5b40df72357a3ec953',
    },
    {
      id: '6076ad5440df72357a3ec719',
      title:
        '짐 캐리의 레전드 졸업 축사\n"하고 싶지 않은 일을 하면서도 실패할 수 있다.\nYou can fail at what you don\'t want."',
      img: 'https://t1.daumcdn.net/liveboard/changeground/bc2ec36c39f84fcaa42e090e217fe1f9.JPG',
      cp: '체인지그라운드',
      url: 'https://1boon.kakao.com/changeground/6076ad5440df72357a3ec719',
    },
    {
      id: '60792e368dee770a410e1b68',
      title: '그 시절 당신의 인생영화 10편, 다시 만난다',
      img: 'https://t1.daumcdn.net/liveboard/fanzeel/f8974b220d0d4bcf8de5f998bd7538d1.JPG',
      cp: '알려줌 ALZi Media',
      url: 'https://1boon.kakao.com/fanzeel/KoreanMovieNews066',
    },
    {
      id: '607a35998dee770a410e20aa',
      title: '“300만원으로 60억 벌었어요” 인증샷 쏟아지는 ‘겟 리치 퀵’ 열풍',
      img: 'https://t1.daumcdn.net/liveboard/jobsN/666407f2671348fa95eab5b5ec1df9b7.png',
      cp: 'jobsN',
      url: 'https://1boon.kakao.com/jobsN/607a35998dee770a410e20aa',
    },
    {
      id: '6078ee288dee770a410e1780',
      title: '현관 방향을 바꾸자, 좁은 주방에 생긴 놀라운 변화',
      img: 'https://t1.daumcdn.net/liveboard/ohouse/93b41d5d39f14f9199f8e2392d404ddb.png',
      cp: '오늘의집',
      url: 'https://1boon.kakao.com/ohouse/6078ee288dee770a410e1780',
    },
    {
      id: '60799950daec2820eb737132',
      title: "일회용컵 줄이려고 '텀블러 동맹' 맺은 카페들",
      img: 'https://t1.daumcdn.net/liveboard/subusunews/71134e98d0734ee49a1cc2b7b391c603.JPG',
      cp: '스브스뉴스',
      url: 'https://1boon.kakao.com/subusunews/60799950daec2820eb737132',
    },
    {
      id: '6077a46f40df72357a3ecb33',
      title: '탈색 스타일 완벽 섭렵한 송해나, 헤어스타일 변천사!',
      img: 'https://t1.daumcdn.net/liveboard/hairfit/c7e10a1bf43649429fadf59344e8a71d.png',
      cp: '헤어핏',
      url: 'https://1boon.kakao.com/hairfit/210418',
    },
    {
      id: '6078f737daec2820eb73695e',
      title: '노력은 배신할 수 있지만, 포기는 배신하지 않는다?',
      img: 'https://t1.daumcdn.net/liveboard/theable/045198bc4d9e4d988d19cc1ffafcf14f.JPG',
      cp: '책썰미',
      url: 'https://1boon.kakao.com/theable/giveup',
    },
  ];



  var popular = document.getElementById('popular');

  function printpopular(){
  var str= '';
  for (var i = 0; i <10; i++){
    if(popularContents[i]){
      str += '<br>';
      str += '<p><font size="5">title : ' + popularContents[i].title + '</font></p><br>';
    str += '<img src="' + popularContents[i].img + '"width="400"><br>';
   
    str += 'cp : ' + popularContents[i].cp + '<br>';
    str += 'url :' + popularContents[i].url + '<br>';
    str += '<hr style="width:100%;height:2px;border:none;background-color:black;"><br>';
    str += '<br>';
    }
  }
  popular.innerHTML = str;
}
  printpopular();

  
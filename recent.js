const recentContents = [
    {
      id: '607b8ff140df72357a3edec6',
      title: "'신묘'한 유튜브 알고리즘, 조회수를 만드는 네 가지 비밀",
      img: 'https://t1.daumcdn.net/liveboard/bloter/b1f220ab240f4570b64937afb99e5478.png',
      cp: 'bloter',
      url: 'https://1boon.kakao.com/bloter/607b8ff140df72357a3edec6',
    },
    {
      id: '60795390daec2820eb737023',
      title: '운이 풀리지 않을 때 운이 트이는 습관',
      img: 'https://t1.daumcdn.net/liveboard/readingjiaxi/a5d1370961864af8ba6d09f7ca4cb5ae.JPG',
      cp: 'readingjiaxi',
      url: 'https://1boon.kakao.com/readingjiaxi/0418',
    },
    {
      id: '6078f737daec2820eb73695e',
      title: '노력은 배신할 수 있지만, 포기는 배신하지 않는다?',
      img: 'https://t1.daumcdn.net/liveboard/theable/045198bc4d9e4d988d19cc1ffafcf14f.JPG',
      cp: 'theable',
      url: 'https://1boon.kakao.com/theable/giveup',
    },
    {
      id: '6077a46f40df72357a3ecb33',
      title: '탈색 스타일 완벽 섭렵한 송해나, 헤어스타일 변천사!',
      img: 'https://t1.daumcdn.net/liveboard/hairfit/c7e10a1bf43649429fadf59344e8a71d.png',
      cp: 'hairfit',
      url: 'https://1boon.kakao.com/hairfit/210418',
    },
    {
      id: '607794b78dee770a410e0d2e',
      title: '한때 우리의 마음속 깊이 남아 있던 무엇들',
      img: 'https://t1.daumcdn.net/liveboard/munhak/0b3864d5ce29477eb9b634973faba855.jpg',
      cp: 'munhak',
      url: 'https://1boon.kakao.com/munhak/poesie',
    },
    {
      id: '6076ad5440df72357a3ec719',
      title:
        '짐 캐리의 레전드 졸업 축사 "하고 싶지 않은 일을 하면서도 실패할 수 있다. You can fail at what you don\'t want."',
      img: 'https://t1.daumcdn.net/liveboard/changeground/bc2ec36c39f84fcaa42e090e217fe1f9.JPG',
      cp: 'changeground',
      url: 'https://1boon.kakao.com/changeground/6076ad5440df72357a3ec719',
    },
    {
      id: '60768c4440df72357a3ec471',
      title: '게임 중 욕설? 어딜 감히! AI가 자동 음소거 처리한다',
      img: 'https://t1.daumcdn.net/liveboard/techplus/3724463649f24aa4b2f08e93e6760326.jpg',
      cp: 'techplus',
      url: 'https://1boon.kakao.com/techplus/60768c4440df72357a3ec471',
    },
    {
      id: '6076821240df72357a3ec39c',
      title: "택배대란 아파트에 '폭발물 설치' 신고…알고 보니",
      img: 'https://t1.daumcdn.net/liveboard/lawnlife/dd70c9317785468394d40eee9aa00b36.jpg',
      cp: 'lawnlife',
      url: 'https://1boon.kakao.com/lawnlife/6076821240df72357a3ec39c',
    },
    {
      id: '607501a78dee770a410dfa94',
      title: "피부에 이 증상 겪었던 사람들은 백신 접종 '주의'",
      img: 'https://t1.daumcdn.net/liveboard/dailylife/21dde46cd1044374aeaf50346f048723.JPG',
      cp: 'dailylife',
      url: 'https://1boon.kakao.com/dailylife/210416_6',
    },
    {
      id: '60532f2b842243415612f56c',
      title: '샤워 할 때 하면 안되는 샤워습관',
      img: 'https://t1.daumcdn.net/liveboard/shortoon/ad6ee62347714fc9849a2fd6da84b9c4.jpeg',
      cp: 'shortoon',
      url: 'https://1boon.kakao.com/shortoon/seoul100',
    },
    {
      id: '607b731b40df72357a3edea5',
      title: '스스로 예쁘다고 생각하는 여자들의 공통점',
      img: 'https://t1.daumcdn.net/liveboard/micshowtime/c9daaaf61f11455ea5f50a69f6cab872.JPG',
      cp: 'micshowtime',
      url: 'https://1boon.kakao.com/micshowtime/012',
    },
    {
      id: '60755597daec2820eb735167',
      title: "'OO'도 발레가 있다? 한복과 차이콥스키 음악이 만난 '이 작품'!",
      img: 'https://t1.daumcdn.net/liveboard/allthatart/5f7f19a0f5a748789d427862d81cdaf4.JPG',
      cp: 'allthatart',
      url: 'https://1boon.kakao.com/allthatart/60755597daec2820eb735167',
    },
    {
      id: '607b7c9e40df72357a3edeb1',
      title: '김광현, 시즌 첫 등판 3이닝 3실점. 타석에서는 첫 출루.',
      img: 'https://t1.daumcdn.net/liveboard/yaguchingu/64863cc6f41d4caf83df7b38ddd7ab30.jpg',
      cp: 'yaguchingu',
      url: 'https://1boon.kakao.com/yaguchingu/yachin2021041801',
    },
    {
      id: '607ae9dddaec2820eb7372f2',
      title: "'44사이즈' 오윤아, 잘록한 허리의 비현실 드레스룩! '시선강탈'",
      img: 'https://t1.daumcdn.net/liveboard/fashionn/3ffce2b7b9714caa9d6703f37e0ebc08.JPG',
      cp: 'fashionn',
      url: 'https://1boon.kakao.com/fashionn/607ae9dddaec2820eb7372f2',
    },
    {
      id: '607a8eba8dee770a410e2174',
      title: '1시간에 3만개, 한때 1인 1팩 제한떳다는 품절대란 딸기의 정체',
      img: 'https://t1.daumcdn.net/liveboard/babshim/81839af4753e442cb205e35ada15de3b.png',
      cp: 'babshim',
      url: 'https://1boon.kakao.com/babshim/607a8eba8dee770a410e2174',
    },
    {
      id: '6078e76f40df72357a3ed38c',
      title: '한지민이 번호 달라고 했는데 거절한 타로마스터',
      img: 'https://t1.daumcdn.net/liveboard/sbsnoriter/fe204ea710b84244a04fa618022141b5.JPG',
      cp: 'sbsnoriter',
      url: 'https://1boon.kakao.com/sbsnoriter/6078e76f40df72357a3ed38c',
    },
    {
      id: '6078d0b48dee770a410e15bb',
      title: '"연예인 중 TOP5" 국민 트레이너도 감탄한 완벽한 반전 근육맨',
      img: 'https://t1.daumcdn.net/liveboard/mylovekbs/dea02dc87a8e4f91985d3d49019f6ac4.JPG',
      cp: 'mylovekbs',
      url: 'https://1boon.kakao.com/mylovekbs/Bossear_perfect_man',
    },
    {
      id: '607803d340df72357a3ed0e3',
      title: "'평생 로망이었는데...' 전원주택 실거주자가 말하는 가장 큰 단점",
      img: 'https://t1.daumcdn.net/liveboard/ziptoss/aefe67ec803f4d7d899850b7cc8d7cdb.jpg',
      cp: 'ziptoss',
      url: 'https://1boon.kakao.com/ziptoss/607803d340df72357a3ed0e3',
    },
    {
      id: '6076bb2640df72357a3ec7aa',
      title: '코 성형 가장 많이 참고하는 연예인',
      img: 'https://t1.daumcdn.net/liveboard/newsade/f5dc097bc40a4fad85928772ee914800.JPG',
      cp: 'newsade',
      url: 'https://1boon.kakao.com/newsade/beauty_',
    },
    {
      id: '60766a138dee770a410e0512',
      title: '‘콜라보 맥주’ 이렇게 만들어지는 거였어?',
      img: 'https://i.ytimg.com/vi/77EIRxBhmVw/hqdefault.jpg',
      cp: 'erbook',
      url: 'https://1boon.kakao.com/erbook/60766a138dee770a410e0512',
    },
  ];

  var recent = document.getElementById('recent');

  function printrecent(){
  var str= '';
  for (var i = 0; i <10; i++ ){
    if(recentContents[i]){
      str += '<br>';
      str += '<p><font size="5">title : ' + recentContents[i].title + '</font></p><br>';
    str += '<img src="' + recentContents[i].img + '"width="400"><br>';
   
    str += 'cp : ' + recentContents[i].cp + '<br>';
    str += 'url :' + recentContents[i].url + '<br>';
    str += '<hr style="width:100%;height:2px;border:none;background-color:black;"><br>';
    str += '<br>';
  


  }
}

  
 recent.innerHTML = str;

  }
  printrecent();
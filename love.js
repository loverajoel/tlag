 var baselove = 'http://www.loverajoel.com/tlag/'

  var list = [
    {
      id: 1,
      url: 'https://ReactForBeginners.com/friend/LOVE',
      img: 'react.png',
      img_r: 'react-r.png'
    }
  ];

  function render(id) {
    var item = list[id];
    var a = document.createElement('a');
    a.setAttribute('href', item.url);
    a.setAttribute('style', 'background-image: url(' + baselove + item.img + ');');
    a.setAttribute('class', 'love');
    a.setAttribute('target', '_blank');
    a.setAttribute('onClick', 'ga(\'send\', \'event\', \'love\', '+id+');')
    document.querySelector('.post-header').appendChild(a);

    var a_r = document.createElement('a');
    a_r.setAttribute('href', item.url);
    a_r.setAttribute('style', 'background-image: url(' + baselove + item.img_r + ');');
    a_r.setAttribute('class', 'love_r');
    a_r.setAttribute('target', '_blank');
    a_r.setAttribute('onClick', 'ga(\'send\', \'event\', \'love_r\', '+id+');')
    document.querySelector('.post-header').appendChild(a_r);
  }

  render(0);
window.onload = function() {
  //var node = document.getElementById("main");                 // Create a <li> node         // Create a text node
  //var _img = [];

  for(var i=1; i< 70; i++) {
        var img = new Image();
        img.src = './jpg/book'+i+'.jpg';
        img.id='page'+i;
        document.getElementById('main').appendChild(img);
    }

  //for(var i=1;i<70;i++)
  //{
  //  _img.push(document.createElement('IMG'));
  //  var newImg = new Image;
  //  newImg.onload = function(i) {
  //      _img[i-1].src = this.src;
  //  }
  //  newImg.src = './jpg_ftp/book'+i+'.jpg';
  //  node.appendChild(_img[i]);
  //}
  //document.body.appendChild(_img);
};

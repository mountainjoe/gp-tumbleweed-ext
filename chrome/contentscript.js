console.log("Inserted my contentscript.");

var div = function() { 
   var id = document.createElement('div');
   id.setAttribute('class', 'tumbleweed');
   id.setAttribute('id', 'tumbleweed');

   return id;
}();


var img = function() { 
   var id = document.createElement('img');
   // build image here. 
   var url = chrome.extension.getURL('ufo.png');
   console.log(url)
   
   id.setAttribute('src', url);
   id.setAttribute('width', 100);
   id.setAttribute('height', 59);
   id.setAttribute('class', 'tumbleweed');

   return id; 
}();

div.appendChild(img);
document.body.parentElement.insertBefore(div, document.body);

var toggle = true;

var inttimer = function() { 
   setTimeout(inttimer, 5000);

   var el = document.getElementById('tumbleweed');

   if (toggle) {
      console.log("toggle true");
      el.style.top = '400px';
      el.style.left = '400px'; 

   } else {
   
      console.log('toggle false');
      el.style.top = '-200px';
      el.style.left = '-200px'; 
   }

   toggle = !toggle;

   console.log("my timeout went off. Setting it again.");
} 

setTimeout(inttimer, 5000);

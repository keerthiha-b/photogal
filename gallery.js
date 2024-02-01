/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div witsh the id = "image" 
    to the source file of the preview image
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
      document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
      document.getElementById("image").innerText = previewPic.alt;
}

function unDo()
{
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
      document.getElementById("image").style.backgroundImage = "";
      document.getElementById("image").innerText = "Hover over an image below to display here.";
}

function onFocus(previewPic) {
  upDate(previewPic);
}

function onBlur() {
  unDo();
}

function tabIndex(image, ind) {
  image.setAttribute('tabindex', ind + 1);
}

function onLoad() {
  console.log('Page loaded!');
  var prev = document.querySelectorAll('.preview');
  for (var i = 0; i < prev.length; i++) {
      prev[i].addEventListener('mouseover', function () 
      {
          upDate(this);
      });

      prev[i].addEventListener('mouseout', unDo);

      prev[i].addEventListener('focus', function () 
      {
          onFocus(this);
      });

      prev[i].addEventListener('blur', onBlur);
      tabIndex(prev[i], i);
  }
}

window.addEventListener('load', onLoad);
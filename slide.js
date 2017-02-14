/*
  Slide.js
  A KISS slideshow thing I built because I hate myself
*/

function Slide(parent, seconds, _slideIndex)
{
    _slideIndex = _slideIndex || 0;
    var images = document.getElementById(parent).getElementsByTagName("img");
    for (var i = 0; i < images.length; i++)
    {
	images[i].style.display = "none";
    }
    _slideIndex += 1;
    if (_slideIndex > images.length)
	_slideIndex = 1;
    images[_slideIndex - 1].style.display = "block";
    setTimeout(function() {
	Slide(parent, seconds, _slideIndex);
    }, seconds * 1000);
}

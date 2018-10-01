var images = ["Vader.jpg", "yoda.jpeg", "HanSolo.jpg"];
var image = document.getElementById('Image');
var index = 0;
function myTimer()
{
    function changeImage()
    {
        image.src = images[index];
        index++;
        if(index >= images.length)
        {
            index = 0;
        }
    }
    setInterval(changeImage, 3000);
}

function addOnClick(index)
{
    image.src = index;
}
window.addEventListener("load", myTimer);
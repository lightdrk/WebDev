function addpar(){
    const newImage = document.createElement('img');
    newImage.setAttribute('id',"id-1");
    document.querySelector("body").appendChild(newImage);
    newImage.src = "/home/arch/Desktop/WebDev/p1/img";
  }
  
document.getElementById("click_me").addEventListener("click",addpar);
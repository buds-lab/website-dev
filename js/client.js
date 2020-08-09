function selectTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" bg-black", " bg-white");
    tablinks[i].className = tablinks[i].className.replace(" white", " black");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className = evt.currentTarget.className.replace(" bg-white", " bg-black")
  evt.currentTarget.className = evt.currentTarget.className.replace(" black", " white"); //+= " bg-black";
}
function bom(){

    chater_name=document.getElementById("biplop").value;
    console.log(chater_name);

    localStorage.setItem("chater_name" , chater_name);
    window.location="mega_r.html";

}
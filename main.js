function addUser() {
    player1=document.getElementById("player1NameInput").value;
    player2=document.getElementById("player2NameInput").value;
    localStorage.setItem("p1",player1);
    localStorage.setItem("p2",player2);
window.location="index2.html";
}
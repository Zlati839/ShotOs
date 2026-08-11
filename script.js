//          THE GREAT VAR WALL
// my vars will be the vars that will pirce the havens 
var OnTop = 1;
var Body = document.querySelector("#body");
var welcomeWindow = document.querySelector("#Welcome");
var NotePad = document.querySelector("#NotPad")
var Read = document.querySelector("#Read")
var FileManager = document.querySelector("#FileManager")
var CloseButtoins = document.querySelector("#Wclose")
var CloseButtons = document.querySelector("#Pclose")
var CloseButttons = document.querySelector("#Fclose")
var ClooseButton = document.querySelector("#Rclose")
var Icon1 = document.querySelector("#icon1")
var Icon2 = document.querySelector("#icon2")
var Icon3 = document.querySelector("#files1")
var Icon4 = document.querySelector("#foulder1")
var Icon5 = document.querySelector("#foulder2")
var Icon6 = document.querySelector("#icon6")
var topbar3 = document.querySelector("#topbar3")
var file1content = document.querySelector("#Content1")
var Close1 = document.querySelector("#Back")
var Close2 = document.querySelector("#Back2")
var Close3 = document.querySelector("#Back3")
var Big = document.querySelector("#PortalB")
var Clock = document.querySelector("#Clock")
var CCloseButton = document.querySelector("#Cclose")
var Closing = document.querySelector("#Closing")
var CloseBut = document.querySelector("#Closebut")
var Time = document.querySelector("#Time")
var ColorInput = document.querySelector("#color")
var ColorText = document.querySelector("#TextColor")
var hide = document.querySelector("#hide")
var Icon7 = document.querySelector("#music")
var music = document.querySelector("#musicW")
var pause = document.querySelector("#Pause")
var play = document.querySelector("#play")
var progress = document.querySelector("#progress")
var currentsong = 'Music/1. My Burden Is Light.mp3'
var audio = new Audio(currentsong);
var MusicText =  document.querySelector("#MusicText")
var Music1 = document.querySelector("#Audio1")
var Music2 = document.querySelector("#Audio2")
var Music3 = document.querySelector("#Audio3")
var Music4 = document.querySelector("#Audio4")
var Music5 = document.querySelector("#Audio5")
var Music6 = document.querySelector("#Audio6")
var Music7 = document.querySelector("#Audio7")
var Loading = document.querySelector("#mi")
let seconds = 0
var NoteExe = document.querySelector("#Not")
var BroExe = document.querySelector("#Bro")
var MusicExe = document.querySelector("#Mus")
var CalcExe = document.querySelector("#Calcy")
var PaintExe = document.querySelector("#Painty")
let timer = null
var switchh = true;
var durationText = document.querySelector("#durationMax");
var Srcs = "";
var duration = 0
var minute = 0
var sec = 0
var playing = true
var percentage = 0
var task = document.querySelector("#Task");
var apps = document.querySelector("#appss");
var search = document.querySelector("#search");
var a1 = false
var a2 = false
var a3 = false
var a4 = false
var s = false
var Intro = document.querySelector("#Intro");
var searchfile = document.querySelector("#FileSearch");
var searchnote = document.querySelector("#NoteSearch");
var searchmusic = document.querySelector("#MusicSearch");
var searchsettings = document.querySelector("#SettingsSearch");
var searchPaint = document.querySelector("#PaintSearch");
var searchWeb = document.querySelector("#WebSearch");
var searchCalculator = document.querySelector("#CalcSearch");
var hiden1 = document.querySelector("#Hidden1");
var hiden2 = document.querySelector("#Hidden2");
var hiden3 = document.querySelector("#Hidden3");
var Settings = document.querySelector("#Settings");
var Background1 = document.querySelector("#wallpaper1");
var Background2 = document.querySelector("#wallpaper2");
var Live1 = document.querySelector("#livewallpaper1");
var Live2 = document.querySelector("#livewallpaper2");
var Video1 = document.querySelector("#Video1");
var Video2 = document.querySelector("#Video2");
var Web = document.querySelector("#WebIcon");
var Browse = document.querySelector("#Browse");
var QuitWeb = document.querySelector("#CloseWeb");
var WebTop = document.querySelector("#topbarWeb");
var QuitPain = document.querySelector("#ClosePain");
var Pain = document.querySelector("#Pain");
var bool = false
var bool1 = false
var Board = document.querySelector("#board");
var Brush  = Board.getContext("2d")
var colorPicker = document.querySelector("#Color-pick");
var brushSize = document.querySelector("#Brush");
var Erase = document.querySelector("#Erase");
var Fill = document.querySelector("#Fill");
var isDrawing = false;
var isErasing = false
var PainIcon = document.querySelector("#PaintIcon");
var Hidden4 = document.querySelector("#Hidden4");
var Hidden5 = document.querySelector("#Hidden5");
var Hidden6 = document.querySelector("#Hidden6");
var Hidden7 = document.querySelector("#Hidden7");
var Hidden8 = document.querySelector("#Hidden8");
var SaveButton = document.querySelector("#Save");
var CalcIcon = document.querySelector("#CalcIcon");
var Calc = document.querySelector("#Calculator");
var CalcClose = document.querySelector("#CloseCalc");
var CloseTer = document.querySelector("#CloseTer");
var TerminalIcon =  document.querySelector("#TerminalIcon");
var searchTerminal =  document.querySelector("#TerminalSearch");
var textspace =  document.querySelector("#textspace");

function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
    }
    setInterval(updateTime, 1000);

function updateTimeBar() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeEl");
        timeText.innerHTML = currentTime;
    }
    setInterval(updateTimeBar, 1000);
 

drag(document.getElementById("Welcome"));
drag(document.getElementById("NotPad"));
drag(document.getElementById("FileManager"));
drag(document.getElementById("Read"));
drag(document.getElementById("Settings"));
drag(document.getElementById("musicW"));
drag(document.getElementById("Browse"));
drag(document.getElementById("Pain"));
drag(document.getElementById("Calculator"));
drag(document.getElementById("Terminal"));
dragC(document.getElementById("Calendar"));
function dragC(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  // Check if the elemnent exist 
  element.addEventListener("mousedown", startDragging);


  function startDragging(e) {
    e = e || window.event;
    //Prevent form going into a text selection mode 
    //saves the mouse position and starts the dragElement and stopDragging
    //functions on mouseup and mousemove 
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY; 
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    //calculates the new mouse position and sets the element x and y(top,left)
    //to the new mouse position and sets the new mouse position as the old one so
    //the movemnt wont scale 
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    //stops the dragiing by removing the functions from mouseup and mousemove
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function drag(element) {
  const bar = element.querySelector(".topbar")
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  // Check if the elemnent exist 
  bar.addEventListener("mousedown", startDragging);


  function startDragging(e) {
    e = e || window.event;
    //Prevent form going into a text selection mode 
    //saves the mouse position and starts the dragElement and stopDragging
    //functions on mouseup and mousemove 
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY; 
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    //calculates the new mouse position and sets the element x and y(top,left)
    //to the new mouse position and sets the new mouse position as the old one so
    //the movemnt wont scale 
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    //stops the dragiing by removing the functions from mouseup and mousemove
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//Icons and close buttons
CloseButtoins.addEventListener("click",function(){closeWindow(welcomeWindow)})
Closing.addEventListener("click",function(){closeWindow(Settings); Save();})
CloseButtons.addEventListener("click",function(){closeWindow(NotePad), textspace.value = ""})
CloseButttons.addEventListener("click",function(){closeWindow(FileManager), CloseFoulder("Content1","FileManager") , CloseFoulder("Content2", "FileManager"),CloseFoulder("Content3", "FileManager")})
ClooseButton.addEventListener("click" , function(){closeWindow(Read)})
CloseBut.addEventListener("click" , function(){closeWindow(music)})
Icon1.addEventListener("click", function(){openWindow(FileManager);})
Icon2.addEventListener("click", function(){openWindow(NotePad) })
NoteExe.addEventListener("click", function(){openWindow(NotePad),AddOpen("notepad.png",NotePad);})
CalcExe.addEventListener("click", function(){openWindow(Calc) ,AddOpen("Calculator.png",Calc)})
BroExe.addEventListener("click", function(){openWindow(Browse) , AddOpen("Web.png",Browse)})
PaintExe.addEventListener("click", function(){openWindow(Pain) , AddOpen("PaintIcon.png",Pain)})
Icon3.addEventListener("click", function(){openWindow(Read) ,Read.style.display = "block"})
Icon6.addEventListener("click", function(){openWindow(Settings)})
MusicExe.addEventListener("click", function(){openWindow(music) , AddOpen("Music.png",music)})
MusicExe.addEventListener("click", function(){CalculateDuration("Song1")})
Icon7.addEventListener("click", function(){openWindow(music)})
Web.addEventListener("click", function(){openWindow(Browse)})
QuitWeb.addEventListener("click", function(){closeWindow(Browse)})
QuitPain.addEventListener("click", function(){closeWindow(Pain)})
PainIcon.addEventListener("click", function(){openWindow(Pain)})
CalcIcon.addEventListener("click", function(){openWindow(Calculator)})
CalcClose.addEventListener("click", function(){closeWindow(Calculator) , clearDisplay()})
CloseTer.addEventListener("click", function(){closeWindow(Terminal), OutputLines.innerHTML = ""})
TerminalIcon.addEventListener("click", function(){openWindow(Terminal)})
function closeWindow(element) {
  element.style.display = "none";
}
function openWindow(element) {
  element.style.display = "flex";
  element.zIndex = OnTop;
}


PressToBeTop(document.getElementById("Welcome"));
PressToBeTop(document.getElementById("NotPad"));
PressToBeTop(document.getElementById("FileManager"));
PressToBeTop(document.getElementById("Read"));
PressToBeTop(document.getElementById("Settings"));
PressToBeTop(document.getElementById("musicW"));
PressToBeTop(document.getElementById("Browse"));
PressToBeTop(document.getElementById("Pain"));
PressToBeTop(document.getElementById("Calculator"));
function PressToBeTop(item){
  item.addEventListener("mousedown", () =>{
    OnTop++;
    item.style.zIndex = OnTop;
  });
}
Icon4.addEventListener("click", function(){OpenFoulder("FileManager","Content1")})
Close1.addEventListener("click", function(){CloseFoulder("Content1","FileManager") })
Icon5.addEventListener("click", function(){OpenFoulder("FileManager", "Content2")})
Close2.addEventListener("click", function(){CloseFoulder("Content2", "FileManager")})
Big.addEventListener("click", function(){OpenFoulder("Content2", "Content3")})
Close3.addEventListener("click", function(){CloseFoulder("Content3", "Content2")})
function OpenFoulder(Perentid,Files){
  var nodes = document.getElementById(Perentid).childNodes;
  var file_nodes = document.getElementById(Files).childNodes;
  var getFrame = document.getElementById(Files);
  for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div') {
         nodes[i].style.display = "none"
     }
  }
  for (var i = 0 ;  i < file_nodes.length; i ++){
    if (file_nodes[i].nodeName.toLowerCase() == 'div'){
      file_nodes[i].style.display = "block"
    }
  }
  getFrame.style.display = "flex" 
  topbar3.style.display = "flex"

}

function CloseFoulder(Foulder,FileManager){
  var nodes = document.getElementById(FileManager).childNodes;
  var file = document.getElementById(Foulder).childNodes;
  for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div') {
         nodes[i].style.display = "block"
     }
  }
  for (var i = 0 ;  i < file.length; i ++){
    if (file[i].nodeName.toLowerCase() == 'div'){
      file[i].style.display = "none"
    }
  }

}
ColorInput.addEventListener("input" , function(){updateColor(ColorInput)})
function updateColor(element){
  var color = element.value
  var r = parseInt(color.substr(1, 2), 16)
  var g = parseInt(color.substr(3, 2), 16)
  var b = parseInt(color.substr(5, 2), 16)
  Time.style.color = `rgb(${r}, ${g}, ${b})`;
}
hide.addEventListener("click" ,function(){Check()})
function Check(){
  if (switchh == true){
    hide.style.background= "#000000";Time.style.display = "none"; switchh = false
  }
  else if (switchh == false){
    hide.style.background= "#ffffff";Time.style.display = "block"; switchh = true
  }
}
Icon7.addEventListener("click", function() {CalculateDuration("Song1")})
play.addEventListener("click", function() {PlayMusic(audio)})
pause.addEventListener("click", function() {StopMusic(audio)})
function CalculateDuration(song){
  durationText = document.querySelector("#durationMax");
  duration = document.getElementById(song).duration;
  minute = parseInt(duration/60);
  sec = parseInt(duration%60);
  durationText.innerHTML = (minute + ":" + sec)
}

function PlayMusic(song){
  function PlayAudio(){
    playing = true
    song.play();
    setInterval(() =>{
      if(playing == true){
       percentage = (((seconds/10) - 0)/(duration - 0))*100
       progress.style.width = percentage + "%";
       if (percentage >= 100){
         playing = false
       } 
      }
      else{
        song.pause();
      }
    },1)
  }

  function Timer(){
    if (timer == null ){
      timer = setInterval(()=>{
        if (playing == true){
          seconds++ 
        }
      },100)
    }
  }

  PlayAudio()
  Timer()
}

function StopMusic(song){
  playing = false
  song.pause();
}

Music1.addEventListener("click" , function(){UpdateSong("Song1" , "My Burden Is Light"), MusicText.style.top = 60+"%" ,MusicText.style.left = 17+"%"})
Music2.addEventListener("click" , function(){UpdateSong("Song2", "On Little Cat Feet"), MusicText.style.top = 55+"%" ,MusicText.style.left = 17+"%"})
Music3.addEventListener("click" , function(){UpdateSong("Song3", "Children of the Ruins"),  MusicText.style.top = 60+"%" ,MusicText.style.left = 17+"%"})
Music4.addEventListener("click" , function(){UpdateSong("Song4", "Niko and the World Machine") , MusicText.style.top = 55+"%" ,MusicText.style.left = 3+"%"})
Music5.addEventListener("click" , function(){UpdateSong("Song5", "Self Contained Universe") , MusicText.style.top = 65+"%" ,MusicText.style.left = 8+"%"})
Music6.addEventListener("click" , function(){UpdateSong("Song6", "Thanks for Everything") , MusicText.style.top = 60+"%" ,MusicText.style.left = 12+"%"})
Music7.addEventListener("click" , function(){UpdateSong("Song7", "Pretty Nice Day , huh..") , MusicText.style.top = 60+"%" ,MusicText.style.left = 12+"%"})
function UpdateSong(song,text){
  seconds = 0
  progress.style.width = 0 + "%";
  audio = new Audio(document.getElementById(song).src);
  CalculateDuration(song)
  MusicText.innerHTML = `<div>${text}</div>`
  playing = false

}
function AddOpen(src , window){
  var taskBar = document.querySelector("#Task");
  if (taskBar.querySelector(`img[src="${src}"]`)){
    return
  }
  var elem = document.createElement("img");
  elem.setAttribute("src", src);
  elem.style.marginLeft = "2%";
  document.querySelector("#Task").appendChild(elem)
  elem.addEventListener("click", function () {window.style.display = "block"; });
}

function AddClose(src){
  var taskBar = document.querySelector("#Task");
  var images = taskBar.querySelectorAll(`img[src="${src}"]`);
  images.forEach(function(img){
    img.remove();
  });
}
Icon1.addEventListener('click' , function(){AddOpen("manager.png",FileManager);})
Icon2.addEventListener('click' , function(){AddOpen("notepad.png",NotePad);})
Icon7.addEventListener('click' , function(){AddOpen("Music.png",music);})
Web.addEventListener('click' , function(){AddOpen("Web.png",Browse);})
PainIcon.addEventListener('click' , function(){AddOpen("PaintIcon.png",Pain);})
CalcIcon.addEventListener('click' , function(){AddOpen("Calculator.png", Calc);})
TerminalIcon.addEventListener('click' , function(){AddOpen("Terminal.png",Terminal);})

CloseButtons.addEventListener("click",function(){AddClose("notepad.png")})
CloseButttons.addEventListener("click",function(){AddClose("manager.png")})
CloseBut.addEventListener("click" , function(){AddClose("Music.png")})
QuitWeb.addEventListener("click" , function(){AddClose("Web.png")})
QuitPain.addEventListener("click" , function(){AddClose("PaintIcon.png")})
CalcClose.addEventListener("click" , function(){AddClose("Calculator.png")})
CloseTer.addEventListener("click" , function(){AddClose("Terminal.png")})

function Switchs(ele){
  s = !s;
  if (s) {
    ele.style.display = "flex";
  } else {
    ele.style.display = "none";
  }
}
search.addEventListener('click', function(){Switchs(apps);})

function HideWindow(window){
  window.style.display = "none"
}
hiden1.addEventListener('click',function(){HideWindow(FileManager)})
hiden2.addEventListener('click',function(){HideWindow(NotePad)})
hiden3.addEventListener('click',function(){HideWindow(music)})
Hidden4.addEventListener('click',function(){HideWindow(Settings)})
Hidden5.addEventListener('click',function(){HideWindow(Browse)})
Hidden6.addEventListener('click',function(){HideWindow(Pain)})
Hidden7.addEventListener('click',function(){HideWindow(Calculator)})
Hidden8.addEventListener('click',function(){HideWindow(Terminal)})
Intro.addEventListener("click",function(){openWindow(welcomeWindow)})

searchfile.addEventListener("click",function(){openWindow(FileManager)})
searchfile.addEventListener('click' , function(){AddOpen("manager.png",FileManager);})
searchnote.addEventListener("click",function(){openWindow(NotePad)})
searchnote.addEventListener('click' , function(){AddOpen("notepad.png",NotePad);})
searchmusic.addEventListener("click",function(){openWindow(music)})
searchmusic.addEventListener('click' , function(){AddOpen("Music.png",music);})
searchWeb.addEventListener("click",function(){openWindow(Browse)})
searchWeb.addEventListener('click' , function(){AddOpen("Web.png",Browse);})
searchPaint.addEventListener("click",function(){openWindow(Pain)})
searchPaint.addEventListener('click' , function(){AddOpen("PaintIcon.png",Pain);})
searchCalculator.addEventListener("click",function(){openWindow(Calc)})
searchCalculator.addEventListener('click' , function(){AddOpen("Calculator.png",Calc);})
searchTerminal.addEventListener("click",function(){openWindow(Terminal)})
searchTerminal.addEventListener('click' , function(){AddOpen("Terminal.png",Terminal);})

ColorText.addEventListener("input" , function(){updateText(ColorText)})
function updateText(element){
  var color = element.value
  var r = parseInt(color.substr(1, 2), 16)
  var g = parseInt(color.substr(3, 2), 16)
  var b = parseInt(color.substr(5, 2), 16)
  Body.style.color = `rgb(${r}, ${g}, ${b})`;
}

function UpdateWallpapper(newer , color){
  Body.style.backgroundImage = newer;
  task.style.backgroundColor = color;
  Video1.style.display = "none"
  Video2.style.display = "none"
  bool = false
  bool1 = false
  Save()
}
Background1.addEventListener('click' , function(){UpdateWallpapper("url('./974793.png')", "#490349"); Gradiant("Gradient1")})
Background2.addEventListener('click' , function(){UpdateWallpapper("url('./PeakImg.webp')", "#e5f0c2") ;Gradiant("Gradient2");})
Live1.addEventListener('click' , function(){Video1.style.display = "flex" , Video2.style.display = "none" , task.style.backgroundColor = "#02022d", bool = true , Save();Gradiant("Gradient3")})
Live2.addEventListener('click' , function(){Video2.style.display = "flex" , Video1.style.display = "none" , task.style.backgroundColor = "#1f021e", bool1 = true , Save();Gradiant("Gradient4")})




function Save(){
  var ColorText = document.getElementById("TextColor").value
  var ColorClock = document.getElementById("color").value
  var Back = Body.style.backgroundImage
  var Task = task.style.backgroundColor
  var classs = document.getElementById("Gradient").className
  localStorage.setItem("TextColor" , ColorText)
  localStorage.setItem("ClockColor" , ColorClock)
  localStorage.setItem("Background" , Back)
  localStorage.setItem("Bar" , Task)
  localStorage.setItem("Bool" , bool)
  localStorage.setItem("Bool1", bool1)
  localStorage.setItem("Canvas", Board.toDataURL());
  localStorage.setItem("Gradient", classs);
  console.log(classs)
}
function LoadSavedFile(){
  var Canvas = localStorage.getItem("Canvas")
  var ColorText = localStorage.getItem("TextColor")
  var ColorClock = localStorage.getItem("ClockColor")
  var Background = localStorage.getItem("Background")
  var Task = localStorage.getItem("Bar")
  var Booll = localStorage.getItem("Bool") === "true";
  var Boolll = localStorage.getItem("Bool1") === "true";
  var classs = localStorage.getItem("Gradient");
  var image = new Image();
  image.src = Canvas;
  Body.style.backgroundImage = Background
  Body.style.color = ColorText
  document.getElementById("color").value = ColorClock 
  document.getElementById("TextColor").value = ColorText
  Time.style.color = ColorClock
  task.style.backgroundColor = Task
  document.getElementById("Gradient").className = classs;
  if (Booll) {
    Video1.style.display = "flex";
    Video2.style.display = "none";
  }
  if (Boolll) {
    Video2.style.display = "flex";
    Video1.style.display = "none";
  }
  image.onload = function() {
    Brush.drawImage(image, 0, 0);
  }
  
}


ColorText.addEventListener("input" , function(){updateText(ColorText)})
ColorInput.addEventListener("input" , function(){updateColor(ColorInput)})
LoadSavedFile()


Board.addEventListener("mousedown", function(e) {
  isDrawing = true;
  Brush.beginPath();
});
Board.addEventListener("mousemove", draw);
Board.addEventListener("mouseup", function() { isDrawing = false; Brush.beginPath();});
Board.addEventListener("mousedown", function() { isDrawing = true; });
Board.addEventListener("mouseout", function() { isDrawing = false; });
Fill.addEventListener("mousedown", function() {FillCanvas()});
Erase.addEventListener("mousedown", function() {SwitchButton()});
SaveButton.addEventListener("mousedown", function() {Save()});

function draw(e){
  if (!isDrawing) return;
  Brush.lineWidth = brushSize.value;
  Brush.lineCap = "round";
  Brush.strokeStyle = colorPicker.value;

  Brush.lineTo(e.offsetX, e.offsetY);
  Brush.stroke();
  Brush.beginPath();
  Brush.moveTo(e.offsetX, e.offsetY);
}

function FillCanvas(){
  Brush.fillStyle = colorPicker.value;
  Brush.fillRect(0,0 , Board.width,Board.height)
}

function Eraser(){
  if (isErasing){
    Brush.globalCompositeOperation = 'destination-out';
  }
}
function Brushing(){
  if (!isErasing){
    Brush.globalCompositeOperation = 'source-over';
  }
}
function SwitchButton(){
  isErasing = !isErasing
  if (isErasing){
    Erase.src = "Brush.png"
    Eraser()
  }
  if(!isErasing){
    Erase.src = "Eraser.png"
    Brushing()
  }
}



var display = document.getElementById("display");
function appendValue(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.ATTRIBUTE_NODE.value = "Error";
  }
}  





var Input = document.getElementById("commandLine");
var Terminal = document.getElementById("Terminal");
var Output = document.getElementById("output");
var OutputLines = document.getElementById("outputLines");
Input.addEventListener("keydown", function(event) {
  if (event.key === "Enter"){
    event.preventDefault();
    ExecuteCommand();
  }
})
function ExecuteCommand(){
  const command = Input.textContent.trim();
  var text = ""
  if (command.toLowerCase() === "help") {
    text = "[help] - list of comands \n [clear] - clear the terminal \n [exit] - close the terminal \n [WindowName] - To oppen the Named window \n [guide] - information about the Os";
  }  
  else if (command.toLowerCase() === "clear") {
    OutputLines.innerHTML = "";
    return;
  }
  else if (command.toLowerCase()  === "exit") {
    closeWindow(Terminal)
  }
  else if(command.toLowerCase() === "filemanager" ){
    AddOpen("manager.png",FileManager)
    openWindow(FileManager)
  }
  else if(command.toLowerCase() === "notepad" ){
    AddOpen("notepad.png",NotePad)
    openWindow(NotePad)
  }
  else if(command.toLowerCase() === "browser" ){
    openWindow(Browse)
    AddOpen("Web.png",Browse)
  }
  else if(command.toLowerCase() === "musicplayer"){
    openWindow(music)
    AddOpen("Music.png",music)
  }
  else if(command.toLowerCase() === "paint"){
    openWindow(Pain)
    AddOpen("PaintIcon.png",Pain)
  }
  else if(command.toLowerCase() === "calculator"){
    openWindow(Calc)
    AddOpen("Calculator.png",Calculator)
  }
  else if(command.toLowerCase() == "guide"){
    text = "The Os is very simple , all the apps are on the desktop or in the desktop foulder tthe portal foulder is just a refrence to the game . The setting can be found on the taskbar ,you can change the wallpapper ,clock color , clock visability and text color . Yea that about it , Thank you for checking out the terminla too :D  "
  }
  Input.textContent = "";
  const output = document.createElement("p");
  output.textContent = text;
  OutputLines.appendChild(output);
}
var i = 0;
var timerr = 0
setInterval(function() {
  typeWriter()
  function typeWriter() {
    var txt = 'ShotOsBIOS(C)X021 ShotOs.\nXIDOH 2290-B ACPI BIOS Revision 1043\nCPU: YTECR) Y-4430M CPU @1.650GHz\n\nChecking LPRAM...\n\n2048KB OK\n\nDetecting SCSI Devices...\nSCSI1: Directional Input Device #140F604\nSCSI2: Network Port #1B01C20\nSCSI4: Remote Presence #200A490\n\nAuto-detecting Mass Storage...\n512MB MTD500100593-3B1\n\nScanning sounds.....\nScan complete.  Found 7 sounds.\nLoading sounds:\nMy Burden is Light\nOn Little Cat Feet\nChildren of the Ruin\nSelf Contained Universe\nThanks for Everything\nPretty Nice Day , huh....\n\nInitializing I/O matrix...\nKeyboard: Present\nMouse: Calibrated\nTouchpad: Idle\n\nPower management enabled.\nSecure boot status: Verified\nFirmware signature: OK\n\nStarting ShotOS core...\nKernel version: 5.21.0-shot\nSubsystems loaded: 18/18\nNetworking: 10/10\nAudio: 6/6\nGraphics: 4/4\n\n\nWelcome to ShotOS.';
    const loadingText = document.getElementById("loading-text");
    if (i < txt.length) {
     loadingText.innerHTML += txt.charAt(i);
     loadingText.scrollTop = loadingText.scrollHeight;
     i++ 
    }
    if(i >= txt.length){
      timerr++
    }
    if (timerr >= 100){
      Loading.style.display = "none"
      
    }

  }
}, 1);

var Pull = document.getElementById("PullUp");
var Gradient = document.getElementById("Gradient");
var heightt = Gradient.offsetHeight;
Pull.addEventListener("click", PullUp)
var Pulled = false
function PullUp(){
  if(Pulled == false){
   Pull.src = "PushDown.png"
   Icon7.style.display = "none"
   icon1.style.display = "none"
   icon2.style.display = "none"
   WebIcon.style.display = "none"
   PainIcon.style.display = "none"
   CalcIcon.style.display = "none"
   TerminalIcon.style.display = "none"
   var Pulling = setInterval(function() {
     Gradient.style.height = Gradient.offsetHeight - 4 + "px";
     if (Gradient.offsetHeight - 4 <= 42) {
       clearInterval(Pulling);
       Pulled = true
     }
   }, 0.1)
  }
  else if(Pulled == true){
    Pull.src = "PullUp.png"
    Icon7.style.display = "block"
    icon1.style.display = "block"
    icon2.style.display = "block"
    WebIcon.style.display = "block"
    PainIcon.style.display = "block"
    CalcIcon.style.display = "block"
    TerminalIcon.style.display = "block"
    var PullingC = setInterval(function() {
      Gradient.style.height = Gradient.offsetHeight + 4 + "px";
      if (parseInt(Gradient.style.height) >= heightt) {
       clearInterval(PullingC);
       Pulled = false
     }
    }, 0.1 )

  }
}

function Gradiant(classs){
  document.getElementById("Gradient").className = classs;
  Save()
}








var currentdate = document.getElementById("calendar-date");
let date = new Date();
var day = document.querySelector("#calendar .day");
var currentYear = date.getFullYear() ;
var currentMonth = date.getMonth() ;
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(currentYear, currentMonth)

const renderCalendar = () => {
  let firstDay = new Date(currentYear , currentMonth, 1).getDay()
  let lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  let NextFirstDay = new Date(currentYear, currentMonth , lastDay).getDay();
  let PreviusLastDay = new Date(currentYear, currentMonth, 0).getDate();
  let liTag = "";

  for(let i = firstDay; i > 0 ; i--){
    liTag += '<li class = "inactive">' + (PreviusLastDay - i +1  )+ '</li>';
  }
  for (let i = 1; i <= lastDay; i++) {
    let today = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${today}" >${i}</li>`;
  }
  for(let i = NextFirstDay; i < 6 ; i++){
    liTag += `<li class="inactive">${i - NextFirstDay + 1}</li>`;
  }

  currentdate.innerText = `${Months[currentMonth]} ${currentYear}`;
  day.innerHTML = liTag;
}
renderCalendar();
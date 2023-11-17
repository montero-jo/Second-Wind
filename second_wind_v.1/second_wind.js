// let imgElement = document.createElement("img"); 
// imgElement.src = "images/turbine1.GIF"; 
// document.body.appendChild(imgElement);
// imgElement.width = "500px";
// imgElement.height = "200px";

let oX1 = 256;
let oX2 = 256;
let oX3 = 256;
let oX4 = 256;
let cursor = 0;

function setup(){
    createCanvas(1497,2000);
    frameRate(15);
}

function draw (){
    colorMode(RGB,256);
    background(60, 92, 196);
    noStroke()

// scrolling functions

    let dim = random(160,180);
    let low = random(180,200);
    let med = random(200,220);
    let bright = random(220,240);

    let q1 = 1990;
    let q2 = 2000;
    let q3 = 2010;
    let q4 = 2020;
    let q5 = 2030;

    let scrollAmount = window.scrollY;
    let scrollYear = window.scrollY;

    if (window.scrollY >= 70){
        timeline = "-";
    }

    if (window.scrollY >= 90){
        timeline = "1990s";
    }

    if (window.scrollY >= 270){
        timeline = "2000s";
    }

    if (window.scrollY >= 450){
        timeline = "2010s";
    }

    if (window.scrollY >= 540){
        timeline = "2020s";
    }

    if (window.scrollY >= 720){
        timeline = "2030s";
    }

    fill(256,256,256)
    rect(30,scrollAmount,10,25)


    text(timeline, 45, scrollAmount+16);
    strokeWeight(0.5)
    stroke(256,256,256)
    line(20,750,20,20)



// legend     

    strokeWeight(2.5);
    fill(60, 92, 196);
    rect(1141,165,281,75);

    // box

        strokeWeight(1);
        fill(17,med,188,oX1);
        rect(1170,193,20,20);


// megawatt squares

    // noStroke()   
    strokeWeight(0.5);
    
// <1990s - 1
    fill(17,random(220,240),188,256) //1
    rect (620,425,40,40)

// 2000s - 4

    fill(17,bright,188,oX1) //2
    rect (660,385,40,40)

    fill(17,bright,188,oX11) //3
    rect (620,385,40,40)

    fill(17,bright,188,oX11) //4
    rect (580,385,40,40)

// 2010s - 9

    fill(17,med,188,oX2) //5
    rect (620,345,40,40)

    fill(17,med,188,oX2) //6
    rect (620,345,40,40)

    fill(17,med,188,oX22) //7
    rect (540,405,40,40)

    fill(17,med,188,oX22) //8
    rect (660,465,40,40)

    fill(17,med,188,oX22) //9
    rect (660,345,40,40)

// // 2020s - 30

    fill(17,low,188,oX33) //10
    rect (700,365,40,40)

    fill(17,low,188,oX33) //11
    rect (680,305,40,40)

    fill(17,low,188,oX33) //12
    rect (740,405,40,40)

    fill(17,low,188,oX33) //13
    rect (680,445,40,40)

    fill(17,low,188,oX33) //14
    rect (560,465,40,40)

    fill(17,low,188,oX33) //15
    rect (600,305,40,40)

    fill(17,low,188,oX33) //16
    rect (600,365,40,40)

    fill(17,low,188,oX33) //17
    rect (560,325,40,40)

    fill(17,low,188,oX33) //18
    rect (620,465,40,40)

    fill(17,low,188,oX33) //19
    rect (540,365,40,40)

    fill(17,low,188,oX3) //20
    rect (700,425,40,40)

    fill(17,low,188,oX3) //21
    rect (700,265,40,40)

    fill(17,low,188,oX3) //22
    rect (500,425,40,40)

    fill(17,low,188,oX3) //23
    rect (740,365,40,40)

    fill(17,low,188,oX3) //24
    rect (640,305,40,40)

    fill(17,low,188,oX3) //25
    rect (620,465,40,40)

    fill(17,low,188,oX3) //26
    rect (580,425,40,40)

    fill(17,low,188,oX3) //27
    rect (640,265,40,40)

    fill(17,low,188,oX3) //28
    rect (620,505,40,40)

    fill(17,low,188,oX3) //29
    rect (500,325,40,40)

    fill(17,low,188,oX3) //30
    rect (540,365,40,40)

// 2030s - 85

    fill(17,dim,188,oX4) //31
    rect (460,365,40,40)

    fill(17,dim,188,oX4) //32
    rect (500,365,40,40)

    fill(17,dim,188,oX4) //33
    rect (740,325,40,40)

    fill(17,dim,188,oX4) //34
    rect (500,465,40,40)

    fill(17,dim,188,oX4) //35
    rect (780,385,40,40)

    fill(17,dim,188,oX4) //36
    rect (420,385,40,40)

    fill(17,dim,188,oX4) //37
    rect (460,265,40,40)

    fill(17,dim,188,oX4) //38
    rect (560,265,40,40)

    fill(17,dim,188,oX4) //39
    rect (620,565,40,40)

    fill(17,dim,188,oX4) //40
    rect (660,505,40,40)

    fill(17,dim,188,oX4) //41
    rect (660,545,40,40)

    fill(17,dim,188,oX4) //42
    rect (620,465,40,40)

    fill(17,dim,188,oX4) //43
    rect (620,245,40,40)

    fill(17,dim,188,oX4) //44
    rect (620,205,40,40)

    fill(17,dim,188,oX4) //45
    rect (700,525,40,40)

    fill(17,dim,188,oX4) //46
    rect (580,525,40,40)

    fill(17,dim,188,oX4) //47
    rect (560,265,40,40)

    fill(17,dim,188,oX4) //48
    rect (520,265,40,40)

    fill(17,dim,188,oX4) //49
    rect (500,325,40,40)

    fill(17,dim,188,oX4) //50
    rect (740,285,40,40)

    fill(17,dim,188,oX4) //51
    rect (740,465,40,40)

    fill(17,dim,188,oX4) //52
    rect (460,425,40,40)

    fill(17,dim,188,oX4) //53
    rect (580,465,40,40)

    fill(17,dim,188,oX4) //54
    rect (540,285,40,40)

    fill(17,dim,188,oX4) //55
    rect (780,325,40,40)

    fill(17,dim,188,oX4) //56
    rect (540,505,40,40)

    fill(17,dim,188,oX44) //57
    rect (700,245,40,40)

    fill(17,dim,188,oX44) //58
    rect (720,225,40,40)

    fill(17,dim,188,oX44) //59
    rect (420,345,40,40)

    fill(17,dim,188,oX44) //60
    rect (460,485,40, 40)

    fill(17,dim,188,oX44) //61
    rect (500,505,40,40)

    fill(17,dim,188,oX44) //62
    rect (520,525,40,40)

    fill(17,dim,188,oX44) //63
    rect (740,525,40,40)

    fill(17,dim,188,oX44) //64
    rect (740,325,40,40)

    fill(17,dim,188,oX44) //65
    rect (520,225,40,40)

    fill(17,dim,188,oX44) //66
    rect (700,485,40,40)

    fill(17,dim,188,oX44) //67
    rect (780,445,40,40)

    fill(17,dim,188,oX44) //68
    rect (560,565,40,40)

    fill(17,dim,188,oX44) //69 - nice
    rect (560,205,40,40)

    fill(17,dim,188,oX44) //70
    rect (780,545,40,40)

    fill(17,dim,188,oX44) //71
    rect (460,325,40,40)

    fill(17,dim,188,oX44) //72
    rect (800,465,40,40)

    fill(17,dim,188,oX44) //73
    rect (420,225,40,40)

    fill(17,dim,188,oX44) //74
    rect (700,565,40,40)

    fill(17,dim,188,oX44) //75
    rect (780,225,40,40)

    fill(17,dim,188,oX44) //76
    rect (800,305,40,40)

    fill(17,dim,188,oX44) //77
    rect (420,565,40,40)

    fill(17,dim,188,oX44) //78
    rect (760,565,40,40)

    fill(17,dim,188,oX44) //79
    rect (460,205,40,40)

    fill(17,dim,188,oX44) //80
    rect (420,265,40,40)

    fill(17,dim,188,oX44) //81
    rect (800,505,40,40)

    fill(17,dim,188,oX4) //82
    rect (440,465,40,40)

    fill(17,dim,188,oX4) //83
    rect (740,245,40,40)

    fill(17,dim,188,oX4) //84
    rect (460,545,40,40) 

    fill(17,dim,188,oX4) //85
    rect (420,505,40,40)

}

window.onscroll = function(){
    let scrollAmount = window.scrollY;
    
    if (scrollAmount <= 90){
        oX1 = 0 ;
    } else {
        oX1 = 256;
    }

    if (scrollAmount <= 180){
        oX11 = 0 ;
    } else {
        oX11 = 256;
    }

    if (scrollAmount <= 270){
        oX2 = 0 ;
    } else {
        oX2 = 256;
    }

    if (scrollAmount <= 360){
        oX22 = 0 ;
    } else {
        oX22 = 256;
    }

    if (scrollAmount <= 450){
        oX33 = 0 ;
    } else {
        oX33 = 256;
    }

    if (scrollAmount <= 540){
        oX3 = 0 ;
    } else {
        oX3 = 256;
    }

    if (scrollAmount <= 630){
        oX4 = 0 ;
    } else {
        oX4 = 256;
    }

    if (scrollAmount <= 720){
        oX44 = 0 ;
    } else {
        oX44 = 256;
    }


}



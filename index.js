var clicked=document.querySelectorAll(".drum").length;
for(var i=0;i<=clicked;i++){
     let selected=document.querySelectorAll(".drum")[i];
     selected.addEventListener("click",function (){
        var valueSelected=selected.innerHTML;
        switch (valueSelected) {
            case 'w':
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case 'a':
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case 's':
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case 'd':
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case 'j':
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case 'k':
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case 'l':
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default: 
                alert("dummy:(");
                break;
        }
        // if(selected.innerHTML==='w'){
        //     let audio=new Audio("sounds/crash.mp3");
        //     audio.play();
        // }
        // else if(selected.innerHTML==='w'){
        //     let audio=new Audio("sounds/crash.mp3");
        //     audio.play();
        // }
        // else if(selected.innerHTML==='a'){
        //     let audio=new Audio("sounds/kick-bass.mp3");
        //     audio.play();
        // }
        // else if(selected.innerHTML==='s'){
        //     let audio=new Audio("sounds/snare.mp3");
        //     audio.play();
        // }
        // else if(selected.innerHTML==='d'){
        //     let audio=new Audio("sounds/tom-1.mp3");
        //     audio.play();
        // }
        // else if(selected.innerHTML==='j'){
        //     let audio=new Audio("sounds/tom-2.mp3");
        //     audio.play();
        // }
        // else if(selected.innerHTML==='k'){
        //     let audio=new Audio("sounds/tom-3.mp3");
        //     audio.play();
        // }
        // else{
        //     let audio=new Audio("sounds/tom-4.mp3");
        //     audio.play();
        // }

    });
}
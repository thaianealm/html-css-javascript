function load(){
    let date = new Date();
    let hour = date.getHours();
    let currentTime = date.toLocaleTimeString();
    
    if(hour >= 0 && hour <= 12){
        //Good morning
        img.src = './assets/imgs/morning.jpg';
        msg.innerHTML = `Bom dia! Agora são ${currentTime}`;
        document.querySelector('body').setAttribute('class', 'morning')
    }else if(hour > 12 && hour <=18){
        //Good afternoon
        img.src = './assets/imgs/afternoon.jpg';
        msg.innerHTML = `Boa tarde! Agora são ${currentTime}`;
        document.querySelector('body').setAttribute('class', 'afternoon')
    }else{
        //Good night
        img.src = './assets/imgs/night.jpg';
        msg.innerHTML = `Boa noite! Agora são ${currentTime}`;
        document.querySelector('body').setAttribute('class', 'night')
    };
};
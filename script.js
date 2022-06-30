const input=document.querySelector('#guess');
const button=document.querySelector('#btn');
const answer = Math.floor(Math.random()*11) + 21;


button.addEventListener('click', play);

input.addEventListener('keypress', function(e) {
      if(e.keyCode === 13) 
          play();
      
})


  function play(){
 const UserNumber=document.querySelector('#guess').value;
 if(UserNumber <10 || UserNumber >30){
    Swal.fire({
        icon: 'error',
        title: 'Ой...',
        text: 'Введи число от 10 до 20!',
        
      })
 }
 else if(isNaN(UserNumber)){
    Swal.fire({
        icon: 'error',
        title: 'Ой...',
        text: 'Нужно ввести число!',
        
      })
 }
 else{
     if
         (UserNumber < answer){
            Swal.fire('Введи число выше! Компьютер пока побеждает!')
         }
         else
             if(UserNumber>answer){
                Swal.fire('Введи число ниже! Компьютер пока побеждает!')
             
         }
         else{
            Swal.fire({
                title: 'ПОБЕДА!',
                imageUrl: 'https://media.istockphoto.com/photos/lots-of-multicoloured-cubes-moving-in-space-to-come-together-to-form-picture-id1312818032?b=1&k=20&m=1312818032&s=170667a&w=0&h=1ATbE11tJ8wchBqnCrZVrd0bxnERiT1DtMVS2VufR1I=',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
         }
     }
  


}
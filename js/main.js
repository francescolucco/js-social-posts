const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

// 2. creo una variabile vuota contente una stringa che utilizzerò per stamapare il testo HTML
let html = '';

// 3. creo la costante che mi aggancia il punto su cui andare a stampare sul DOM
const teamContainer = document.querySelector('.posts-list');

// 4. Utilizzo un ciclo "for" attraverso la mia funzione "stampa" per stampare le informazioni sul foglio HTML
stampaPostHTML (posts);

// 5. Utilizzo un ciclo "for in" per verificare se alcuni post non hanno l'immagine profilo e la elimino dal foglio HTML
// for( let index in posts){
//     console.log(posts[index])
//     // for(let i in posts[index]){
//     //     console.log((posts[index])[i]);
//     //     if((posts[index])[i] = null){
//     //       }
//     // }
// }

for(let i = 0; i < posts.length; i++){
    console.log(posts[i].author.image);
    if(posts[i].author.image = null){
    eliminazioneImgProfile (i);
    }
}

// 6. Aggancio il pulsante like e al click faccio scatenare la funzione aggiunta like
const bntLike = document.getElementsByClassName('like-button');

const contatoreLike = document.getElementsByClassName('js-likes-counter');

// let a = contatoreLike[i].value;
// console.log(a);

// let postId1 = document.getElementById('amore').value;
// console.log(postId1);

// for(let i = 0; i < bntLike.length; i++){
//     bntLike[i].addEventListener('click', clickLike);
//         console.log('bellalì!');
    
    
// }

// 7. Leggo i valori in stringa delle date:
        // -7.1 Li trasformo in oggetto new Date   
        for(let i = 0; i < posts.length; i++){
            let data = new Date(posts[i].created);
            console.log(data);
            
            let year = data.getFullYear();
            console.log(year);
            
            
            let month = (data.getMonth()) + 1;
            console.log(month);
            
            
            let day = data.getDate();
            console.log(day);

            const dataHTML = document.getElementsByClassName('post-meta__time');

            dataHTML[i].innerHTML = `${day}/${month}/${year}`

        }
        
        // -7.2 Li scompongo e li trascrivo nell'HTML  in formatoi italiano



// data.setMonth(data.setMonth());
// console.log(data);
// data.setDate(data.setDate());
// console.log(data);




// §§ --- FUNZIONE --- §§ //
function stampaPostHTML (allPost){
    for(let post of allPost){

      html += 
      `
      <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${post.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
      `
      console.log(html);
      teamContainer.innerHTML = html;
    }
}

function eliminazioneImgProfile (index){
    const imgProfile = document.getElementsByClassName('post-meta__icon');
    imgProfile[index].innerHTML = '';
}

function clickLike (){
console.log('hai cliccato il pulsante like');
    this.className = ('like-button--liked');

    }

function sommaLike (value){
    return (value + 1);
}

// function stampaDataHTML (allPost){

//     for(let post of allPost){

//     let html = '';
//       html = 
//       `
//         <div class="post-meta__time">${}</div>
//       `
//       console.log(html);
//       teamContainer.innerHTML = html;
//     }
// }
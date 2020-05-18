/*zadanie 1

var link = document.querySelector('.title')

getDataAnimation(link);

function getDataAnimation(){
    var x = link.dataset;
    console.log(x);
    return x;
}
*/


/*zadanie 2
const home = document.getElementById('home');
console.log(home);

const li = document.querySelector('li[data-direction]');
console.log(li);

const block = document.querySelector('.block');
console.log(block);
*/


/*zadanie 3
const nav = document.querySelectorAll('nav > ul > li');
console.log(nav);

const paragraph = document.querySelectorAll('div > p');
console.log(paragraph);

const div = document.querySelectorAll('article > div');
console.log(div);
*/


/*zadanie 4
const first = document.querySelectorAll('article.first');
console.log(first);
const h1 = document.querySelectorAll('article.first > h1').length;
console.log(h1);
*/

//zadanie1-DOM.1.3

const links = document.querySelectorAll('li');
ile = links.length;

getDatasInfo(links, ile);

function getDatasInfo(){

    const tab = [ile];

    tab[1] = links[1].dataset;
    
    ile = ile-1;

    for(ile;ile>=0;ile--){
        tab[ile] = links[ile].dataset;
    };

    ile = links.length;
    
   console.log(tab);
};
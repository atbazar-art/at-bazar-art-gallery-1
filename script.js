const data=[
{title:'Football Jersey',category:'Jersey',badge:'Premium',image:'https://picsum.photos/500/300?1'},
{title:'Business Banner',category:'Banner',badge:'New',image:'https://picsum.photos/500/300?2'},
{title:'Modern Logo',category:'Logo',badge:'Free',image:'https://picsum.photos/500/300?3'},
{title:'Poster Design',category:'Poster',badge:'Premium',image:'https://picsum.photos/500/300?4'}
];
const g=document.getElementById('gallery');
const s=document.getElementById('search');
let cat='All';
function render(){
 const q=s.value.toLowerCase();
 g.innerHTML='';
 data.filter(d=>(cat==='All'||d.category===cat)&&d.title.toLowerCase().includes(q))
 .forEach(d=>g.innerHTML+=`<div class="card"><img src="${d.image}"><div class="info"><h3>${d.title}</h3><p>${d.category}</p><span class="badge">${d.badge}</span></div></div>`);
}
document.querySelectorAll('.chips button').forEach(b=>b.onclick=()=>{cat=b.dataset.cat;render()});
s.oninput=render;render();

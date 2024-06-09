const listCategories = document.querySelectorAll(".item");
console.log("Number of categories:", `${listCategories.length}`);

listCategories.forEach(item =>{
    const title = item.querySelector('h2').textContent;
    const subItems = item.querySelectorAll('ul li');
    const numberOfSubItems = subItems.length;
    console.log('Category:', `${title}`);
     console.log("Elements: ", `${numberOfSubItems}`);

});


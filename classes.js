const ul = document.getElementById('users');

fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data) {
    let users = data.results;
    return users.map((user) => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let p = document.createElement('p');

        ul.appendChild(li);
        let paragraph = li.appendChild(p);
        let image = li.appendChild(img);
    

        let firstName = user.name.first;
        let lastName = user.name.last;
        console.log(user.picture.large);
        paragraph.innerHTML = `${firstName} ${lastName}`;
        image.src = user.picture.large;
        //console.log(users);
    });
    
}
)

.catch(function (error) {
    console.log(error);
});


const target = document.getElementById("user-dropdown");

const getData = () => {
    fetch("/users")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // data.forEach((user) => {
            //     const listElement = document.createElement("li");
            //     const anchorElement = document.createElement("a");
            //     anchorElement.setAttribute("value", "#");
            //     anchorElement.innerHTML = user.id;
            //     listElement.appendChild(anchorElement);
            //     target.appendChild(listElement);
            // });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getCluster = () => {
    fetch("/users/cluster")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
};

const getOne = () => {
    fetch("/users/228")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
};

const init = () => {
    window.addEventListener("load", getData());
    window.addEventListener("load", getCluster());
    window.addEventListener("load", getOne());
};

init();

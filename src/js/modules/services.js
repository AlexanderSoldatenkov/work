const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

// getResource('http://localhost:3000/menu')
// .then(data => {
//     data.forEach(({
//         img,
//         altimg,
//         title,
//         descr,
//         price
//     }) => {
//         new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
//     });
// });

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData};
export {getResource};
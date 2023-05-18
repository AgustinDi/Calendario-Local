function getIframeDimensions(width) {
    let finalWidth = 550;
    if(320<width) finalWidth = 600
    if(470<width) finalWidth = 720
    if(1024<width) finalWidth = 800

    return {
        finalWidth,
        finalHeight: 400
    }
}

function dragClicked(e){
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
}

export {getIframeDimensions, dragClicked}
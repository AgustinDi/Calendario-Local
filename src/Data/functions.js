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


export {getIframeDimensions}
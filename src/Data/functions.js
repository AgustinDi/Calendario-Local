


export default function getIframeDimensions(width, height) {
    let finalWidth;
    console.log(width)
    if(320<width) finalWidth = 720
    if(720<width) finalWidth = 500
    if(1024<width) finalWidth = 800

    return {
        finalWidth,
        finalHeight: 400
    }
}
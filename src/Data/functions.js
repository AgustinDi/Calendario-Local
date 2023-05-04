


export default function getIframeDimensions(width, height) {
    let finalWidth;
    if(320<width) finalWidth = 720
    if(1024<width) finalWidth = 800

    return {
        finalWidth,
        finalHeight: 400
    }
}
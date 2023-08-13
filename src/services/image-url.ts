
const getImageUrl = (image: string, imageSize: string) => {
    const imageBaseUrl = 'http://image.tmdb.org/t/p/';
    return `${imageBaseUrl}${imageSize}${image}`;
}


export default getImageUrl;
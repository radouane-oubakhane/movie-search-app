import noImage from '../assets/no-image-placeholder.webp';

const getImageUrl = (image: string, imageSize: string) => {
    if (!image) return noImage;
    
    const imageBaseUrl = 'http://image.tmdb.org/t/p/';
    return `${imageBaseUrl}${imageSize}${image}`;
}


export default getImageUrl;


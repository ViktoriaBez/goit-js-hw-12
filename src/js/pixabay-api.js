import axios from 'axios';
export const perPage = 15;

const userGallery = async (userSearch, myPage) => {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: '43654443-0aa2ac279d0400a8e119738dd',
            q: userSearch,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: perPage,
            page: myPage
        }
    })
    return response.data;
};

export default userGallery;
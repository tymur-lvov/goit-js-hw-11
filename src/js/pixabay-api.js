export const onSearchFormSubmit = event => {
  event.preventDefault();

  const options = {
    key: '43212506-95870309335e8ebf3ea9c8656',
    q: null,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  let { key, q, image_type, orientation, safesearch } = options;
  q = event.srcElement.elements.search_input.value;

  fetch(
    `https://pixabay.com/api/?key=${key}&q=${q}&mage_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      return error;
    });
};

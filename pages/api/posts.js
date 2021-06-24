import fetch from '@gasket/fetch';

const getPosts = async (req, res) => {
  try {
    const apiResponse = await fetch('https://mostlydevstuff.com/wp-json/wp/v2/posts');
    const apiResponseJSON = await apiResponse.json();

    return res.status(apiResponse.status).send(apiResponseJSON);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default getPosts;


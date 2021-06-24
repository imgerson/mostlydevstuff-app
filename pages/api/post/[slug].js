import fetch from '@gasket/fetch';

const getPost = async (req, res) => {
  const { slug } = req.query;

  try {
    const apiResponse = await fetch(`${req.config.mostlydevstuff_rest_api}/posts?slug=${slug}`);
    const apiResponseJSON = await apiResponse.json();

    return res.status(apiResponse.status).send(apiResponseJSON);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default getPost;
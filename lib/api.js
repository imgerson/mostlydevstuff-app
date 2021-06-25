
const MOSTLYDEVSTUFF_API_URL = 'https://mostlydevstuff.com/wp-json/wp/v2';

export const fetchPosts = async () => {
  const apiResponse = await fetch(`${MOSTLYDEVSTUFF_API_URL}/posts`);
  const apiResponseJSON = await apiResponse.json();

  if (apiResponseJSON.errors) {
    // eslint-disable-next-line no-console
    console.error(apiResponseJSON.errors);
    throw new Error('Failed to fetch posts from mostlydevstuff.com');
  }

  return apiResponseJSON;
};

export const fetchPost = async (slug) => {
  const apiResponse = await fetch(`https://mostlydevstuff.com/wp-json/wp/v2/posts?slug=${slug}`);
  const apiResponseJSON = await apiResponse.json();

  if (apiResponseJSON.errors) {
    // eslint-disable-next-line no-console
    console.error(apiResponseJSON.errors);
    throw new Error(`Failed to fetch post with slug ${slug} from mostlydevstuff.com`);
  }

  return apiResponseJSON;
};

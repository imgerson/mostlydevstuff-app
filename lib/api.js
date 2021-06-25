
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

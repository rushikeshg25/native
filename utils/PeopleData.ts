/*
This is just a temprory data generator for profiles
we should not use this in production app
or maybe we can use :P
*/
const fetchSuperHeroProfile = async (character_id: number) => {
  try {
    const response = await fetch(
      'https://www.superheroapi.com/api.php/883549028812063/' + character_id,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      name: data.name,
      image: data.image.url,
    };
  } catch (err) {
    console.error('Fetch error:', err);
    return null;
  }
};

export const getSuperHeroList = async (count = 1) => {
  const results = [];
  const fetchedIds = new Set();

  while (results.length < count) {
    const character_id = Math.floor(Math.random() * 731) + 1;

    if (!fetchedIds.has(character_id)) {
      fetchedIds.add(character_id);
      const profile = await fetchSuperHeroProfile(character_id);
      if (profile) {
        results.push(profile);
      }
    }
  }

  return results;
};

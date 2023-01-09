const URL = 'https://people-api-wu4g.onrender.com';

export const peopleLoader = async () => {
    const response = await fetch(URL + "/people");
    const people = await response.json();
    return people;
}
// https://jsfiddle.net/ayuc60nb/4/

const handleFetch = async (url) => {
  let [response, resError] = await handleError(fetch(url));
  if (resError) throw new Error("Failed to fetch - " + url);

  let json = await response.json();
  if (!response.ok) {
    throw new Error(
      "Github Api - " +
        json.message +
        " (" +
        url +
        ") ( Reference : " +
        json.documentation_url +
        " )"
    );
  }
  return json;
};

const handleError = (promise) => {
  return promise
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));
};

export default handleFetch;

// -- USAGE

// async function userProfile() {
//   let [user, userErr] = await handle(getUser());
//   if (userErr) throw new Error("Could not fetch user details");

//   let [friendsOfUser, friendErr] = await handle(getFriendsOfUser(userId));
//   if (friendErr) throw new Error("Could not fetch user's friends");
// }

// -- Typescript

// export const handle = <T>(
//     promise: Promise<T>,
//     defaultError: any = 'rejected'
//   ): Promise<T[] | [T, any]> => {
//     return promise
//       .then((data) => [data, undefined])
//       .catch((error) => Promise.resolve([undefined, error || defaultError]));
//   };

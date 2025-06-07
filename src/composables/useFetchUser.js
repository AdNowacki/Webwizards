export const useFetchUser = () => {
  const fetchUser = async () => {
    try {
        const url = "https://webwizards.home.pl/jacek/frontend-task/api/user/";
        const response = await fetch(url, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }

  }

  return { fetchUser }
}
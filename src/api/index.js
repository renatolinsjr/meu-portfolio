import axios from 'axios';

const baseURL = 'https://api.github.com/';

const api = axios.create({
  baseURL,
  headers: {
    'User-Agent': 'request'
  }
});

export const getUser = async (user = 'renatolinsjr') => {
  try {
    const { status, data: { avatar_url: avatar, html_url: userUrl, name, location, bio } } = await api.get(`users/${user}`)

    if (status === 200) {
      return { avatar, userUrl, name, location, bio }
    } else {
      throw new Error(`status: ${status}`);
    }
  } catch ({ code, message }) {
    console.log(`erro ao trazer usuário da base do github: ${message}`);
  }
}

export const getRepos = async (user = 'renatolinsjr') => {
  try {
    const { status, data } = await api.get(`users/renatolinsjr/repos?per_page=6&sort=created`)
    
    if (status === 200) {
      return data
    } else {
      throw new Error(`status: ${status}`);      
    }
  } catch ({ code, message }) {
    console.log(`erro ao trazer repositórios da base do github: ${message}`);
  }
}
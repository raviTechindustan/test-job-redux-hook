import { apiGet } from '../../utils';

export function getNewsAPI(data) {
    return apiGet('/v0/news/1.json')
  }
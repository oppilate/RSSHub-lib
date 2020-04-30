import axios from 'axios';
import Parser, { Output as Feed } from 'rss-parser';
import { SiteRoutes, RoutesApiResponse } from './types';

export default class RSSHub {
  parser: { parseURL: (arg0: string) => any };
  constructor(public domain: string) {
    this.parser = new Parser();
  }
  

  async getAllRoutes(): Promise<SiteRoutes[]> {
    const route = '/api/routes';
    let response: RoutesApiResponse = await (
      await axios.get(route, { baseURL: this.domain })
    ).data;
    let data = response.data;

    let routes: SiteRoutes[] = [];
    for (const siteName in data) {
      let route = new SiteRoutes(siteName, data[siteName].routes);
      routes.push(route);
    }

    return routes;
  }

  async getRoutesOf(siteName: string): Promise<SiteRoutes> {
    const route = '/api/routes';
    const response: RoutesApiResponse = await (
      await axios.get(route + '/' + siteName, { baseURL: this.domain })
    ).data;
    const data = response.data;

    return new SiteRoutes(siteName, data[siteName].routes);
  }

  async getFeedAt(route: string): Promise<Feed> {
    let endpoint: string = this.domain + route;
    var feed: Feed;
    feed = await this.parser.parseURL(endpoint);

    return feed;
  }
}

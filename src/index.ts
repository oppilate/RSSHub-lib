import axios from 'axios';
import { Output as Feed } from 'rss-parser';
import { RoutesApiResponse, SiteRoutes as Site } from './types';
import { regexpParameterOptionalRoute, rssParser } from './utils';
export default class RSSHub {
  constructor(public domain: string) {}

  async getAllRoutes({ onlyParameterOptional = false }): Promise<Site[]> {
    const route = '/api/routes';
    let response: RoutesApiResponse = await (
      await axios.get(route, { baseURL: this.domain })
    ).data;
    let data = response.data;
    let sites: Site[] = [];

    for (const siteName in data) {
      let site = new Site(siteName, data[siteName].routes);

      if (onlyParameterOptional) {
        // Exclude those who require parameters

        site.routes = site.routes.filter(this.isParameterOptional);
      }
      sites.push(site);
    }

    if (onlyParameterOptional) {
      sites = sites.filter(this.hasRoute);
    }

    return sites;
  }

  isParameterOptional(route: string): boolean {
    return regexpParameterOptionalRoute.test(route);
  }

  hasRoute(site: Site): boolean {
    return (
      site.routes != null && site.routes != undefined && site.routes.length > 0
    );
  }

  async getRoutesOf(siteName: string): Promise<Site> {
    const route = '/api/routes';
    const response: RoutesApiResponse = await (
      await axios.get(route + '/' + siteName, { baseURL: this.domain })
    ).data;
    const data = response.data;

    return new Site(siteName, data[siteName].routes);
  }

  async getFeedAt(route: string): Promise<Feed> {
    let endpoint: string = this.domain + route;
    var feed: Feed;
    feed = await rssParser.parseURL(endpoint);

    return feed;
  }
}

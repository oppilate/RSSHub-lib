/**
 * @jest-environment node
 */

import RSSHub from '../src';
import { SiteRoutes } from '../src/types';

const testInstance = 'https://rsshub.app';
let rsshub: RSSHub;

describe('Setting test instance', () => {
  beforeEach(() => {
    rsshub = new RSSHub(testInstance);
  });
  it('initializes', () => {
    expect(rsshub.domain).toEqual(testInstance);
  });
  it(`retrives all routes`, async () => {
    expect.assertions(1);
    const response = await rsshub.getAllRoutes({
      onlyParameterOptional: false,
    });

    expect(response).toContainEqual(
      new SiteRoutes('12306', ['/12306/zxdt/:id?'])
    );
  });
  it(`retrives parameter optional routes only`, async () => {
    expect.assertions(2);
    const response = await rsshub.getAllRoutes({ onlyParameterOptional: true });

    expect(response).toContainEqual(
      new SiteRoutes('bangumi', ['/bangumi/calendar/today'])
    );
    expect(response).not.toContainEqual(
      new SiteRoutes('ziroom', ['/ziroom/room/:city/:iswhole/:room/:keyword'])
    );
  });
  it(`retrives routes for 12306`, async () => {
    expect.assertions(1);
    const response = await rsshub.getRoutesOf('12306');

    expect(response).toEqual(new SiteRoutes('12306', ['/12306/zxdt/:id?']));
  });

  it(`gets feed`, async () => {
    expect.assertions(1);
    const feed = await rsshub.getFeedAt('/rthk-news/hk/international');

    expect(feed).toBeTruthy();
  });
  afterAll(() => {
    console.log('End of test'); // to terminate all async/await
  });
});

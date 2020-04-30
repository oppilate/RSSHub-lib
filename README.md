# TSDX Bootstrap

`rsshub-lib` is an adapter library of RSSHub for Node.js or browser applications.

## Get Started

If you want to retrive data from a RSSHub instance at `https://rsshub.app`

```typescript
const rsshub = new RSSHub('https://rsshub.app');
```

To get all routes the RSSHub instance supports (`allRoutes` follows the spec of https://rsshub.app/api/routes/)

```typescript
const allRoutes = await rsshub.getAllRoutes();
```

To retrive a RSS object from a feed at route `/rthk-news/hk/international`

```typescript
const feed = await rsshub.getFeedAt("/rthk-news/hk/international");

// Sample output
{
      items: [
        {
          title: '南韓兩個多月以來首現本土零確診　日本擬延長緊急狀態',
          link: 'https://news.rthk.hk/rthk/ch/component/k2/1523631-20200430.htm',
          pubDate: 'Thu, 30 Apr 2020 09:28:23 GMT',
          content: '<div><div class="img-root"><img class="imgPhotoAfterLoad" src="https://newsstatic.rthk.hk/images/mfile_1523631_1_L_20200430172823.jpg" alt="南韓兩個多月以來首現本土零確診，民眾外出時未有鬆懈，仍然戴上口罩。（路透社）" style="max-height: 100%; max-width: 100%;display: block;margin-left: auto;margin-right: auto" referrerpolicy="no-referrer"></div><div class="content-root">美國約翰霍普金斯大學數據顯示，全球累積近320萬人確診新型肺炎，超過22萬7000人死亡。<br><br>在亞洲，南韓新增四宗境外輸入確診病例，是疫情爆發兩個多月以來，首次實現本土「零確診」。日本的疫情仍然嚴峻，報道指政府計劃延長緊急狀態大約一個月。<br><br>歐洲方面，英國首次將醫院以外的死者納入死亡數字，累計26000多人不治，是全球第三高。</div></div>',
          contentSnippet: '美國約翰霍普金斯大學數據顯示，全球累積近320萬人確診新型肺炎，超過22萬7000人死亡。在亞洲，南韓新增四宗境外輸入確診病例，是疫情爆發兩個多月以來，首次實現本土「零確診」。日本的疫情仍然嚴峻，報道指政府計劃延長緊急狀態大約一個月。歐洲方面，英國首次將醫院以外的死者納入死亡數字，累計26000多人不治，是全球第三高。',
          guid: 'https://news.rthk.hk/rthk/ch/component/k2/1523631-20200430.htm',
          isoDate: '2020-04-30T09:28:23.000Z'
        }
      ],
      feedUrl: 'http://rsshub.app/rthk-news/hk/international',
      title: 'rthk.hk - 即時新聞: 國際',
      description: 'rthk.hk - 即時新聞: 國際 - Made with love by RSSHub(https://github.com/DIYgod/RSSHub)',
      webMaster: 'i@diygod.me (DIYgod)',
      generator: 'RSSHub',
      link: 'https://news.rthk.hk',
      language: 'zh-cn',
      lastBuildDate: 'Thu, 30 Apr 2020 10:15:15 GMT',
      ttl: '60'
    }
```

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

// Решение 1
// const domainName = (url) => {
//     const urlDomineHTTPS = url.replace(/(https?:\/\/)/g, '');
//     const result = urlDomineHTTPS.replace(/(www.)?/, '');
//     const result2 = result.replace(/(.ru?)|(.com)|(.co)/g, '/');
//     const result3 = result2.substring(0, result2.indexOf('/'));
//      return result3;
// }
// console.log(domainName("http://github.com/carbonfive/raygun")); // github
//  console.log(domainName("http://www.zombie-bites.com"));       // zombie-bites
//  console.log(domainName("www.xakep.ru"));                     // xakep
//  console.log(domainName("https://youtube.com"));             // youtube
//  console.log(domainName("http://google.co.jp"));            // google


// Решение 2
// const domainName = (url) => {
//     return url.replace(/(https?)\:\/\/|(www\.)/g, '').replace(/\..+\b/g, '');
// }
// console.log(domainName("http://github.com/carbonfive/raygun")); // github
//  console.log(domainName("http://www.zombie-bites.com"));       // zombie-bites
//  console.log(domainName("www.xakep.ru"));                     // xakep
//  console.log(domainName("https://youtube.com"));             // youtube
//  console.log(domainName("http://google.co.jp"));            // google


// Анализ 
//for expmple 
// hash: ""
// host: "toster.ru"
// hostname: "toster.ru"
// href: "https://toster.ru/q/368178"
// origin: "https://toster.ru"
// password: ""
// pathname: "/q/368178"
// port: ""
// protocol: "https:"
// search: ""
// searchParams: ""
// username: ""


// --> Решение с валидными доменами 1 -->
// const domainName = (url) => {
// return new URL(url).host
// .replace(/(www.)/g, '')
// .replace(/\..+\b/g, '');
// }
// console.log(domainName("http://github.com/carbonfive/raygun")); // github
// console.log(domainName("http://www.zombie-bites.com"));       // zombie-bites
//  // console.log(domainName("www.xakep.ru"));                               // xakep TypeError [ERR_INVALID_URL]: Invalid URL
// console.log(domainName("https://youtube.com"));             // youtube
// console.log(domainName("http://google.co.jp"));            // google


// --> Решение с валидными доменами 2 -->
// const domainName = (url) => {
//     const hostUrl = new URL(url);
//     const domain = hostUrl.host;
//     const result = domain.replace(/[www]./g, '').split('')
//     const indexDomain = result.indexOf('.');
//     return result.slice(0,indexDomain).join('');
// }
//  console.log(domainName("http://github.com/carbonfive/raygun")); // github
//  console.log(domainName("http://www.zombie-bites.com"));       // zombie-bites
//  // console.log(domainName("www.xakep.ru"));                     // xakep
//  console.log(domainName("https://youtube.com"));             // youtube
//  console.log(domainName("http://google.co.jp"));            // google


// --> Решение с валидными доменами 3 -->
// const domainName = (url) => {
//    return  new URL(url).host.replace(/[www]./g, '').replace(/\..+\b/g, '');
// }
//  console.log(domainName("http://github.com/carbonfive/raygun")); // github
//  console.log(domainName("http://www.zombie-bites.com"));       // zombie-bites
//  // console.log(domainName("www.xakep.ru"));                     // xakep
//  console.log(domainName("https://youtube.com"));             // youtube
//  console.log(domainName("http://google.co.jp"));            // google



// all blog type belong here?

_.register({
  rule: [
    {
      host: /^(www\.)?sylnk\.net$/,
      query: /link=([^&]+)/,
    },
    {
      host: /^(www\.)?compul\.in$/,
      path: /^\/[np]\.php$/,
      query: /v=([^&]+)/,
    },
    {
      host: [
        /^(sports14|motosport)\.pw$/,
        /^lindung\.in$/,
        /^motonews\.club$/,
        /^ww[23]\.picnictrans\.com$/,
        /^(azhie|skinnycat)\.net$/,
        /^ww2\.awsubs\.co$/,
        /^plantaheim\.(web\.id|com)$/,
        /^irisvera\.com$/,
      ],
      query: /^\?d=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: [
        /^i\.gtaind\.com$/,
        /^pebisnis-muda\.com$/,
        /^hikarinoakariost\.info$/,
      ],
      query: /^\?([a-zA-Z0-9/=]+)$/,
    },
    // blogspot, kind of brutal
    {
      host: [
        // com
        /\.blogspot\.com?/,
        /^(www\.)?designmyhomee\.com$/,
        /^(www\.)?losstor\.com$/,
        /^((kurosafe|kurosafety)\.)?menantisenja\.com$/,
        /^drive\.jepitkertas\.com$/,
        /^lewat\.wibuindo\.com$/,
        /^(omgmusik|omglyrics|k2nblog)\.com$/,
        // xyz
        /^(simaholina|autech)\.xyz$/,
        /^(www\.)?id-securelink\.xyz$/,
        /^(www\.)?converthinks\.xyz$/,
        /^(www\.)?marivelkece\.xyz$/,
        /^(www\.)?yametesenpai\.xyz$/,
        // else
        /^(www\.)?tojros\.tk$/,
        /^(www\.)?anjay\.info$/,
        /^(www\.)?kakkoiisafe\.us$/,
        /^(www\.)?kurosafe\.(website|online)$/,
        /^(www\.)?drakorsafe\.tech$/,
        /^(fmlawkers|indexmovie)\.club$/,
        /^micin\.online$/,
        /^unduh\.in/,
        /^ad4msan\.win$/,
        /^nooyul\.co$/,
        /^pafpaf\.info$/,
        /^hightech\.web\.id$/,
      ],
      query: [
        // id must be the first captured group
        /^\?url=([a-zA-Z0-9/=]+)$/,
        /^\?id=([a-zA-Z0-9/=]+)$/,
        /^\?site=([a-zA-Z0-9/=]+)$/,
      ],
    },
    {
      host: [
        /^(sehatlega|davinsurance|healthtod|irisvera|akanosora|subetenews)\.com$/,
        /^(www\.)?menantisenja\.com$/,
        /^(businessforyouand|travelwithtricks|situsbaru)\.me$/,
        /^plantaheim\.(web\.id|com)$/,
        /^(www\.)?starzone\.cc$/,
        /^(www\.)?kakkoiisafe\.us$/,
        /^(www\.)?polrec\.site$/,
        /^yumechan\.club$/,
        /^ceklinku\.xyz$/,
        /^lindung\.(in|me)$/,
      ],
      query: /^\?r=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^www\.compartiendofull\.net$/,
      path: /^\/go2/,
      query: /^\?p=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^animeforce\.stream$/,
      query: /^\?l=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^(www\.)?dukun-cit\.com$/,
      query: /^\?s=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^ultimate\.turkdown\.com$/,
      query: /^\?stepone=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^leechpremium\.link$/,
      path: /^\/cheat\//,
      query: /^\?link=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^closetopic\.site$/,
      query: /^\?go=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^infosia\.xyz$/,
      query: /^\?kesehatan=([a-zA-Z0-9/=%]+)$/,
    },
    {
      host: /^remiyu\.me$/,
      query: /^\?reff=([a-zA-Z0-9/=]+)$/,
    },
  ],
  async start (m) {
    const rawLink = atob(decodeURIComponent(m.query[1]));
    await $.openLink(rawLink);
  },
});

_.register({
  rule: [
    {
      host: [
        // safelinkconverter.com
        // link.safelinkconverter.com
        // decrypt.safelinkconverter.com
        // decrypt2.safelinkconverter.com
        // safelinkreview.com
        // safelinkreviewx.com
        // safelinkreview.co
        /(^|\.)safelink(converter|reviewx?)\.com?$/,
        /^giga74\.com$/,
        /^(awsubsco|ad4msan)\.ml$/,
        /^nekopoi\.ga$/,
      ],
      query: /id=([\w\\]+=*)/,
    },
    {
      host: [
        /^(naisho|filmku|henpoi)\.lompat\.in$/,
        /^edogawa\.lon\.pw$/,
        /^telolet\.in$/,
      ],
      query: /go=([\w\\]+=*)/,
    },
  ],
  async start (m) {
    let l = atob(m.query[1]);
    const table = {
      '!': 'a',
      ')': 'e',
      '_': 'i',
      '(': 'o',
      '*': 'u',
    };
    l = l.replace(/[!)_(*]/g, function (m) {
      return table[m];
    });
    await $.openLink(l);
  },
});

_.register({
  rule: {
    host: /^(www\.)?safelinkreview\.com$/,
    path: /^\/\w+\/cost\/([\w.]+)\/?$/,
  },
  async start (m) {
    const l = 'http://' + m.path[1];
    await $.openLink(l);
  },
});

_.register({
  rule: {
    host: [
      /^(gameinfo|apasih|autoride)\.pw$/,
      /^(www\.)?lifesurance\.info$/,
      /^speedcar\.club$/,
      /^(www\.)?bolaoke\.club$/,
      /^(intercelestial|sweetlantern|davinsurance|technlab)\.com$/,
      /^awcar\.icu$/,
      /^skyinsurance\.ml$/,
      /^(getinfos|sehatsegar|lonelymoon)\.net$/,
      /^stt\.awsubs\.co$/,
      /^(wibuindo|naturalhealthy)\.xyz$/,
      /^waifusafe\.ooo$/,
    ],
    query: /^\?(id|c|k)=([a-zA-Z0-9/=]+)$/,
  },
  async ready () {
    const f = $('form');
    f.submit();
  },
});

_.register({
  rule: {
    host: [
      /^(linkach|autolinkach)\.com$/,
    ],
    query: /^\?id=([a-zA-Z0-9/=]+)$/,
  },
  async ready () {
    const g = $('.humancheck form');
    g.submit();
  },
});

_.register({
  rule: [
    {
      host: [
        // club
        /^motonews\.club$/,
        /^(www\.)?bolaoke\.club$/,
        // else
        /^(ani-share|autolinkach)\.com$/,
        /^(autofans|landscapenature)\.pw$/,
        /^(www\.)?lifesurance\.info$/,
      ],
      query: /get=([^&]+)/,
    },
    {
      host: [
        /^(gameinfo)\.pw$/,
        /^(www\.)?lifesurance\.info$/,
        /^speedcar\.club$/,
        /^(www\.)?bolaoke\.club$/,
        /^(autolinkach|davinsurance)\.com$/,
        /^awcar\.icu$/,
        /^skyinsurance\.ml$/,
        /^(getinfos)\.net$/,
        /^stt\.awsubs\.co$/,
        /^wibuindo\.xyz$/,
      ],
    },
  ],
  async ready (m) {
    let s = $.searchFromScripts(/(const|var) a='([^']+)'/);
    if (s) {
      await $.openLink(s[2]);
      return;
    }

    s = atob(m.query[1]);
    await $.openLink(s);
  },
});

_.register({
  rule: {
    host: [
      /^waifusafe\.ooo$/,
      /^naturalhealthy\.xyz$/,
    ],
  },
  async ready () {
    await _.wait(1000);
    const ln = $('#landing.rurasafectrl .to a');
    ln.click();

    await _.wait(1000);
    const tl = $('.rurasafectrl img#showlink.spoint');
    tl.click();
  },
});

_.register({
  rule: {
    host: [
      /^(sehatsegar|lonelymoon)\.net$/,
      /^(intercelestial|sweetlantern)\.com$/,
    ],
  },
  async ready () {
    await _.wait(1000);
    const ln = $('#landing.soractrl .to a');
    ln.click();

    await _.wait(2000); //if someone has better solution than waiting these 2 seconds, send PR
    const tl = $('.soractrl img#showlink.spoint');
    tl.click();
  },
});

_.register({
  rule: {
    host: [
      /^(linkach|technlab)\.com$/,
      /^(apasih|autoride)\.pw$/,
    ],
  },
  async ready () {
    await _.wait(1000);
    const ln = $('#landing.soractrl .to a');
    ln.click();

    await _.wait(5000); //if someone has better solution than waiting these 5 seconds, send PR
    const tl = $('.soractrl img#showlink.spoint');
    tl.click();
  },
});

_.register({
  rule: {
    host: /^lewat\.in$/,
  },
  async ready () {
    const l = $('#lanjut > #goes > a');
    await $.openLink(l.href);
  },
});

_.register({
  rule: {
    host: /^sardeath\.com$/,
  },
  async ready () {
    const sd = $('.download-link > a');
    await $.openLink(sd.href);
  },
});

_.register({
  rule: {
    host: /^goou\.in$/,
  },
  async ready () {
    const g = $('#download_link > a');
    await $.openLink(g.href);
  },
});

_.register({
  rule: [
    {
      host: /^tout-debrid\.net$/,
      path: /^\/api\//,
    },
    {
      host: /^163\.172\.83\.145$/,
      path: /^\/deb\/api\//,
    },
  ],
  async ready () {
    const t = $('.download-box > div > a');
    await $.openLink(t.href);
  },
});

_.register({
  rule: {
    host: /^drivehub\.link$/,
    path: /^\/file\.php/,
    query: /^\?id=(.+)/,
  },
  async ready () {
    const d = $('.infobox > center > b > a#proceed.btn.btn-danger');
    await $.openLink(d.href);
  },
});

_.register({
  rule: {
    host: /^kombatch\.loncat\.pw$/,
  },
  async ready () {
    let s = $.searchFromScripts(/\.open\("([^"]+)",/);
    s = s[1].match(/go=([^&]+)/);
    s = atob(s[1]);
    await $.openLink(s);
  },
});

_.register({
  rule: {
    host: /^skiplink\.io$/,
    path: /^\/get\/link\//,
  },
  async ready () {
    const s = $('.panel.panel-default.panel-body > center > center > a');
    await $.openLink(s.href);
  },
});

_.register({
  rule: {
    host: [
      /^(v1\.)?hexafile\.net$/,
      /^skiplink\.io$/,
    ],
    path: /^\/[a-zA-Z0-9]+/,
  },
  async ready () {
    const h = $.searchFromScripts(/="([^"]+)",e=0,f=a/);
    await $.openLink(h[1]);
  },
});

_.register({
  rule: {
    host: /^drivefiles\.bid$/,
  },
  async ready () {
    const d = $.searchFromScripts(/window\.open\('([^']+)'\);/);
    await $.openLink(d[1]);
  },
});

_.register({
  rule: {
    host: /^android-1\.com$/,
  },
  async ready () {
    const a = $.searchFromScripts(/id=download><\/div><a href=([^>]+)>/);
    await $.openLink(a[1]);
  },
});

_.register({
  rule: {
    host: /^boost\.ink$/,
  },
  async start () {
    const b = $('body').getAttribute('result');
    if (b) {
      await $.openLink(atob(b));
    } else {
      return;
    }
  },
});

_.register({
  rule: {
    host: /^download-mirror\.ga$/,
  },
  async ready () {
    const dm = $.searchFromScripts(/a href='([^']+)'/);
    await $.openLink(dm[1]);
  },
});

_.register({
  rule: {
    host: /^url\.hulblog\.com$/,
    path: /^\/[a-zA-Z0-9]+/,
  },
  async ready () {
    const h = $.searchFromScripts(/"href='([^']+)'/);
    await $.openLink(h[1]);
  },
});

_.register({
  rule: {
    host: [
      /^ww[23]\.picnictrans\.com$/,
      /^short\.awsubs\.(co|me)$/,
    ],
  },
  async ready () {
    const a = $('div.kiri > center > a');
    await $.openLink(a.href);
  },
});

_.register({
  rule: {
    host: [
      // info
      /^(www\.)?anjay\.info$/,
      /^(www\.)?tetew\.info$/,
      // else
      /^www\.njiir\.com$/,
    ],
  },
  async ready () {
    let a = $('div.download-link > a');
    a = a.href.match(/r=(.*)$/);
    a = atob(a[1]);
    await $.openLink(a);
  },
});

_.register({
  rule: {
    host: [
      /^spacetica\.com$/,
      /^skinnycat\.org$/,
    ],
    path: /^\/\w+$/,
  },
  async ready () {
    const l = $('.btn');
    await $.openLink(l.href);
  },
});

_.register({
  rule: {
    host: /^daunshorte\.teknologilink\.com$/,
    path: /^\/linkshortelink\/safelink\.php$/,
  },
  async ready () {
    const l = $('div.article > div:nth-child(1) > center > a');
    await $.openLink(l.href, {
      referer: false,
    });
  },
});

_.register({
  rule: {
    host: /^teknosafe\.teknologilink\.com$/,
    path: /^\/linkteknolink\/safelinkscript\.php$/,
  },
  async ready () {
    const l = $('#templatemo_content > div > a');
    await $.openLink(l.href, {
      referer: false,
    });
  },
});

_.register({
  rule: {
    host: /^zap\.in$/,
  },
  async ready () {
    const z = $('.panel-body button');
    z.click();
  },
});

_.register({
  rule: {
    host: [
      /^(sataniabatch|get-click2)\.blogspot\.com$/,
      /^(www\.)?vehicle-techno\.cf$/,
      /^(www\.)?tetewlink\.me$/,
    ],
  },
  async ready () {
    const clbt = $('button#gotolink');
    clbt.removeAttribute('disabled');
    await _.wait(1);
    clbt.click();
  },
});

_.register({
  rule: {
    host: /^idnation\.net$/,
    query: /^\?page=/,
  },
  async ready () {
    const l = $('#linko');
    await $.openLink(l.href);
  },
});

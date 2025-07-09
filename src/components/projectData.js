import clickasnapHackathon, { meta as clickasnapHackathonMeta } from '../pages/projects/clickasnap-hackathon';
import teemillClickasnapHackathon, { meta as teemillClickasnapHackathonMeta } from '../pages/projects/teemill-clickasnap-hackathon';
import appCwk, { meta as appCwkMeta } from '../pages/projects/app-cwk';
import discordBots, { meta as discordBotsMeta } from '../pages/projects/discord-bots';
import obomt, { meta as obomtMeta } from '../pages/projects/obomt';
import summerBall2025, { meta as summerBall2025Meta } from '../pages/projects/summer-ball-2025';
import dylansTakeover2025, { meta as dylansTakeover2025Meta } from '../pages/projects/dylans-takeover-2025';

export const projects = [
  {
    component: obomt,
    ...obomtMeta,
  },
  {
    component: summerBall2025,
    ...summerBall2025Meta,
  },
  {
    component: dylansTakeover2025,
    ...dylansTakeover2025Meta,
  },
  {
    component: discordBots,
    ...discordBotsMeta,
  },
  {
    component: appCwk,
    ...appCwkMeta,
  },
  {
    component: teemillClickasnapHackathon,
    ...teemillClickasnapHackathonMeta,
  },
  {
    component: clickasnapHackathon,
    ...clickasnapHackathonMeta,
  },
  // add more as needed
];

const streams = [
 {
    id: 1,
    description: "ANIMES",
    url:"https://stmv1.srvif.com/animetv/animetv/playlist.m3u8?ManoTV"
  },
  {
    id: 2,
    description: "SBT",
    url:"https://stmv1.transmissaodigital.com/cidadeverdenovo/cidadeverdenovo/chunklist_w1366217477.m3u8"
  },
  {
    id: 3,
    description: "POP SANTA CLARA",
    url:"http://192.168.99.13/video/cam_p_farma/index.m3u8"
  },
  {
    id: 4,
    description: "PARAMOUNT HD",
    url:"http://cdn2.connectbr.com.br/paramount/tracks-v1a1/mono.m3u8?ManoTV"
  },
  {
    id: 5,
    description: "SPORTS",
    url:"https://glxlmn026c.singularcdn.net.br/playout_01/playlist-480p.m3u8?ManoTV"
  },
  {
    id: 6,
    description: "ESPN HD",
    url:"http://142.54.163.202:80/premium79/tracks-v1a1/mono.m3u8"
  },
  {
    id: 7,
    description: "SERIES AO VIVO",
    url:"http://cdn.connectbr.com.br/Bora_Filmes/tracks-v1a1/mono.m3u8?ManoTV"
  },
  {
    id: 8,
    description: "SERIE LOKI TEMP 1 - EP2",
    url:"http://shd2.mflixhd.xyz/sfgfe34ew32r/SHD2/84958/1x2.mp4S"
  },
]

const cam_streams = [
  {
    id: 1,
    description: "POP SANTA CLARA",
    url:"http://localhost:5000/stream/cam_p_farma/index.m3u8",
  },

  {
    id: 2,
    description: "POP SERRA",
    url:"http://localhost:5000/stream/cam_snu/index.m3u8",
  },
]

export { streams, cam_streams };

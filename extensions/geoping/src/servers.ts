import type { Region } from "./types";
export const regions: Region[] = [
  {
    id: 1,
    code: "nyc",
    name: "New York City",
    country: "United States",
    latitude: 40.7128,
    longitude: -74.006,
    servers: [
      {
        name: "1f",
        hostName: "derp1f.tailscale.com",
        ipv4: "199.38.181.104",
        ipv6: "2607:f740:f::bc",
      },
      {
        name: "1g",
        hostName: "derp1g.tailscale.com",
        ipv4: "209.177.145.120",
        ipv6: "2607:f740:f::3eb",
      },
      {
        name: "1h",
        hostName: "derp1h.tailscale.com",
        ipv4: "199.38.181.93",
        ipv6: "2607:f740:f::afd",
      },
      {
        name: "1i",
        hostName: "derp1i.tailscale.com",
        ipv4: "199.38.181.103",
        ipv6: "2607:f740:f::e19",
      },
    ],
  },
  {
    id: 2,
    code: "sfo",
    name: "San Francisco",
    country: "United States",
    latitude: 37.7775,
    longitude: -122.416389,
    servers: [
      {
        name: "2d",
        hostName: "derp2d.tailscale.com",
        ipv4: "192.73.252.65",
        ipv6: "2607:f740:0:3f::287",
      },
      {
        name: "2e",
        hostName: "derp2e.tailscale.com",
        ipv4: "192.73.252.134",
        ipv6: "2607:f740:0:3f::44c",
      },
      {
        name: "2f",
        hostName: "derp2f.tailscale.com",
        ipv4: "208.111.34.178",
        ipv6: "2607:f740:0:3f::f4",
      },
    ],
  },
  {
    id: 3,
    code: "sin",
    name: "Singapore",
    country: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
    servers: [
      {
        name: "3b",
        hostName: "derp3b.tailscale.com",
        ipv4: "43.245.49.105",
        ipv6: "2403:2500:300::b0c",
      },
      {
        name: "3c",
        hostName: "derp3c.tailscale.com",
        ipv4: "43.245.49.83",
        ipv6: "2403:2500:300::57a",
      },
      {
        name: "3d",
        hostName: "derp3d.tailscale.com",
        ipv4: "43.245.49.144",
        ipv6: "2403:2500:300::df9",
      },
    ],
  },
  {
    id: 4,
    code: "fra",
    name: "Frankfurt",
    country: "Germany",
    latitude: 50.1109,
    longitude: 8.6821,
    servers: [
      {
        name: "4f",
        hostName: "derp4f.tailscale.com",
        ipv4: "185.40.234.219",
        ipv6: "2a00:dd80:20::a25",
      },
      {
        name: "4g",
        hostName: "derp4g.tailscale.com",
        ipv4: "185.40.234.113",
        ipv6: "2a00:dd80:20::8f",
      },
      {
        name: "4h",
        hostName: "derp4h.tailscale.com",
        ipv4: "185.40.234.77",
        ipv6: "2a00:dd80:20::bcf",
      },
    ],
  },
  {
    id: 5,
    code: "syd",
    name: "Sydney",
    country: "Australia",
    latitude: -33.867778,
    longitude: 151.21,
    servers: [
      {
        name: "5b",
        hostName: "derp5b.tailscale.com",
        ipv4: "43.245.48.220",
        ipv6: "2403:2500:9000:1::ce7",
      },
      {
        name: "5c",
        hostName: "derp5c.tailscale.com",
        ipv4: "43.245.48.50",
        ipv6: "2403:2500:9000:1::f57",
      },
      {
        name: "5d",
        hostName: "derp5d.tailscale.com",
        ipv4: "43.245.48.250",
        ipv6: "2403:2500:9000:1::43",
      },
    ],
  },
  {
    id: 6,
    code: "blr",
    name: "Bangalore",
    country: "India",
    latitude: 12.9716,
    longitude: 77.5946,
    servers: [
      {
        name: "6a",
        hostName: "derp6.tailscale.com",
        ipv4: "68.183.90.120",
        ipv6: "2400:6180:100:d0::982:d001",
      },
    ],
  },
  {
    id: 7,
    code: "tok",
    name: "Tokyo",
    country: "Japan",
    latitude: 35.6764,
    longitude: 139.65,
    servers: [
      {
        name: "7b",
        hostName: "derp7b.tailscale.com",
        ipv4: "103.84.155.178",
        ipv6: "2403:2500:400:20::b79",
      },
      {
        name: "7c",
        hostName: "derp7c.tailscale.com",
        ipv4: "103.84.155.188",
        ipv6: "2403:2500:400:20::835",
      },
      {
        name: "7d",
        hostName: "derp7d.tailscale.com",
        ipv4: "103.84.155.46",
        ipv6: "2403:2500:400:20::cfe",
      },
    ],
  },
  {
    id: 8,
    code: "lhr",
    name: "London",
    country: "United Kingdom",
    latitude: 51.5072,
    longitude: 0.1276,
    servers: [
      {
        name: "8e",
        hostName: "derp8e.tailscale.com",
        ipv4: "176.58.92.144",
        ipv6: "2a00:dd80:3a::b33",
      },
      {
        name: "8f",
        hostName: "derp8f.tailscale.com",
        ipv4: "176.58.88.183",
        ipv6: "2a00:dd80:3a::dfa",
      },
      {
        name: "8g",
        hostName: "derp8g.tailscale.com",
        ipv4: "176.58.92.254",
        ipv6: "2a00:dd80:3a::ed",
      },
    ],
  },
  {
    id: 9,
    code: "dfw",
    name: "Dallas",
    country: "United States",
    latitude: 32.779167,
    longitude: -96.808889,
    servers: [
      {
        name: "9d",
        hostName: "derp9d.tailscale.com",
        ipv4: "209.177.156.94",
        ipv6: "2607:f740:100::c05",
      },
      {
        name: "9e",
        hostName: "derp9e.tailscale.com",
        ipv4: "192.73.248.83",
        ipv6: "2607:f740:100::359",
      },
      {
        name: "9f",
        hostName: "derp9f.tailscale.com",
        ipv4: "209.177.156.197",
        ipv6: "2607:f740:100::cad",
      },
    ],
  },
  {
    id: 10,
    code: "sea",
    name: "Seattle",
    country: "United States",
    latitude: 47.609722,
    longitude: -122.333056,
    servers: [
      {
        name: "10b",
        hostName: "derp10b.tailscale.com",
        ipv4: "192.73.240.161",
        ipv6: "2607:f740:14::61c",
      },
      {
        name: "10c",
        hostName: "derp10c.tailscale.com",
        ipv4: "192.73.240.121",
        ipv6: "2607:f740:14::40c",
      },
      {
        name: "10d",
        hostName: "derp10d.tailscale.com",
        ipv4: "192.73.240.132",
        ipv6: "2607:f740:14::500",
      },
    ],
  },
  {
    id: 11,
    code: "sao",
    name: "São Paulo",
    country: "Brazil",
    latitude: -23.55,
    longitude: -46.633333,
    servers: [
      {
        name: "11b",
        hostName: "derp11b.tailscale.com",
        ipv4: "148.163.220.129",
        ipv6: "2607:f740:1::211",
      },
      {
        name: "11c",
        hostName: "derp11c.tailscale.com",
        ipv4: "148.163.220.134",
        ipv6: "2607:f740:1::861",
      },
      {
        name: "11d",
        hostName: "derp11d.tailscale.com",
        ipv4: "148.163.220.210",
        ipv6: "2607:f740:1::2e6",
      },
    ],
  },
  {
    id: 12,
    code: "ord",
    country: "United States",
    name: "Chicago",
    latitude: 41.881944,
    longitude: -87.627778,
    servers: [
      {
        name: "12d",
        hostName: "derp12d.tailscale.com",
        ipv4: "209.177.158.246",
        ipv6: "2607:f740:e::811",
      },
      {
        name: "12e",
        hostName: "derp12e.tailscale.com",
        ipv4: "209.177.158.15",
        ipv6: "2607:f740:e::b17",
      },
      {
        name: "12f",
        hostName: "derp12f.tailscale.com",
        ipv4: "199.38.182.118",
        ipv6: "2607:f740:e::4c8",
      },
    ],
  },
  {
    id: 13,
    code: "den",
    name: "Denver",
    country: "United States",
    latitude: 39.7392,
    longitude: -104.9849,
    servers: [
      {
        name: "13b",
        hostName: "derp13b.tailscale.com",
        ipv4: "192.73.242.187",
        ipv6: "2607:f740:16::640",
      },
      {
        name: "13c",
        hostName: "derp13c.tailscale.com",
        ipv4: "192.73.242.28",
        ipv6: "2607:f740:16::5c",
      },
      {
        name: "13d",
        hostName: "derp13d.tailscale.com",
        ipv4: "192.73.242.204",
        ipv6: "2607:f740:16::c23",
      },
    ],
  },
  {
    id: 14,
    code: "ams",
    name: "Amsterdam",
    country: "Netherlands",
    latitude: 52.372778,
    longitude: 4.893611,
    servers: [
      {
        name: "14b",
        hostName: "derp14b.tailscale.com",
        ipv4: "176.58.93.248",
        ipv6: "2a00:dd80:3c::807",
      },
      {
        name: "14c",
        hostName: "derp14c.tailscale.com",
        ipv4: "176.58.93.147",
        ipv6: "2a00:dd80:3c::b09",
      },
      {
        name: "14d",
        hostName: "derp14d.tailscale.com",
        ipv4: "176.58.93.154",
        ipv6: "2a00:dd80:3c::3d5",
      },
    ],
  },
  {
    id: 15,
    code: "jnb",
    name: "Johannesburg",
    country: "South Africa",
    latitude: -26.204444,
    longitude: 28.045556,
    servers: [
      {
        name: "15b",
        hostName: "derp15b.tailscale.com",
        ipv4: "102.67.165.90",
        ipv6: "2c0f:edb0:0:10::963",
      },
      {
        name: "15c",
        hostName: "derp15c.tailscale.com",
        ipv4: "102.67.165.185",
        ipv6: "2c0f:edb0:0:10::b59",
      },
      {
        name: "15d",
        hostName: "derp15d.tailscale.com",
        ipv4: "102.67.165.36",
        ipv6: "2c0f:edb0:0:10::599",
      },
    ],
  },
  {
    id: 16,
    code: "mia",
    name: "Miami",
    country: "United States",
    latitude: 25.78,
    longitude: -80.21,
    servers: [
      {
        name: "16b",
        hostName: "derp16b.tailscale.com",
        ipv4: "192.73.243.135",
        ipv6: "2607:f740:17::476",
      },
      {
        name: "16c",
        hostName: "derp16c.tailscale.com",
        ipv4: "192.73.243.229",
        ipv6: "2607:f740:17::4e4",
      },
      {
        name: "16d",
        hostName: "derp16d.tailscale.com",
        ipv4: "192.73.243.141",
        ipv6: "2607:f740:17::475",
      },
    ],
  },
  {
    id: 17,
    code: "lax",
    name: "Los Angeles",
    country: "United States",
    latitude: 34.05,
    longitude: -118.25,
    servers: [
      {
        name: "17b",
        hostName: "derp17b.tailscale.com",
        ipv4: "192.73.244.245",
        ipv6: "2607:f740:c::646",
      },
      {
        name: "17c",
        hostName: "derp17c.tailscale.com",
        ipv4: "208.111.40.12",
        ipv6: "2607:f740:c::10",
      },
      {
        name: "17d",
        hostName: "derp17d.tailscale.com",
        ipv4: "208.111.40.216",
        ipv6: "2607:f740:c::e1b",
      },
    ],
  },
  {
    id: 18,
    code: "par",
    name: "Paris",
    country: "France",
    latitude: 48.856667,
    longitude: 2.352222,
    servers: [
      {
        name: "18b",
        hostName: "derp18b.tailscale.com",
        ipv4: "176.58.90.147",
        ipv6: "2a00:dd80:3e::363",
      },
      {
        name: "18c",
        hostName: "derp18c.tailscale.com",
        ipv4: "176.58.90.207",
        ipv6: "2a00:dd80:3e::c19",
      },
      {
        name: "18d",
        hostName: "derp18d.tailscale.com",
        ipv4: "176.58.90.104",
        ipv6: "2a00:dd80:3e::f2e",
      },
    ],
  },
  {
    id: 19,
    code: "mad",
    name: "Madrid",
    country: "Spain",
    latitude: 40.416944,
    longitude: -3.703333,
    servers: [
      {
        name: "19b",
        hostName: "derp19b.tailscale.com",
        ipv4: "45.159.97.144",
        ipv6: "2a00:dd80:14:10::335",
      },
      {
        name: "19c",
        hostName: "derp19c.tailscale.com",
        ipv4: "45.159.97.61",
        ipv6: "2a00:dd80:14:10::20",
      },
      {
        name: "19d",
        hostName: "derp19d.tailscale.com",
        ipv4: "45.159.97.233",
        ipv6: "2a00:dd80:14:10::34a",
      },
    ],
  },
  {
    id: 20,
    code: "hkg",
    name: "Hong Kong",
    country: "Hong Kong",
    latitude: 22.3193,
    longitude: 114.1694,
    servers: [
      {
        name: "20b",
        hostName: "derp20b.tailscale.com",
        ipv4: "103.6.84.152",
        ipv6: "2403:2500:8000:1::ef6",
      },
      {
        name: "20c",
        hostName: "derp20c.tailscale.com",
        ipv4: "205.147.105.30",
        ipv6: "2403:2500:8000:1::5fb",
      },
      {
        name: "20d",
        hostName: "derp20d.tailscale.com",
        ipv4: "205.147.105.78",
        ipv6: "2403:2500:8000:1::e9a",
      },
    ],
  },
  {
    id: 21,
    code: "tor",
    name: "Toronto",
    country: "Canada",
    latitude: 43.741667,
    longitude: -79.373333,
    servers: [
      {
        name: "21b",
        hostName: "derp21b.tailscale.com",
        ipv4: "162.248.221.199",
        ipv6: "2607:f740:50::1d1",
      },
      {
        name: "21c",
        hostName: "derp21c.tailscale.com",
        ipv4: "162.248.221.215",
        ipv6: "2607:f740:50::f10",
      },
      {
        name: "21d",
        hostName: "derp21d.tailscale.com",
        ipv4: "162.248.221.248",
        ipv6: "2607:f740:50::ca4",
      },
    ],
  },
  {
    id: 22,
    code: "waw",
    name: "Warsaw",
    country: "Poland",
    latitude: 52.23,
    longitude: 21.011111,
    servers: [
      {
        name: "22b",
        hostName: "derp22b.tailscale.com",
        ipv4: "45.159.98.196",
        ipv6: "2a00:dd80:40:100::316",
      },
      {
        name: "22c",
        hostName: "derp22c.tailscale.com",
        ipv4: "45.159.98.253",
        ipv6: "2a00:dd80:40:100::3f",
      },
      {
        name: "22d",
        hostName: "derp22d.tailscale.com",
        ipv4: "45.159.98.145",
        ipv6: "2a00:dd80:40:100::211",
      },
    ],
  },
  {
    id: 23,
    code: "dbi",
    name: "Dubai",
    country: "United Arab Emirates",
    latitude: 25.263056,
    longitude: 55.297222,
    servers: [
      {
        name: "23b",
        hostName: "derp23b.tailscale.com",
        ipv4: "185.34.3.232",
        ipv6: "2a00:dd80:3f:100::76f",
      },
      {
        name: "23c",
        hostName: "derp23c.tailscale.com",
        ipv4: "185.34.3.207",
        ipv6: "2a00:dd80:3f:100::a50",
      },
      {
        name: "23d",
        hostName: "derp23d.tailscale.com",
        ipv4: "185.34.3.75",
        ipv6: "2a00:dd80:3f:100::97e",
      },
    ],
  },
  {
    id: 24,
    code: "hnl",
    name: "Honolulu",
    country: "United States",
    latitude: 21.306944,
    longitude: -157.858333,
    servers: [
      {
        name: "24b",
        hostName: "derp24b.tailscale.com",
        ipv4: "208.83.234.151",
        ipv6: "2001:19f0:c000:c586:5400:04ff:fe26:2ba6",
      },
      {
        name: "24c",
        hostName: "derp24c.tailscale.com",
        ipv4: "208.83.233.233",
        ipv6: "2001:19f0:c000:c591:5400:04ff:fe26:2c5f",
      },
      {
        name: "24d",
        hostName: "derp24d.tailscale.com",
        ipv4: "208.72.155.133",
        ipv6: "2001:19f0:c000:c564:5400:04ff:fe26:2ba8",
      },
    ],
  },
  {
    id: 25,
    code: "nai",
    name: "Nairobi",
    country: "Kenya",
    latitude: -1.286389,
    longitude: 36.817222,
    servers: [
      {
        name: "25b",
        hostName: "derp25b.tailscale.com",
        ipv4: "102.67.167.245",
        ipv6: "2c0f:edb0:2000:1::2e9",
      },
      {
        name: "25c",
        hostName: "derp25c.tailscale.com",
        ipv4: "102.67.167.37",
        ipv6: "2c0f:edb0:2000:1::2c7",
      },
      {
        name: "25d",
        hostName: "derp25d.tailscale.com",
        ipv4: "102.67.167.188",
        ipv6: "2c0f:edb0:2000:1::188",
      },
    ],
  },
  {
    id: 26,
    code: "nue",
    name: "Nuremberg",
    country: "Germany",
    latitude: 49.453889,
    longitude: 11.0775,
    servers: [
      {
        name: "26b",
        hostName: "derp26b.tailscale.com",
        ipv4: "167.235.72.200",
        ipv6: "2a01:4f8:1c1c:47b6::1",
      },
      {
        name: "26c",
        hostName: "derp26c.tailscale.com",
        ipv4: "49.12.193.137",
        ipv6: "2a01:4f8:1c1c:5c70::1",
      },
      {
        name: "26d",
        hostName: "derp26d.tailscale.com",
        ipv4: "49.13.204.141",
        ipv6: "2a01:4f8:1c0c:7d06::1",
      },
    ],
  },
  {
    id: 27,
    code: "iad",
    name: "Ashburn",
    country: "United States",
    latitude: 39.03,
    longitude: -77.471111,
    servers: [
      {
        name: "27b",
        hostName: "derp27b.tailscale.com",
        ipv4: "5.161.218.233",
        ipv6: "2a01:4ff:f0:3db9::1",
      },
      {
        name: "27c",
        hostName: "derp27c.tailscale.com",
        ipv4: "178.156.152.91",
        ipv6: "2a01:4ff:f0:3913::1",
      },
      {
        name: "27d",
        hostName: "derp27d.tailscale.com",
        ipv4: "178.156.152.106",
        ipv6: "2a01:4ff:f0:3c8e::1",
      },
      {
        name: "27e",
        hostName: "derp27e.tailscale.com",
        ipv4: "178.156.134.232",
        ipv6: "2a01:4ff:f0:28d4::1",
      },
    ],
  },
];

export const flags = {
  "United States": "🇺🇸",
  "United Kingdom": "🇬🇧",
  "Hong Kong": "🇭🇰",
  "South Africa": "🇿🇦",
  "United Arab Emirates": "🇦🇪",
  Spain: "🇪🇸",
  Poland: "🇵🇱",
  Germany: "🇩🇪",
  Netherlands: "🇳🇱",
  France: "🇫🇷",
  Canada: "🇨🇦",
  Singapore: "🇸🇬",
  Australia: "🇦🇺",
  Kenya: "🇰🇪",
  Japan: "🇯🇵",
  India: "🇮🇳",
  Brazil: "🇧🇷",
} as const;

export type Country = keyof typeof flags;

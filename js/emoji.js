function emojify(text) {
  const emojiMap = {
    "_": "🔣",
    ",": "🔸",
    ".": "🔶",
    "&quot;": "🔡",
    "0": "0️⃣",
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
    "7": "7️⃣",
    "8": "8️⃣",
    "9": "9️⃣",

    "a": "❗",
    "aja": "🧬",
    "ajuta": "🚨",
    "aka": "⛅",
    "aketi": "🦎",
    "akile": "⏭️",
    "alasa": "🏹",
    "ali": "♾️",
    "an": "📍",
    "anpa": "⬇️",
    "ante": "🔀",
    "anu": "☯️",
    "apeja": "😔",
    "atali": "👑",
    "ato": "🚗",
    "awen": "⚓",
    "awo": "🔲",
    "e": "⏩",
    "en": "➕",
    "enujo": "🥱",
    "epi": "🐋",
    "esun": "🛒",
    "ewin": "💅",
    "ijo": "🐚",
    "ike": "👎",
    "ilo": "⚙️",
    "iman": "🧑‍🤝‍🧑",
    "inkatan": "📌",
    "inpali": "🌼",
    "insa": "⏺️",
    "intisa": "⌚",
    "into": "🏝️",
    "iputu": "⏯️",
    "isala": "💢",
    "ita": "🔽",
    "jaki": "💩",
    "jala": "📊",
    "jan": "👤",
    "janwa": "🦖",
    "jatila": "🙅",
    "jelo": "🍋",
    "jesen": "🏞️",
    "jo": "👜",
    "jun": "🪶",
    "jupa": "🤜",
    "kaje": "🌳",
    "kake": "👏",
    "kala": "🐟",
    "kalama": "🔈",
    "kalite": "🏷️",
    "kama": "🚶",
    "kan": "🔗",
    "kanja": "🍺",
    "kanpe": "💃",
    "kanputa": "💻",
    "kanti": "🎵",
    "kanun": "📜",
    "kapesi": "🍪",
    "kasi": "🌱",
    "kata": "📉",
    "keke": "🐵",
    "kela": "⚽",
    "ken": "💪",
    "kenta": "1️⃣0️⃣0️⃣",
    "ki": "↪️",
    "kika": "1️⃣0️⃣0️⃣🔸0️⃣0️⃣0️⃣🔸0️⃣0️⃣0️⃣",
    "kikolo": "😣",
    "kili": "🍎",
    "kilo": "",
    "kipisi": "✂️",
    "kisa": "📰",
    "kita": "🦏",
    "kiwen": "💎",
    "ko": "🍦",
    "kokan": "🤸",
    "komumo": "🙌",
    "kon": "💨",
    "kona": "📐",
    "konta": "🤓",
    "kule": "🌈",
    "kulupu": "👥",
    "kumi": "🎈",
    "kuton": "🤕",
    "kuwan": "💡",
    "la": "🔼",
    "lajo": "📢",
    "lakima": "😭",
    "lamo": "🦒",
    "lanpan": "📥",
    "lape": "😴",
    "laso": "🫐",
    "lawa": "😶",
    "lekin": "🤔",
    "leko": "🧱",
    "len": "👕",
    "lentu": "🧻",
    "lete": "❄️",
    "li": "▶️",
    "lika": "📝",
    "lili": "🐌",
    "lima": "5️⃣",
    "linja": "〰️",
    "lipu": "📄",
    "liso": "🤣",
    "loje": "🍓",
    "lon": "✅",
    "luka": "✋",
    "lukin": "👀",
    "lupa": "🕳️",
    "ma": "🏝️",
    "mama": "👪",
    "mani": "💰",
    "masala": "😋",
    "matija": "🥈",
    "mawon": "🍃",
    "meja": "🐱",
    "meka": "1️⃣🔸0️⃣0️⃣0️⃣🔸0️⃣0️⃣0️⃣",
    "meli": "♀️",
    "mi": "👈",
    "mije": "♂️",
    "minsu": "⚡",
    "misa": "🐹",
    "misali": "🎏",
    "moku": "🍽️",
    "moli": "💀",
    "monsi": "⬅️",
    "monsuta": "😨",
    "moto": "🔥",
    "mu": "🐮",
    "mulu": "🌕",
    "mun": "🌙",
    "munkin": "🎲",
    "musi": "🎨",
    "mute": "👐",
    "na": "👆",
    "naka": "🏙️",
    "nalama": "🧸",
    "nanpa": "#️⃣",
    "nasa": "🌀",
    "nasin": "🛣️",
    "nata": "🖇️",
    "neje": "🐴",
    "nen": "⤵️",
    "nena": "👃",
    "nesi": "🌌",
    "newen": "9️⃣",
    "ni": "👇",
    "nimi": "💬",
    "no": "❌",
    "noka": "🦵",
    "nun": "🧂",
    "o": "👋",
    "oke": "👌",
    "oliwa": "🛢️",
    "on": "☝️",
    "ona": "👆",
    "one": "🤒",
    "open": "🔓",
    "osa": "🧩",
    "oto": "8️⃣",
    "pakala": "💥",
    "pake": "🚧",
    "pali": "✊",
    "palisa": "📏",
    "pan": "🍞",
    "pana": "📤",
    "papon": "🤮",
    "pasan": "😀",
    "pati": "🥳",
    "patila": "🙆",
    "pawita": "🍚",
    "pawo": "🐶",
    "peko": "🙏",
    "pelu": "🔧",
    "peman": "🤝",
    "penke": "📆",
    "pesoni": "🩹",
    "peta": "🥦",
    "pi": "⏹️",
    "pilate": "⚠️",
    "pilin": "❤️",
    "pimeja": "🎱",
    "pin": "❕",
    "pini": "🏁",
    "pipi": "🐞",
    "pisile": "⏮️",
    "po": "4️⃣",
    "poka": "↔️",
    "pona": "👍",
    "popoto": "🗻",
    "posi": "🌚",
    "powe": "🧞",
    "pulono": "👵",
    "pume": "☁️",
    "puson": "🙋",
    "putala": "🧒",
    "sa": "🐚",
    "sajo": "🔄",
    "saku": "🗳️",
    "sala": "⚛️",
    "sama": "⚖️",
    "san": "3️⃣",
    "sankan": "‼️",
    "santi": "😌",
    "sapi": "🧼",
    "sata": "📈",
    "satalan": "🔵",
    "sawapu": "📩",
    "seli": "♨️",
    "seme": "❓",
    "senti": "*️⃣",
    "sepen": "7️⃣",
    "sesi": "6️⃣",
    "sewi": "🛐",
    "si": "👉",
    "sike": "⭕",
    "sin": "🐣",
    "sina": "👉",
    "sinpin": "➡️",
    "sipaja": "🥉",
    "sitelen": "🖼️",
    "siten": "🪑",
    "soko": "🍄",
    "solu": "🧐",
    "sona": "🧠",
    "soto": "🤛",
    "soweli": "🐷",
    "su": "📶",
    "sulaki": "☮️",
    "suli": "🐘",
    "suno": "☀️",
    "supa": "🛏️",
    "suti": "🔍",
    "suwi": "🍭",
    "ta": "🪞",
    "tajan": "😡",
    "taka": "🌊",
    "talika": "📋",
    "talili": "🧮",
    "tan": "↩️",
    "tana": "💭",
    "tanta": "🦷",
    "tapa": "📦",
    "taso": "🏜️",
    "tawa": "🚆",
    "tawonje": "🫂",
    "te": "⏸️",
    "telo": "💧",
    "ten": "1️⃣0️⃣",
    "tenpo": "⏰",
    "tepaka": "🔩",
    "tewe": "🧲",
    "tijan": "🧘",
    "tijelo": "🧍",
    "tile": "🐢",
    "tini": "🦙",
    "tinto": "👂",
    "tisi": "🎛️",
    "titi": "🤱",
    "tiwa": "🧗",
    "tiwata": "🍸",
    "toki": "🗣️",
    "tolu": "🧪",
    "tomo": "🏠",
    "tonsi": "⚧️",
    "tote": "🤏",
    "tu": "2️⃣",
    "tula": "🚀",
    "tuntan": "💯",
    "tutu": "💓",
    "ukumu": "🛎️",
    "ulokan": "🪙",
    "umami": "🍖",
    "unja": "🥗",
    "unpa": "🍆",
    "uta": "👄",
    "utala": "⚔️",
    "wa": "🥚",
    "walaja": "😲",
    "walala": "👯",
    "walo": "🧄",
    "wan": "1️⃣",
    "waso": "🦅",
    "wawa": "🏋️",
    "wawasa": "😝",
    "weka": "🛫",
    "wetu": "⭐",
    "wi": "⬆️",
    "wiki": "🐇",
    "wile": "💭",
    "wisaja": "🏆",
    "woka": "⏳",
    "wolin": "💕",
    "_": "🔣",
    ".": "🔶",
    ",": "🔸",
    "Akanisan": "🇦🇫",
    "Olan": "🇦🇽",
    "Sipe": "🇦🇱",
    "Sasali": "🇩🇿",
    "Amewikansamowa": "🇦🇸",
    "Antola": "🇦🇩",
    "Ankola": "🇦🇴",
    "Anwila": "🇦🇮",
    "Antasika": "🇦🇶",
    "Ansika": "🇦🇬",
    "Alensina": "🇦🇷",
    "Aja": "🇦🇲",
    "Alupa": "🇦🇼",
    "Asenson": "🇦🇨",
    "Oselija": "🇦🇺",
    "Esalasi": "🇦🇹",
    "Asepasan": "🇦🇿",
    "Pawama": "🇧🇸",
    "Palani": "🇧🇭",
    "Panla": "🇧🇩",
    "Papeto": "🇧🇧",
    "Pelalusi": "🇧🇾",
    "Pesije": "🇧🇪",
    "Pelis": "🇧🇿",
    "Penen": "🇧🇯",
    "Pemuta": "🇧🇲",
    "Tukika": "🇧🇹",
    "Polipa": "🇧🇴",
    "Posan": "🇧🇦",
    "Posuwana": "🇧🇼",
    "Pupetoja": "🇧🇻",
    "Pasila": "🇧🇷",
    "Pijot": "🇮🇴",
    "Pisinalan": "🇻🇬",
    "Pune": "🇧🇳",
    "Pokasi": "🇧🇬",
    "Pukinapaso": "🇧🇫",
    "Upulunsi": "🇧🇮",
    "Kanpusi": "🇰🇭",
    "Kamelun": "🇨🇲",
    "Kanata": "🇨🇦",
    "Kanalija": "🇮🇨",
    "Kapupesi": "🇨🇻",
    "Kalibinetelan": "🇧🇶",
    "Kesimen": "🇰🇾",
    "Santapiken": "🇨🇫",
    "Sejuta": "🇪🇦",
    "Sate": "🇹🇩",
    "Sile": "🇨🇱",
    "Sonko": "🇨🇳",
    "Kilima": "🇨🇽",
    "Kipeton": "🇨🇵",
    "Koko": "🇨🇨",
    "Kolonpa": "🇨🇴",
    "Komo": "🇰🇲",
    "Jakonko": "🇨🇬",
    "Konko": "🇨🇩",
    "Kukialani": "🇨🇰",
    "Kosalika": "🇨🇷",
    "Kosiwa": "🇨🇮",
    "Lowasi": "🇭🇷",
    "Kupa": "🇨🇺",
    "Kulusu": "🇨🇼",
    "Kiposi": "🇨🇾",
    "Seki": "🇨🇿",
    "Tansi": "🇩🇰",
    "Tekokasija": "🇩🇬",
    "Sipusi": "🇩🇯",
    "Tomini": "🇩🇲",
    "Tominika": "🇩🇴",
    "Ekato": "🇪🇨",
    "Masu": "🇪🇬",
    "Sapato": "🇸🇻",
    "Kinejekatolija": "🇬🇶",
    "Eliteja": "🇪🇷",
    "Esi": "🇪🇪",
    "Sawasi": "🇸🇿",
    "Isijopija": "🇪🇹",
    "Elopa": "🇪🇺",
    "Pokan": "🇫🇰",
    "Foja": "🇫🇴",
    "Pisi": "🇫🇯",
    "Sumi": "🇫🇮",
    "Kanse": "🇫🇷",
    "Kijan": "🇬🇫",
    "Polinesi": "🇵🇫",
    "Telota": "🇹🇫",
    "Kapon": "🇬🇦",
    "Kanpija": "🇬🇲",
    "Katelo": "🇬🇪",
    "Tosi": "🇩🇪",
    "Kana": "🇬🇭",
    "Sipata": "🇬🇮",
    "Elena": "🇬🇷",
    "Kalalinuna": "🇬🇱",
    "Kenata": "🇬🇩",
    "Watalu": "🇬🇵",
    "Wan": "🇬🇺",
    "Katemala": "🇬🇹",
    "Kensi": "🇬🇬",
    "Kine": "🇬🇳",
    "Kinepisa": "🇬🇼",
    "Kajan": "🇬🇾",
    "Awisi": "🇭🇹",
    "Imi": "🇭🇲",
    "Ontula": "🇭🇳",
    "Onkon": "🇭🇰",
    "Mosijo": "🇭🇺",
    "Isilan": "🇮🇸",
    "Palata": "🇮🇳",
    "Intonesija": "🇮🇩",
    "Ilan": "🇮🇷",
    "Ilakija": "🇮🇶",
    "Alan": "🇮🇪",
    "Manin": "🇮🇲",
    "Isale": "🇮🇱",
    "Italija": "🇮🇹",
    "Sameka": "🇯🇲",
    "Nijon": "🇯🇵",
    "Jesi": "🇯🇪",
    "Utun": "🇯🇴",
    "Kasatan": "🇰🇿",
    "Kenja": "🇰🇪",
    "Kilipasi": "🇰🇮",
    "Kosopa": "🇽🇰",
    "Kuwasi": "🇰🇼",
    "Kikitan": "🇰🇬",
    "Laju": "🇱🇦",
    "Lawi": "🇱🇻",
    "Lunpan": "🇱🇧",
    "Lesoto": "🇱🇸",
    "Lapewija": "🇱🇷",
    "Lipija": "🇱🇾",
    "Lisensan": "🇱🇮",
    "Lijatuwa": "🇱🇹",
    "Lusepu": "🇱🇺",
    "Omun": "🇲🇴",
    "Maketonija": "🇲🇰",
    "Malakasi": "🇲🇬",
    "Malawi": "🇲🇼",
    "Malasija": "🇲🇾",
    "Sipeji": "🇲🇻",
    "Mali": "🇲🇱",
    "Mata": "🇲🇹",
    "Maje": "🇲🇭",
    "Masini": "🇲🇶",
    "Mulitanija": "🇲🇷",
    "Mowisi": "🇲🇺",
    "Majo": "🇾🇹",
    "Mesiko": "🇲🇽",
    "Makonise": "🇫🇲",
    "Motowa": "🇲🇩",
    "Monako": "🇲🇨",
    "Monkolu": "🇲🇳",
    "Sinakola": "🇲🇪",
    "Monsale": "🇲🇸",
    "Malipe": "🇲🇦",
    "Mosanpi": "🇲🇿",
    "Mijama": "🇲🇲",
    "Namipija": "🇳🇦",
    "Nawelo": "🇳🇷",
    "Nepa": "🇳🇵",
    "Netelan": "🇳🇱",
    "Nupekaletoni": "🇳🇨",
    "Nusilan": "🇳🇿",
    "Nikalawa": "🇳🇮",
    "Nise": "🇳🇪",
    "Naselija": "🇳🇬",
    "Niwe": "🇳🇺",
    "Nopo": "🇳🇫",
    "Pukoson": "🇰🇵",
    "Majana": "🇲🇵",
    "Nosiki": "🇳🇴",
    "Uman": "🇴🇲",
    "Pakisan": "🇵🇰",
    "Pela": "🇵🇼",
    "Pilisin": "🇵🇸",
    "Panama": "🇵🇦",
    "Papuwanijukini": "🇵🇬",
    "Palakawi": "🇵🇾",
    "Pelu": "🇵🇪",
    "Pilipina": "🇵🇭",
    "Piken": "🇵🇳",
    "Posuka": "🇵🇱",
    "Potuke": "🇵🇹",
    "Puwetoliko": "🇵🇷",
    "Kita": "🇶🇦",
    "Lajenon": "🇷🇪",
    "Lomani": "🇷🇴",
    "Losi": "🇷🇺",
    "Luwanta": "🇷🇼",
    "Samowa": "🇼🇸",
    "Samalino": "🇸🇲",
    "Santume": "🇸🇹",
    "Sawusi": "🇸🇦",
    "Seneka": "🇸🇳",
    "Sopisi": "🇷🇸",
    "Sese": "🇸🇨",
    "Sijelalijon": "🇸🇱",
    "Sinkapo": "🇸🇬",
    "Sinmaten": "🇸🇽",
    "Lowenki": "🇸🇰",
    "Lowensina": "🇸🇮",
    "Solomon": "🇸🇧",
    "Somalija": "🇸🇴",
    "Setapika": "🇿🇦",
    "Sajoja": "🇬🇸",
    "Anku": "🇰🇷",
    "Sasutan": "🇸🇸",
    "Epanja": "🇪🇸",
    "Lanka": "🇱🇰",
    "Sepatelemi": "🇧🇱",
    "Sateline": "🇸🇭",
    "Sankinipi": "🇰🇳",
    "Senlusi": "🇱🇨",
    "Sematan": "🇲🇫",
    "Sepemiko": "🇵🇲",
    "Kenedin": "🇻🇨",
    "Sutan": "🇸🇩",
    "Siliname": "🇸🇷",
    "Sepapa": "🇸🇯",
    "Wensa": "🇸🇪",
    "Suwasi": "🇨🇭",
    "Sulija": "🇸🇾",
    "Tawan": "🇹🇼",
    "Tojikiton": "🇹🇯",
    "Tansanija": "🇹🇿",
    "Tawi": "🇹🇭",
    "Simololosa": "🇹🇱",
    "Toko": "🇹🇬",
    "Tokela": "🇹🇰",
    "Tona": "🇹🇴",
    "Sinita": "🇹🇹",
    "Siten": "🇹🇦",
    "Tunisi": "🇹🇳",
    "Tuki": "🇹🇷",
    "Temenitan": "🇹🇲",
    "Tekeko": "🇹🇨",
    "Tuwalu": "🇹🇻",
    "Mewikalan": "🇺🇲",
    "Pijenalan": "🇻🇮",
    "Ukanta": "🇺🇬",
    "Ukawina": "🇺🇦",
    "Alimala": "🇦🇪",
    "Juke": "🇬🇧",
    "Mewika": "🇺🇸",
    "Ulukawi": "🇺🇾",
    "Opekiton": "🇺🇿",
    "Wanuwatu": "🇻🇺",
    "Wasikano": "🇻🇦",
    "Penesuwela": "🇻🇪",
    "Wije": "🇻🇳",
    "Upemoputuna": "🇼🇫",
    "Asala": "🇪🇭",
    "Jamanija": "🇾🇪",
    "Sanpija": "🇿🇲",
    "Sinpapuwe": "🇿🇼",
    "Inli": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "Sukosi": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "Kinla": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "Katala": "🏴󠁥󠁳󠁣󠁴󠁿",
    "Esuka": "🏴󠁥󠁳󠁰󠁶󠁿",
    "Peson": "🏴󠁦󠁲󠁢󠁲󠁥󠁿",
    "Kusala": "🏴󠁩󠁮󠁧󠁪󠁿",
    "Kuli": "🏴󠁩󠁲󠀱󠀶󠁿",
    "Po": "🏴󠁣󠁮󠀵󠀴󠁿",
  };

  const words = text.split(' ');

  const result = words.map(word => {
    // Check if the word ends with a full stop
    const endsWithFullStop = word.endsWith('.');

    // Remove the full stop if it exists
    const wordWithoutFullStop = endsWithFullStop ? word.slice(0, -1) : word;

    // Map the word to its corresponding emoji
    const emoji = emojiMap[wordWithoutFullStop] || wordWithoutFullStop;

    // Add the full stop back if it was removed
    return endsWithFullStop ? `${emoji}. ` : `${emoji} `;
  });

  return result.join('');
}

let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085892793169]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [085892793169]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

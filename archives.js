// if (msg.content.trim() == '<@770100332998295572> cd' || msg.content.trim() == '<@770100332998295572> cooldown') {

//     const filter = m => {
//         if (m.author.id != '770100332998295572') return false;
//         if (!m.embeds[0] || !m.embeds[0].title) return false;
//         if (!m.embeds[0].title.includes(msg.author.username)) return false;
//         if (!m.embeds[0].title.toLowerCase().includes('cooldowns')) return false;
//         return true;
//     };

//     const collector = msg.channel.createMessageCollector({ filter, time: 1000 });

//     collector.on('end', async collected => {
//         const fields = collected.toJSON()[0].embeds[0].fields;
//         const tasksToBeReminded = {}
//         fields.forEach((field, i) => {
//             if (i != 2) {
//                 const tasks = field.value.split('\n');
//                 for (let task of tasks) {
//                     if (task.includes('white_check_mark')) continue;
//                     const reqTask = task.split('--- ')[1].split(' (')[0].toLowerCase().trim();
//                     const timing = task.split('--- ')[1].split(' (')[1].split(')')[0]
//                     tasksToBeReminded[reqTask] = timing
//                 }
//             }
//         })
//         console.log(tasksToBeReminded)
//         if (Object.keys(tasksToBeReminded).length == 0) return;
//         for (let task of Object.keys(tasksToBeReminded)) {
//             console.log(task)
//             if (!Object.keys(Timer).includes(task)) continue;

//             const user = await User.findOne({ id: msg.author.id });
//             const oldStamp = user.reminder[task];
//             if ((Date.now() - oldStamp) < Timer[task]) {
//                 console.log('here')
//                 return;
//             };

//             const now = Date.now() - (Timer[task] - (timeToMs(tasksToBeReminded[task]) - 2000));
//             remind(user, msg, now, msg.author.username, msg.author.id, task, timeToMs(tasksToBeReminded[task] + 2000), true);
//         };
//     })
// }


// function timeToMs(time = '') {
//     let days = 0, hours = 0, minutes = 0, seconds = 0
//     const arr = time.split(' ')
//     if (arr.length == 4) {
//         days = parseInt(arr[0].replace('d', ''));
//         arr.splice(0, 1);
//     }
//     if (arr.length >= 3) {
//         hours = parseInt(arr[0].replace('h', ''));
//         arr.splice(0, 1);
//     }
//     if (arr.length >= 2) {
//         minutes = parseInt(arr[0].replace('m', ''));
//         arr.splice(0, 1);
//     }
//     if (arr.length >= 1) seconds = parseInt(arr[0].replace('s', ''));

//     return ((days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
// }


// if (msg.content.startsWith('<@770100332998295572> tow') || msg.content.startsWith('<@770100332998295572> tower')) {
//     const filter = m => {
//         if (m.author.id != '770100332998295572') return false;
//         if (m.embeds[0] || !m.content) return false;
//         if (!m.content.toLowerCase().includes(msg.author.username.toLowerCase())) return false;
//         return true;
//     };

//     const collector = msg.channel.createMessageCollector({ filter, time: 1500 });
//     collector.on('end', async collection => {
//         if (collection.size == 0) return;
//         let nbMsg = collection.first()
//         if (nbMsg.content.startsWith('Wait') && nbMsg.content.includes('next tower') && nbMsg.content.toLowerCase().includes(nbMsg.author.username)) {
//             const time = nbMsg.content.toLowerCase().split('wait ')[1].split(' for')[0];
//         }
//     })
// }



// if (msg.content.trim().startsWith('<@770100332998295572> ch')) {
//     if (!msg.reference && msg.mentions.users.size < 2) return;
//     const rival = msg.reference ? await msg.channel.messages.fetch(msg.reference.messageId) : msg.mentions.users.toJSON()[1];
//     if (!rival) return;

//     let filter = m => {
//         if (m.author.id != '770100332998295572' || m.embeds[0] || !m.content) return false;
//         if (!m.content.startsWith(`**${msg.author.username}**`) || !m.content.includes(rival.username) || !m.content.includes('challenged you to a fight')) return false;
//         return true;
//     };
//     let collector = msg.channel.createMessageCollector({ filter, time: 1000 });
//     collector.on('end', async collected => {
//         if (collected.size == 0) return;
//         let chMsg = collected.toJSON()[0];

//         filter = m => {
//             if (m.author.id != rival.id || (m.content.trim() != '<@770100332998295572> y' && m.content.trim() != '<@770100332998295572> yes')) return false;
//         }
//         collector = chMsg.channel.createMessageCollector()
//     });
// }




//ignore:
// const timeLeft = timeToMs(nbMsg.content.toLowerCase().split('wait ')[1].split(' for')[0]);
// const startTime = (Date.now() - (Timer.tower - timeLeft)) + 1000;
// reminderOn.tower = true;
// await remind(User, nbMsg, startTime, msg.author.username, msg.author.id, 'tower', timeLeft + 1000, true);
// await msg.channel.send(`${msg.author}, added reminder for **tower**`)


// for (let user of (await User.find({}))) {
//     console.log(user.username)
//     user.extras.lastActiveChannel = '1017481136471023646';
//     user.save();
// }
// console.log('done')


// for (let user of (await User.find({}))) {
//     console.log(user.username)
//     user.weekly = {
//         missions: 0,
//         reports: 0
//     };
//     await user.save();
// };
// console.log('done');

// for (let user of (await User.find({}))) {
//     user.server_specific_stats = {
//         server1: {
//             id: '1008657622691479633',
//             name: 'uhhm',
//             missions: 0,
//             reports: 0
//         }
//     };
//     await user.save();
// };
// console.log('done');

// await User.updateMany({}, {
//     weekly: {
//         missions: 0,
//         reports: 0
//     }
// });
// console.log('h')


// let idAndTasks;
// const prop = `weekly.missions`
// const propobj = {}
// propobj[prop] = -1;
// idAndTasks = await User.find({}, ['id', `weekly.missions`, 'username']).sort(propobj);
// let i = 0;
// while (i < 10) {
//     let user = idAndTasks[i];
//     const userFromDb = await User.findOne({ id: user.id });
//     userFromDb.extras.xp += 1;
//     // userFromDb.save();
//     console.error(userFromDb.extras.xp, user.username);
//     i += 1;
// }
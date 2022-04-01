import { ipcMain } from 'electron';
import path from 'path';
import knex from 'knex';

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '..', 'public', 'db.sqlite3'),
  },
  useNullAsDefault: true,
})

ipcMain.on('asynchronous-message', (event, arg) => {
  const sql = arg;    
  database.select().table(sql).then(result => {
    event.reply('asynchronous-reply', result);
  });
});
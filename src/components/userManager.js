import Gun from 'gun/gun.js';
import 'gun/sea.js';
import { writable } from 'svelte/store';


export const db = Gun();
export const user = db.user().recall({ sessionStorage: true });

export let username = writable('');
export let isAdmin = writable(false);
db.on('auth', async (event) => {
    const alias = await user.get('alias');
    const admin = await user.get('admin');
    console.log(`Setting alias ${alias}`)
    username.set(alias);
})

username.subscribe(value => {
    console.log("EVENT!")
});
import axios from 'axios';

const api = axios.create({

    baseURL: 'http://localhost:3333',

});

export default api;

// ios com emulador: localhost 
// ios com ip fisico: Ip da máquina
// android com emulador: localhost (adb reverce tcp:3333 tcp:3333)
// android com emulador: 10.0.2.2 (android Studio)
// android com dispositivo fisico: ip da máquina
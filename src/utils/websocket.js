import { useUserStore } from '@/stores';
import router from "@/router";

const userStore = useUserStore();

const socket = new WebSocket('ws://localhost:8080/websocket');

socket.onopen = function (event) {
    console.log('WebSocket connection opened');
};

socket.onmessage = function (event) {
    console.log('Message from server ', event.data);
    if (event.data === 'Session invalid') {
        userStore.resetUserData();
        router.push('/login');
    }
};

socket.onclose = function (event) {
    console.log('WebSocket connection closed');
};

socket.onerror = function (event) {
    console.error('WebSocket error: ', event);
};
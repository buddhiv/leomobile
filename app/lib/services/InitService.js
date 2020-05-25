import NetInfo from "@react-native-community/netinfo";
import GlobalService from './GlobalService';
import {EventEmitter} from "events"

let netInfoListener = null;
let eventEmitter = new EventEmitter();

const InitService = {
     getGlobalEventEmitter: () => {
        return eventEmitter;
    },
    setGlobalListeners: () => {
        netInfoListener = NetInfo.addEventListener(state => {
            GlobalService.set('connected_to_internet', state.isConnected);

            eventEmitter.emit('connection_change', {
                connection_changed: GlobalService.get('connected_to_internet')
            });
        });
    },
    removeGlobalListeners: () => {
        GlobalService.set('connected_to_internet', false);
        eventEmitter.removeAllListeners();
        netInfoListener();
    }
};

export default InitService;

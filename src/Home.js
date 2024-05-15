// Home.js
import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';

import ShareSheet from './ShareSheet.js';
import '@ionic/react/css/core.css';
import { IonButton, IonDatetime } from '@ionic/react';

import { setupIonicReact } from '@ionic/react';
import Passkeys from './Passkeys.js';

import { WebAuthn } from '@adamjbradley/capacitor-native-webauthn';
import { Device } from '@capacitor/device';

function Home() {

    setupIonicReact();   

    const [level, setLevel] = useState({ batteryLevel: 3 });
    const [charging, setIsCharging] = useState({ isCharging: false });
    const [passkey, setIsPasskeyEnabled] = useState({ isPasskeyEnabled: false });

    const logBatteryInfo = async () => {
        const batteryInfo = await Device.getBatteryInfo();
        const batteryLevel = batteryInfo.batteryLevel;
        return batteryLevel;
    };
    
    const chargingInfo = async () => {
        const chargingInfo = await Device.getBatteryInfo();        
        return chargingInfo.isCharging;        
    };    

    const passkeyInfo = async () => {
        const webauthnEnabled = await WebAuthn.isWebAuthnAvailable();        
        return webauthnEnabled;
    }
    
    logBatteryInfo().then( result => {
        console.log('Battery level: ', result*100, '%');
        level.batteryLevel = result*100;
    });

    chargingInfo().then( result => {
        console.log('Is the battery charging?:', result);
        charging.isCharging = result;
    });

    passkeyInfo().then( result => {
        console.log('Is Passkey enabled?:', result);
        passkey.isPasskeyEnabled = result;
    });
    
    return (
        <div className="App">
            Battery Level { level.batteryLevel }
            <p/>
            Is Charging { String(charging.isCharging) }
            <p />
            Is Passkey Enabled  { JSON.stringify(passkey.isPasskeyEnabled) }
            <p />
            <a onClick={() => ShareSheet()}>Use Native Share Now!! (via Capacitor)</a>
            <p />
        </div>
    );
}
export default Home;
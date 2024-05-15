
import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';

import { WebAuthn } from '@adamjbradley/capacitor-native-webauthn';
import { Device } from '@capacitor/device';

async function Passkeys() {
    
    const [level, setLevel] = useState({ batteryLevel: 3 });
    const [charging, setIsCharging] = useState({ isCharging: false });
    const [passkey, setIsPasskeyEnabled] = useState({ isPasskeyEnabled: false });

    const logBatteryInfo = async () => {
        const batteryInfo = await Device.getBatteryInfo();
        const batteryLevel = batteryInfo.batteryLevel;
        console.log('Battery level: ', batteryLevel*100, '%');
        return batteryLevel;
    };

    const chargingInfo = async () => {
        const chargingInfo = await Device.getBatteryInfo();
        console.log('Is charging?: ', chargingInfo.isCharging);
        console.log(chargingInfo.isCharging);
        const isCharging = chargingInfo.isCharging;
        return isCharging;
    };
    
    const passkeyInfo = async () => {
        const webauthnEnabled = await WebAuthn.isWebAuthnAvailable();                
        return webauthnEnabled;
    }

    logBatteryInfo().then( result => {
        level.batteryLevel = result*100;        
    });

    chargingInfo().then( result => {
        console.log("Finally, the result!" + result)
        charging.isCharging = result;      
    });

    passkeyInfo().then( result => {
        console.log("Finally, the Passkey result!" + JSON.stringify(result))        
        passkey.isPasskeyEnabled = result;
    });

}




export default Passkeys;
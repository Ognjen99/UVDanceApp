/**
 * UV Dance Mobile App
 * Copyright Lorx d.o.o.
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store/store';
import RNBootSplash from "react-native-bootsplash";
import UVDanceApp from './src/UVDanceApp';

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {
        RNBootSplash.hide({ fade: true });
    }, [])

    return (
        <Provider store={store}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="#ffffff" />
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <UVDanceApp />
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;

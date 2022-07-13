import { createAction } from "@reduxjs/toolkit";

export const wsConnect = createAction<string, 'wsConnect'>('wsConnect')

export const wsDisconnect = createAction<'wsDisconnect'>('wsDisconnect')

export const wsSendMessage = createAction<object, 'wsSendMessage'>('wsSendMessage')

export const wsOnError = createAction<string, 'wsOnError'>('wsOnError')

export const wsOnMessage = createAction<object, 'wsOnMessage'>('wsOnMessage')
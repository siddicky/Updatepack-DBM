---
id: "DBM.Audio"
title: "Namespace: Audio"
sidebar_label: "Audio"
custom_edit_url: null
---

[DBM](DBM.md).Audio

## Classes

- [BasicTrack](../classes/DBM.Audio.BasicTrack.md)
- [Subscription](../classes/DBM.Audio.Subscription.md)
- [Track](../classes/DBM.Audio.Track.md)

## Variables

### rawYtdl

• `Const` **rawYtdl**: `any` = `null`

___

### subscriptions

• `Const` **subscriptions**: `Map`<`any`, `any`\>

___

### voice

• `Const` **voice**: `any` = `null`

___

### ytdl

• `Const` **ytdl**: `any` = `null`

## Functions

### addAudio

▸ **addAudio**(`info`, `guild`, `isQueue`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `any` |
| `guild` | `any` |
| `isQueue` | `any` |

#### Returns

`Promise`<`void`\>

___

### addToQueue

▸ **addToQueue**(`__namedParameters`, `guild`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`any`, `any`, `any`] |
| `guild` | `any` |

#### Returns

`Promise`<`void`\>

___

### checkIfHasDependency

▸ **checkIfHasDependency**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

___

### clearQueue

▸ **clearQueue**(`cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | `any` |

#### Returns

`void`

___

### connectToVoice

▸ **connectToVoice**(`voiceChannel`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `voiceChannel` | `any` |

#### Returns

`any`

___

### disconnectFromVoice

▸ **disconnectFromVoice**(`guild`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `any` |

#### Returns

`void`

___

### getSubscription

▸ **getSubscription**(`guild`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `any` |

#### Returns

`any`

___

### getTrack

▸ **getTrack**(`url`, `type`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |
| `type` | `any` |

#### Returns

`any`

___

### playImmediately

▸ **playImmediately**(`__namedParameters`, `guild`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`any`, `any`, `any`] |
| `guild` | `any` |

#### Returns

`Promise`<`void`\>

___

### setVolume

▸ **setVolume**(`volume`, `guild`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `any` |
| `guild` | `any` |

#### Returns

`void`

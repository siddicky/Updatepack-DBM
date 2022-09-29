---
id: "DBM.Events"
title: "Namespace: Events"
sidebar_label: "Events"
custom_edit_url: null
---

[DBM](DBM.md).Events

## Variables

### data

• `Const` **data**: (`string` \| `number` \| `boolean` \| (`arg1`: `any`, `arg2`: `any`) => `boolean`)[][]

## Functions

### callEvents

▸ **callEvents**(`id`, `temp1`, `temp2`, `server`, `mustServe`, `condition`, `arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `temp1` | `any` |
| `temp2` | `any` |
| `server` | `any` |
| `mustServe` | `any` |
| `condition` | `any` |
| `arg1` | `any` |
| `arg2` | `any` |

#### Returns

`void`

___

### generateData

▸ **generateData**(): (`string` \| `number` \| `boolean` \| (`arg1`: `any`, `arg2`: `any`) => `boolean`)[][]

#### Returns

(`string` \| `number` \| `boolean` \| (`arg1`: `any`, `arg2`: `any`) => `boolean`)[][]

___

### getObject

▸ **getObject**(`id`, `arg1`, `arg2`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `arg1` | `any` |
| `arg2` | `any` |

#### Returns

`any`

___

### onError

▸ **onError**(`text`, `text2`, `cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |
| `text2` | `any` |
| `cache` | `any` |

#### Returns

`void`

___

### onInitialization

▸ **onInitialization**(`bot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | `any` |

#### Returns

`void`

___

### onInitializationOnce

▸ **onInitializationOnce**(`bot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | `any` |

#### Returns

`void`

___

### onReaction

▸ **onReaction**(`id`, `reaction`, `user`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `reaction` | `any` |
| `user` | `any` |

#### Returns

`void`

___

### onTyping

▸ **onTyping**(`id`, `channel`, `user`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `channel` | `any` |
| `user` | `any` |

#### Returns

`void`

___

### registerEvents

▸ **registerEvents**(`bot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | `any` |

#### Returns

`void`

___

### setupIntervals

▸ **setupIntervals**(`bot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | `any` |

#### Returns

`void`

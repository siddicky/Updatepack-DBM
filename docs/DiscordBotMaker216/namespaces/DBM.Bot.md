---
id: "DBM.Bot"
title: "Namespace: Bot"
sidebar_label: "Bot"
custom_edit_url: null
---

[DBM](DBM.md).Bot

## Variables

### $anym

• `Const` **$anym**: `any`[] = `[]`

___

### $button

• `Const` **$button**: `Object` = `{}`

___

### $cmds

• `Const` **$cmds**: `Object` = `{}`

___

### $evts

• `Const` **$evts**: `Object` = `{}`

___

### $icds

• `Const` **$icds**: `any`[] = `[]`

___

### $msge

• `Const` **$msge**: `Object` = `{}`

___

### $other

• `Const` **$other**: `Object` = `{}`

___

### $regx

• `Const` **$regx**: `any`[] = `[]`

___

### $select

• `Const` **$select**: `Object` = `{}`

___

### $slash

• `Const` **$slash**: `Object` = `{}`

___

### $user

• `Const` **$user**: `Object` = `{}`

___

### ALL\_INTENTS

• `Const` **ALL\_INTENTS**: `number`

___

### NON\_PRIVILEGED\_INTENTS

• `Const` **NON\_PRIVILEGED\_INTENTS**: `number`

___

### PRIVILEGED\_INTENTS

• `Const` **PRIVILEGED\_INTENTS**: `number`

___

### applicationCommandData

• `Const` **applicationCommandData**: `any`[] = `[]`

___

### bot

• `Const` **bot**: `any` = `null`

## Functions

### checkCommand

▸ **checkCommand**(`msg`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`boolean`

___

### checkForCommandErrors

▸ **checkForCommandErrors**(): `void`

#### Returns

`void`

___

### checkIncludes

▸ **checkIncludes**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

___

### checkRegExps

▸ **checkRegExps**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

___

### checkTag

▸ **checkTag**(`content`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |

#### Returns

`any`

___

### clearUnspecifiedServerCommands

▸ **clearUnspecifiedServerCommands**(): `any`

#### Returns

`any`

___

### createApiJsonFromCommand

▸ **createApiJsonFromCommand**(`com`, `name`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `com` | `any` |
| `name` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `description` | `any` |
| `name` | `any` |

___

### escapeRegExp

▸ **escapeRegExp**(`text`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |

#### Returns

`any`

___

### generateSlashCommandDescription

▸ **generateSlashCommandDescription**(`com`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `com` | `any` |

#### Returns

`any`

___

### generateTagRegex

▸ **generateTagRegex**(`tag`, `allowPrefixSpace`): `RegExp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `any` |
| `allowPrefixSpace` | `any` |

#### Returns

`RegExp`

___

### getNoDescriptionText

▸ **getNoDescriptionText**(): `any`

#### Returns

`any`

___

### init

▸ **init**(): `void`

#### Returns

`void`

___

### initBot

▸ **initBot**(): `void`

#### Returns

`void`

___

### initEvents

▸ **initEvents**(): `void`

#### Returns

`void`

___

### initializeCommandsForNewServer

▸ **initializeCommandsForNewServer**(`guild`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `any` |

#### Returns

`void`

___

### intents

▸ **intents**(): `any`

#### Returns

`any`

___

### login

▸ **login**(): `void`

#### Returns

`void`

___

### makeClientOptions

▸ **makeClientOptions**(): `Object`

#### Returns

`Object`

___

### mergeSubCommandIntoCommandData

▸ **mergeSubCommandIntoCommandData**(`names`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `names` | `any` |
| `data` | `any` |

#### Returns

`void`

___

### onAnyMessage

▸ **onAnyMessage**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

___

### onButtonInteraction

▸ **onButtonInteraction**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### onContextMenuInteraction

▸ **onContextMenuInteraction**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### onInteraction

▸ **onInteraction**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### onMessage

▸ **onMessage**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

___

### onMessageContextMenuInteraction

▸ **onMessageContextMenuInteraction**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### onRawData

▸ **onRawData**(`packet`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | `any` |

#### Returns

`void`

___

### onReady

▸ **onReady**(): `void`

#### Returns

`void`

___

### onSelectMenuInteraction

▸ **onSelectMenuInteraction**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### onServerJoin

▸ **onServerJoin**(`guild`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `any` |

#### Returns

`void`

___

### onSlashCommandInteraction

▸ **onSlashCommandInteraction**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### onUserContextMenuInteraction

▸ **onUserContextMenuInteraction**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### partials

▸ **partials**(): `any`[]

#### Returns

`any`[]

___

### populateTagRegex

▸ **populateTagRegex**(): `any`

#### Returns

`any`

___

### preformInitialization

▸ **preformInitialization**(): `void`

#### Returns

`void`

___

### prepareActions

▸ **prepareActions**(`actions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any` |

#### Returns

`void`

___

### reformatCommands

▸ **reformatCommands**(): `void`

#### Returns

`void`

___

### reformatData

▸ **reformatData**(): `void`

#### Returns

`void`

___

### reformatEvents

▸ **reformatEvents**(): `void`

#### Returns

`void`

___

### registerApplicationCommands

▸ **registerApplicationCommands**(): `void`

#### Returns

`void`

___

### registerButtonInteraction

▸ **registerButtonInteraction**(`interactionId`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionId` | `any` |
| `data` | `any` |

#### Returns

`void`

___

### registerSelectMenuInteraction

▸ **registerSelectMenuInteraction**(`interactionId`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionId` | `any` |
| `data` | `any` |

#### Returns

`void`

___

### restoreVariables

▸ **restoreVariables**(): `void`

#### Returns

`void`

___

### setAllServerCommands

▸ **setAllServerCommands**(`commands`, `printMissingAccessError?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commands` | `any` | `undefined` |
| `printMissingAccessError` | `boolean` | `true` |

#### Returns

`void`

___

### setCertainServerCommands

▸ **setCertainServerCommands**(`commands`, `serverIdList`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `any` |
| `serverIdList` | `any` |

#### Returns

`void`

___

### setCommandsForServer

▸ **setCommandsForServer**(`guild`, `commands`, `printMissingAccessError`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `any` |
| `commands` | `any` |
| `printMissingAccessError` | `any` |

#### Returns

`void`

___

### setGlobalCommands

▸ **setGlobalCommands**(`commands`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `any` |

#### Returns

`void`

___

### setupBot

▸ **setupBot**(): `void`

#### Returns

`void`

___

### shouldPrintAnyMissingAccessError

▸ **shouldPrintAnyMissingAccessError**(): `boolean`

#### Returns

`boolean`

___

### usePartials

▸ **usePartials**(): `boolean`

#### Returns

`boolean`

___

### validateSlashCommandDescription

▸ **validateSlashCommandDescription**(`desc`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `desc` | `any` |

#### Returns

`any`

___

### validateSlashCommandName

▸ **validateSlashCommandName**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`any`

___

### validateSlashCommandParameterName

▸ **validateSlashCommandParameterName**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`any`

___

### validateSlashCommandParameters

▸ **validateSlashCommandParameters**(`parameters`, `commandName`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `any` |
| `commandName` | `any` |

#### Returns

`any`[]

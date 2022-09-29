---
id: "DBM.Bot"
title: "Namespace: Bot"
sidebar_label: "Bot"
custom_edit_url: null
---

[DBM](DBM.md).Bot

## Variables

### $anym

• `Const` **$anym**: `any`[]

Any message commands

___

### $button

• `Const` **$button**: `Object`

Button interactions

___

### $cmds

• `Const` **$cmds**: `Object`

Normal commands

___

### $evts

• `Const` **$evts**: `Object`

Events

___

### $icds

• `Const` **$icds**: `any`[]

Includes word commands

___

### $msge

• `Const` **$msge**: `Object`

Message commands

___

### $other

• `Const` **$other**: `Object`

Manual commands

___

### $regx

• `Const` **$regx**: `any`[]

Regular Expression commands

___

### $select

• `Const` **$select**: `Object`

Select interactions

___

### $slash

• `Const` **$slash**: `Object`

Slash commands

___

### $user

• `Const` **$user**: `Object`

User commands

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

• `Const` **applicationCommandData**: `any`[]

___

### bot

• `Const` **bot**: `DiscordJS.Client`

**`Link`**

[discord.js/Client](https://discord.js.org/#/docs/discord.js/13.11.0/class/Client)

## Functions

### checkCommand

▸ **checkCommand**(`msg`): `boolean`

**`Link`**

[discord.js/Message](https://discord.js.org/#/docs/discord.js/13.11.0/class/Message)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Message`<`boolean`\> |

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

**`Link`**

[discord.js/Message](https://discord.js.org/#/docs/discord.js/13.11.0/class/Message)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Message`<`boolean`\> |

#### Returns

`void`

___

### checkRegExps

▸ **checkRegExps**(`msg`): `void`

**`Link`**

[discord.js/Message](https://discord.js.org/#/docs/discord.js/13.11.0/class/Message)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Message`<`boolean`\> |

#### Returns

`void`

___

### checkTag

▸ **checkTag**(`content`): `string` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`string` \| ``null``

___

### clearUnspecifiedServerCommands

▸ **clearUnspecifiedServerCommands**(): `boolean`

#### Returns

`boolean`

___

### createApiJsonFromCommand

▸ **createApiJsonFromCommand**(`com`, `name`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `com` | `Object` |
| `name` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `name` | `string` |

___

### escapeRegExp

▸ **escapeRegExp**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### generateSlashCommandDescription

▸ **generateSlashCommandDescription**(`com`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `com` | `Object` |

#### Returns

`string`

___

### generateTagRegex

▸ **generateTagRegex**(`tag`, `allowPrefixSpace`): `RegExp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `allowPrefixSpace` | `boolean` |

#### Returns

`RegExp`

___

### getNoDescriptionText

▸ **getNoDescriptionText**(): `string`

#### Returns

`string`

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

**`Link`**

[discord.js/Guild](https://discord.js.org/#/docs/discord.js/13.11.0/class/Guild)

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `Guild` |

#### Returns

`void`

___

### intents

▸ **intents**(): `number`

#### Returns

`number`

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
| `names` | `string`[] |
| `data` | `Object` |

#### Returns

`void`

___

### onAnyMessage

▸ **onAnyMessage**(`msg`): `void`

**`Link`**

[discord.js/Message](https://discord.js.org/#/docs/discord.js/13.11.0/class/Message)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Message`<`boolean`\> |

#### Returns

`void`

___

### onButtonInteraction

▸ **onButtonInteraction**(`interaction`): `void`

**`Link`**

[discord.js/ButtonInteraction](https://discord.js.org/#/docs/discord.js/13.11.0/class/ButtonInteraction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `ButtonInteraction`<`CacheType`\> |

#### Returns

`void`

___

### onContextMenuInteraction

▸ **onContextMenuInteraction**(`interaction`): `void`

**`Link`**

[discord.js/ContextMenuInteraction](https://discord.js.org/#/docs/discord.js/13.11.0/class/ContextMenuInteraction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `ContextMenuInteraction`<`CacheType`\> |

#### Returns

`void`

___

### onInteraction

▸ **onInteraction**(`interaction`): `void`

**`Link`**

[discord.js/Interaction](https://discord.js.org/#/docs/discord.js/13.11.0/class/Interaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `Interaction`<`CacheType`\> |

#### Returns

`void`

___

### onMessage

▸ **onMessage**(`msg`): `void`

**`Link`**

[discord.js/Message](https://discord.js.org/#/docs/discord.js/13.11.0/class/Message)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Message`<`boolean`\> |

#### Returns

`void`

___

### onMessageContextMenuInteraction

▸ **onMessageContextMenuInteraction**(`interaction`): `void`

**`Link`**

[discord.js/MessageContextMenuInteraction](https://discord.js.org/#/docs/discord.js/13.11.0/class/MessageContextMenuInteraction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `MessageContextMenuInteraction`<`CacheType`\> |

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

**`Link`**

[discord.js/SelectMenuInteraction](https://discord.js.org/#/docs/discord.js/13.11.0/class/SelectMenuInteraction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `SelectMenuInteraction`<`CacheType`\> |

#### Returns

`void`

___

### onServerJoin

▸ **onServerJoin**(`guild`): `void`

**`Link`**

[discord.js/Guild](https://discord.js.org/#/docs/discord.js/13.11.0/class/Guild)

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `Guild` |

#### Returns

`void`

___

### onSlashCommandInteraction

▸ **onSlashCommandInteraction**(`interaction`): `void`

**`Link`**

[discord.js/CommandInteraction](https://discord.js.org/#/docs/discord.js/13.11.0/class/CommandInteraction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `CommandInteraction`<`CacheType`\> |

#### Returns

`void`

___

### onUserContextMenuInteraction

▸ **onUserContextMenuInteraction**(`interaction`): `void`

**`Link`**

[discord.js/UserContextMenuInteraction](https://discord.js.org/#/docs/discord.js/13.11.0/class/UserContextMenuInteraction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `UserContextMenuInteraction`<`CacheType`\> |

#### Returns

`void`

___

### partials

▸ **partials**(): `any`[]

#### Returns

`any`[]

___

### populateTagRegex

▸ **populateTagRegex**(): `RegExp` \| `void`

#### Returns

`RegExp` \| `void`

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
| `actions` | `any`[] |

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
| `interactionId` | `string` |
| `data` | `Object` |

#### Returns

`void`

___

### registerSelectMenuInteraction

▸ **registerSelectMenuInteraction**(`interactionId`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionId` | `string` |
| `data` | `Object` |

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
| `commands` | `Object` | `undefined` |
| `printMissingAccessError` | `boolean` | `true` |

#### Returns

`void`

___

### setCertainServerCommands

▸ **setCertainServerCommands**(`commands`, `serverIdList`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `Object` |
| `serverIdList` | `string`[] |

#### Returns

`void`

___

### setCommandsForServer

▸ **setCommandsForServer**(`guild`, `commands`, `printMissingAccessError`): `void`

**`Link`**

[discord.js/Guild](https://discord.js.org/#/docs/discord.js/13.11.0/class/Guild)

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `Guild` |
| `commands` | `Object` |
| `printMissingAccessError` | `boolean` |

#### Returns

`void`

___

### setGlobalCommands

▸ **setGlobalCommands**(`commands`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `Object` |

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

▸ **validateSlashCommandDescription**(`desc`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `desc` | `string` |

#### Returns

`string`

___

### validateSlashCommandName

▸ **validateSlashCommandName**(`name`): `string`[] \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[] \| ``false``

___

### validateSlashCommandParameterName

▸ **validateSlashCommandParameterName**(`name`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string` \| ``false``

___

### validateSlashCommandParameters

▸ **validateSlashCommandParameters**(`parameters`, `commandName`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `any`[] |
| `commandName` | `string` |

#### Returns

`any`[]

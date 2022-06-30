# publicjs

![jsDelivrBadge](https://data.jsdelivr.com/v1/package/gh/otis22/publicjs/badge)

I am using this repo for publish my small scripts with https://www.jsdelivr.com/

### Vetmanager import file button 

It is small script for provide importing reports and templates from your own web page into Vetmanager 

For using import file button: 

1. Insert script tag on page 

```
<script src="https://cdn.jsdelivr.net/gh/otis22/publicjs/vmfile/import.js"></script>
```

1. Insert button with for file import 

```
<button class="vm-import-button" data-type="special_studies" data-url="https://trello-attachments.s3.amazonaws.com/5894c09e496fceb170144b05/5926a46c2c6285c695c50f7b/2e720938b94ab38f11f0a240f586fa21/%D0%A3%D0%97%D0%98_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B0.txt">Импорт</button>
```

Where

* class="vm-import-button" - it is required
* data-type="special_studies" - for special studies templates, can be 'special_studies' or 'report'
* data-url="http://" - url for template or exported report file


### Vetmanager field name generator for laboratory templates 

Generator valid Laboratory module field name. Put following code on your page.

```
<input type="text" class="vm-field-name-input" />
<div class="vm-field-name-result" ></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/otis22/publicjs/vmservices/field-name-generator.js"></script>
```

### Carrotquest or Dashly event generator 

Generate event on elements clicked 

Put following script on page

```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/otis22/publicjs@latest/carrotquest/click-event.js"></script>
```

Add class `carrotquest-click-event` or `dashly-click-event`  for watching elements and set event name to `data-event`

```
<button class="carrotquest-click-event" data-event="My cool event"></button>
```

For track event with data put json to data-event-data

```
<button class="carrotquest-click-event" data-event="My event with data" data-event-json='{"param":"value"}'></button>
```

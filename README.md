# publicjs

![jsDelivrBadge](https://data.jsdelivr.com/v1/package/gh/otis22/publicjs/badge)

Now I am using this repo for publish my small scripts with https://www.jsdelivr.com/

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

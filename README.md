# publicjs

Now I am using this repo for publish my small scripts with https://www.jsdelivr.com/

URL for pulbish

https://cdn.jsdelivr.net/gh/otis22/publicjs@0.1/path-to-file.js

Or without VERSION if you need latest VERSION

https://cdn.jsdelivr.net/gh/otis22/publicjs/path-to-file.js



For using import file button: 

1. Insert script tag on page 

```
<script src="https://cdn.jsdelivr.net/gh/otis22/publicjs/vmfile/import.js"></script>
```

1. Insert button with for file import 

```
<button onclick="openPopup(this)" data-type="special_studies" data-url="https://trello-attachments.s3.amazonaws.com/5894c09e496fceb170144b05/5b558e4d1acb88c979ba84ca/d5a167fa56a6c979a819cdefa3c76f8d/report_83.vmrc">Импорт</button>
```

Where

* onclick="openPopup(this)" - it is required
* data-type="special_studies" - for special studies templates
* data-url="http://" - url with file 

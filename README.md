<div align="center">

# Sorter
## (Simple Js Library)

</div>

## Description
- Sorter is a straightforward JavaScript library designed for sorting alphabetically, numerically, or sorting HTML select option elements.
- It draws inspiration from various JavaScript resources and aims to simplify the sorting process within web development.

## Contributing
- **Sorter** is an open-source project, and contributions are welcome.
- If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on the project repository.

## Requirement
- **Recommend to use all latest version of browsers**
- Chrome (v - 97 or later)
- Safari (v - 13 or later)
- Opera (v - 81 or later)
- Microsoft Edge (v - 97 or later)
- Firefox (v - 96 or later)

## Installation & Setup
1. Download the zip file from `https://github.com/naingaunglwin-dev/sorter`
2. Extract the contents of the zip file and copy the sorter.min.js file to your project directory
3. Add the following line to your HTML file to include the `sorter.min.js`
- script: `<script src="sorter.min.js"></script>`

## Usage

- For `number()`
```javascript
    <div id="test-1"></div>
    <div id="test-2"></div>
    <div id="test-3"></div>
    <div id="test-4"></div>
    <div id="test-5"></div>
    <script src="sorter.js"></script>
<script>
    let id = 1;

    sorter().number([2, 5, 4, 8, 9], 'num-asc').map(e => {
        document.getElementById(`test-${id}`).innerText = e.toString();
        id++;
    });
</script>

Output :
    <div id="test-1">2</div>
    <div id="test-2">4</div>
    <div id="test-3">5</div>
    <div id="test-4">8</div>
    <div id="test-5">9</div>
```

- For `alphabet()`
```javascript
    <div id="test-1"></div>
    <div id="test-2"></div>
    <div id="test-3"></div>
    <div id="test-4"></div>
    <div id="test-5"></div>
    <script src="sorter.js"></script>
<script>
    let id = 1;

    sorter().alphabet(['mgmg', 'kyawkyaw', 'david', 'tuntun', 'john'], 'alpha-asc').map(e => {
        document.getElementById(`test-${id}`).innerText = e;
        id++;
    });
</script>

Output :
    <div id="test-1">david</div>
    <div id="test-2">john</div>
    <div id="test-3">kyawkyaw</div>
    <div id="test-4">mgmg</div>
    <div id="test-5">tuntun</div>
```

- For `select()`
```javascript
    <select>
    <option value="one">Mg Mg</option>
    <option value="two">Kyaw Kyaw</option>
    <option value="three">Tun Tun</option>
    <option value="four">Aung Aung</option>
    <option value="1">David</option>
    <option value="six">John</option>
    <option value="2">Ko Ko</option>
    <option value="eight">Smith</option>
    <option value="nine">Nyi Nyi</option>
    <option value="ten">Min Min</option>
</select>

<script src="sorter.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
    sorter().select('select', 'num-desc-alpha-asc');
});
</script>

Output :
    <select>
        <option value="2">Ko Ko</option>
        <option value="1">David</option>
        <option value="four">Aung Aung</option>
        <option value="six">John</option>
        <option value="two">Kyaw Kyaw</option>
        <option value="one">Mg Mg</option>
        <option value="ten">Min Min</option>
        <option value="nine">Nyi Nyi</option>
        <option value="eight">Smith</option>
        <option value="three">Tun Tun</option>
    </select>
```

## Allowed Conditions List
#### num stands for number
#### alpha stands for alphabet
#### asc stands for ascending
#### desc stands for descending
- num-asc
- num-desc
- alpha-asc
- alpha-desc
- num-asc-alpha-asc
- num-asc-alpha-desc
- num-desc-alpha-asc
- num-desc-alpha-desc
- alpha-asc-num-asc
- alpha-asc-num-desc
- alpha-desc-num-asc
- alpha-desc-num-desc
